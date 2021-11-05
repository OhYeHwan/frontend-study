import React, { Component } from "react";

class HabitAddForm extends Component {
  // 리액트는 직접 돔요소에 접근하지 않기때문에
  // 필요할때는 리액트에서 제공하는 createRef를 이용하여
  // 멤버변수를 정의한다음에 해당 컴포넌트에 ref를 연결하여 사용
  inputRef = React.createRef();

  // 정석
  // formRef 자체를 reset
  formRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    //this.inputRef.current.value = "";
    this.formRef.current.reset();
  };

  render() {
    return (
      // form 안에서 버튼이 눌리면 submit이라는 이벤트가 발생한다.
      // 기본적으로 submit은 리프레쉬된다.
      // 따라서 브라우저의 기본 기능을 취소해줘야한다.
      // event.preventDefault()
      <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholder="habit"
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
