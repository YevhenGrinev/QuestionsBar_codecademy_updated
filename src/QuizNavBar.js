import React, { useState } from 'react';
import { questions } from './dataModel';

export default function QuizNavBar() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [state_answer, setState_answer] = useState(false)

  // define event handlers 
  const goBack = () => {
    setQuestionIndex(prevQuestionIndex => prevQuestionIndex - 1);
    setState_answer(false);
  };
  
  const goToNext = () => {
    setQuestionIndex(prevQuestionIndex => prevQuestionIndex + 1);
    setState_answer(false);
  }

  const arr_questions_promt = questions.map(question => (
    question.prompt))

  const arr_questions_answer = questions.map(question => (
    question.answer))

  const toggleFunc = () => {
    if (state_answer === false) {
      setState_answer(true);
    }
    else {
      setState_answer(false);
    }
  };

  // determine if on the first question or not 
  const onFirstQuestion = questionIndex === 0;


  const onLastQuestion = questionIndex === questions.length - 1;

  return (
    <div>
      <nav>
        <span className='title'>Question #{questionIndex + 1}</span>
        <div className='buttons'>
          <button onClick={goBack} disabled={onFirstQuestion}>
            Go Back
          </button>
          <button disabled={onLastQuestion} onClick={goToNext}>
            Next Question
          </button>
        </div>
      </nav>
      <div className='question'>
        <div className='questions_promt'>
          Prompt: {arr_questions_promt[questionIndex]}
        </div>
        <div className='questions_answer' >
          <button className="btn_answer" onClick={toggleFunc}>
            Show answer
          </button>
          <p className="answer_field">{ state_answer ? arr_questions_answer[questionIndex] : 'Hiiden false' } </p>
        </div>
      </div>
    </div>
  );
}

