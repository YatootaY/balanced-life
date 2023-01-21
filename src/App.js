import React,{useEffect,useState} from "react";
import Welcome from "./component/Welcome";
import Question from "./component/Questions";

function App() {

  const [mark, updateMark] = useState();
  const [questions,updateQuestions] = useState();
  const [currentQuestionIndex,updateCurrentQuestionIndex] = useState();
  const [start,setStart] = useState(false);

  const increaseMark = () => {
    updateMark((mark) => mark + 1)
  }

  const clickStart = () => {
    setStart(true);
  }
  const decreaseMark = () => {
    updateMark((mark) => mark - 1)
  }

  const moveToNewQuestion = () =>{
    updateCurrentQuestionIndex((currentQuestionIndex) => currentQuestionIndex + 1);
  }

  const onAnswer = (ans) => {
    if (ans === true){
      increaseMark();
    }else{
      decreaseMark();
    }
    moveToNewQuestion();
  }

  useEffect(()=>{
    const wave = document.getElementById("wave");
    wave.style.display = "block";
  })

  useEffect(()=> {
    updateMark(0);
    updateQuestions([
      "Did you feel productive at work?",
      "Did you feel anxious to go to work?",
      "Did you feel extreme feeling to leave your work at 3PM?",
      "Did you get a good night sleep?",
      "Did you have time to work on your personal goal?",
      "Did you hangout with your friends outside of work?",
      "Could you stop thinking about work in your personal time?",
      "Did you have control over your work schedule?",
      "Did you make at least 3 work-unrelated conversation with your friends/family?",
      "Did you paid enough attention to your loved ones?",
      "Did you have time to cook yourself a meal and watch late night movie?",
    ])
    updateCurrentQuestionIndex(0)
  },[])

  return (
    <div className="App text-slate-100 flex flex-col gap-5 justify-center items-center h-full font-Comfortaa">

      {(()=>{
        if (start===false){
          console.log("start")
          return(
            <Welcome clickStart={clickStart}/>
          )
        }else{
          console.log("end")
          return(
            <Question currentQuestionIndex={currentQuestionIndex} questions={questions} onAnswer={onAnswer}/>
          )
        }
      })()}
        
    </div>
  );
}

export default App;
