import styles from "./spinner.module.css";

const Spinner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.content__container}>
          <p className={styles.content__container__text}>Getting</p>

          <ul className={styles.content__container__list}>
            <li className={styles.content__container__list__item}>details!</li>
            <li className={styles.content__container__list__item}>links!</li>
            <li className={styles.content__container__list__item}>content!</li>
            <li className={styles.content__container__list__item}>ready!</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
