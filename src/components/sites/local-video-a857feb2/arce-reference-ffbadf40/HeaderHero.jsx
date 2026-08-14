import React from 'react'
import heroEyewear from '../../../../../assets/arce-rimless-hero.png'

const Arrow = () => <span aria-hidden="true">↗</span>

const headerStyle = {
  position: 'fixed',
  zIndex: 30,
  background: 'var(--paper)',
  borderBottom: '1px solid var(--line)',
}

const visuallyHidden = {
  position: 'absolute',
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  border: 0,
}

/**
 * Persistent navigation and the ARCE opening canvas.
 *
 * The parent owns menu state so it can coordinate body scroll locking. All
 * media in this component intentionally remains a labelled colour layer until
 * final campaign assets are supplied.
 */
export default function HeaderHero({ menuOpen, setMenuOpen }) {
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <style>{`
        .arce-header-hero a:focus-visible,
        .arce-header-hero button:focus-visible {
          outline: 2px solid var(--red);
          outline-offset: 3px;
        }
        .arce-header-hero .minimal-header a,
        .arce-header-hero .menu-toggle {
          min-height: 44px;
          display: flex;
          align-items: center;
        }
        .arce-header-hero .menu-toggle {
          min-width: 44px;
          justify-content: center;
        }
        .arce-header-hero .wordmark,
        .arce-header-hero .bag-link {
          width: max-content;
        }
        @media (max-width: 900px) {
          .arce-header-hero .main-nav.is-open {
            z-index: -1;
            padding-top: 72px;
          }
          .arce-header-hero .main-nav.is-open a {
            min-width: 44px;
            justify-content: center;
          }
        }
      `}</style>

      <div className="arce-header-hero">
        <header className="minimal-header" style={headerStyle}>
          <a className="wordmark" href="#top" onClick={closeMenu}>
            ARCE<sup>®</sup>
          </a>

          <nav
            id="primary-navigation"
            className={menuOpen ? 'main-nav is-open' : 'main-nav'}
            aria-label="主导航"
          >
            <a href="#collection" onClick={closeMenu}>COLLECTION</a>
            <a href="#about" onClick={closeMenu}>ABOUT</a>
            <a href="#subscribe" onClick={closeMenu}>JOURNAL</a>
          </nav>

          <button
            className="menu-toggle"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? '关闭菜单' : '打开菜单'}
            aria-controls="primary-navigation"
            aria-expanded={menuOpen}
          >
            <span style={menuOpen ? { transform: 'translateY(3px) rotate(45deg)' } : undefined} />
            <span style={menuOpen ? { transform: 'translateY(-3px) rotate(-45deg)' } : undefined} />
          </button>

          <a className="bag-link" href="#collection" onClick={closeMenu}>[ BAG · 0 ]</a>
        </header>

        <section className="quiet-hero" aria-labelledby="arce-hero-title">
          <h1 id="arce-hero-title" style={visuallyHidden}>
            ARCE Eyewear — Every detail deserves a closer look
          </h1>

          <div className="hero-eyewear-stage">
            <div className="hero-marquee-back" aria-hidden="true">
              <div className="hero-marquee-track">
                <span>Every detail deserves a closer look</span><b>◆</b>
                <span>Every detail deserves a closer look</span><b>◆</b>
                <span>Every detail deserves a closer look</span>
              </div>
            </div>

            <div className="lens-marquee" aria-hidden="true">
              <div className="lens-marquee-track">
                <span>Every detail deserves a closer look</span><b>◆</b>
                <span>Every detail deserves a closer look</span><b>◆</b>
                <span>Every detail deserves a closer look</span>
              </div>
            </div>

            <img
              className="hero-object hero-eyewear"
              src={heroEyewear}
              alt="ARCE 银色无框矩形眼镜"
              width="2048"
              height="787"
              fetchPriority="high"
              decoding="async"
            />

            <img
              className="hero-object hero-eyewear hero-eyewear-details"
              src={heroEyewear}
              alt=""
              width="2048"
              height="787"
              aria-hidden="true"
              decoding="async"
            />
          </div>

          <div className="hero-footnote">
            <p>INDEPENDENT EYEWEAR<br />DESIGNED IN SHANGHAI<br />ONE FRAME AT A TIME.</p>
            <a href="#collection">DISCOVER <i><Arrow /></i></a>
          </div>
          <p className="edition">ARCE / EDITION 2026</p>
        </section>
      </div>
    </>
  )
}
