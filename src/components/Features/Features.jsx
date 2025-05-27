import './Features.css';
import target from '../../assets/target.svg';
import find from '../../assets/find.svg';
import globalNetwork from '../../assets/global-network.svg';

export default function Features() {
  return (
    <section className="features">
      <div className="features__stack">
        <button className="features__tag">Who We Are</button>
        <h2 className="features__headline">
          CoFounds is a job-first platform built for individuals, not just companies. We help you discover, track, and manage job opportunities — all in one place.
        </h2>
        <button className="features__tag features__tag--secondary">Why CoFounds?</button>
        <div className="features__subtitle">
          Built for Job Seekers — Not Just Recruiters
        </div>
      </div>

      <div className="features__cards">
        <div className="features__card">
          <img className="features__card-bgimg" src={target} alt="" aria-hidden="true" />
          <div className="features__card-content">
            <div className="features__card-title">Centralized Job Tracker</div>
            <div className="features__card-desc">
              Manage all your applications in one place — no more messy spreadsheets or lost links.
            </div>
          </div>
        </div>

        <div className="features__card">
          <img className="features__card-bgimg" src={find} alt="" aria-hidden="true" />
          <div className="features__card-content">
            <div className="features__card-title">Smart Discovery</div>
            <div className="features__card-desc">
              Get curated job recommendations based on your skills, interests, and activity.
            </div>
          </div>
        </div>

        <div className="features__card">
          <img className="features__card-bgimg" src={globalNetwork} alt="" aria-hidden="true" />
          <div className="features__card-content">
            <div className="features__card-title">Community-Powered Hiring</div>
            <div className="features__card-desc">
              Leverage referrals, shared opportunities, and hiring insights from people like you.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
