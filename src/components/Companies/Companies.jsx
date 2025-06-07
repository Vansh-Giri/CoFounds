import './Companies.css';
import washingtonpost from '../../assets/TheWashingtonPost.svg';
import techcrunch from '../../assets/TechCrunch.svg';
import bloomberg from '../../assets/Bloomberg.svg';
import gizmodo from '../../assets/Gizmodo.svg';

export default function Companies() {
  return (
    <section className="companies">
      <div className="companies__title">
        Companies that hired from us
      </div>
      <div className="companies__logos">
        <img src={washingtonpost} alt="The Washington Post" />
        <img src={techcrunch} alt="TechCrunch" />
        <img src={bloomberg} alt="Bloomberg" />
        <img src={gizmodo} alt="Gizmodo" />
      </div>
    </section>
  );
}
