import quizCompleteImage from "../assets/quiz-complete.png"
import questions from "../questions"

            
export const Summary = ( { userAnswers } ) => {

    const skippedAnswers = userAnswers.filter(answer => answer === null) 

    const correctAnswers = userAnswers.filter((answer, index) => answer === questions[index].answers[0])

    const skippedAnswersShare = Math.round((skippedAnswers.length / userAnswers.length) * 100)

    const correctAnswersShare = Math.round((correctAnswers.length / userAnswers.length) * 100)

    const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare
  
    return (
    
        <div id="summary">

            <img src={quizCompleteImage} alt="Winnn"></img>

            <h2>Quiz Completed!</h2>

            <div id="summary-stats">

                <p>

                    <span className="number">{skippedAnswersShare} %</span>

                    <span className="text">Skipped</span>

                </p>

                <p>

                    <span className="number">{correctAnswersShare} %</span>

                    <span className="text">Answes Correctly</span>

                </p>

                <p>

                    <span className="number">{wrongAnswersShare} %</span>

                    <span className="text">Answes Incorrectly</span>

                </p>

            </div>

            <ol>

                {userAnswers.map((answer, index) => {

                    let cssClasses = "user-answer"

                    if(answer === null) {
                        
                        // se pone el espacio en la clase con la idea que antes de esta clase que ponemos va la de arriba
                        cssClasses += " skipped";
                    
                    } else if (answer === questions[index].answers[0]) {
                        
                        cssClasses += " correct";
                    
                    } else {
                        
                        cssClasses += " wrong"
                    
                    }
                
                    return (
                    
                        <li key={index}>

                            <h3>{index + 1}</h3>

                            <p className="question">{questions[index].text}</p>

                            <p className={cssClasses}>{answer ?? "Skipped"}</p>

                        </li>
                    
                    )                   
                
                })}

            </ol>

        </div>
    
    )

}
