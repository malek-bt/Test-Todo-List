import styles from "../app/page.module.css";
const StatusTasks = ({title , count , color}) => {
    return (
        <div className={`${styles.cardBg} d-flex justify-content-center align-items-center ${styles.statusCardLg} `} >
            <h3 > <span style={{color : `${color}`}} > {title}</span>  {count}</h3>

        </div>
    )
}
export default StatusTasks;