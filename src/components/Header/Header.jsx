import './Header.css';

export default function Header() {
  return (
    <header className="navbar">
      <div className="navbar__brand">CoFounds.</div>
      <nav className="navbar__nav">
        <a href="#process">Process</a>
        <a href="#services">Services</a>
        <a href="#benefits">Benefits</a>
        <a href="#plans">Plans</a>
        <a href="#contact">Contact</a>
      </nav>
      <button className="navbar__cta">Join our Community</button>
    </header>
  );
}
