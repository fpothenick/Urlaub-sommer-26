import { useNavigate } from 'react-router-dom';
import { packages } from '../data/packages';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="home-content">
        <button 
          className="back-button"
          onClick={() => navigate('/dates')}
        >
          ← Zeitraum
        </button>

        <h1>Wähle dein Sommerpaket 2026</h1>
        <p className="home-subtitle">
          Drei einzigartige Pakete mit den schönsten Unterkünften
        </p>

        <div className="package-grid">
          {packages.map((pkg) => (
            <button
              key={pkg.id}
              className="package-card"
              onClick={() => navigate(`/package/${pkg.id}`)}
            >
              <div className="package-card-content">
                <h2 className="package-name">{pkg.name}</h2>
                {pkg.subtitle && (
                  <p className="package-subtitle">{pkg.subtitle}</p>
                )}
                <p className="package-price-total">
                  Ungefähr €{pkg.accommodation.pricePerPerson + pkg.flight.pricePerPerson + pkg.carRental.pricePerPerson} pro Person
                </p>
              </div>
              <span className="package-arrow">→</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
