import React from "react";

const Question = ({ currentQuestionIndex,questions,onAnswer,mark}) => {

    return(
        <div>

            {(()=> {
                if (currentQuestionIndex < questions.length){
                    console.log(mark)
                    return(
                        <div className="flex flex-col justify-center items-center gap-5">
                            <p>In the past week,</p>
                            <h1 className="text-3xl font-bold ">{questions[currentQuestionIndex][0]}</h1>
                            <div className="flex gap-5 font-bold">
                                <button className="bg-green-700 text-white w-32 py-3 rounded-lg" onClick={() => {onAnswer(questions[currentQuestionIndex][1])}}>YES</button>
                                <button className="bg-red-700 text-white w-32 py-3 rounded-lg" onClick={()=> {onAnswer(!questions[currentQuestionIndex][1])}}>NO</button>
                            </div>
                        </div>
                    )
                    
                }else{
                    let result;
                    if (mark < -9){
                        result="You are drowned in your work life"
                    }else if(mark < -6){
                        result = "You are really close to drowning in your work life"
                    }else if (mark < 0){
                        result = "You are spending most of your time on work"
                    }else if (mark < 3){
                        result = "Your work-life balance is a at moderate level"
                    }else if (mark < 6){
                        result = "You did great to maintain your life outside of work!"
                    }else if (mark < 9){
                        result = "You are doing well with your life."
                    }else{
                        result = "People dream about having the work-life balance you have"
                    }
                    
                    return(
                        <h1 className="text-3xl font-bold ">{result}</h1>
                    )
                }
            })()}
            
        </div>
    )
}

export default Question;