import React from 'react'

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true">{diagonal ? '↗' : '→'}</span>
}

/**
 * The ordinary-scroll tail that follows the pinned product journey.
 *
 * Submission state is intentionally controlled by the page so it can own
 * analytics, persistence, and reset behavior without coupling those concerns
 * to this presentation component.
 */
export default function CraftNewsletter({ submitted = false, onSubmit }) {
  const handleSubmit = (event) => {
    if (onSubmit) {
      onSubmit(event)
      return
    }

    event.preventDefault()
  }

  return (
    <>
      <section className="craft" id="about">
        <article className="craft-story">
          <div>
            <span>ARCE / 2026</span>
            <span>SHANGHAI, CN</span>
          </div>
          <h2>
            Made Without<br />
            <i>Compromise.</i>
          </h2>
          <div className="story-copy">
            <p>每一副镜框都由一双手完成切割、锉磨和装配。没有流水线，也没有捷径。材质先被选择，形状才随之发生。</p>
            <p>ARCE 为那些把眼镜视作表达，而不是修正的人存在。一次只做一副，也让它经得起时间。</p>
          </div>
          <a href="#subscribe">
            VIEW OUR PROCESS <i><Arrow /></i>
          </a>
        </article>

        <div className="material-list">
          <article>
            <span>01</span>
            <div>
              <h3>Petite Acetate</h3>
              <p>轻到你会在被别人注意之前，先忘记它的存在。</p>
            </div>
            <i aria-hidden="true">＋</i>
          </article>
          <article>
            <span>02</span>
            <div>
              <h3>Titanium &amp; Air</h3>
              <p>纯粹的金属结构，减去所有不必要的重量。</p>
            </div>
            <i aria-hidden="true">＋</i>
          </article>
          <article>
            <span>03</span>
            <div>
              <h3>Hand Finished</h3>
              <p>由匠人逐寸抛光，让每一条边缘都自然贴合面部。</p>
            </div>
            <i aria-hidden="true">＋</i>
          </article>
        </div>
      </section>

      <section className="newsletter" id="subscribe">
        <p>PRIVATE EDITIONS / STUDIO NOTES / NO NOISE</p>
        <h2>
          A closer look,<br />
          <i>occasionally.</i>
        </h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">EMAIL ADDRESS</label>
          <input id="email" name="email" type="email" placeholder="name@example.com" autoComplete="email" required />
          <button type="submit">JOIN <Arrow /></button>
        </form>
        <span className={submitted ? 'success show' : 'success'} role="status" aria-live="polite">
          {submitted ? 'WELCOME TO ARCE — 下一封信里见。' : ''}
        </span>
      </section>

      <footer>
        <a className="footer-mark" href="#top">ARCE</a>
        <div>
          <a href="#collection">COLLECTION</a>
          <a href="#about">ABOUT</a>
          <a href="#subscribe">INSTAGRAM ↗</a>
        </div>
        <p>© 2026 ARCE EYEWEAR<br />31°13′N / 121°28′E</p>
      </footer>
    </>
  )
}
