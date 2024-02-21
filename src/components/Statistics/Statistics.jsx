import styles from "./Statistics.module.css";
import JSONData from "../../data.json";

function Statistics() {
  return (
    <div className={styles.statistics__container}>
      <h3 className={styles.title}>Summary</h3>
      <ul className={styles.statistics__list}>
        {JSONData.map(
          (
            item,
            index // Corrected syntax for map function
          ) => (
            <li key={index} className={styles.list__item} style={{background: item.background}}>
              <div className={styles.left}>
                <img src={item.icon} alt="" />
                <span style={{color: item.color}}>{item.category}</span>
              </div>
              <div className={styles.right}>
                <span className={styles.item__score}>{item.score}</span>
                <p className={styles.maximum__score}>/ 100</p>
              </div>
            </li>
          )
        )}
      </ul>
      <button className={styles.btn}>Continue</button>
    </div>
  );
}

export default Statistics;
