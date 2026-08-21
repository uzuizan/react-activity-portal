export default function Navbar({ activePage, onNavigate }) {
  return (
    <header className="navbar">
      <button className="brand" onClick={() => onNavigate('home')} aria-label="Go home">
        <span className="brand-mark">R</span><span>React Activity Portal</span>
      </button>
      <nav aria-label="Main navigation">
        <button className={activePage === 'home' ? 'active' : ''} onClick={() => onNavigate('home')}>Home</button>
        <button className={activePage === 'activity1' ? 'active' : ''} onClick={() => onNavigate('activity1')}>Activity 1</button>
        <button className={activePage === 'activity2' ? 'active' : ''} onClick={() => onNavigate('activity2')}>Activity 2</button>
        <button className={activePage === 'activity3' ? 'active' : ''} onClick={() => onNavigate('activity3')}>Activity 3</button>
        <button className={activePage === 'activity4' ? 'active' : ''} onClick={() => onNavigate('activity4')}>Activity 4</button>
        <button className={activePage === 'activity5' ? 'active' : ''} onClick={() => onNavigate('activity5')}>Activity 5</button>
      </nav>
    </header>
  );
}
