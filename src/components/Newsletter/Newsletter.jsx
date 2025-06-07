import './Newsletter.css';

export default function Newsletter() {
  return (
    <section className="newsletter">
      <h2 className="newsletter__title">SUBSCRIBE TO OUR NEWSLETTER</h2>
      <p className="newsletter__subtitle">
        Subscribe to stay tuned for new web design and latest updates. Let's do it!
      </p>
      <form className="newsletter__form" onSubmit={e => e.preventDefault()}>
        <input
          type="email"
          className="newsletter__input"
          placeholder="Enter your email Address"
          required
        />
        <button className="newsletter__button" type="submit">
          Subscribe
        </button>
      </form>
    </section>
  );
}
