import { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

function App() {
  const [quizOpen, setquizOpen] = useState(false);

  function openQuiz() {
    setquizOpen(true);
  }

  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) {
      setquizOpen(false);
    }
  }
  return (
    <div className="page">
      <div className="page__content">
        <Header openQuiz={openQuiz} />
        <Main quizOpen={quizOpen} handleOverlayClick={handleOverlayClick} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
