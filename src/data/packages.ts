// TypeScript Interfaces für das Datenmodell
export interface Package {
  id: "1" | "2" | "3";
  name: string;
  subtitle?: string;
  accommodation: {
    title: string;
    location?: string;
    image: string; // Pfad wie "/images/p1.jpg"
    airbnbUrl?: string;
    pricePerPerson: number;
    pros?: string[];
    cons?: string[];
  };
  flight: {
    pricePerPerson: number;
    details?: string; // z.B. "Direktflug ab München"
  };
  carRental: {
    pricePerPerson: number;
    details?: string; // z.B. "Kompaktklasse, 7 Tage"
  };
}

// Dummy-Daten für die drei Pakete
export const packages: Package[] = [
  {
    id: "1",
    name: "Paket 1",
    subtitle: "Strand & Meer",
    accommodation: {
      title: "Strandvilla Meerblick",
      location: "Costa Brava, Spanien",
      image: "",
      airbnbUrl: "",
      pricePerPerson: 450,
      pros: ["Direkt am Strand", "Meerblick", "Pool vorhanden"],
      cons: ["Etwas abgelegen", "Keine Klimaanlage"]
    },
    flight: {
      pricePerPerson: 230,
      details: "Berlin (BER) → Olbia (OLB)"
    },
    carRental: {
      pricePerPerson: 100,
      details: "7 Tage"
    }
  },
  {
    id: "2",
    name: "Paket 2",
    subtitle: "Berge & Natur",
    accommodation: {
      title: "Berghütte Alpenpanorama",
      location: "Tirol, Österreich",
      image: "",
      airbnbUrl: "",
      pricePerPerson: 380,
      pros: ["Bergblick", "Wanderwege direkt vor der Tür", "Sauna"],
      cons: ["Steile Anfahrt", "Kein WLAN"]
    },
    flight: {
      pricePerPerson: 230,
      details: "Berlin (BER) → Olbia (OLB)"
    },
    carRental: {
      pricePerPerson: 100,
      details: "7 Tage"
    }
  },
  {
    id: "3",
    name: "Paket 3",
    subtitle: "Stadt & Kultur",
    accommodation: {
      title: "Apartment Stadtmitte",
      location: "Barcelona, Spanien",
      image: "",
      airbnbUrl: "",
      pricePerPerson: 420,
      pros: ["Zentrale Lage", "Modern eingerichtet", "Dachterrasse"],
      cons: ["Laut am Abend", "Kein Parkplatz"]
    },
    flight: {
      pricePerPerson: 230,
      details: "Berlin (BER) → Olbia (OLB)"
    },
    carRental: {
      pricePerPerson: 100,
      details: "7 Tage"
    }
  }
];

// Hilfsfunktion zum Abrufen eines Pakets anhand der ID
export const getPackageById = (id: string): Package | undefined => {
  return packages.find(pkg => pkg.id === id);
};
