const Result = ({score,onExit}) => {
  return (
    <div className='result'>
      <h2>
        축하합니다!
      </h2>
      <h2>총 {score}문제를 맞히셨습니다.</h2>
      <img src={`${process.env.PUBLIC_URL}/image/firecracker.png`} alt="축하이미지" />
      <button onClick={onExit}>처음으로</button>
    </div>
  );
};

export default Result;