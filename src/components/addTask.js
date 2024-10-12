import styles from "../app/page.module.css";
const AddTask = () => {
    return (
        <div className="d-flex flex-row justify-content-between align-items-center gap-3">
           <h2 className={`${styles.pinkColor} ${styles.IslandFont}`}>Sunday</h2>
           <input type="text" className={`${styles.inputTask} border-0 rounded p-2 fs-6 w-25 h-100`}  placeholder="Type title of Task" />
           <input type="text" className={`${styles.inputTask} border-0 rounded p-2 fs-6 w-25 h-100`} placeholder="Detail of your Task" />
            <button type="button" className={`${styles.button} rounded border-0`}>+</button>
        </div>
    );
}
export default AddTask;