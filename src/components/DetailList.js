const DetailList = ({selected,onSelected,onChangeMode}) => {
  return (
    <div className="detail-list">
      <h2>{selected.name}</h2>
      <ul>
        {/* li요소를 이용하여 속담 문제 작성 */}
        {
          selected.flashcards.map((obj,idx)=>{
            return <li key={idx}>{obj.question}</li>
          })
        }
      </ul>
      <div className="list-btn">
        <button onClick={()=>{onChangeMode(true)}}>학습시작</button>
        <button onClick={()=>{onSelected(null)}}>뒤로가기</button>
      </div>
    </div>
  );
};

export default DetailList;