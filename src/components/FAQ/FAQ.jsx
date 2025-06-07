import React, { useState } from "react";
import "./FAQ.css";

const faqs = [
  {
    question: "What is Cofounds?",
    answer:
      "Cofounds is a modern job search companion that helps you track, discover, and apply to jobs smarter — all in one place, powered by community.",
  },
  {
    question: "Is Cofounds free to use?",
    answer:
      "Yes, Cofounds is completely free for job seekers. You can explore, track, and apply to jobs at no cost.",
  },
  {
    question: "How is Cofounds different from LinkedIn or job boards?",
    answer:
      "Cofounds focuses on proof of work, community support, and personalized job tracking, unlike traditional job boards.",
  },
  {
    question: "Do I need to create an account?",
    answer:
      "You can browse jobs without an account, but creating one unlocks tracking, recommendations, and community features.",
  },
  {
    question: "Is my data safe with Cofounds?",
    answer:
      "Absolutely. Cofounds puts privacy first and never sells your data to recruiters or third parties.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="faq">
      <div className="faq__meta">
        <div className="faq__tag">Your Questions, Our Answers</div>
        <div className="faq__subtitle">
          Everything you need to know about Cofounds – how it works, why it’s different, and how it helps you land better.
        </div>
      </div>
      <div className="faq__container">
        <div className="faq__questions">
          {faqs.map((item, idx) => (
            <div
              key={item.question}
              className={`faq__question${openIdx === idx ? " faq__question--active" : ""}`}
              onClick={() => setOpenIdx(idx)}
              tabIndex={0}
              role="button"
              aria-expanded={openIdx === idx}
              aria-controls={`faq-answer-${idx}`}
            >
              <span>{item.question}</span>
              <span className={`faq__arrow${openIdx === idx ? " faq__arrow--open" : ""}`}>
                {openIdx === idx ? "▼" : "▶"}
              </span>
            </div>
          ))}
        </div>
        <div className="faq__answer-card" id={`faq-answer-${openIdx}`}>
          <div className="faq__answer">{faqs[openIdx].answer}</div>
        </div>
      </div>
    </section>
  );
}
