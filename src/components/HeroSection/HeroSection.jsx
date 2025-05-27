import './HeroSection.css';
import broken from '../../assets/broken.svg';
 // adjust the path if your folder structure is different

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__subtitle">
        You Build. We Back You.
      </div>
      <h1 className="hero__headline">
        <span className="visually-hidden">Hiring is broken</span>
        Hiring is{' '}
        <img
          src={broken}
          alt="broken"
          className="hero__broken-img"
          aria-hidden="true"
        />
      </h1>
      <h2 className="hero__subheadline">We are to fix it</h2>
      <div className="hero__desc">
        Get hired fast through Proof of Work and Community.<br />
        No more resumes lost in the void. Let your skills speak louder than your degree.
      </div>
      <div className="hero__actions">
        <button className="hero__btn hero__btn--primary">Get Started</button>
        <button className="hero__btn hero__btn--secondary">Explore Proof of Work Projects</button>
      </div>
    </section>
  );
}
