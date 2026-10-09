export default function S10_WhyChooseUs() {
  return (
    <>
    <section className="section dark">
      <div className="container why-grid">
        <div>
          <div className="sec-head">
            <div className="sec-num reveal">05 — Why GOPANI</div>
            <h2 className="sec-title reveal d1">One partner instead of two agencies.</h2>
          </div>
          <div className="why-list">
            <div className="why-item reveal d1"><div className="ic">🤝</div><div><h4>Tech + Marketing under one roof</h4><p>No need to hire and manage two different agencies.</p></div></div>
            <div className="why-item reveal d2"><div className="ic">👤</div><div><h4>Dedicated project manager</h4><p>One person who knows your project and always picks up.</p></div></div>
            <div className="why-item reveal d3"><div className="ic">📊</div><div><h4>Weekly reports + live dashboard</h4><p>You always know what is done and what it brings.</p></div></div>
            <div className="why-item reveal d4"><div className="ic">🔑</div><div><h4>You own everything</h4><p>Your code, domain, ad accounts and data belong to you.</p></div></div>
          </div>
        </div>
        <div className="compare reveal right d2">
          <table>
            <tbody>
            <tr><th></th><th>Typical Agency</th><th className="us">GOPANI</th></tr>
            <tr><td>Builds website / app</td><td className="yes">✓</td><td className="us yes">✓</td></tr>
            <tr><td>Does marketing too</td><td className="no">✗</td><td className="us yes">✓</td></tr>
            <tr><td>Weekly reports</td><td className="no">✗</td><td className="us yes">✓</td></tr>
            <tr><td>You own code &amp; accounts</td><td className="no">Sometimes</td><td className="us yes">Always</td></tr>
            <tr><td>One point of contact</td><td className="no">✗</td><td className="us yes">✓</td></tr>
            <tr><td>Reply on WhatsApp</td><td className="no">Slow</td><td className="us yes">Same day</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
    </>
  );
}
