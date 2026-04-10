import { useState, useEffect } from "react";
import "./App.css";
import contactImage from "./assets/yo.jpeg";
import lpa1 from "./assets/LPA.jpeg";
import lpa2 from "./assets/LPA2.jpeg";

function App() {
  const [activeTab, setActiveTab] = useState("home");

  const calculateTimeLeft = () => {
    const difference = new Date("2026-12-07T09:00:00") - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const tabs = [
    { id: "home", label: "Home" },
    { id: "topics", label: "Topics" },
    { id: "venue", label: "Venue" },
    { id: "committees", label: "Committees" },
    { id: "abstracts", label: "Abstracts" },
    { id: "registration", label: "Registration" },
    { id: "contact", label: "Contact" },
  ];

  const topics = [
    "Climate change and human mobility",
    "Environmental and climate-induced migration",
    "Forced displacement and adaptation strategies",
    "Migration governance and policy frameworks",
    "Sustainable development and resilience",
    "Socioeconomic impacts of migration",
    "Migration, religion and cultural diversity",
    "Public opinion and political discourse on migration",
    "Urban and rural migration dynamics",
    "Data science and econometric approaches",
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <section className="hero-pro">
            <div className="hero-copy">
              <div className="eyebrow">
                ERUA Workshop · ULPGC · Las Palmas · 2026
              </div>

              <p className="lead">
                A high-level international conference on climate change,
                migration and sustainable development.
              </p>

              <div className="countdown">
                <div className="count-item">
                  <span>{timeLeft.days || 0}</span>
                  <small>Days</small>
                </div>
                <div className="count-item">
                  <span>{timeLeft.hours || 0}</span>
                  <small>Hours</small>
                </div>
                <div className="count-item">
                  <span>{timeLeft.minutes || 0}</span>
                  <small>Minutes</small>
                </div>
              </div>
            </div>
          </section>
        );

      case "topics":
        return (
          <section className="section">
            <h2>Conference Topics</h2>
            <div className="grid two">
              {topics.map((t, i) => (
                <div className="card" key={i}>
                  {t}
                </div>
              ))}
            </div>
          </section>
        );

      case "venue":
        return (
          <section className="section">
            <h2>Venue</h2>
            <div className="grid two">
              <img src={lpa1} alt="Las Palmas" />
              <img src={lpa2} alt="Las Palmas" />
            </div>

            <p>
              The city represents a strategic and inspiring hub for academic
              exchange, fostering interdisciplinary dialogue in a unique
              geographical context.
            </p>
          </section>
        );

      case "committees":
        return (
          <section className="section">
            <h2>Committees</h2>
            <p>Organising and scientific committees will be announced soon.</p>
          </section>
        );

      case "abstracts":
        return (
          <section className="section">
            <h2>Call for Abstracts</h2>

            <ul>
              <li>Maximum 300 words</li>
              <li>Language: English</li>
              <li>Include title, authors, affiliations and keywords</li>
              <li>Deadline: 15 June 2026</li>
              <li>Notification: 30 June 2026</li>
            </ul>
          </section>
        );

      case "registration":
        return (
          <section className="section registration-section">
            <h2>Registration & Fees</h2>

            <table className="fees-table">
              <tbody>
                <tr>
                  <td>Early Bird</td>
                  <td>€130</td>
                </tr>
                <tr>
                  <td>Regular</td>
                  <td>€150</td>
                </tr>
                <tr>
                  <td>Late</td>
                  <td>€170</td>
                </tr>
              </tbody>
            </table>

            <p>
              The fee includes sessions, materials, coffee breaks and dinner.
            </p>

            <p>
              Participants may attend with one accompanying guest. In such cases,
              the fee will be doubled.
            </p>

            <a
              href="https://forms.gle/KqMNdrhZPXz9kGMY8"
              target="_blank"
              className="btn-primary"
            >
              Register Now
            </a>
          </section>
        );

      case "contact":
        return (
          <section className="section">
            <h2>Contact</h2>
            <p>alessandro.indelicato@ulpgc.es</p>
            <img src={contactImage} alt="contact" />
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <div className="site">
      <header className="topbar-pro">
        <div className="container">
          <div className="site-title">
            Migration, Climate and Social Transformation Conference
          </div>
          <div className="site-subtitle">
            Climate Change, Environmental Migration and Sustainable Development
          </div>
        </div>
      </header>

      <nav className="nav-pro">
        <div className="container nav-row">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={activeTab === tab.id ? "nav-pill active" : "nav-pill"}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      <main className="container">{renderContent()}</main>

      <footer className="footer-pro">
        <div className="container">
          ULPGC · 7–8 December 2026 · Las Palmas
        </div>
      </footer>
    </div>
  );
}

export default App;