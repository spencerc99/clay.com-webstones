// ABOUTME: Main app component that displays a random Clay question
// ABOUTME: with fortune cookie animation
import { useState } from "react";
import { ClayFortuneView } from "./ClayFortuneView";
import "./App.scss";

const ClayGTMQuestions = [
  "What's the most annoying thing you do repeatedly in your GTM workflow?",
  "If AI could remove one task from your week, what would you pick first?",
  'How clean is your data really — "pretty good" or "please don\'t audit us"?',
  "What part of your funnel feels the messiest right now?",
  "What's one workflow you wish your team had automated already?",
  "What GTM task eats up more time than it should?",
  "What GTM tool frustrates you the most?",
  "What's the one report your boss wants that always takes too long?",
  "If you got 5 extra hours per week, what would you use it for?",
  "What's one small GTM win that would make you look like a genius internally?",
  "What's the hardest part about sourcing new leads today?",
  "What's one thing you'd love AI to research for you automatically?",
  "Which data provider has let you down the most, and why?",
  "Where do you feel your team loses the most time as a group?",
  'If you had a "magic button" for your revenue workflow, what would it do?',
  "What's one thing about your ICP that's changed recently?",
  "What's a workflow you're hoping to learn or improve today?",
  "What GTM task feels way too manual for 2025?",
  "What's your top revenue goal this quarter?",
  "What's one thing you're excited to automate after this workshop?",
];

// Get questions based on version query parameter
function getQuestionsForVersion(version: string | null): string[] {
  switch (version) {
    case "gtm":
      return ClayGTMQuestions;
    default:
      // Default to GTM questions if no version specified or unknown version
      return ClayGTMQuestions;
  }
}

function App() {
  // Get version from URL query parameter
  const version = new URLSearchParams(window.location.search).get("v");
  const questions = getQuestionsForVersion(version);

  const [question] = useState(
    () => questions[Math.floor(Math.random() * questions.length)]
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="app">
      <header className="header">
        <div className="logo-container">
          <a href="https://clay.com" className="clay-logo">
            <img src="/clay-logo.png" alt="Clay" />
          </a>
          Questions
        </div>
      </header>

      <main className="main">
        <ClayFortuneView message={question} />
      </main>

      <footer className="footer">
        <a
          href="https://internetsculptures.com"
          className="internet-sculptures-link"
        >
          <img
            src="/internet-sculptures-wordmark.png"
            alt="Internet Sculptures"
          />
        </a>
        <div style={{ marginLeft: "auto" }}>
          <button
            className="what-is-this-link"
            onClick={() => setIsModalOpen(true)}
          >
            what is this?
          </button>
        </div>
      </footer>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-button"
              onClick={() => setIsModalOpen(false)}
            >
              ×
            </button>
            <p>
              This is a collection of conversation starter questions from{" "}
              <a href="https://clay.com">Clay</a>, presented as a fortune cookie
              experience.
            </p>
            <p>
              Built with{" "}
              <a href="https://internetsculptures.com">
                internetsculptures.com
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
