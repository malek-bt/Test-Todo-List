import styles from "../app/page.module.css";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.lightBg}>
      <div className="d-flex justify-content-between align-items-center p-2">
      <h4 className={styles.pinkColor}>Todo List</h4>
        <div className="d-flex gap-2">
          <div
            className="border border-dark rounded-circle p-1 d-flex justify-content-center align-items-center"
            style={{ width: "40px", height: "40px" }}
          >
            <FaFacebookF />
          </div>
          <div
            className="border border-dark rounded-circle p-1 d-flex justify-content-center align-items-center"
            style={{ width: "40px", height: "40px" }}
          >
            <FaLinkedinIn />
          </div>
          <div
            className="border border-dark rounded-circle p-1 d-flex justify-content-center align-items-center"
            style={{ width: "40px", height: "40px" }}
          >
            <FaTwitter />
          </div>
          <div
            className="border border-dark rounded-circle p-1 d-flex justify-content-center align-items-center"
            style={{ width: "40px", height: "40px" }}
          >
            <FaGithub />
          </div>
        </div>
      </div>
      <p className="text-center fw-bolder">
        © 2024 Tekandme. All Rights Reservec.
      </p>
    </footer>
  );
};
export default Footer;
