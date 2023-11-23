import { useState } from "react"
import { Answers } from "./Answers"
import { QuestionTimer } from "./QuestionTimer"
import questions from "../questions"

// Mandamos este componente para evitar el bug a la hora de poner el key
// entonces ponemos las propiedades
export const Question = ({index, onSelectAnswer, onSkipAnswer}) => {

    const [answer, setAnswer] = useState({
    
        selectedAnswer: "",

        isCorrect: null
    
    })

    let timer = 10000

    if(answerState.selectedAnswer) {
    
        timer = 1000
    
    }

    if(answerState.isCorrect !== null) {
    
        timer = 2000
    
    }

    const handleSelectAnswer = (answer) => {
    
        setAnswer({
            
            selectedAnswer: answer,

            isCorrect: null
        
        })

        setTimeout(() => {
        
            setAnswer({
            
                selectedAnswer: answer,
    
                isCorrect: questions[index].answers[0] === answer
            
            })

            setTimeout(() => {
        
                onSelectAnswer(answer)
    
            }, 2000)
        
        }, 1000)
    
    }

    let answerState = ""

    if(answer.selectedAnswer && answer.isCorrect !== null) {
    
        answerState = answer.isCorrect ? "correct" : "wrong"
    
    } else if (answer.selectedAnswer) {
        
        answerState = "answered"
    
    }
  
    return (
  
        <div id="question">

            <QuestionTimer timer={timer} onTimeOut={onSkipAnswer}></QuestionTimer>

            <h2>{questions[index].text}</h2>

            { /* Damos el componente Answers que recibeee ... */  }

            <Answers

                answers={questions[index].answers} 
                    
                selectedAnswer={answer.selectedAnswer}

                answerState={answerState}

                onSelect={handleSelectAnswer}
                    
            >
                
            </Answers>

        </div>
  
    )


}
