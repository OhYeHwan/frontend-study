import React from "react";
import TodoListItem from "./todoListItem";
import "./todoList.scss";

const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <div className="todoList">
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default TodoList;
