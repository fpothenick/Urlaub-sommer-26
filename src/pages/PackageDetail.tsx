import { useParams, useNavigate } from 'react-router-dom';
import { getPackageById } from '../data/packages';

export default function PackageDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const pkg = id ? getPackageById(id) : undefined;

  if (!pkg) {
    return (
      <div className="package-detail-page">
        <div className="package-detail-content">
          <h1>Paket nicht gefunden</h1>
          <p>Das angeforderte Paket existiert nicht.</p>
          <button 
            className="back-button"
            onClick={() => navigate('/home')}
          >
            ← Zurück zur Übersicht
          </button>
        </div>
      </div>
    );
  }

  const totalPrice = pkg.accommodation.pricePerPerson + pkg.flight.pricePerPerson + pkg.carRental.pricePerPerson;

  return (
    <div className="package-detail-page">
      <div className="package-detail-content">
        <button 
          className="back-button"
          onClick={() => navigate('/home')}
        >
          ← Pakete
        </button>

        <div className="package-header">
          <h1>{pkg.name}</h1>
          {pkg.subtitle && <p className="package-subtitle">{pkg.subtitle}</p>}
        </div>

        {/* Unterkunft */}
        <div className="package-section">
          <h2 className="section-title">Unterkunft</h2>
          <div className="accommodation-card">
            {pkg.accommodation.image && (
              <div className="accommodation-image">
                <img src={pkg.accommodation.image} alt={pkg.accommodation.title} />
              </div>
            )}
            <div className="accommodation-content">
              <h3>{pkg.accommodation.title}</h3>
              {pkg.accommodation.location && (
                <p className="accommodation-location">📍 {pkg.accommodation.location}</p>
              )}
              <p className="accommodation-price">€{pkg.accommodation.pricePerPerson} pro Person</p>
              
              {pkg.accommodation.pros && pkg.accommodation.pros.length > 0 && (
                <div className="pros-cons">
                  <h4>Vorteile</h4>
                  <ul className="pros-list">
                    {pkg.accommodation.pros.map((pro, index) => (
                      <li key={index}>✓ {pro}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {pkg.accommodation.cons && pkg.accommodation.cons.length > 0 && (
                <div className="pros-cons">
                  <h4>Nachteile</h4>
                  <ul className="cons-list">
                    {pkg.accommodation.cons.map((con, index) => (
                      <li key={index}>✗ {con}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {pkg.accommodation.airbnbUrl && (
                <a 
                  href={pkg.accommodation.airbnbUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="airbnb-link"
                >
                  Auf Airbnb ansehen →
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Flug */}
        <div className="package-section">
          <h2 className="section-title">Flug</h2>
          <div className="price-card">
            <div className="price-card-content">
              {pkg.flight.details && <p className="price-details">{pkg.flight.details}</p>}
              <p className="price-amount">€{pkg.flight.pricePerPerson} pro Person</p>
            </div>
          </div>
        </div>

        {/* Mietwagen */}
        <div className="package-section">
          <h2 className="section-title">Mietwagen</h2>
          <div className="price-card">
            <div className="price-card-content">
              {pkg.carRental.details && <p className="price-details">{pkg.carRental.details}</p>}
              <p className="price-amount">€{pkg.carRental.pricePerPerson} pro Person</p>
            </div>
          </div>
        </div>

        {/* Gesamtpreis */}
        <div className="package-total">
          <h2>Gesamtpreis</h2>
          <p className="total-price">€{totalPrice} pro Person</p>
        </div>
      </div>
    </div>
  );
}
