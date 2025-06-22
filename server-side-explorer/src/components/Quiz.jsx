import { useState } from 'react';

const questions = [
  {
    question: "Where does server-side rendering happen?",
    options: ["Client", "Server", "Browser Plugin"],
    correctAnswer: "Server"
  },
  {
    question: "Which of the following is a popular Node.js framework for building web applications?",
    options: ["React", "Express", "Angular"],
    correctAnswer: "Express"
  },
  {
    question: "What is the purpose of a CDN in the context of a website?",
    options: ["To process server-side logic", "To store database backups", "To cache content closer to users for faster delivery"],
    correctAnswer: "To cache content closer to users for faster delivery"
  },
  {
    question: "What does SSR stand for?",
    options: ["Server-Side Rendering", "Server-Side Response", "Single-Page Rendering"],
    correctAnswer: "Server-Side Rendering"
  },
  {
    question: "Which HTTP method is typically used to update existing data on a server?",
    options: ["GET", "POST", "PUT", "DELETE"],
    correctAnswer: "PUT"
  },
  {
    question: "What does REST stand for in web development?",
    options: ["Representational State Transfer", "Remote Execution Secure Token", "Random Event Synchronous Transfer"],
    correctAnswer: "Representational State Transfer"
  },
  {
    question: "Which of the following is used to store data on the client side and sent with every HTTP request?",
    options: ["Cookie", "Session", "Database", "API Key"],
    correctAnswer: "Cookie"
  },
  {
    question: "Which database is a NoSQL database?",
    options: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
    correctAnswer: "MongoDB"
  },
  {
    question: "What is the main purpose of HTTPS over HTTP?",
    options: ["To increase speed", "To provide security via encryption", "To allow more users", "To reduce server load"],
    correctAnswer: "To provide security via encryption"
  },
  {
    question: "Which HTTP status code means 'Not Found'?",
    options: ["200", "301", "404", "500"],
    correctAnswer: "404"
  }
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(''));
  const [showResult, setShowResult] = useState(false);

  const handleAnswerChange = (e) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = e.target.value;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    setCurrentQuestion(currentQuestion + 1);
  };
  
  const handlePrev = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const handleSubmit = () => {
    setShowResult(true);
  };

  const calculateScore = () => {
    return answers.reduce((score, answer, index) => {
      if (answer === questions[index].correctAnswer) {
        return score + 1;
      }
      return score;
    }, 0);
  };

  if (showResult) {
    return (
      <div className="card-container text-center">
        <h2 className="section-title">Quiz Results</h2>
        <p>You scored:</p>
        <div className="quiz-result-score">
          {calculateScore()} / {questions.length}
        </div>
        <button onClick={() => { setShowResult(false); setCurrentQuestion(0); setAnswers(Array(questions.length).fill('')); }} className="btn btn-blue" style={{marginTop: '1rem'}}>
          Retake Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="card-container">
      <h2 className="section-title">Question {currentQuestion + 1}</h2>
      <p style={{marginBottom: '1rem'}}>{questions[currentQuestion].question}</p>
      <div className="quiz-options">
        {questions[currentQuestion].options.map((option, index) => (
          <label key={index}>
            <input
              type="radio"
              name={`q${currentQuestion}`}
              value={option}
              checked={answers[currentQuestion] === option}
              onChange={handleAnswerChange}
              style={{ marginRight: '10px' }}
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
      <div className="quiz-navigation">
        <button onClick={handlePrev} disabled={currentQuestion === 0} className="btn btn-gray">Previous</button>
        {currentQuestion < questions.length - 1 ? (
          <button onClick={handleNext} className="btn btn-blue">Next</button>
        ) : (
          <button onClick={handleSubmit} className="btn btn-green">Submit</button>
        )}
      </div>
    </div>
  );
}

export default Quiz;
