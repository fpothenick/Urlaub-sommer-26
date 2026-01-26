import { useNavigate } from 'react-router-dom';

export default function DateSelection() {
  const navigate = useNavigate();

  return (
    <div className="date-selection-page">
      <div className="date-selection-content">
        <h1>Sommerurlaub 2026</h1>
        
        <div className="date-header">
          <p className="date-range">15. - 21. August 2026</p>
          <p className="date-days">6 Tage</p>
        </div>

        <div className="info-section">
          <h2>Wichtige Hinweise</h2>

          <div className="info-card">
            <h3>🏠 Unterkünfte</h3>
            <p>
              Generell gibt es sehr selten komplett private Villen wie auf Kreta. 
              Daher hier ein Mix aus Mehrfamilienhäusern, Wohnungen und Villen.
            </p>
          </div>

          <div className="info-card">
            <h3>✈️ Optimaler Flug per easyJet</h3>
            <p>Auswahl zwischen Handgepäck oder Aufgabegepäck:</p>
            <div className="flight-images">
              <div className="flight-option">
                <img src="/images/Flug_1.png" alt="Direktflug mit Handgepäck" />
                <p className="flight-caption">Direktflug nur mit Handgepäck</p>
              </div>
              <div className="flight-option">
                <img src="/images/Flug_2.png" alt="Direktflug mit Aufgabegepäck" />
                <p className="flight-caption">Direktflug mit Aufgabegepäck</p>
              </div>
            </div>
            <p className="flight-note">
              So schafft es auch Lukas pünktlich zu Roland Kaiser 😉
            </p>
          </div>

          <div className="info-card">
            <h3>🚗 Mietwagen</h3>
            <p>Kompaktklasse, natürlich 2 Stück</p>
            <div className="car-image">
              <img src="/images/Mietwagen.png" alt="Mietwagen Kompaktklasse" />
            </div>
          </div>
        </div>

        <button 
          className="travel-button"
          onClick={() => navigate('/home')}
        >
          Zu den Paketen →
        </button>
      </div>
    </div>
  );
}
