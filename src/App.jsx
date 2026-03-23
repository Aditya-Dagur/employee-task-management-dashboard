import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Stats from "./components/Stats";
import "./App.css";

function App() {

  const [tasks,setTasks] = useState([]);

  useEffect(()=>{
    const saved = JSON.parse(localStorage.getItem("tasks"));
    if(saved) setTasks(saved);
  },[]);

  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks));
  },[tasks]);

  const addTask = (task)=>{
    setTasks([...tasks,{...task,id:Date.now()}]);
  };

  const deleteTask = (id)=>{
    setTasks(tasks.filter(task=>task.id!==id));
  };

  const updateStatus = (id,status)=>{
    setTasks(tasks.map(task =>
      task.id===id ? {...task,status} : task
    ));
  };

  return (

    <div className="container">

      <h1>Employee Task Dashboard</h1>

      <Stats tasks={tasks}/>

      <TaskForm addTask={addTask}/>

      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        updateStatus={updateStatus}
      />

    </div>
  );
}

export default App;