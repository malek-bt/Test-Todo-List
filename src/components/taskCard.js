import styles from "../app/page.module.css";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";

const TaskCard = ({ title, description, startDate, dueDate }) => {
  return (
    <div className={`${styles.cardBg} d-flex justify-content-between `} >
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <h3>Start date : {startDate} </h3>
        <h3>Due date : {dueDate} </h3>
      </div>
      <div className="d-flex flex-column justify-content-around ">
      <FaRegCircleCheck style={{ width: '25px', height: '25px' }} />
      <FaRegEdit style={{ width: '25px', height: '25px' }} />
        <MdDeleteOutline style={{ width: '25px', height: '25px' }} />
      </div>
    </div>
  );
};
export default TaskCard;
