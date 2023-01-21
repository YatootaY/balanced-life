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

  const updateWave = () => {
    const baseWave = document.getElementById("baseWave")
    let height = mark + 11;
    height = 95 - Math.round(95/22 * height) 
    baseWave.style.height = `${height}vh`
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
      ["Did you feel productive at work?",true],
      ["Did you feel anxious to go to work?",false],
      ["Did you get an extreme feeling to leave your work after 3PM?",false],
      ["Did you have any trouble sleeping?",false],
      ["Did you have time to work on your personal goal?",true],
      ["Did you hang out with your friends outside of work?",true],
      ["Could you stop thinking about work in your personal time?",true],
      ["Did you have control over your work schedule?",true],
      ["Did you make at least 3 work-unrelated conversations with your friends/family?",true],
      ["Did you pay enough attention to your loved ones?",true],
      ["Did you have time to cook yourself a meal and watch late night movie?",true],
    ])
    updateCurrentQuestionIndex(0)
  },[])

  useEffect(()=> {
    updateWave();
  },[mark])

  return (
    <div className="App text-slate-100 flex flex-col gap-5 justify-center items-center h-full font-Comfortaa">

      {(()=>{
        if (start===false){
          return(
            <Welcome clickStart={clickStart}/>
          )
        }else{
          return(
            <Question currentQuestionIndex={currentQuestionIndex} questions={questions} onAnswer={onAnswer} mark={mark}/>
          )
        }
      })()}
        
    </div>
  );
}

export default App;
