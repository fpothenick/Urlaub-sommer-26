import { useNavigate } from 'react-router-dom';

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="welcome-page">
      <div className="welcome-content">
        <h1>Willkommen zu unserem Sommerurlaub mit schönen Menschen 2026! 🌞</h1>
        <p className="welcome-text">
          Es wurden wieder Paketoptionen für unseren gemeinsamen Urlaub zusammengestellt.
          Schaut euch die verschiedenen Unterkünfte in Ruhe an!
        </p>

        <button 
          className="welcome-button"
          onClick={() => navigate('/dates')}
        >
          Los geht's! 🎉
        </button>
      </div>
    </div>
  );
}
