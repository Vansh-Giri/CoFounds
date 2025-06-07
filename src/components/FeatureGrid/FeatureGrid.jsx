import React, { useRef } from "react";
import './FeatureGrid.css';
import briefcase from '../../assets/briefcase.svg';
import grid from '../../assets/grid.svg';
import sync from '../../assets/sync.svg';
import group from '../../assets/group.svg';
import target from '../../assets/target.svg';
import shield from '../../assets/shield.svg';

export default function FeatureGrid() {
  const features = [
    {
      icon: briefcase,
      title: "Built for Job Seekers",
      desc: "Not just another job board. Cofounds is crafted around the needs, habits, and pain points of real applicants.",
    },
    {
      icon: grid,
      title: "Apply Smarter, Not Harder",
      desc: "Cut through clutter. Get curated listings and tools that help you apply with precision, not spray-and-pray.",
    },
    {
      icon: sync,
      title: "Always in Sync",
      desc: "Track saved jobs, status updates, and notes across devices — without the spreadsheet chaos.",
    },
    {
      icon: group,
      title: "Community-Driven Advantage",
      desc: "Tap into shared opportunities, referrals, and insights from people walking the same path.",
    },
    {
      icon: target,
      title: "Personalized Job Discovery",
      desc: "Smart algorithms that understand your goals — not just your keywords.",
    },
    {
      icon: shield,
      title: "Privacy-First by Design",
      desc: "No creepy data resale. No recruiter spam. Your journey stays yours, always.",
    },
  ];

  const gridRef = useRef(null);

  const handleMouseMove = (e) => {
    const grid = gridRef.current;
    if (!grid) return;
    const rect = grid.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    grid.style.setProperty('--x', `${x}px`);
    grid.style.setProperty('--y', `${y}px`);
  };

  const handleMouseLeave = () => {
    const grid = gridRef.current;
    if (!grid) return;
    grid.style.setProperty('--x', `50%`);
    grid.style.setProperty('--y', `50%`);
  };

  return (
    <section className="featuregrid">
      <button className="featuregrid__tag">Why Cofounds Works</button>
      <div className="featuregrid__subtitle">
        Why Cofounds Delivers Results — Not Just Listings
      </div>
      <div
        className="featuregrid__grid"
        ref={gridRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {features.map(({ icon, title, desc }) => (
          <div className="featuregrid__card" key={title}>
            <img src={icon} alt="" className="featuregrid__icon" />
            <div className="featuregrid__title">{title}</div>
            <div className="featuregrid__desc">{desc}</div>
          </div>
        ))}
      </div>
      <button className="hero__btn hero__btn--primary">Join CoFounds Today</button>
    </section>
  );
}
