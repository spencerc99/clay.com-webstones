// ABOUTME: Main app component that displays a random Clay question
// ABOUTME: with fortune cookie animation
import { useEffect, useState } from "react";
import { ClayFortuneView } from "./ClayFortuneView";
import "./App.scss";

const ClayQuestions = [
  "If you could instantly become an expert in anything, what would you choose?",
  "What's one time you changed your mind about something important?",
  "If you had unlimited resources for one bold project, what would you build or try?",
  "If you could relive one day of your life (not your kid's birth!), what would it be? ",
  "What do people misunderstand about your role?",
  "If you could switch jobs with someone at your company for a week, what would that be?",
  "What's a belief or value you hold that you rarely talk about—but would like to share more often?",
  "What's a best practice that you think needs updating? ",
  "What's a moment of joy you experienced over the last week or two?",
  "What's a creative part of your job you wish you had more time to invest in? ",
  "What's the most recent thing you laughed out loud about?",
  "What's something you've been wanting to try this week/month/year and haven't gotten around to yet?",
  "What's a novelty moment you want to have in your life before the end of the year?",
  "When you have 10+ mins to relax, what's something you're enjoying these days? ",
  "What are 3 words to describe your personal style?",
  "What's the book, article, show, movie, podcast, media of choice you enjoyed the most within the past week or so? ",
  "Who do you think your top artists will be on Spotify's wrapped this year?",
  "What do you enjoy most about your current age?",
  "What's a habit you've cultivated in the past 1-2 years that's stuck? ",
  "What does your ideal day off look like?",
];

function App() {
  const [question, setQuestion] = useState("");

  useEffect(() => {
    const randomQuestion =
      ClayQuestions[Math.floor(Math.random() * ClayQuestions.length)];
    setQuestion(randomQuestion);
  }, []);

  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://static.claydar.com/init.v1.js?id=cy382askCa"]'
    );
    if (existingScript) return;

    const script = document.createElement("script");
    script.src = "https://static.claydar.com/init.v1.js?id=cy382askCa";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const scriptToRemove = document.querySelector(
        'script[src="https://static.claydar.com/init.v1.js?id=cy382askCa"]'
      );
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

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
          made with internetsculptures.com
        </a>
      </footer>
    </div>
  );
}

export default App;
