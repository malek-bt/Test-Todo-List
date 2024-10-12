import styles from "../app/page.module.css";
const Search = () => {
  return (
    <div className="d-flex justify-content-between pt-3">
        <div className="d-flex">
        <button className={styles.yellowBg}>By category</button>
        <button className={styles.yellowBg} >By priority</button>
        </div>
    
     <input className={styles.searchInput} type="text" placeholder="Search by name"></input>
    </div>
  );
}
export default Search;