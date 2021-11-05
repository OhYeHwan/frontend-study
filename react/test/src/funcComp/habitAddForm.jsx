import React, { memo } from "react";

// 함수에는 memo가 있다
// 메모함수안에 function컴포넌트를 전달
// props가 변경되지않으면 안에있는 function가 호출되지 않는다.
// PureComponent와 비슷하다.
// state가 따로 없다면 함수형을 만들 수 있고
const HabitAddForm = memo((props) => {
  // 함수 안이기 때문에 지역 변수를 설정
  const inputRef = React.createRef();
  const formRef = React.createRef();

  // 함수이기 때문에 this로 접근 X
  // 바로 접근할 수 있음
  // this를 쓰지않기때문에 코드가 깔끔해진다.
  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    formRef.current.reset();
  };

  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="habit"
      />
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddForm;
