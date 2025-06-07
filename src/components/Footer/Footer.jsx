import './Footer.css';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import telegram from '../../assets/telegram.svg';
import instagram from '../../assets/instagram.svg';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__background-text">COFOUNDS</div>
      <nav className="footer__nav">
        <a href="#process">Process</a>
        <a href="#services">Services</a>
        <a href="#benefits">Benefits</a>
        <a href="#plans">Plans</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="footer__social-section">
        <div className="footer__follow-label">Follow us</div>
        <div className="footer__social">
          <a href="#" aria-label="Facebook"><img src={facebook} alt="Facebook" /></a>
          <a href="#" aria-label="Twitter"><img src={twitter} alt="Twitter" /></a>
          <a href="#" aria-label="Telegram"><img src={telegram} alt="Telegram" /></a>
          <a href="#" aria-label="Instagram"><img src={instagram} alt="Instagram" /></a>
        </div>
      </div>
      <div className="footer__copyright">
        © 2025 All Rights Reserved
      </div>
    </footer>
  );
}
