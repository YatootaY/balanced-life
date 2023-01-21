import React from "react";


const Welcome = ({clickStart}) => {

    return(
        <div className="flex flex-col justify-center items-center gap-5 mx-8">
            <p>Work life balance is important</p>
            <h1 className="font-bold text-xl text-center md:text-3xl ">Have you been working too hard lately?</h1>
            <button className="bg-sky-400 text-white px-6 py-3 rounded-lg" onClick={clickStart}>Find out</button>
        </div>
    )
}

export default Welcome;