"use client";

import {  useState } from "react";
import styles from "../app/page.module.css";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import axios from "axios";


const TaskCard = ({
  title,
  detail,
  start_date,
  due_date,
  id,
  idTask,
  initialStatus,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [statusTask, setStatusTask] = useState(initialStatus);
  const [todo, setTodo] = useState({
    title,
    detail,
    start_date,
    due_date,
  });

  const deleteTask = async () => {
    try {
      await axios.delete(`http://localhost:1337/api/todos/${id}`);
    } catch (err) {
      console.log(err);
    }
  };

  const updateTask = async () => {
    try {
      const response = await axios.put(
        `http://localhost:1337/api/todos/${id}`,
        {
          data: {
            title: todo.title,
            detail: todo.detail,
            start_date: todo.start_date,
            due_date: todo.due_date,
          },
        }
      );
      console.log("Task updated:", response.data);
      setShowModal(false);
    } catch (err) {
      console.log(err);
    }
  };

  const toggleComplete = async () => {
    try {
      const newStatus = statusTask === "complete" ? "incomplete" : "complete";
      const response = await axios.put(
        `http://localhost:1337/api/todos/${id}`,
        {
          data: {
            ...todo,
            status_Type: newStatus,
          },
        }
      );
      
      setStatusTask(newStatus);
    } catch (err) {
      console.log(err);
    }
  };
  const isPassed = new Date(due_date) < new Date();
  const isApproching = new Date(due_date) > new Date() &&  (new Date(due_date) - new Date()) / (1000 * 60 * 60 * 24) <= 1;

 
  
  
  return (
    
    <div
      className={`${styles.cardBg} d-flex justify-content-between ${isPassed ? styles.passedBgCard : "" } ${isApproching ? styles.approchBgCard : "" }`}>
      <div>
        <h2>{title}</h2>
        <p>{detail}</p>
        <h3>Start date: {start_date}</h3>
        <h3>Due date: {due_date}</h3>
      </div>
      <div className="d-flex flex-column justify-content-around">
        {statusTask === "complete" ? (
          <FaCheckCircle
            style={{ width: "25px", height: "25px", cursor: "pointer" }}
            onClick={toggleComplete}
          />
        ) : (
          <FaRegCircleCheck
            style={{ width: "25px", height: "25px", cursor: "pointer" }}
            onClick={toggleComplete}
          />
        )}

        <FaRegEdit
          style={{ width: "25px", height: "25px", cursor: "pointer" }}
          onClick={() => setShowModal(true)}
        />
        <MdDeleteOutline
          style={{ width: "25px", height: "25px", cursor: "pointer" }}
          onClick={deleteTask}
        />
      </div>

      {showModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Task</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Title"
                  value={todo.title}
                  onChange={(e) => setTodo({ ...todo, title: e.target.value })}
                />
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Detail"
                  value={todo.detail}
                  onChange={(e) => setTodo({ ...todo, detail: e.target.value })}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={updateTask}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
   
  );
};

export default TaskCard;
