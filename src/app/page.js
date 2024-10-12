import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../components/header.js"; // adjust based on folder structure

import styles from "./page.module.css";
import Footer from '@/components/footer.js';
import Main from '@/components/main.js';

export default function Home() {
  return (
    <div className={styles.main}>
     <Main/>
    
    </div>
 
  );
}
