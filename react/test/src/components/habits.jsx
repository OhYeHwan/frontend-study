import React, { Component } from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

class Habits extends Component {
  handleIncrement = (habit) => {
    this.props.handleIncrement(habit);
  };

  handleDecrement = (habit) => {
    this.props.handleDecrement(habit);
  };

  handleDelete = (habit) => {
    this.props.handleDelete(habit);
  };

  handleAdd = (name) => {
    this.props.handleAdd(name);
  };

  render() {
    const habits = this.props.habits;
    return (
      <>
        <HabitAddForm onAdd={this.handleAdd} />
        <ul>
          {habits.map((habit) => {
            return (
              <Habit
                key={habit.id}
                habit={habit}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
              />
            );
          })}
        </ul>
        <button className="habits-reset" onClick={this.props.onReset}>
          Reset All
        </button>
      </>
    );
  }
}

export default Habits;
