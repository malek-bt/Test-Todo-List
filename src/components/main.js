"use client";
import styles from "../app/page.module.css";
import AddTask from "./AddTask";
import Search from "./search";
import StatusTasks from "./statusTasks";
import TaskCard from "./taskCard";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Main = () => {
  const [date, setDate] = useState(new Date());
  const [tasks, setTasks] = useState([]);
  const [totalTasks, setTotalTasks] = useState("");
  const [completedCount, setCompletedCount] = useState(0);
  const [pendingCount, setPendingCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const searchQuery = searchTerm
          ? `?filters[$or][0][title][$contains]=${searchTerm}&filters[$or][1][detail][$contains]=${searchTerm}}`
          : "";
          const selectQuery = selectedCategory && selectedCategory !== "all"
          ? `?filters[status_Type][$eq]=${selectedCategory}`
          : "";
        

          const queryString = `${searchQuery}${selectQuery}`;

          const response = await axios.get(`http://localhost:1337/api/todos${queryString}`);
        setTasks(response.data.data);
        setTotalTasks(response.data.meta.pagination.total);
        console.log(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchTasks();
  }, [searchTerm , selectedCategory]);

  useEffect(() => {
    const countCompletedTasks = () => {
      const count = tasks.filter(
        (task) => task.status_Type === "complete"
      ).length;
      setCompletedCount(count);
    };

    const countPendingTasks = () => {
      const count = tasks.filter(
        (task) => task.status_Type === "incomplete"
      ).length;
      setPendingCount(count);
    };

    countCompletedTasks();
    countPendingTasks();
  }, [tasks]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  

  return (
    <div>
      <h1 className="fs-3 p-3 text-lg-center mt-3 ">
        Hello, Aqeel ,
        <span className={styles.spanColor}>Start planning today</span>
      </h1>
      <div className={`${styles.mainBg} m-lg-5 p-lg-5`}>
        <AddTask />
        <div className="d-lg-flex justify-content-between gap-5">
          <div>
            <h2 className={styles.date}>07, April 2024</h2>
            <div className="calendar-container">
              <Calendar onChange={setDate} value={date} selectRange={true} />
            </div>
          </div>
          <div>
            <Search value={searchTerm} onChange={handleSearchChange} selectedCategory={selectedCategory} onCategoryChange={(e) => setSelectedCategory(e.target.value)} />
            <div className="container ">
              {tasks.length > 0 ? (
                <div
                  className={`row ${
                    tasks.length === 1
                      ? "justify-content-center"
                      : "row-cols-1 row-cols-lg-2"
                  }`}
                >
                  {tasks.map((task) => (
                    <div
                      className={`col my-3 ${
                        tasks.length === 1 ? "col-12" : ""
                      }`}
                      key={task.id}
                    >
                      <TaskCard
                        title={task.title}
                        detail={task.detail}
                        start_date={task.start_date}
                        due_date={task.due_date}
                        id={task.documentId}
                        idTask={task.id}
                        initialStatus={task.status_Type}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <p>No tasks found.</p>
              )}
            </div>
          </div>
        </div>
        <div className="d-lg-flex justify-content-between  align-items-center gap-5">
          <div className="d-flex gap-2 ">
            <StatusTasks
              title="COMPLETED TASKS"
              count={completedCount}
              width="120px"
            />
            <StatusTasks
              title="PENDING TASKS"
              count={pendingCount}
              width="120px"
              bgcolor="rgba(196, 164, 159, 1)"
            />
          </div>
          <StatusTasks
            title="TASKS CREATED"
            count={totalTasks}
            color="rgba(11, 135, 172, 1)"
            customClasses="flex-fill shadow"
            bgcolor="rgba(255, 255, 255, 1)"
          />
        </div>
      </div>
    </div>
  );
};
export default Main;
