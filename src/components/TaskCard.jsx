function TaskCard({task,deleteTask,updateStatus}){

  return(

    <div className="task-card">

      <h3>{task.title}</h3>

      <p><b>Employee:</b> {task.employee}</p>

      <p><b>Priority:</b> {task.priority}</p>

      <p><b>Status:</b> {task.status}</p>

      <div className="buttons">

        <button onClick={()=>updateStatus(task.id,"In Progress")}>
          Start
        </button>

        <button onClick={()=>updateStatus(task.id,"Completed")}>
          Complete
        </button>

        <button onClick={()=>deleteTask(task.id)}>
          Delete
        </button>

      </div>

    </div>

  );
}

export default TaskCard;