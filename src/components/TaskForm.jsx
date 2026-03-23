import {useState} from "react";

function TaskForm({addTask}){

  const [title,setTitle] = useState("");
  const [employee,setEmployee] = useState("");
  const [priority,setPriority] = useState("Medium");

  const submitHandler=(e)=>{
    e.preventDefault();

    if(!title || !employee) return;

    addTask({
      title,
      employee,
      priority,
      status:"Pending"
    });

    setTitle("");
    setEmployee("");
  };

  return(

    <form onSubmit={submitHandler}>

      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Employee Name"
        value={employee}
        onChange={(e)=>setEmployee(e.target.value)}
      />

      <select
        value={priority}
        onChange={(e)=>setPriority(e.target.value)}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <button>Add Task</button>

    </form>
  );
}

export default TaskForm;