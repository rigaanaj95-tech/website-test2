import React, { useEffect, useRef, useState } from 'react'
import {
  motion,
  useReducedMotion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react'
import product01 from '../../../../../assets/products/11004904_D_45.avif'
import product02 from '../../../../../assets/products/11005025_D_45.avif'
import product03 from '../../../../../assets/products/11005027_D_45.avif'
import product04 from '../../../../../assets/products/11005158_D_45.avif'
import productVideo01 from '../../../../../assets/products/11005147_AFTER_LOOK_BOOK_FIRST_1.mp4'
import productVideo02 from '../../../../../assets/products/11005157_AFTER_FRONT_1.mp4'
import portraitRevealVideo from '../../../../../assets/arce-portrait-reveal.mp4'

export const defaultProducts = [
  { id: 'A—01', name: 'Moro', finish: 'Honey Tea', price: '¥1,280', fill: '#d2d2d2', video: productVideo01 },
  { id: 'A—02', name: 'Vega', finish: 'Quartz Clear', price: '¥1,180', fill: '#e1e1e1', image: product01 },
  { id: 'A—03', name: 'Noma', finish: 'Silver Filament', price: '¥1,380', fill: '#bfbfbf', image: product02 },
  { id: 'A—04', name: 'Riva', finish: 'Olive Smoke', price: '¥1,320', fill: '#aaaaaa', video: productVideo02 },
  { id: 'A—05', name: 'Ono', finish: 'Oxide Red', price: '¥1,460', fill: '#8e8e8e', image: product03 },
  { id: 'A—06', name: 'Sera', finish: 'Night Blue', price: '¥1,260', fill: '#707070', image: product04 },
]

function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia(query).matches
  })

  useEffect(() => {
    const media = window.matchMedia(query)
    const update = () => setMatches(media.matches)
    update()
    if (media.addEventListener) media.addEventListener('change', update)
    else media.addListener(update)
    return () => {
      if (media.removeEventListener) media.removeEventListener('change', update)
      else media.removeListener(update)
    }
  }, [query])

  return matches
}

function Arrow() {
  return <span aria-hidden="true">↗</span>
}

function ProductVideo({ product, finish }) {
  const videoRef = useRef(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const video = videoRef.current
    if (!video || reduceMotion) return undefined

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) video.play().catch(() => {})
      else video.pause()
    }, { threshold: 0.15 })

    observer.observe(video)
    return () => observer.disconnect()
  }, [reduceMotion])

  return (
    <video
      ref={videoRef}
      className="product-image product-video"
      src={product.video}
      width="1200"
      height="1200"
      autoPlay={!reduceMotion}
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={`${product.name} ${finish} 眼镜动态展示`}
    />
  )
}

function ProductCard({ product, animate = true }) {
  const Drawing = animate ? motion.div : 'div'
  const Article = animate ? motion.article : 'article'
  const finish = product.finish ?? product.note

  return (
    <Article
      className="precision-card rail-card"
      style={animate ? undefined : { width: '100%', minHeight: '72vh', flex: 'none' }}
      {...(animate ? { whileHover: 'hover' } : {})}
    >
      <div className="card-meta">
        <span>{product.id}</span>
        <span>OPTICAL</span>
      </div>
      <Drawing
        className="product-drawing"
        {...(animate
          ? {
              variants: { hover: { scale: 1.04 } },
              transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
            }
          : {})}
      >
        {product.video ? (
          <div className="product-placeholder product-media">
            <ProductVideo product={product} finish={finish} />
          </div>
        ) : product.image ? (
          <div className="product-placeholder product-media">
            <img
              className="product-image"
              src={product.image}
              alt={`${product.name} ${finish} 眼镜`}
              width="1400"
              height="1400"
              loading="lazy"
              decoding="async"
            />
          </div>
        ) : (
          <div
            className="asset-placeholder product-placeholder"
            style={{ backgroundColor: product.fill }}
          >
            <span>PRODUCT IMAGE</span>
            <small>{product.id} / 4:3</small>
          </div>
        )}
      </Drawing>
      <div className="card-info">
        <div>
          <h2>{product.name}</h2>
          <p>{finish}</p>
        </div>
        <div>
          <span>{product.price}</span>
          <a
            href="#subscribe"
            aria-label={`查看 ${product.name} 镜框`}
            style={{ width: 44, height: 44, minWidth: 44, minHeight: 44 }}
          >
            <Arrow />
          </a>
        </div>
      </div>
    </Article>
  )
}

