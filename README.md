# Urlaub Sommer 2026 🌞

Eine React-Webanwendung zur Präsentation von Urlaubsunterkünften, organisiert in drei Paketen.

## 📋 Übersicht

Diese App zeigt verschiedene Airbnb-Unterkünfte in drei Paketen (Strand & Meer, Berge & Natur, Stadt & Kultur). 
Die Anwendung dient ausschließlich der Ansicht - es gibt keine Abstimmungs- oder Voting-Funktion.

## 🚀 Setup

### Voraussetzungen
- Node.js (Version 18 oder höher)
- npm (wird mit Node.js installiert)

### Installation

1. Dependencies installieren:
```bash
npm install
```

2. Entwicklungsserver starten:
```bash
npm run dev
```

3. Im Browser öffnen:
```
http://localhost:5173
```

## 🖼️ Bilder hinzufügen

**WICHTIG:** Bevor die App vollständig funktioniert, müssen die Bilder im `public/images/` Ordner platziert werden.

### Benötigte Bilder:

```
public/images/
├── group.jpg      # Gruppenbild für die Willkommensseite
├── p1_1.jpg       # Paket 1, Unterkunft 1
├── p1_2.jpg       # Paket 1, Unterkunft 2
├── p2_1.jpg       # Paket 2, Unterkunft 1
├── p2_2.jpg       # Paket 2, Unterkunft 2
├── p3_1.jpg       # Paket 3, Unterkunft 1
└── p3_2.jpg       # Paket 3, Unterkunft 2
```

**Hinweis:** Solange die Bilder fehlen, werden Platzhalter-Bilder angezeigt. Die App funktioniert trotzdem.

## 📝 Daten anpassen

Die Unterkünfte und Pakete werden in `src/data/packages.ts` definiert. 

### Unterkunft bearbeiten:
```typescript
{
  id: "p1_1",
  title: "Dein Unterkunftstitel",
  priceLabel: "€150 / Nacht",
  image: "/images/p1_1.jpg",
  location: "Ort, Land",
  notes: "Beschreibung der Unterkunft",
  airbnbUrl: "https://airbnb.com/dein-link"
}
```

### Unterkunft hinzufügen:
Einfach ein neues Stay-Objekt zum `stays`-Array eines Pakets hinzufügen.

## 🏗️ Build für Produktion

```bash
npm run build
```

Der Build wird im `dist/` Ordner erstellt.

## 🚀 Deployment auf Vercel

1. Repository zu GitHub pushen
2. Auf [Vercel](https://vercel.com) einloggen
3. "New Project" → Repository auswählen
4. Einstellungen werden automatisch erkannt (Vite)
5. "Deploy" klicken

Die App ist danach unter einer öffentlichen URL erreichbar.

### Alternativ: Vercel CLI

```bash
npm i -g vercel
vercel
```

## 📱 Mobile First

Die App ist für Smartphone-Nutzung optimiert:
- Touch-freundliche Buttons (mind. 44px)
- Responsive Design
- Optimierte Bildgrößen
- Keine horizontale Scrollbar

## 🛠️ Technologie-Stack

- **React 18** - UI Framework
- **TypeScript** - Typsicherheit
- **Vite** - Build Tool & Dev Server
- **React Router** - Navigation
- **CSS** - Styling (Mobile First)

## 📁 Projektstruktur

```
src/
├── data/
│   └── packages.ts          # Datenmodell & Unterkünfte
├── pages/
│   ├── Welcome.tsx          # Startseite
│   ├── Home.tsx             # Paketübersicht
│   └── PackageDetail.tsx    # Paketdetails mit Unterkünften
├── components/
│   └── StayCard.tsx         # Unterkunfts-Karte
├── styles/
│   └── global.css           # Globale Styles
├── App.tsx                   # Router-Konfiguration
└── main.tsx                  # App-Entry-Point

public/
└── images/                   # Hier Bilder platzieren!
```

## 🔗 Navigation

- `/` - Willkommensseite
- `/home` - Paketübersicht
- `/package/1` - Paket 1 Details
- `/package/2` - Paket 2 Details
- `/package/3` - Paket 3 Details

## 💡 Tipps

- Bilder sollten im 4:3 oder 16:9 Format sein
- Empfohlene Bildgröße: min. 800x600px
- Bilder werden automatisch responsive skaliert
- Airbnb-Links sind optional
- Die App funktioniert auch mit nur einem Paket

## 📞 Support

Bei Fragen oder Problemen die Dokumentation im `kontext/Arbeitsauftrag.txt` konsultieren.

---

**Viel Spaß bei der Urlaubsplanung! 🏖️**
