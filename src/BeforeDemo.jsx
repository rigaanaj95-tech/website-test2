import React, { useState } from 'react'
import { motion, useScroll, useSpring } from 'motion/react'
import CraftNewsletter from './components/sites/local-video-a857feb2/arce-reference-ffbadf40/CraftNewsletter'

const beforeProducts = [
  { id: 'A—01', name: 'Moro', note: 'Honey Tea', price: '¥1,280', fill: '#d4b291' },
  { id: 'A—02', name: 'Vega', note: 'Quartz Clear', price: '¥1,180', fill: '#d9d8d2' },
  { id: 'A—03', name: 'Noma', note: 'Silver Filament', price: '¥1,380', fill: '#b9c1c4' },
]

const Arrow = () => <span aria-hidden="true">↗</span>

export default function BeforeDemo() {
  const [submitted, setSubmitted] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30 })

  const subscribe = (event) => {
    event.preventDefault()
    event.currentTarget.reset()
    setSubmitted(true)
  }

  return (
    <main className="before-demo" id="top">
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />

      <header className="minimal-header before-header">
        <a className="wordmark" href="#top">ARCE<sup>®</sup></a>
        <nav className="main-nav" aria-label="主导航">
          <a href="#collection">COLLECTION</a>
          <a href="#about">ABOUT</a>
          <a href="#subscribe">JOURNAL</a>
        </nav>
        <button className="menu-toggle" type="button" aria-label="菜单"><span /><span /></button>
        <a className="bag-link" href="#collection">[ BAG · 0 ]</a>
      </header>

      <section className="quiet-hero">
        <div className="hero-object asset-placeholder before-hero-placeholder">
          <span>HERO PRODUCT ASSET</span><small>PLACEHOLDER · 16:6</small>
        </div>
        <div className="ticker ticker-one" aria-hidden="true"><div><span>Every detail deserves a closer look</span><b>◆</b><span>Every detail deserves a closer look</span><b>◆</b><span>Every detail deserves a closer look</span></div></div>
        <div className="ticker ticker-two" aria-hidden="true"><div><span>Every detail deserves a closer look</span><b>◆</b><span>Every detail deserves a closer look</span></div></div>
        <div className="hero-footnote"><p>INDEPENDENT EYEWEAR<br />DESIGNED IN SHANGHAI<br />ONE FRAME AT A TIME.</p><a href="#collection">DISCOVER <i><Arrow /></i></a></div>
        <p className="edition">ARCE / EDITION 2026</p>
      </section>

      <section className="catalog" id="collection">
        <div className="catalog-heading"><p>THE OPTICAL EDIT / 01—03</p><h1>Objects for seeing.<br /><i>Made to be seen.</i></h1><span>SCROLL TO EXPLORE ↓</span></div>
        <div className="product-wall">
          {beforeProducts.map((product) => (
            <article className="precision-card" key={product.id}>
              <div className="card-meta"><span>{product.id}</span><span>OPTICAL</span></div>
              <div className="product-drawing"><div className="asset-placeholder product-placeholder" style={{ backgroundColor: product.fill }}><span>PRODUCT IMAGE</span><small>{product.id} / 4:3</small></div></div>
              <div className="card-info"><div><h2>{product.name}</h2><p>{product.note}</p></div><div><span>{product.price}</span><a href="#subscribe" aria-label={`查看 ${product.name}`}><Arrow /></a></div></div>
            </article>
          ))}
        </div>
      </section>

      <section className="before-portrait" aria-label="人物视频普通展示区域">
        <figure><div><span>PORTRAIT VIDEO ASSET</span><small>PLACEHOLDER · NORMAL VERTICAL SCROLL</small></div></figure>
      </section>

      <CraftNewsletter submitted={submitted} onSubmit={subscribe} />
    </main>
  )
}

