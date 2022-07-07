import React, { useState, useEffect } from "react";
import Header from "./Header";
import Tasks from "./Tasks";
import AddTodo from "./AddTod";

const Index = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const getTasksFromServer = await fetchTasks();
      setTasks(getTasksFromServer);
    };
    getTasks();
  }, []);

  const fetchTasks = async () => {
    const result = await fetch("http://localhost:5000/tasks");
    const data = result.json();
    return data;
  };

  const addTask = async (task) => {
    const result = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await result.json();
    setTasks([...tasks, data]);
    console.log(tasks);
  };

  let onDelete = async (id) => {
    await fetch(`http://localhost:5000/tasks ${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        title={"To DO App"}
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask ? <AddTodo onAdd={addTask} /> : ""}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={onDelete} onToggle={toggleReminder} />
      ) : (
        "No Task To Show"
      )}
    </div>
  );
};

export default Index;
