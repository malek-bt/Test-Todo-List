import styles from "../app/page.module.css";
const StatusTasks = ({title , count , color , width , bgcolor}) => {
    return (
        <div className={`${styles.cardBg} d-flex justify-content-center align-items-center mt-2   ${styles.statusCardLg} `} style={{width: width , backgroundColor: bgcolor }} >
            <p > <span style={{color : `${color}`}} > {title}</span>  {count}</p>
            

        </div>
    )
}
export default StatusTasks;