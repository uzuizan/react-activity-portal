export default function Home({ onNavigate }) {
  return (
    <section className="home-page">
      <div className="hero">
        <span className="eyebrow">REACT JS • PRACTICAL ASSESSMENT</span>
        <h1>Learn React logic through <span>five practical activities.</span></h1>
        <p>Explore state, events, validation, conditions, calculations, and conditional rendering in one cohesive application.</p>
        <button className="primary large" onClick={() => onNavigate('activity1')}>Start Activity 1 <span>→</span></button>
      </div>
      <div className="activity-grid">
        <button className="activity-card purple" onClick={() => onNavigate('activity1')}><b>01</b><span>Login Authentication</span><small>Forms & validation</small></button>
        <button className="activity-card blue" onClick={() => onNavigate('activity2')}><b>02</b><span>Grade Evaluation</span><small>Score classification</small></button>
        <button className="activity-card orange" onClick={() => onNavigate('activity3')}><b>03</b><span>Password Strength</span><small>String conditions</small></button>
        <button className="activity-card green" onClick={() => onNavigate('activity4')}><b>04</b><span>Electricity Bill</span><small>Tiered calculations</small></button>
        <button className="activity-card pink" onClick={() => onNavigate('activity5')}><b>05</b><span>Attendance Checker</span><small>Time classification</small></button>
      </div>
    </section>
  );
}
