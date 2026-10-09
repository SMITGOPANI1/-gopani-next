export default function S08_Stats() {
  return (
    <>
    <section className="stats" aria-label="Our numbers">
      {/* NOTE: replace with your real numbers */}
      <div className="container stats-grid">
        <div className="stat reveal"><b data-count="150" data-suffix="+">0</b><span>Projects Delivered</span></div>
        <div className="stat reveal d1"><b data-count="80" data-suffix="+">0</b><span>Happy Clients</span></div>
        <div className="stat reveal d2"><b data-count="5" data-suffix="+">0</b><span>Years of Experience</span></div>
        <div className="stat reveal d3"><b data-count="2" data-prefix="₹" data-suffix=" Cr+">0</b><span>Ad Spend Managed</span></div>
      </div>
    </section>
    </>
  );
}
