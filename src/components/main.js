"use client"
import styles from "../app/page.module.css";
import AddTask from "./AddTask";
import Search from "./search";
import StatusTasks from "./statusTasks";
import TaskCard from "./taskCard";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar.css";
import { useState } from "react";
const Main = () => {
    const [date, setDate] = useState(new Date());
  return (
    <div>
      <h1 className="fs-4 p-3 text-lg-center  ">
        Hello, Aqeel ,
        <span className={styles.spanColor}>Start planning today</span>
      </h1>
      <div className={styles.mainBg}>
        <AddTask />
        <div className="d-lg-flex justify-content-between gap-5">
          <div>
            <h2 className={styles.date}>07, April 2024</h2>
            <div className='calendar-container'>
        <Calendar
          onChange={setDate}
          value={date}
          selectRange={true}
        />
      </div>
          </div>
          <div>
            <Search />
            <div className="container ">
              <div className="row row-cols-1 row-cols-lg-2">
                <div className="col my-3">
                  <TaskCard
                    title="Learn JS"
                    description="Master the language"
                    startDate="07-10-2024"
                    dueDate="10-10-2024"
                  />
                </div>
                <div className="col my-3">
                  <TaskCard
                    title="Learn JS"
                    description="Master the language"
                    startDate="07-10-2024"
                    dueDate="10-10-2024"
                  />
                </div>
                <div className="col my-3">
                  <TaskCard
                    title="Learn JS"
                    description="Master the language"
                    startDate="07-10-2024"
                    dueDate="10-10-2024"
                  />
                </div>
                <div className="col my-3">
                  <TaskCard
                    title="Learn JS"
                    description="Master the language"
                    startDate="07-10-2024"
                    dueDate="10-10-2024"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-lg-flex justify-content-between  align-items-center">
          <div className="d-flex gap-2 ">
            <StatusTasks title="COMPLETED TASKS" count="04" width="120px"/>
            <StatusTasks title="PENDING TASKS" count="05" width="120px" bgcolor="rgba(196, 164, 159, 1)"/>
          </div>
          <StatusTasks
            title="TASKS CREATED"
            count="100"
            color="rgba(11, 135, 172, 1)"
          />
        </div>
      </div>
    </div>
  );
};
export default Main;
