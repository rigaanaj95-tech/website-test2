import React, { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'motion/react'
import HeaderHero from './components/sites/local-video-a857feb2/arce-reference-ffbadf40/HeaderHero'
import HorizontalProductJourney from './components/sites/local-video-a857feb2/arce-reference-ffbadf40/HorizontalProductJourney'
import CraftNewsletter from './components/sites/local-video-a857feb2/arce-reference-ffbadf40/CraftNewsletter'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30 })

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const subscribe = (event) => {
    event.preventDefault()
    event.currentTarget.reset()
    setSubmitted(true)
  }

  return (
    <main id="top">
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <HeaderHero menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <section className="catalog" id="collection">
        <div className="catalog-heading"><p>THE OPTICAL EDIT / 01—06</p><h1>Objects for seeing.<br /><i>Made to be seen.</i></h1><span>SCROLL TO EXPLORE ↓</span></div>
      </section>

      <HorizontalProductJourney />
      <CraftNewsletter submitted={submitted} onSubmit={subscribe} />
    </main>
  )
}
