import styles from "../app/page.module.css";
const AddTask = () => {
    return (
        <div className="d-flex flex-row justify-content-between ">
           <h2 className={styles.pinkColor}>Sunday</h2>
           <input type="text" className="form-control fs-6 " placeholder="Type title of Task" />
           <input type="text" className="form-control fs-6" placeholder="Detail of your Task" />
            <button type="button" className="btn btn-success fs-2">+</button>
        </div>
    );
}
export default AddTask;