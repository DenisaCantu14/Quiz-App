import React from 'react';
//Types
import {AnswerObject} from './Start'
//Styles
import './CSS/QuestionCard.css';

type Props = {
    question:string;
    answers:string[];
    callback :(e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer:AnswerObject | undefined;
    questionNr:number;
    totalQuestions:number;
};


const  QuestionCard:React.FC<Props> = ({question,answers,callback, userAnswer, questionNr, totalQuestions}) => (
    <div className="container">
        <p className ="number">
            Question: {questionNr} / {totalQuestions}
        </p>
        <p className = "question"dangerouslySetInnerHTML ={{__html: question}}></p> 
        <div className="answers">
            {answers.map(answer => (  
                <div  
                key = {answer} 
                >
                    <button disabled = {!!userAnswer} value = {answer} onClick={callback} className="answer"style = {{backgroundColor: 
                    (userAnswer?.correctAnswer === answer ) ? '#9fbcaa' : 
                    (!(userAnswer?.correctAnswer === answer) && userAnswer?.answer === answer) ? '#ec9b94': 'transparent'}}
               >
                        <span dangerouslySetInnerHTML = {{__html: answer}}/>
                    </button>
                </div>    ))}
        </div>
    </div>);

export default QuestionCard