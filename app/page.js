import Image from "next/image";
import styles from "./page.module.css";
//import Login from "./pages/Login";
import Projects from "./pages/Projects";

export default function Home() {
  return (
    <main className={styles.main}>
    <Projects/>
    </main>
  );
}
