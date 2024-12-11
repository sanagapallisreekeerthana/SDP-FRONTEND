import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CareerTest = () => {
  const navigate = useNavigate();

  const specializations = ["AI & ML", "Data Science", "Web Development", "Cyber Security"];

  const questions = [
    { 
      question: "What is your favorite programming language?", 
      options: ["A. Python", "B. JavaScript", "C. C++", "D. Java"] 
    },
    { 
      question: "What type of projects do you enjoy?", 
      options: ["A. Data Analysis", "B. Web Design", "C. System Security", "D. AI Models"] 
    },
    { 
      question: "How do you prefer to work?", 
      options: ["A. Individually", "B. In a team", "C. Remote", "D. On-site"] 
    },
    { 
      question: "What motivates you the most at work?", 
      options: ["A. Salary", "B. Recognition", "C. Passion", "D. Team Collaboration"] 
    },
    { 
      question: "Which skill do you excel in?", 
      options: ["A. Creativity", "B. Analytical Thinking", "C. Communication", "D. Technical Expertise"] 
    },
    { 
      question: "What type of tasks do you enjoy?", 
      options: ["A. Problem Solving", "B. Organizing", "C. Inventing", "D. Helping Others"] 
    },
    { 
      question: "What is your preferred work environment?", 
      options: ["A. Office", "B. Remote", "C. Hybrid", "D. Field"] 
    },
    { 
      question: "Do you prefer working with people or technology?", 
      options: ["A. People", "B. Technology", "C. Both", "D. Neither"] 
    },
    { 
      question: "What is your approach to challenges?", 
      options: ["A. Logical", "B. Creative", "C. Practical", "D. Emotional"] 
    },
    { 
      question: "What kind of work-life balance do you seek?", 
      options: ["A. Strict Balance", "B. Flexible", "C. Work-Focused", "D. Life-Focused"] 
    },
  ];
  

  const [selectedSpecialization, setSelectedSpecialization] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timer, setTimer] = useState(60);
  const [showReview, setShowReview] = useState(false);

  useEffect(() => {
    if (timer > 0) {
      const timerId = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(timerId);
    }
    if (timer === 0) handleNext();
  }, [timer]);

  const handleSpecializationSelect = (specialization) => {
    setSelectedSpecialization(specialization);
  };

  const handleOptionSelect = (option) => {
    setSelectedAnswers({ ...selectedAnswers, [currentQuestionIndex]: option });
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
      setTimer(60);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setTimer(60);
    } else {
      setShowReview(true);
    }
  };

  const handleSubmit = () => {
    alert("Your answers have been submitted!");
    navigate("/career-test");
  };

  const styles = {
    body: { fontFamily: "Arial, sans-serif", padding: "20px" },
    navbar: { display: "flex", justifyContent: "space-between", marginBottom: "20px" },
    navLinks: { display: "flex", gap: "15px" },
    link: { textDecoration: "none", color: "blue" },
    main: { maxWidth: "600px", margin: "0 auto" },
    cardGrid: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "15px" },
    cardItem: { padding: "15px", border: "1px solid #ccc", textAlign: "center", cursor: "pointer" },
    card: { padding: "20px", border: "1px solid #ccc" },
    timer: { textAlign: "right", marginBottom: "10px", color: "red" },
    options: { listStyle: "none", padding: 0 },
    option: { padding: "10px", border: "1px solid #ccc", margin: "5px 0", cursor: "pointer" },
    optionSelected: { backgroundColor: "#f0f8ff" },
    buttons: { display: "flex", justifyContent: "space-between", marginTop: "20px" },
    button: { padding: "10px 15px", border: "none", cursor: "pointer" },
    buttonSubmit: { backgroundColor: "green", color: "white" },
  };

  return (
    <div style={styles.body}>
      <header style={styles.navbar}>
        <div>WE-LINK</div>
        <nav style={styles.navLinks}>
          <a href="#" style={styles.link}>Home</a>
          <a href="#" style={styles.link}>Career Test</a>
          <a href="#" style={styles.link}>About Us</a>
        </nav>
      </header>

      <main style={styles.main}>
        {!selectedSpecialization ? (
          <div style={styles.cardGrid}>
            {specializations.map((spec, index) => (
              <div
                key={index}
                style={styles.cardItem}
                onClick={() => handleSpecializationSelect(spec)}
              >
                {spec}
              </div>
            ))}
          </div>
        ) : showReview ? (
          <div style={styles.card}>
            <h2>Review Your Answers</h2>
            <ul style={styles.options}>
              {questions.map((q, index) => (
                <li key={index}>
                  <strong>{q.question}</strong>
                  <p>Selected Answer: {selectedAnswers[index] || "Not Answered"}</p>
                </li>
              ))}
            </ul>
            <button
              style={{ ...styles.button, ...styles.buttonSubmit }}
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        ) : (
          <div style={styles.card}>
            <div style={styles.timer}>Time Left: {timer}s</div>
            <h2>{questions[currentQuestionIndex].question}</h2>
            <ul style={styles.options}>
              {questions[currentQuestionIndex].options.map((option, index) => (
                <li
                  key={index}
                  style={
                    selectedAnswers[currentQuestionIndex] === option
                      ? { ...styles.option, ...styles.optionSelected }
                      : styles.option
                  }
                  onClick={() => handleOptionSelect(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
            <div style={styles.buttons}>
              <button
                style={styles.button}
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
              >
                Previous
              </button>
              {currentQuestionIndex === questions.length - 1 ? (
                <button
                  style={{ ...styles.button, ...styles.buttonSubmit }}
                  onClick={() => setShowReview(true)}
                >
                  Review
                </button>
              ) : (
                <button style={styles.button} onClick={handleNext}>
                  Next
                </button>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default CareerTest;
