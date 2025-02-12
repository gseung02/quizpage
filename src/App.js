import { useState } from "react";
import mockData from "./data/mockData";
import Home from "./components/Home";
import DetailList from "./components/DetailList";
import Learning from "./components/Learning";
import Result from "./components/Result";
import './App.css';

const App = () => {
  const [selected,setSelected] = useState('');
  const [learningMode,setLearningMode] = useState(false);
  const [exitMode,setExitMode] = useState(false);
  const handleSelected = (obj)=>{
    setSelected(obj);
  }
  const handleChangeMode = (data)=>{
    setLearningMode(data);
  } 
  return (
    <div className="app">
      {
        !selected && <Home categories={mockData.categories} onSelected={handleSelected}/>
      }
      {
        selected && !learningMode && <DetailList selected={selected} onSelected={handleSelected} onChangeMode={handleChangeMode}/>
      }
      {
        learningMode && !exitMode &&<Learning selected={selected.name} flashcards={selected.flashcards}
          onExit={()=>{
          setSelected(null);
          setLearningMode(false);
          setExitMode(false);
        }}
        onResult={()=>{
          setExitMode(true);
        }}/>
      }
      {
        exitMode && <Result onExit={()=>{
          setSelected(null);
          setLearningMode(false);
          setExitMode(false);
        }}/>
      }
    </div>
  );
};

export default App;