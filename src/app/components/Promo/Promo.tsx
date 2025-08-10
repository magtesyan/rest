"use client";

import styles from "./Promo.module.scss";

import { goToSection } from "@/app/utils/goToFunctions";

export const Promo = () => {
  return (
    <section className={styles.promo}>
      <h1 className={styles.promoTitle}>
        Подарочный сертификат в лучшие рестораны Москвы
      </h1>
      <ul className={styles.promoList}>
        <li className={styles.promoItem}>
          <img
            className={styles.promoIcon}
            src="/icons/promo/eat.svg"
            alt="Еда"
          />
          <p className={styles.promoItemText}>
            <span
              className={styles.promoLink}
              onClick={() => goToSection("#restaurants")}
            >
              Более 100 ресторанов
            </span>
            , кафе и баров Москвы. Каждую неделю добавляем новые.
          </p>
        </li>
        <li className={styles.promoItem}>
          <img
            className={styles.promoIcon}
            src="/icons/promo/present.svg"
            alt="Подарок"
          />
          <p className={styles.promoItemText}>
            <span
              className={styles.promoLink}
              onClick={() => goToSection("#howWorks")}
            >
              Легко дарить:
            </span>{" "}
            купите онлайн и отправьте на email получателю с персональными
            пожеланиями.
          </p>
        </li>
        <li className={styles.promoItem}>
          <img
            className={styles.promoIcon}
            src="/icons/promo/plate.svg"
            alt="Блюда"
          />
          <p className={styles.promoItemText}>
            <span
              className={styles.promoLink}
              onClick={() => goToSection("#faq")}
            >
              Удобно пользоваться:
            </span>
            достаточно назвать номер сертификата, чтобы оплатить счет в
            ресторане
          </p>
        </li>
        <li className={styles.promoItem}>
          <img
            className={styles.promoIcon}
            src="/icons/promo/heart.svg"
            alt="Сердце"
          />
          <p className={styles.promoItemText}>
            <span
              className={styles.promoLink}
              onClick={() => goToSection("#adv")}
            >
              Дарите яркие впечатления
            </span>{" "}
            тем, кого любите: идеальный подарок друзьям, коллегам и близким.
          </p>
        </li>
      </ul>
    </section>
  );
};
