const Home = ({categories,onSelected}) => {
  return (
    <div className="home">
      <h1>상식 Quiz</h1>
      {/* 버튼으로 name 값을 만들어 주기 */}
      <div className="btn-box">
        {
          categories.map((obj,idx)=>{
            return<button key={idx} onClick={()=>{onSelected(obj)}}>{obj.name}</button>
          })
        }
      </div>
    </div>
  );
};

export default Home;