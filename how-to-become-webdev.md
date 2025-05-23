
# How to Become a Web Developer – Projektplan

## ✨ Projektidee

Eine interaktive Webseite, die Anfängern den Einstieg in die Webentwicklung erleichtert und sie auf spielerische Weise motiviert. Die Seite besteht aus drei Hauptbereichen:

1. **Scroll-Startseite** mit grafischen Elementen und Text
2. **Adventure-Quiz**: "What kind of Developer will you be?"
3. **Story Mode**: "How to become a Web Developer"

---

## 🏛 Struktur der Website

### 1. Scroll Page / Landing Page

**Elemente:**
- **Hero-Sektion:** Titel, Hintergrundgrafik, Start-Button
- **Warum Webentwickler?**: Fakten & Vorteile mit Icons/Illustrationen
- **Was du lernen wirst:** Darstellung von Technologien (HTML, CSS, JS, etc.)
- **Der Pfad zum Entwickler:** animierter Zeitstrahl oder Schritt-für-Schritt Darstellung

**Technologien:**
- Parallax Scrolling: `locomotive-scroll` oder CSS
- Animationen: `Framer Motion`, `GSAP`, `react-spring`
- Styling: Tailwind CSS oder Styled Components

---

### 2. Adventure-Quiz: "What kind of Developer will you be?"

**Ziel:** Spielerisch den Entwickler-Typ finden (Frontend, Backend, Fullstack, etc.)

**Fragen-Beispiele:**
- Arbeitest du lieber mit Design oder Logik?
- Magst du Datenbanken?
- Welche Tools findest du spannend?

**Technik:**
- React `useState` zur Verwaltung des Fortschritts
- Schrittweise Navigation durch Fragen
- Auswertung mit Typ-Empfehlung

**Beispielcode:**
```jsx
const [step, setStep] = useState(0);
const [answers, setAnswers] = useState([]);

function next(answer) {
  setAnswers([...answers, answer]);
  setStep(step + 1);
}
```

---

### 3. Story Mode: "How to Become a Web Developer"

**Ziel:** Schrittweise interaktive Anleitung mit Weiterklick-Buttons

**Kapitel-Beispiele:**
1. Erste Schritte mit HTML & CSS
2. JavaScript verstehen lernen
3. Dein erstes Projekt bauen
4. Deployment & GitHub

**Technik:**
- Slide-Komponenten mit `Framer Motion`
- Navigation per Button (Weiter/Zurück)
- Fortschrittsanzeige (optional)

**Beispiel:**
```jsx
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
  <h2>Kapitel 1: HTML Grundlagen</h2>
  <p>HTML ist das Grundgerüst jeder Webseite...</p>
</motion.div>
```

---

## 🧠 Design-Tipps

- Kontraste & klare visuelle Hierarchien
- Moderne Schriftarten (Inter, Poppins)
- SVG-Icons & Illustrationen
- Responsive Layouts mit Grid oder Flexbox

---

## ✅ Nächste Schritte

1. Sitemap oder Mockup (Figma/Excalidraw)
2. Komponentenstruktur in React planen
3. Styling-System auswählen (Tailwind, Styled Components)
4. Start mit Scroll-Seite, dann Quiz, dann Story

---

> Bei Bedarf: Beispielcode, Figma-Wireframes oder detaillierte Component-Struktur anfordern!
