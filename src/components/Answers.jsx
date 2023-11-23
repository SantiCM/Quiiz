import { useRef } from "react"

export const Answers = ({answers, selectedAnswer, answerState, onSelect}) => {

    // mandamos un useRef para darle el valor a la barajeada
    const shuffledAnswers = useRef()

    // si es false el ref que viene del current
    if(!shuffledAnswers.current) {
    
        // damos el ref del current
        // damos la copia de las preguntas que viene del array de la variable de ver cuantas hay de las answers
        shuffledAnswers.current = [...answers]

        // esa mismo red que viene del current le damos el sort
        // el cual no da un nuevo array sino lo edita (por eso se crea un nuevo array)
        // valor de 50 de cada 100 casos, valor positivo
        shuffledAnswers.current.sort(() => Math.random() - 0.5 )
    
    }
    
    return (
    
        <ul id="answers">

            { /* Damos la variable del archivo de js y le damos como array el primer estado que viene de las preguntas, lo mapeamos, damos la funcion*/ }

            {shuffledAnswers.current.map((answer) => {

                let cssClases = ""

                const isSelected = selectedAnswer === answer

                if(answerState === "answered" && isSelected) {
            
                    cssClases = "selected"
            
                }

                if(answerState === "correct" || answerState === "wrong" && isSelected) {
            
                    cssClases = answerState
                
                }

                return (
                
                    // le damos su key
                    <li key={answer} className="answer">

                        { /* Y damos el boton al hacerle click, mandamos una funcion y damos la variable y le damos el answer (clasico)*/ }

                        <button 
                
                            onClick={() => onSelect(answer)} 
                
                            className={cssClases}

                            disabled={answerState !== ""}
                
                        >
                            {answer}
                
                        </button>

                    </li> 
                
                )

            })}

        </ul>
  
    )
}
