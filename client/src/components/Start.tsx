import React, { useState } from 'react';
import './CSS/Start.css';
import { fetchQuizQuestions } from '../API';
//components
import QuestionCard from './QuestionCard';
//Types
import { QuestionState } from '../API';
import { Link } from 'react-router-dom';


export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const TOTAL_QUESTIONS = 2;
function Start(info : any) 
{
  const difficulty = info.select.difficulty;
  const category = info.select.category;
  const type = info.select.type;
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
 
 

  const startTrivia = async () => 
  {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, difficulty, category, type);
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
    console.log(difficulty);
  }


  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => 
  {
    if (!gameOver) 
    {
      //Users answer 
      const answer = e.currentTarget.value;
      //Check answer against correct answer
      const correct = questions[number].correct_answer === answer;
      //Add score if answer is correct
      if (correct) setScore(prev => prev + 1);
      //Save answer in the array for user answers
      const answerObject = {
        question:  questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  }
  



  const nextQuestion = () => {
    //Move on to the next question
    const nextQuestion = number + 1;
    console.log(nextQuestion)
    if (nextQuestion === TOTAL_QUESTIONS)
    {
      setGameOver(true);
    }
    else
       setNumber(number+1)
   }

  return ( 
      <>
      
      <div className="wrapper">
        {gameOver || userAnswers.length === TOTAL_QUESTIONS + 1 ? (
          <>
          <button className="start" onClick={startTrivia}>Start</button>
          </>
        ) : null}

        {!gameOver ? <p className="score">Score:{score}</p> : null}
        {loading && <p>Loading Question ...</p>}
        { !loading && !gameOver &&
          (<QuestionCard
            questionNr={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
          )}
        {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 && (<button className="next" onClick={nextQuestion}>Next question</button>)
        }
        {!loading && !gameOver && userAnswers.length === TOTAL_QUESTIONS  &&  <Link  to={'/'}>Finish</Link>}
      </div>
      </>
    
    );
}


  export default Start;
