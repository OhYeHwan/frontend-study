import React, { Component } from "react";

class Habit extends Component {
  // 1. 함수 자체로 사용할 경우 constructor에서 this를 바인딩 해줘야한다.
  //   handleIncrement(event) {
  //       this.setState({
  //         count: this.state.count + 1,
  //       });
  //   }

  // 2. 예를 들어
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       count: 0,
  //     };
  //       this.handleIncrement = this.handleIncrement.bind(this);
  //   }
  //  자바스크립트에서 클래스 메서드는 기본적으로 바인딩 되지 않기 때문이다.

  // 3. 하지만 arrow function을 변수에 할당하여 사용하면 바인딩을 해주지 않아도 된다.
  handleIncrement = (event) => {
    this.props.onIncrement(this.props.habit);
  };

  handleDecrement = (event) => {
    this.props.onDecrement(this.props.habit);
  };

  handleDelete = (event) => {
    console.log(this.props.habit);
    this.props.onDelete(this.props.habit);
  };

  render() {
    // const {0 , 0} = {X, X} : Destructuring assignment
    const { name, count } = this.props.habit;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