function PortraitPlaceholder({ labelOpacity, staticMode = false, videoRef, autoPlay = false }) {
  const Label = staticMode ? 'div' : motion.div
  const Caption = staticMode ? 'figcaption' : motion.figcaption
  const labelProps = staticMode ? {} : { style: { opacity: labelOpacity } }

  return (
    <>
      <div className="video-placeholder">
        <video
          ref={videoRef}
          className="portrait-reveal-video"
          src={portraitRevealVideo}
          width="1280"
          height="720"
          autoPlay={autoPlay}
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="ARCE 眼镜与人物造型动态展示"
        />
        {!staticMode && <span className="video-pulse" />}
        <Label {...labelProps}>
          <span>ARCE PORTRAIT / 001</span>
          <small>MOTION STUDY · AUTOPLAY LOOP</small>
        </Label>
      </div>
      <Caption {...labelProps}>
        <span>ARCE PORTRAITS / MOTION 001</span>
        <span>FULL BLEED REVEAL</span>
      </Caption>
    </>
  )
}

function StaticJourney({ products, journeyRef, videoRef, autoPlay }) {
  return (
    <section
      className="horizontal-story horizontal-story--static"
      aria-label="主推镜框"
      style={{ height: 'auto' }}
      ref={journeyRef}
    >
      <div
        className="horizontal-viewport"
        style={{ position: 'relative', height: 'auto', overflow: 'visible' }}
      >
        <div
          className="horizontal-track"
          style={{ display: 'block', width: '100%', height: 'auto', opacity: 1, transform: 'none' }}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} animate={false} />
          ))}
        </div>
        <figure
          className="video-reveal"
          style={{
            position: 'relative',
            inset: 'auto',
            margin: 0,
            width: '100%',
            height: '88vh',
            opacity: 1,
            transform: 'none',
            clipPath: 'none',
            boxShadow: 'none',
          }}
        >
          <PortraitPlaceholder staticMode videoRef={videoRef} autoPlay={autoPlay} />
        </figure>
      </div>
    </section>
  )
}

export default function HorizontalProductJourney({ products = defaultProducts }) {
  const sectionRef = useRef(null)
  const revealVideoRef = useRef(null)
  const reduceMotion = useReducedMotion()
  const narrowViewport = useMediaQuery('(max-width: 900px)')
  const staticMode = Boolean(reduceMotion || narrowViewport)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })
  const progress = useSpring(scrollYProgress, {
    stiffness: 92,
    damping: 25,
    mass: 0.22,
  })

  const trackX = useTransform(progress, [0, 0.63], ['0vw', '-100vw'])
  const trackOpacity = useTransform(progress, [0.68, 0.88], [1, 0.18])
  const railScale = useTransform(progress, [0, 0.63], [0, 1])
  const videoOpacity = useTransform(progress, [0.59, 0.65], [0, 1])
  const videoClip = useTransform(
    progress,
    [0.59, 0.62, 0.72, 0.96],
    [
      'inset(19vh 35vw)',
      'inset(19vh 35vw)',
      'inset(14vh 29vw)',
      'inset(0vh 0vw)',
    ],
  )
  const videoLabelOpacity = useTransform(progress, [0.62, 0.74, 0.9], [0, 1, 0])

  useMotionValueEvent(progress, 'change', (value) => {
    if (staticMode) return
    const video = revealVideoRef.current
    if (!video) return

    if (value >= 0.58) {
      if (video.paused) video.play().catch(() => {})
    } else {
      if (!video.paused) video.pause()
      if (video.currentTime > 0.05) video.currentTime = 0
    }
  })

  if (staticMode) return <StaticJourney products={products} journeyRef={sectionRef} videoRef={revealVideoRef} autoPlay={!reduceMotion} />

  return (
    <section
      className="horizontal-story"
      ref={sectionRef}
      aria-label="横向浏览主推镜框"
    >
      <div className="horizontal-viewport">
        <motion.div
          className="horizontal-track"
          style={{ x: trackX, opacity: trackOpacity }}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>

        <div className="rail-ui" aria-hidden="true">
          <span>01</span>
          <div><motion.i style={{ scaleX: railScale }} /></div>
          <span>06</span>
          <em>SCROLL TO MOVE →</em>
        </div>

        <motion.figure
          className="video-reveal"
          style={{
            opacity: videoOpacity,
            width: '100vw',
            height: '100vh',
            clipPath: videoClip,
            willChange: 'clip-path, opacity',
          }}
        >
          <PortraitPlaceholder labelOpacity={videoLabelOpacity} videoRef={revealVideoRef} />
        </motion.figure>
      </div>
    </section>
  )
}
