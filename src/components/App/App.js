function App() {
  const [quizOpen, setquizOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  function openQuiz() {
    setquizOpen(true);
  }

  function closeQuiz() {
    setquizOpen(false);
  }

  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) {
      setquizOpen(false);
      setFormOpen(false);
    }
  }

  function handleOpenForm() {
    setFormOpen(true);
  }

  function handleFormClose() {
    setFormOpen(false);
  }

  return (
    <div className="page">
      <div className="page__content">
        <Header openQuiz={openQuiz} />
        <Main
          openQuiz={openQuiz}
          quizOpen={quizOpen}
          closeQuiz={closeQuiz}
          handleOverlayClick={handleOverlayClick}
          formOpen={formOpen}
          handleOpenForm={handleOpenForm}
          handleFormClose={handleFormClose}
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
