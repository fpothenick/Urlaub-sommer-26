// TypeScript Interfaces für das Datenmodell
export interface Package {
  id: "1" | "2" | "3" | "4";
  name: string;
  subtitle?: string;
  accommodation: {
    title: string;
    location?: string;
    image: string; // Pfad wie "/images/p1.jpg"
    images?: string[]; // Mehrere Bilder
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
    name: "Paket 1 - Infinity Pool",
    subtitle: "Küste & Meer",
    accommodation: {
      title: "Unterkunft Costa Paradiso",
      location: "Costa Paradiso, Italien",
      image: "/images/U1_1.avif",
      images: ["/images/U1_1.avif", "/images/U1_2.avif"],
      airbnbUrl: "https://www.airbnb.de/rooms/852938425917488327?adults=8&check_in=2026-08-17&check_out=2026-08-23&children=0&infants=0&pets=0&wishlist_item_id=11005831339069&source_impression_id=p3_1769198483_P3ZK2kWFd-uIOD8e&previous_page_section_name=1000",
      pricePerPerson: 525,
      pros: [
        "Krasse Aussicht",
        "4 Schlafzimmer mit jeweils einem Doppelbett",
        "3 Badezimmer",
        "Sehr gepflegt",
        "Strand, Restaurants und Supermärkte in unmittelbarer Nähe"
      ],
      cons: [
        "1,5 Stunden Autofahrt vom Flughafen",
        "Gemeinsame Poolnutzung mit den Eigentümern (wahrscheinlich)",
        "Keine Klimaanlage",
        "Kein Handtuchpaket"
      ]
    },
    flight: {
      pricePerPerson: 220,
      details: "Berlin (BER) → Olbia (OLB) → Berlin (BER)"
    },
    carRental: {
      pricePerPerson: 90,
      details: "6 Tage"
    }
  },
  {
    id: "2",
    name: "Paket 2 - Frühstück mit Aussicht",
    subtitle: "Küste & Meer",
    accommodation: {
      title: "Villa Tamarix",
      location: "Costa Paradiso, Italien",
      image: "/images/U2_1.avif",
      images: ["/images/U2_1.avif", "/images/U2_2.avif"],
      airbnbUrl: "https://www.airbnb.de/rooms/1107876138293165753?adults=8&check_in=2026-08-15&check_out=2026-08-21&guests=7&search_mode=regular_search&amenities%5B%5D=7&source_impression_id=p3_1769451862_P33DSmvFOhvmMTih&previous_page_section_name=1000&federated_search_id=cc39041b-98ea-42b4-abc8-a72194c77a15",
      pricePerPerson: 456,
      pros: [
        "Krasse Aussicht",
        "4 Schlafzimmer",
        "Sehr gepflegt",
        "Strand, Restaurants und Supermärkte in unmittelbarer Nähe"
      ],
      cons: [
        "1,5 Stunden Autofahrt vom Flughafen",
        "Keine Klimaanlage",
        "Gemeinsame Poolnutzung",
        "Handtücher und Bettwäsche gegen Aufpreis",
        "Ein Hochbett"
      ]
    },
    flight: {
      pricePerPerson: 220,
      details: "Berlin (BER) → Olbia (OLB) → Berlin (BER)"
    },
    carRental: {
      pricePerPerson: 90,
      details: "6 Tage"
    }
  },
  {
    id: "3",
    name: "Paket 3 - Apartment",
    subtitle: "Hafen & Meer",
    accommodation: {
      title: "Apartment in Palau",
      location: "Palau, Italien",
      image: "/images/U3_1.avif",
      images: ["/images/U3_1.avif", "/images/U3_2.avif"],
      airbnbUrl: "https://www.airbnb.de/rooms/1154348732137643763?adults=8&check_in=2026-08-17&check_out=2026-08-23&children=0&infants=0&pets=0&wishlist_item_id=11005831300531&source_impression_id=p3_1769201377_P3rZWJ-Ch8C3EFMh&previous_page_section_name=1000",
      pricePerPerson: 470,
      pros: [
        "Handtuchpaket",
        "Klimaanlage",
        "Großer Pool",
        "Sehr gepflegt"
      ],
      cons: [
        "45 Minuten Autofahrt vom Flughafen",
        "2 Schlafzimmer",
        "Schlechte Aussicht"
      ]
    },
    flight: {
      pricePerPerson: 220,
      details: "Berlin (BER) → Olbia (OLB) → Berlin (BER)"
    },
    carRental: {
      pricePerPerson: 90,
      details: "6 Tage"
    }
  },
  {
    id: "4",
    name: "Paket 4 - Landhaus",
    subtitle: "Landluft & Wald",
    accommodation: {
      title: "Landhaus Bassacutena",
      location: "Bassacutena, Italien",
      image: "/images/U4_1.avif",
      images: ["/images/U4_1.avif", "/images/U4_2.avif"],
      airbnbUrl: "https://www.airbnb.de/rooms/3318735?adults=8&check_in=2026-08-17&check_out=2026-08-23&children=0&infants=0&pets=0&wishlist_item_id=11005695533803&source_impression_id=p3_1769201916_P3tNl8ifuk4RsxOl&previous_page_section_name=1000",
      pricePerPerson: 330,
      pros: [
        "Günstig",
        "Eigenes Haus",
        "Großes Grundstück",
        "Handtuchpaket"
      ],
      cons: [
        "50 Minuten Autofahrt vom Flughafen",
        "Abgelegene Lage",
        "Keine Klimaanlage",
        "Aufstellpool",
        "Sehr rustikal"
      ]
    },
    flight: {
      pricePerPerson: 220,
      details: "Berlin (BER) → Olbia (OLB) → Berlin (BER)"
    },
    carRental: {
      pricePerPerson: 90,
      details: "6 Tage"
    }
  }
];

// Hilfsfunktion zum Abrufen eines Pakets anhand der ID
export const getPackageById = (id: string): Package | undefined => {
  return packages.find(pkg => pkg.id === id);
};
