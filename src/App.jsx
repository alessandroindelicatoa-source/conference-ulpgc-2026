import { useState } from "react";
import "./App.css";
import contactImage from "./assets/yo.jpeg";
import lpa1 from "./assets/LPA.jpeg";
import lpa2 from "./assets/LPA2.jpeg";

function App() {
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    { id: "home", label: "Home" },
    { id: "topics", label: "Topics" },
    { id: "venue", label: "Venue" },
    { id: "committees", label: "Committees" },
    { id: "abstracts", label: "Abstracts" },
    { id: "contact", label: "Contact" },
  ];

  const organisingTeam = [
    "Alessandro Indelicato – Chair – Universidad de Las Palmas de Gran Canaria (ULPGC)",
    "Juan Carlos Martín – Universidad de Las Palmas de Gran Canaria (ULPGC)",
    "Paula Chirino – Universidad de Las Palmas de Gran Canaria (ULPGC)",
    "Fernando Medina – Universidad de Las Palmas de Gran Canaria (ULPGC)",
  ];

  const scientificTeam = [
    "Alessandro Indelicato – ULPGC, Spain",
    "Juan Carlos Martín – ULPGC, Spain",
    "Evelina Juchnevičiūtė – VDU University, Lithuania",
    "Goda Cicenaite – University of Iceland, Iceland",
    "Davide Nicola Carnevale – University of Ferrara, Italy",
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
    "Data science, econometrics and computational approaches",
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <>
            <section className="hero-pro">
              <div className="hero-copy">
                <div className="eyebrow">ERUA Workshop · ULPGC · Las Palmas · 2026</div>

                <h1>
                  
                </h1>

                <p className="lead">
                  A high-level international conference dedicated to one of the
                  most pressing challenges of our time: the intersection between
                  climate change, human mobility and sustainable development.
                </p>

                <p className="sublead">
                  By bringing together researchers, policymakers and
                  practitioners, the conference aims to promote interdisciplinary
                  dialogue and generate evidence-based knowledge.
                </p>

                <div className="hero-actions">
                  <button
                    className="btn-primary"
                    onClick={() => setActiveTab("abstracts")}
                  >
                    Submit Abstract
                  </button>

                  <button
                    className="btn-secondary"
                    onClick={() => setActiveTab("topics")}
                  >
                    Explore Topics
                  </button>
                </div>
              </div>

              <div className="hero-side">
                <div className="info-panel">
                  <div className="panel-title">Conference Information</div>

                  <div className="info-item">
                    <span>Dates</span>
                    <strong>5–6 December 2026</strong>
                  </div>

                  <div className="info-item">
                    <span>Venue</span>
                    <strong>Las Palmas de Gran Canaria</strong>
                  </div>

                  <div className="info-item">
                    <span>Format</span>
                    <strong>International in-person conference</strong>
                  </div>

                  <div className="info-item">
                    <span>Framework</span>
                    <strong>ERUA collaborative workshop</strong>
                  </div>

                  <div className="info-item">
                    <span>Organised by</span>
                    <strong>Universidad de Las Palmas de Gran Canaria</strong>
                  </div>
                </div>
              </div>
            </section>

            <section className="section split-highlight">
              <div className="feature-block light">
                <h3>Why this conference matters</h3>
                <p>
                  Environmental change is increasingly influencing migration
                  patterns, public policy, economic systems and social cohesion.
                  Understanding these dynamics is essential for designing
                  effective responses at local, national and international
                  levels.
                </p>
              </div>

              <div className="feature-block dark">
                <h3>Expected impact</h3>
                <p>
                  The event is designed to strengthen international cooperation,
                  encourage new academic networks and create a professional
                  platform for future joint projects, publications and
                  policy-oriented debate.
                </p>
              </div>
            </section>

            <section className="section">
              <div className="section-heading center">
                <div className="kicker">Conference strengths</div>
                <h2>A European academic event with international relevance</h2>
              </div>

              <div className="grid three">
                <div className="card pro-card">
                  <h3>Interdisciplinary scope</h3>
                  <p>
                    Economics, sociology, law, migration studies, environmental
                    analysis and political science in one academic forum.
                  </p>
                </div>

                <div className="card pro-card">
                  <h3>Institutional relevance</h3>
                  <p>
                    An academic setting designed to connect universities,
                    researchers and public debate on climate migration and
                    sustainability.
                  </p>
                </div>

                <div className="card pro-card">
                  <h3>Long-term collaboration</h3>
                  <p>
                    A platform to generate future research initiatives,
                    strengthen networks and support high-quality scientific
                    exchange.
                  </p>
                </div>
              </div>
            </section>
          </>
        );

      case "topics":
        return (
          <section className="section">
            <div className="section-heading center">
              <div className="kicker">Scientific focus</div>
              <h2>Conference Topics</h2>
              <p className="section-intro">
                The conference welcomes theoretical, empirical and policy-oriented
                contributions.
              </p>
            </div>

            <div className="grid two">
              {topics.map((topic, index) => (
                <div className="card topic-card" key={index}>
                  <h3>{topic}</h3>
                </div>
              ))}
            </div>
          </section>
        );

      case "venue":
        return (
          <section className="section">
            <div className="section-heading center">
              <div className="kicker">Venue</div>
              <h2>Las Palmas de Gran Canaria</h2>
            </div>

            <div className="grid two">
              <div className="card image-card">
                <img src={lpa1} alt="Las Palmas coastline" />
              </div>

              <div className="card text-card">
                <h3>An Atlantic setting for global challenges</h3>
                <p>
                  Las Palmas de Gran Canaria offers an ideal environment for an
                  international conference, combining academic infrastructure,
                  Atlantic connectivity and a strong link to debates on
                  migration, sustainability and Europe–Africa relations.
                </p>
                <p>
                  Its institutional setting, urban quality and international
                  accessibility make it especially appropriate for a high-level
                  academic event.
                </p>
              </div>
            </div>

            <div className="grid two top-gap">
              <div className="card text-card">
                <h3>Why here?</h3>
                <p>
                  The city provides excellent conditions for scholarly exchange,
                  networking and interdisciplinary dialogue, while also offering
                  a meaningful geographical and symbolic context for discussing
                  climate-related migration.
                </p>
              </div>

              <div className="card image-card">
                <img src={lpa2} alt="Las Palmas city view" />
              </div>
            </div>
          </section>
        );

      case "committees":
        return (
          <section className="section">
            <div className="section-heading center">
              <div className="kicker">Governance</div>
              <h2>Organising and Scientific Committees</h2>
            </div>

            <div className="grid two">
              <div className="committee-box">
                <h3>Organising Team</h3>
                {organisingTeam.map((member, index) => (
                  <div className="committee-item" key={index}>
                    {member}
                  </div>
                ))}
              </div>

              <div className="committee-box">
                <h3>Scientific Team</h3>
                {scientificTeam.map((member, index) => (
                  <div className="committee-item" key={index}>
                    {member}
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case "abstracts":
        return (
          <section className="section">
            <div className="section-heading center">
              <div className="kicker">Submissions</div>
              <h2>Call for Abstracts</h2>
            </div>

            <div className="grid two">
              <div className="card text-card">
                <h3>Submission Guidelines</h3>
                <ul className="elegant-list">
                  <li>Maximum 300 words</li>
                  <li>Language: English</li>
                  <li>Include title, authors, affiliations and keywords</li>
                  <li>Deadline: 15 June 2026</li>
                  <li>Notification of acceptance: 30 June 2026</li>
                </ul>
              </div>

              <div className="card form-card">
                <h3>Abstract Form</h3>
                <form className="form">
                  <input type="text" placeholder="Full name" />
                  <input type="email" placeholder="Email" />
                  <input type="text" placeholder="Affiliation" />
                  <input type="text" placeholder="Title of abstract" />
                  <input type="text" placeholder="Keywords" />
                  <textarea rows="7" placeholder="Paste your abstract here"></textarea>
                  <button type="button" className="btn-primary">
                    Submit Abstract
                  </button>
                </form>
              </div>
            </div>
          </section>
        );

      case "contact":
        return (
          <section className="section">
            <div className="section-heading center">
              <div className="kicker">Contact</div>
              <h2>Conference Contact</h2>
            </div>

            <div className="grid two contact-layout">
              <div className="card contact-card">
                <h3>General Information</h3>
                <p>
                  For abstracts, institutional collaboration or conference
                  information, please contact:
                </p>

                <p className="contact-name">Alessandro Indelicato</p>

                <p>
                  <a href="mailto:alessandro.indelicato@ulpgc.es">
                    alessandro.indelicato@ulpgc.es
                  </a>
                </p>

                <p>Universidad de Las Palmas de Gran Canaria</p>
                <p>Conference Chair</p>
              </div>

              <div className="card contact-photo">
                <img src={contactImage} alt="Conference contact" />
              </div>
            </div>
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <div className="site">
      <header className="topbar-pro">
        <div className="container topbar-content">
          <div>
            <div className="site-title">Migration, Climate and Social Transformation Conference </div>
            <div className="site-subtitle">
              Climate Change, Environmental Migration and Sustainable Development
            </div>
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

      <main className="container main-pro">{renderContent()}</main>

      <footer className="footer-pro">
        <div className="container footer-text">
          Climate Change, Environmental Migration and Sustainable Development ·
          ULPGC · ERUA Workshop · Las Palmas de Gran Canaria
        </div>
      </footer>
    </div>
  );
}

export default App;