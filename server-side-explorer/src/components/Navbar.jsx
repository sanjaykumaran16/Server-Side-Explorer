function Navbar({ setTab }) {
  return (
    <nav className="navbar">
      {['home', 'simulate', 'logs', 'code', 'quiz'].map(tab => (
        <button key={tab} onClick={() => setTab(tab)} className="navbar-button">
          {tab}
        </button>
      ))}
    </nav>
  );
}

export default Navbar;