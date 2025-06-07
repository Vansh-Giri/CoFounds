import { useEffect, useState, useRef } from 'react';
import './Testimonials.css';

import one from '../../assets/one.png';
import two from '../../assets/two.png';
import three from '../../assets/three.png';
import four from '../../assets/four.png';
import five from '../../assets/five.png';
import star from '../../assets/Star.svg'; // Import your SVG star

const testimonials = [
  {
    name: "Aarti",
    image: three,
    text: "Cofounds helped me cut through the noise. I landed interviews from companies I actually cared about — without feeling overwhelmed.",
    stars: 5,
  },
  {
    name: "Rohit",
    image: one,
    text: "The community support and job tracking tools made my job search so much easier. I found my dream role in just a few weeks!",
    stars: 4,
  },
  {
    name: "Priya",
    image: two,
    text: "I loved the curated job recommendations and the privacy-first approach. No more recruiter spam!",
    stars: 4,
  },
  {
    name: "Samir",
    image: four,
    text: "The proof of work projects gave me a real edge. I got noticed by top companies and received multiple offers.",
    stars: 3,
  },
  {
    name: "Fatima",
    image: five,
    text: "Managing applications is finally painless. The dashboard keeps everything organized and stress-free.",
    stars: 5,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const timer = useRef();

  useEffect(() => {
    timer.current = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer.current);
  }, []);

  return (
    <section className="testimonials">
      <div className="testimonials__meta">
        <div className="testimonials__tag">Real people. Real journeys. Real outcomes.</div>
        <div className="testimonials__subtitle">Built With You, Backed by Community</div>
      </div>
      <div className="testimonials__main">
        <img
          src={testimonials[active].image}
          alt={testimonials[active].name}
          className="testimonials__avatar"
          style={{height: "100%"}}
        />
        <div className="testimonials__content">
          <div className="testimonials__name-stars">
            <span className="testimonials__name">{testimonials[active].name}</span>
            <span className="testimonials__stars">
              {Array.from({ length: testimonials[active].stars }).map((_, i) => (
                <img
                  src={star}
                  alt="star"
                  key={i}
                  className="testimonials__star"
                />
              ))}
            </span>
          </div>
          <div className="testimonials__text">{testimonials[active].text}</div>
        </div>
      </div>
      <div className="testimonials__avatars">
  {testimonials.map((t, idx) => (
    <img
      key={t.name}
      src={t.image}
      alt={t.name}
      className={`testimonials__avatar-mini${idx === active ? ' testimonials__avatar-mini--active' : ''}`}
      onClick={() => setActive(idx)}
    />
  ))}
</div>

    </section>
  );
}
