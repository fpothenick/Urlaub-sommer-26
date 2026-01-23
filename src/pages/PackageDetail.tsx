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
            {pkg.accommodation.images && pkg.accommodation.images.length > 0 ? (
              <div className="accommodation-images-grid">
                {pkg.accommodation.images.map((img, index) => (
                  <div key={index} className="accommodation-image">
                    <img src={img} alt={`${pkg.accommodation.title} - Bild ${index + 1}`} />
                  </div>
                ))}
              </div>
            ) : pkg.accommodation.image ? (
              <div className="accommodation-image">
                <img src={pkg.accommodation.image} alt={pkg.accommodation.title} />
              </div>
            ) : null}
            <div className="accommodation-content">
              <div className="accommodation-header">
                <div className="accommodation-header-left">
                  <h3>{pkg.accommodation.title}</h3>
                  {pkg.accommodation.location && (
                    <p className="accommodation-location">📍 {pkg.accommodation.location}</p>
                  )}
                  <p className="accommodation-price">€{pkg.accommodation.pricePerPerson} pro Person</p>
                </div>
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
              
              {((pkg.accommodation.pros && pkg.accommodation.pros.length > 0) || 
                (pkg.accommodation.cons && pkg.accommodation.cons.length > 0)) && (
                <div className="pros-cons-container">
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
                  </div>
                )}
            </div>
          </div>
        </div>

        {/* Flug */}
        <div className="package-section">
          <h2 className="section-title">Flug</h2>
          <div className="price-card">
            <div className="price-card-content">
              {pkg.flight.details && (
                <div className="price-details">
                  {pkg.flight.details.split('\n').map((line, index) => (
                    <div key={index}>{line}</div>
                  ))}
                </div>
              )}
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
