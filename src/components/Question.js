import React, {useEffect, useState } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  function countDown(){
    if (timeRemaining > 0) {
    setTimeRemaining(timeRemaining - 1)
    } else {
      setTimeRemaining(10)
      onAnswered(false)
    }
  } 

  // add useEffect code
  useEffect(() => {
    const timer = setTimeout(() => countDown(), 1000);
    console.log(timer)

    return function cleanup() {
      clearTimeout(timer);
    };
  }, )


  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
