import clsx from "clsx";

import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLinks}>
        <button className={styles.footerLink}>Выбрать город</button>
        <button className={styles.footerLink}>Участвовать в программе</button>
        <button className={styles.footerLink}>
          Пользовательское соглашение
        </button>
        <button className={styles.footerLink}>Телеграм-канал</button>
      </div>
      <div className={styles.contacts}>
        <span className={styles.phone}>8 495 495 49 49</span>
        <a
          className={clsx(styles.email, styles.blueLink)}
          href="mailto:fff@ff.ru"
        >
          rich@successful.ru
        </a>
      </div>
    </footer>
  );
};
