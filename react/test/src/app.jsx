import "./app.css";
import Habits from "./components/habits";
import React, { Component } from "react";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    habits: [
      { id: 0, name: "Reading", count: 0 },
      { id: 1, name: "Running", count: 0 },
      { id: 2, name: "Coding", count: 0 },
    ],
  };

  // handleIncrement = (habit) => {
  //   const habits = [...this.state.habits];
  //   const index = habits.indexOf(habit);
  //   habits[index].count++;
  //   this.setState({
  //     habits,
  //   });
  // };

  handleIncrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        //deconstructiong Object
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    this.setState({ habits });
  };

  // handleDecrement = (habit) => {
  // ... : Spread Syntax
  //   const habits = [...this.state.habits];
  //   const index = habits.indexOf(habit);
  //   const count = habits[index].count - 1;
  //   habits[index].count = count < 0 ? 0 : count;
  //   this.setState({
  //     habits,
  //   });
  // };

  handleDecrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });
    this.setState({ habits });
  };

  handleAdd = (name) => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({
      habits,
    });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((i) => i.id !== habit.id);
    this.setState({
      habits,
    });
  };

  // handleReset = () => {
  //   const habits = this.state.habits.map((habit) => {
  //     habit.count = 0;
  //     return habit;
  //   });
  //   this.setState({
  //     habits,
  //   });
  // };

  // shallow comparison
  handleReset = () => {
    const habits = this.state.habits.map((habit) => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      }
      return habit;
    });

    this.setState({
      habits,
    });
  };

  render() {
    console.log("app");
    const totalCount = this.state.habits.filter((i) => i.count > 0).length;

    return (
      <>
        <Navbar totalCount={totalCount} />
        <Habits
          habits={this.state.habits}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
          handleAdd={this.handleAdd}
          handleDelete={this.handleDelete}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
