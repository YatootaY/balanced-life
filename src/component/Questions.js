import React from "react";

const Question = ({ currentQuestionIndex,questions,onAnswer}) => {

    return(
        <div className="flex flex-col justify-center items-center gap-5">
            <p>In the past week,</p>
            <h1 className="text-3xl font-bold ">{questions[currentQuestionIndex]}</h1>
            <div className="flex gap-5 font-bold">
                <button className="bg-green-700 text-white w-32 py-3 rounded-lg" onClick={() => {onAnswer(true)}}>YES</button>
                <button className="bg-red-700 text-white w-32 py-3 rounded-lg" onClick={()=> {onAnswer(false)}}>NO</button>
            </div>
        </div>
    )
}

export default Question;