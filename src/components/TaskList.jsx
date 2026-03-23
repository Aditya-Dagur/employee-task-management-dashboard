import TaskCard from "./TaskCard";

function TaskList({tasks,deleteTask,updateStatus}){

  return(

    <div className="task-grid">

      {tasks.map(task=>(
        <TaskCard
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          updateStatus={updateStatus}
        />
      ))}

    </div>

  );
}

export default TaskList;