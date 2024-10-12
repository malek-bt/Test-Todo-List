import styles from "../app/page.module.css";
import AddTask from "./AddTask";
import Search from "./search";
import StatusTasks from "./statusTasks";
import TaskCard from "./taskCard";
const Main = () => {
  return (
    <div>
      <h1 className="fs-4 p-3 text-lg-center  ">
        Hello, Aqeel ,
        <span className={styles.spanColor}>Start planning today</span>
      </h1>
      <div className={styles.mainBg}>
        <AddTask />
        <Search />
        <div className="container ">
            <div className="row row-cols-1 row-cols-lg-2">
                <div className="col my-3">
                    <TaskCard title="Learn JS" description="Master the language" startDate="07-10-2024" dueDate="10-10-2024" />
                </div>
                <div className="col my-3">
                    <TaskCard title="Learn JS" description="Master the language" startDate="07-10-2024" dueDate="10-10-2024" />
                </div>
                <div className="col my-3">
                    <TaskCard title="Learn JS" description="Master the language" startDate="07-10-2024" dueDate="10-10-2024" />
                </div>
                <div className="col my-3">
                    <TaskCard title="Learn JS" description="Master the language" startDate="07-10-2024" dueDate="10-10-2024" />
                </div>
            </div>
        </div>
       <div className="d-lg-flex justify-content-between  align-items-center">
        <div className="d-flex ">
          <StatusTasks title="COMPLETED TASKS" count="04" />
          <StatusTasks title="PENDING TASKS" count="05" />
        </div>
        <StatusTasks title="TASKS CREATED" count="100" color="blue" />
        </div> 
      </div>
     
    </div>
  );
};
export default Main;
