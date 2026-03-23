function Stats({tasks}){

  const total = tasks.length;
  const completed = tasks.filter(t=>t.status==="Completed").length;
  const pending = tasks.filter(t=>t.status==="Pending").length;

  return(

    <div className="stats">

      <div>Total Tasks: {total}</div>
      <div>Completed: {completed}</div>
      <div>Pending: {pending}</div>

    </div>

  );
}

export default Stats;