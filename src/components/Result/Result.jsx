import styles from "./Result.module.css";

function Result() {
  return (
    <div className={styles.results__container}>
      <h3 className={styles.title}>Your Result</h3>
      <div className={styles.score}>
        <h1>76</h1>
        <p>of 100</p>
      </div>
      <h2 className={styles.result}>Great</h2>
      <p className={styles.paragraph}>
        Your performance exceed 65% of the people conducting the test here!
      </p>
    </div>
  );
}

export default Result;
