import type { Package } from '../data/packages';

interface StayCardProps {
  stay: Package['accommodation'];
}

export default function StayCard({ stay }: StayCardProps) {
  return (
    <div className="stay-card">
      <div className="stay-card-image">
        <img 
          src={stay.image} 
          alt={stay.title}
          onError={(e) => {
            // Fallback bei fehlendem Bild
            e.currentTarget.src = 'https://via.placeholder.com/400x300?text=Bild+folgt';
          }}
        />
      </div>
      <div className="stay-card-content">
        <h3 className="stay-card-title">{stay.title}</h3>
        <p className="stay-card-price">{stay.priceLabel}</p>
        {stay.location && (
          <p className="stay-card-location">📍 {stay.location}</p>
        )}
        {stay.notes && (
          <p className="stay-card-notes">{stay.notes}</p>
        )}
        {stay.airbnbUrl && (
          <a 
            href={stay.airbnbUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="stay-card-link"
          >
            Auf Airbnb ansehen →
          </a>
        )}
      </div>
    </div>
  );
}
