"use client";
import { useState } from "react";
import styles from "../app/page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Calendar from "react-calendar";

const AddTask = () => {
  const [showModal, setShowModal] = useState(false);
  const [showCalendarModal, setShowCalendarModal] = useState(false);
  const [dateType, setDateType] = useState(null);
  const [titleErrorMessage, setTitleErrorMessage] = useState("");
  const [detailErrorMessage, setDetailErrorMessage] = useState("");
  const [dateErrorMessage, setDateErrorMessage] = useState("");
  const [todo, setTodo] = useState({
    title: "",
    detail: "",
    start_date: new Date(),
    due_date: new Date(),
  });

  const [isStartDateOpen, setIsStartDateOpen] = useState(false);
  const [isDueDateOpen, setIsDueDateOpen] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const toggleCalendarModal = () => {
    setShowCalendarModal(!showCalendarModal);
  };

  const handleDateSelect = (date) => {
    if (dateType === "start") {
      setTodo({ ...todo, start_date: date });
    } else if (dateType === "due") {
      setTodo({ ...todo, due_date: date });
    }
    toggleCalendarModal();
  };

  const createTodo = async () => {
    let hasError = false;

    if (todo.title.length === 0) {
      setTitleErrorMessage("Title must not be empty");
        hasError = true;
    }  if (todo.detail.length === 0) {
      setDetailErrorMessage("Detail must not be empty");
        hasError = true;
    }  if (todo.due_date < todo.start_date) {
      setDateErrorMessage("Due date must be greater than start date");
        hasError = true;
    } if(!hasError){ 
      const response = await axios.post("http://localhost:1337/api/todos/", {
        data: {
          title: todo.title,
          detail: todo.detail,
          start_date: todo.start_date.toISOString().split("T")[0],
          due_date: todo.due_date.toISOString().split("T")[0],
        },
      });
      setTodo({
        title: "",
        detail: "",
        start_date: new Date(),
        due_date: new Date(),
      });
      toggleModal();
      alert("Task created!");
    }
  };

  return (
    <>
      <div className="d-flex flex-row justify-content-between align-items-center gap-3">
        <h2 className={`${styles.pinkColor} ${styles.IslandFont}`}>Sunday</h2>
        <div>
          <input
            type="text"
            className={`${styles.inputTask} border-0 rounded p-2 fs-6  h-100 d-none d-lg-block`}
            placeholder="Type title of Task"
            value={todo.title}
            onChange={(e) => setTodo({ ...todo, title: e.target.value })}
          />
          {titleErrorMessage && (
            <p className="text-danger">{titleErrorMessage}</p>
          )}
        </div>
        <div>
          <input
            type="text"
            className={`${styles.inputTask} border-0 rounded p-2 fs-6  h-100 d-none d-lg-block`}
            placeholder="Detail of your Task"
            value={todo.detail}
            onChange={(e) => setTodo({ ...todo, detail: e.target.value })}
          />
          {detailErrorMessage && (
            <p className="text-danger">{detailErrorMessage}</p>
          )}
        </div>
        <div className="mb-3 d-none d-lg-block">
          <label>Start Date</label>
          <div
            onClick={() => {
              setDateType("start");
              toggleCalendarModal();
            }}
            style={{ cursor: "pointer" }}
          >
            <input
              type="text"
              className="form-control"
              value={todo.start_date.toISOString().split("T")[0]}
              readOnly
            />
          </div>
          {dateErrorMessage && (
            <p className="text-danger">{dateErrorMessage}</p>
          )}
        </div>

        <div className="mb-3 d-none d-lg-block">
          <label>Due Date</label>
          <div
            onClick={() => {
              setDateType("due");
              toggleCalendarModal();
            }}
            style={{ cursor: "pointer" }}
          >
            <input
              type="text"
              className="form-control"
              value={todo.due_date.toISOString().split("T")[0]}
              readOnly
            />
          </div>
          {dateErrorMessage && (
            <p className="text-danger">{dateErrorMessage}</p>
          )}
        </div>

        <button
          type="button"
          className={`${styles.button} rounded border-0 d-none d-lg-block`}
          onClick={createTodo}
        >
          +
        </button>
        <button
          type="button"
          className={`${styles.button} rounded border-0 d-block d-lg-none`}
          onClick={toggleModal}
        >
          +
        </button>
      </div>

      {showModal && (
        <div
          className="modal fade show d-block d-lg-none"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New Task</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={toggleModal}
                ></button>
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Type title of Task"
                  value={todo.title}
                  onChange={(e) => setTodo({ ...todo, title: e.target.value })}
                />
                {titleErrorMessage && (
                  <p className="text-danger">{titleErrorMessage}</p>
                )}

                <input
                  type="text"
                  className="form-control"
                  placeholder="Detail of your Task"
                  value={todo.detail}
                  onChange={(e) => setTodo({ ...todo, detail: e.target.value })}
                />
                {detailErrorMessage && (
                  <p className="text-danger">{detailErrorMessage}</p>
                )}
                <div className="mb-3">
                  <label>Start Date</label>
                  <div
                    onClick={() => setIsStartDateOpen(!isStartDateOpen)}
                    style={{ cursor: "pointer" }}
                  >
                    <input
                      type="text"
                      className="form-control"
                      value={todo.start_date.toISOString().split("T")[0]}
                      readOnly
                    />
                  </div>
                  {isStartDateOpen && (
                    <Calendar
                      onChange={(date) => {
                        setTodo({ ...todo, start_date: date });
                        setIsStartDateOpen(false);
                      }}
                      value={todo.start_date}
                    />
                  )}
                  {dateErrorMessage && (
                    <p className="text-danger">{dateErrorMessage}</p>
                  )}
                </div>
                <div className="mb-3">
                  <label>Due Date</label>
                  <div
                    onClick={() => setIsDueDateOpen(!isDueDateOpen)}
                    style={{ cursor: "pointer" }}
                  >
                    <input
                      type="text"
                      className="form-control"
                      value={todo.due_date.toISOString().split("T")[0]}
                      readOnly
                    />
                  </div>
                  {isDueDateOpen && (
                    <Calendar
                      onChange={(date) => {
                        setTodo({ ...todo, due_date: date });
                        setIsDueDateOpen(false);
                      }}
                      value={todo.due_date}
                    />
                  )}
                  {dateErrorMessage && (
                    <p className="text-danger">{dateErrorMessage}</p>
                  )}
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={toggleModal}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={createTodo}
                >
                  Save Task
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showCalendarModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  Select {dateType === "start" ? "Start" : "Due"} Date
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={toggleCalendarModal}
                ></button>
              </div>
              <div className="modal-body">
                <Calendar
                  onChange={handleDateSelect}
                  value={dateType === "start" ? todo.start_date : todo.due_date}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddTask;
