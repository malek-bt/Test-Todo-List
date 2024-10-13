import styles from "../app/page.module.css";
const StatusTasks = ({title , count , color , width , bgcolor , customClasses}) => {
    return (
        <div className={`${styles.cardBg} d-flex justify-content-center align-items-center mt-2 ${customClasses}  ${styles.statusCardLg} `} style={{width: width , backgroundColor: bgcolor }} >
            <p className="fs-5 text-center" style={{fontWeight:"600"}}> <span style={{color : `${color}` }} > {title}</span>  {count}</p>
            

        </div>
    )
}
export default StatusTasks;