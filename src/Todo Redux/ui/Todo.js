import React, { useState } from "react";
import "./todo.css";
import { addTodo, deleteTodo } from "../Action/index";
import { useDispatch, useSelector } from "react-redux";

const Todo = () => {
  const dispatcch = useDispatch();
  const todo = useSelector((state) => state.todoReducer.todo);

  const [inputData, setInputData] = useState("");
  return (
    <div className="main-div">
      <div className="child-div">
        <figure>
          <figcaption>Add Your List Here</figcaption>
        </figure>
        <div className="add-items">
          <input
            type="text"
            placeholder="add a todo"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          <button
            className="add-todo"
            onClick={() => dispatcch(addTodo(inputData, setInputData("")))}
          >
            {" "}
            Add To Do
          </button>
        </div>
        <div className="show-items">
          {todo.map((todos) => {
            return (
              <div className="each-items" key={todos.id}>
                <p>{todos.data} </p>
                <button
                  className="delete-todo"
                  onClick={() => dispatcch(deleteTodo(todos.id))}
                >
                  X
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Todo;
