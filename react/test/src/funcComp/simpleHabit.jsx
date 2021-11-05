import React, { useState, useRef, useCallback, useEffect } from "react";

// 메모 : 캐쉬 컴포넌트
const SimpleHabit = (props) => {
  const [count, setCount] = useState(0);
  //const spanRef = React.createRef();
  //한번만 만들고 메모리에 저장
  const spanRef = useRef();

  //사이드이펙트 방지 useCallback
  // 함수 캐시
  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  // useEffect => ComponentDidMount + ComponentDidUpdate
  // 아무것도 넣지않으면 마운트랑 업데이트 될때마다
  useEffect(() => {
    // 함수
  });

  // 마운트될때만 사용하고싶다
  // 두번째인자로 빈 배열을 넣어라
  useEffect(() => {
    // 함수
  }, []);

  // 특정 데이터만 업데이트 될때
  useEffect(() => {
    //함수
  }, [count]);

  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">
        Reading
      </span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase">
        <i className="fas fa-plus-square" onClick={handleIncrement}></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
