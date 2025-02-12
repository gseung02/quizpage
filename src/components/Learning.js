import { useState } from "react";
import Result from "./Result";

const Learning = ({selected,flashcards,onExit}) => {
  console.log(flashcards);
  const [currentIdx,setCurrentIdx] = useState(0);
  const [showAnswer,setShowAnswer] = useState(false);
  const [inputTxt,setInputTxt] = useState('');
  const [score,setScore] =useState(0);
  const [feedback,setFeedback] = useState('');
  const [showResult,setShowResult] = useState(false);
  const handleNext = ()=>{
    setShowAnswer(false);
    setInputTxt('');
    setFeedback('');
    if(currentIdx+1<flashcards.length){
      setCurrentIdx(currentIdx+1)
    }else{
      setShowResult(true); // 모든 문제를 끝냈을 때 결과
      
    }
  }
  const changeAnswer = (event)=>{
    setInputTxt(event.target.value);
  }
  const checkAnswer = (event)=>{
    if(event.key==='Enter'){ // 사용자가 누른 값이 enter일 경우에만 실행
      if(inputTxt===flashcards[currentIdx].answer){
        setScore(score + 1);
        setFeedback('');
        handleNext();
      }else{
        setFeedback('오답');
      }
    }
  };
  if (showResult) {
    return <Result score={score} onExit={onExit} />;
  }
  return (
    <div className="learning">
      <div className='bar-container'>
        <div className="bar" style={{width:`${(currentIdx/flashcards.length)*100}%`}}></div>
      </div>
      <div className="quiz">
        <p>{selected}</p>
        <p>{flashcards[currentIdx].question}</p>
        {
          showAnswer && <p>HINT : {flashcards[currentIdx].answer}</p>
        }
        {
          feedback && <p style={{ color: 'red' }}>{feedback}</p>
          }
      </div>
      <input type="txt" value={inputTxt} onChange={changeAnswer} onKeyDown={checkAnswer} placeholder="답을 입력하세요" />
      <div className="quiz-btn">
        <button onClick={handleNext}>다음 문제</button>
        <button onClick={()=>{setShowAnswer(!showAnswer)}}>
          {
            showAnswer ? 'CLOSE' : 'HINT'
          }
        </button>
        <button onClick={onExit}>학습종료</button>
      </div>
    </div>
  );
};

export default Learning;