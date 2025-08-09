"use client";

import { goToSection } from "@/app/utils/goToFunctions";
import { Button } from "../ui/Button/Button";
import styles from "./HowWorks.module.scss";

export const HowWorks = () => {
  return (
    <section className={styles.howWorks} id="howWorks">
      <h2 className={styles.howWorksTitle}>Как это работает</h2>
      <ul className={styles.howWorksList}>
        <li className={styles.howWorksItem}>
          <span className={styles.howWorksNumber}>01</span>
          <p className={styles.howWorksText}>
            Вы выбираете номинал сертификата и оплачиваете подарок.
          </p>
        </li>
        <li className={styles.howWorksItem}>
          <span className={styles.howWorksNumber}>02</span>
          <p className={styles.howWorksText}>
            Мы отправляем сертификат на email вам или получателю. Если решите
            сами вручить сертификат, распечатайте его или пришлите ссылкой в
            мессенджере.
          </p>
        </li>
        <li className={styles.howWorksItem}>
          <span className={styles.howWorksNumber}>03</span>
          <p className={styles.howWorksText}>
            Получатель выбирает на сайте любой ресторан, в который захочет
            сходить по сертификату.
          </p>
        </li>
        <li className={styles.howWorksItem}>
          <span className={styles.howWorksNumber}>04</span>
          <p className={styles.howWorksText}>
            Ресторан принимает у гостя сертификат по шестизначному номеру.
          </p>
        </li>
        <li className={styles.howWorksItem}>
          <span className={styles.howWorksNumber}>05</span>
          <p className={styles.howWorksText}>
            Получатель посещает один или несколько ресторанов — и радуется
            вашему подарку.
          </p>
        </li>
        <li className={styles.howWorksItem_button}>
          <Button
            text="Подарить сертификат"
            onClick={() => goToSection("#certForm")}
            isCurrent={true}
          />
        </li>
      </ul>
    </section>
  );
};
