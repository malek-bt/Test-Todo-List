import styles from "../app/page.module.css";

const Header = () => {
  return (
    <div className={`${styles.lightBg} d-flex align-items-center gap-2`}>
      <div
        className={`${styles.pinkBg} rounded-circle d-flex justify-content-center fs-2`}
      >
        <p>T</p>
      </div>
      <h4 className={`${styles.IslandFont} fs-2`}>Todo List</h4>
    </div>
  );
};

export default Header;
