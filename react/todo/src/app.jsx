import React, { useState, useRef, useCallback } from "react";
import TodoTemplate from "./components/todoTemplate";
import TodoInsert from "./components/todoInsert";
import TodoList from "./components/todoList";

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할일 ${i}`,
      checked: false,
    });
  }
  return array;
}

const App = () => {
  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     text: "리액트 다루는 기술 10강",
  //     checked: true,
  //   },
  //   {
  //     id: 2,
  //     text: "러닝 리액트 7장까지 공부",
  //     checked: true,
  //   },
  //   {
  //     id: 3,
  //     text: "브라우저101 프로젝트 진행",
  //     checked: false,
  //   },
  // ]);

  const [todos, setTodos] = useState(createBulkTodos);

  const nextId = useRef(4);
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      // setTodos(todos.concat(todo));
      setTodos((todos) => todos.concat(todo));
      nextId.current += 1;
    },
    // [todos]
    []
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(
        // todos.filter((todo) => todo.id !== id)
        (todos) => todos.filter((todo) => todo.id !== id)
      );
    },
    //[todos]
    []
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        // todos.map((todo) =>
        //   todo.id === id ? { ...todo, checked: !todo.checked } : todo
        // )
        (todos) =>
          todos.map((todo) =>
            todo.id === id ? { ...todo, checked: !todo.checked } : todo
          )
      );
    },
    // [todos]
    []
  );

  return (
    <>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}></TodoInsert>
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
    </>
  );
};

export default App;
