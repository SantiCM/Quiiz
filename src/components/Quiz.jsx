import { useState, useCallback } from "react"

import quizCompleteImage from "../assets/quiz-complete.png"
import questions from "../questions"
import { Question } from "./Questions"


export const Quiz = () => {

    // mandamos un estado donde lo damos con un array vacioo
    const [userAnswers, setUserAnswers] = useState([])

    
    const activeQuestionIndex = userAnswers.length 

    // mandamos una variable donde ya se completo el quiz
    // y decimos que de todas las preguntas del index sea igual a las preguntas de todo el arreglo
    const quizIsComplete = activeQuestionIndex === questions.length

    // seleccionar la pregunta, le damos el useCalllback, lo mandamos con su sintaxis y le damos el argumento
    const handleSelectAnswer = useCallback( function handleSelectAnswer(selectedAnswer) {
        
        // mandamos el segundo estadp, con una funcion (clasico para mantener el estado)
        setUserAnswers((prevUserAnswers) => {
            
            // lo retornamos
            return [
                
                // damos la copia de la funcion
                ...prevUserAnswers,

                // y el argumento
                selectedAnswer
            
            ]
        
        })
    
    }, [])

    // variable para darle skip a la pregunta
    // damos un useCallback para las dependecias
    // damos una funcion que da flecha y le damos la variable de arriba en null
    // y le damos como dependencia la misma variable
    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer])

    // si esta completado el quiz
    if(quizIsComplete) {
        
        // retornamos este contenido jsx, el cual muestra que acabaste el cuestionario
        return (
            
            <div id="summary">

                <img src={quizCompleteImage} alt="Winnn"></img>

                <h2>Quiz Completed!</h2>

            </div>
            
        )
    
    }
    
    return (

        <div id="quiz">

            <Question 

                key={activeQuestionIndex}

                index={activeQuestionIndex}
           
                onSelectAnswer={handleSelectAnswer}

                onSkipAnswer={handleSkipAnswer}
                
            >

            </Question>

        </div>

    )

}