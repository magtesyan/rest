import styles from "./Advantages.module.scss";

export const Advantages = () => {
  return (
    <section className={styles.adv}>
      <h2 className={styles.advTitle}>Преимущества</h2>
      <ul className={styles.advList}>
        <li className={styles.advItem}>
          <img
            className={styles.advPic}
            src="/adv/advantage-1.png"
            alt="Рестораны"
          />
          <div className={styles.advInfo}>
            <h3 className={styles.advSubtitle}>Уникальное впечатление</h3>
            <span className={styles.advText}>
              Подарок, который до вас еще не делали — получатель точно
              обрадуется.
            </span>
          </div>
        </li>
        <li className={styles.advItem}>
          <img
            className={styles.advPic}
            src="/adv/advantage-2.png"
            alt="Рестораны"
          />
          <div className={styles.advInfo}>
            <h3 className={styles.advSubtitle}>Любой праздник</h3>
            <span className={styles.advText}>
              На день рождения, свадьбу или даже за успешное закрытие сделки
              бизнес-партнеру.
            </span>
          </div>
        </li>
        <li className={styles.advItem}>
          <img
            className={styles.advPic}
            src="/adv/advantage-3.png"
            alt="Рестораны"
          />
          <div className={styles.advInfo}>
            <h3 className={styles.advSubtitle}>Многоразовая карта</h3>
            <span className={styles.advText}>
              Получатель сможет несколько раз воспользоваться одним
              сертификатом.
            </span>
          </div>
        </li>
        <li className={styles.advItem}>
          <img
            className={styles.advPic}
            src="/adv/advantage-4.png"
            alt="Рестораны"
          />
          <div className={styles.advInfo}>
            <h3 className={styles.advSubtitle}>Большой выбор ресторанов</h3>
            <span className={styles.advText}>Каждый день добавляем новые.</span>
          </div>
        </li>
      </ul>
    </section>
  );
};
