import { useEffect, useState } from 'react';
import useTypewriter from './Typewriter';
import './HeroSection.css';

export default function HeroSection() {
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [startHeadline, setStartHeadline] = useState(false);
  const [showPill, setShowPill] = useState(false);
  const [breakPill, setBreakPill] = useState(false);
  const [startSubheadline, setStartSubheadline] = useState(false);
  const [showDesc, setShowDesc] = useState(false);

  // Typewriter text
  const headlineText = useTypewriter("Hiring is", startHeadline, 60);
  const subheadlineText = useTypewriter("We are to fix it.", startSubheadline, 60);

  useEffect(() => {
    setTimeout(() => setShowSubtitle(true), 100);
    setTimeout(() => setStartHeadline(true), 800);
  }, []);

  useEffect(() => {
    if (headlineText === "Hiring is") {
      setTimeout(() => setShowPill(true), 100);    // Show pill after headline
      setTimeout(() => setBreakPill(true), 400);   // Break pill after delay
      setTimeout(() => setStartSubheadline(true), 1000);
    }
  }, [headlineText]);

  useEffect(() => {
    if (subheadlineText === "We are to fix it.") {
      setShowDesc(true);
    }
  }, [subheadlineText]);

  const headline = "Hiring is";
  const subheadline = "We are to fix it.";

  return (
    <section className="hero">
      <div className={`hero__subtitle hero__fade-in-up${showSubtitle ? ' is-visible' : ''}`}>
        You Build. We Back You.
      </div>
      <h1 className="hero__headline">
        <span className="visually-hidden">Hiring is broken</span>
        {headline.split("").map((char, idx) => (
          <span
            key={idx}
            className="hero__headline-letter"
            style={{ "--i": idx }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
        {/* Pill animation */}
        <span style={{ marginLeft: "0.5em" }}>
          <span className={`pill-container${showPill ? ' visible' : ''}${breakPill ? ' break' : ''}`}>
            <span className="pill-half pill-left">bro</span>
            <span className="pill-half pill-right">ken</span>
          </span>
        </span>
      </h1>
      <h2 className="hero__subheadline">
        {subheadline.split("").map((char, idx) => (
          <span
            key={idx}
            className="hero__subheadline-letter"
            style={{ "--i": idx }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h2>
      <div className={`hero__desc hero__fade-in-up${showDesc ? ' is-visible' : ''}`}>
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
