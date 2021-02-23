import React, { useState } from 'react';
import './CSS/Start.css';
import { start } from 'repl';
import { fetchQuizQuestions } from '../API';
//components
import QuestionCard from './QuestionCard';
//Types
import { QuestionState } from '../API';


export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const TOTAL_QUESTIONS = 10;
function Start() 
{
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [difficulty, setDifficulty] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
 

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
    if (nextQuestion === TOTAL_QUESTIONS)
    {
      setGameOver(true);
    }
    else
       setNumber(number+1)
   }

   

  return ( 
      <>
      <div className="menu" >
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <>
          <select className = "select-btn" name="difficulty" id="difficulty" onChange ={e => setDifficulty(e.target.value)} >
            <option value="" >ANT DIFFICULTY</option>           
            <option value="easy" >EASY</option>
            <option value="medium">MEDIUM</option>
            <option value="hard">HARD</option>
          </select>
          <select className = "select-btn" name="category" id="category" onChange ={e => setCategory(e.target.value)}>
            <option value="">ANY CATEGORY</option>
            <option value="9">GENERAL KNOWLEDGE</option>
            <option value="25">ART</option>
          </select>
          <select className = "select-btn" name="type" id="type" onChange ={e => setType(e.target.value)}>
            <option value="">ANY TYPE</option>
            <option value="boolean">True or False</option>
            <option value="multiple">Multiple Choise</option>
          </select>
        
          </>
        ) : null}
      </div>
      <div className="wrapper">
        
      
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
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
      </div>
      </>
    
    );
}


  export default Start;
