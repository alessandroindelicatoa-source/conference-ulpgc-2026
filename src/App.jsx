import { useState, useEffect } from "react";
import "./App.css";
import contactImage from "./assets/yo.jpeg";
import lpa1 from "./assets/LPA.jpeg";
import lpa2 from "./assets/LPA2.jpeg";

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyU81W0UfKwZrUEHY3QNRge6RpUp7u7NmH-MlQFHZAUZ4p96P8DwA_WmkGlavxM5awN/exec";

function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [status, setStatus] = useState("");

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
                A high-level international conference dedicated to the
                intersection between climate change, human mobility and
                sustainable development.
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

              <div className="hero-actions">
                <button
                  className="btn-primary"
                  onClick={() => setActiveTab("abstracts")}
                >
                  Submit Abstract
                </button>

                <button
                  className="btn-secondary"
                  onClick={() => setActiveTab("registration")}
                >
                  Registration & Fees
                </button>
              </div>
            </div>
          </section>
        );

      case "registration":
        return (
          <section className="section registration-section">
            <div className="section-heading center">
              <h2>Registration & Fees</h2>
              <p className="section-intro">
                Registration is now open. Participants must complete the form
                and proceed with payment.
              </p>
            </div>

            <div className="registration-box">
              <h3>Registration Categories</h3>

              <table className="fees-table">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Fee</th>
                    <th>Deadline</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Early Bird</td>
                    <td>€130</td>
                    <td>Until 30 September 2026</td>
                  </tr>
                  <tr>
                    <td>Regular</td>
                    <td>€150</td>
                    <td>Until 15 November 2026</td>
                  </tr>
                  <tr>
                    <td>Late</td>
                    <td>€170</td>
                    <td>After 16 November 2026</td>
                  </tr>
                </tbody>
              </table>

              <p className="included">
                <strong>The registration fee includes:</strong> access to all
                sessions, materials, coffee breaks and the social dinner.
              </p>

              <p className="note">
                Participants are welcome to attend with one accompanying guest.
                Please note that, in this case, the registration fee will be
                doubled.
              </p>

              <div className="registration-buttons">
                <a
                  href="https://forms.gle/KqMNdrhZPXz9kGMY8"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  Register Now
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                >
                  Proceed to Payment
                </a>
              </div>

              <div className="payment-info">
                <h3>Payment Information</h3>
                <p>
                  Payment should be completed after submitting the registration
                  form. Please include your full name in the payment reference.
                </p>
              </div>
            </div>
          </section>
        );

      default:
        return <div className="section">Coming soon...</div>;
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
          ULPGC · ERUA · 7–8 December 2026 · Las Palmas
        </div>
      </footer>
    </div>
  );
}

export default App;