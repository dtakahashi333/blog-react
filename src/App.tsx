import styles from "./App.module.css";

function App() {
  return (
    <div className={styles["app-root"]}>
      <div className={styles["top-nav"]}>Top Navigation</div>
      <div className={styles["content-area"]}>
        <div className={styles.sidebar}>Sidebar Navigation</div>
        <div className={styles["blog-area"]}>Main Blog Area</div>
        <div className={styles["table-of-contents"]}>Table of Contents</div>
      </div>
    </div>
  );
}

export default App;
