import React from 'react'

export default function ComparisonDemo() {
  return (
    <main className="comparison-demo">
      <header className="comparison-header">
        <div><strong>ARCE / BEFORE &amp; AFTER</strong><span>两个窗口可独立滚动</span></div>
        <nav><a href="/?version=before" target="_blank">单独打开调整前 ↗</a><a href="/?version=after" target="_blank">单独打开调整后 ↗</a></nav>
      </header>
      <section className="comparison-grid">
        <article><div className="comparison-label"><b>BEFORE</b><span>彩色占位 · 普通纵向浏览</span></div><iframe title="ARCE 调整前版本" src="/?version=before" /></article>
        <article><div className="comparison-label"><b>AFTER</b><span>黑白灰 · 横向锁定与全屏展开</span></div><iframe title="ARCE 调整后版本" src="/?version=after" /></article>
      </section>
    </main>
  )
}

