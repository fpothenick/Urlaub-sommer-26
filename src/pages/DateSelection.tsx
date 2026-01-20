import { useNavigate } from 'react-router-dom';

interface DateRange {
  id: string;
  startDate: string;
  endDate: string;
  label: string;
}

const dateRanges: DateRange[] = [
  {
    id: '1',
    startDate: '17.08.2026',
    endDate: '23.08.2026',
    label: '17. - 23. August 2026'
  }
];

export default function DateSelection() {
  const navigate = useNavigate();

  return (
    <div className="date-selection-page">
      <div className="date-selection-content">
        <h1>Wähle deinen Reisezeitraum</h1>
        <p className="date-subtitle">
          Wann möchtest du verreisen?
        </p>

        <div className="date-grid">
          {dateRanges.map((range) => (
            <button
              key={range.id}
              className="date-card"
              onClick={() => navigate('/home')}
            >
              <div className="date-card-content">
                <div className="date-icon">📅</div>
                <h2 className="date-label">{range.label}</h2>
                <p className="date-duration">7 Tage</p>
              </div>
              <span className="date-arrow">→</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
