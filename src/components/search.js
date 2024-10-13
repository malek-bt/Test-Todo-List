import styles from "../app/page.module.css";

const Search = ({ value, onChange, selectedCategory, onCategoryChange }) => {
  return (
    <div className="d-flex justify-content-between pt-3">
      <div className="d-flex">
        <select
          className={`${styles.yellowBg} form-select`}
          value={selectedCategory}
          onChange={onCategoryChange} 
        >
          <option value="all">All</option>
          <option value="complete">Completed</option>
          <option value="incomplete">Incompleted</option>
        </select>

        <button className={styles.yellowBg}>By priority</button>
      </div>

     
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search by name"
        value={value}
        onChange={onChange} 
      />
    </div>
  );
};

export default Search;
