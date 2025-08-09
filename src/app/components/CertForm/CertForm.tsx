"use client";

import { useState } from "react";
import clsx from "clsx";

import styles from "./CertForm.module.scss";
import { Button } from "../ui/Button/Button";

enum Tab {
  FromMe,
  FromCompany,
}

export const CertForm = () => {
  const [tab, setTab] = useState(Tab.FromMe);
  const [priceSelected, setPriceSelected] = useState(10);
  const prices = [10, 15, 20, 30, 50];

  return (
    <div className={styles.certForm}>
      <div className={styles.tabs}>
        <button
          className={clsx(styles.tab, tab === Tab.FromMe && styles.tab_current)}
          onClick={() => setTab(Tab.FromMe)}
        >
          От себя
        </button>
        <button
          className={clsx(
            styles.tab,
            tab === Tab.FromCompany && styles.tab_current
          )}
          onClick={() => setTab(Tab.FromCompany)}
        >
          От компании
        </button>
      </div>

      {tab === Tab.FromMe && (
        <div>
          <p className={clsx(styles.formText, styles.formText_info)}>
            Напишите поздравление и выберите, как подарить сертификат: отправим
            на email вам или получателю.
          </p>
          <p className={clsx(styles.formText, styles.formText_choosePrice)}>
            Выберите номинал сертификата
          </p>
          <div className={styles.formAndCertContainer}>
            <div className={styles.formContainer}>
              <ul className={styles.priceList}>
                {prices.map((price) => (
                  <li key={price}>
                    <Button
                      text={`${price} 000 ₽`}
                      onClick={() => setPriceSelected(price)}
                      isCurrent={priceSelected === price}
                    />
                  </li>
                ))}
              </ul>
              <input
                className={styles.formInput}
                type="text"
                placeholder="От кого"
              />
              <input
                className={styles.formInput}
                type="text"
                placeholder="Кому"
              />
              <input
                className={styles.formInput}
                type="text"
                placeholder="Email получателя"
              />
              <textarea
                className={styles.formTextarea}
                placeholder="Текст поздравления"
              />
            </div>
            <div className={styles.certContainer}>
              <div className={styles.certTitleContainer}>
                <span className={styles.certContainerSubtitle}>
                  Подарочный сертификат
                </span>
                <span className={styles.certContainerText}>
                  В лучшие рестораны Москвы
                </span>
              </div>
              <div className={styles.certTitlsFlex}>
                <div className={styles.certTitleContainer}>
                  <span className={styles.certContainerSubtitle}>Номинал</span>
                  <span
                    className={styles.certContainerText}
                  >{`${priceSelected} 000 ₽`}</span>
                </div>
                <div className={styles.certTitleContainer}>
                  <span className={styles.certContainerSubtitle}>
                    Действителен до
                  </span>
                  <span className={styles.certContainerText}>09.02.2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {tab === Tab.FromCompany && (
        <div>
          <p className={clsx(styles.formText, styles.formText_info)}>
            Сделайте подарок сотрудникам вашей компании — поздравьте с важной
            датой, поблагодарите за отличную работу или компенсируйте затраты на
            питание.
          </p>
          <p className={clsx(styles.formText, styles.formText_choosePrice)}>
            Оставьте заявку, и с вами свяжется менеджер.
          </p>
          <div className={styles.formAndCertContainer}>
            <div className={styles.formContainer}>
              <input
                className={styles.formInput}
                type="text"
                placeholder="Имя"
              />
              <input
                className={styles.formInput}
                type="text"
                placeholder="Телефон"
              />
              <input
                className={styles.formInput}
                type="text"
                placeholder="Название компании"
              />
              <input
                className={styles.formInput}
                type="text"
                placeholder="Email"
              />
              <textarea
                className={styles.formTextarea}
                placeholder="Сообщение"
              />
            </div>
            <div className={styles.certContainer}>
              <div className={styles.certTitleContainer}>
                <span className={styles.certContainerSubtitle}>
                  Подарочный сертификат
                </span>
                <span className={styles.certContainerText}>
                  В лучшие рестораны Москвы
                </span>
              </div>
              <div className={styles.certTitlsFlex}>
                <div className={styles.certTitleContainer}>
                  <span className={styles.certContainerSubtitle}>Номинал</span>
                  <span
                    className={styles.certContainerText}
                  >{`${priceSelected} 000 ₽`}</span>
                </div>
                <div className={styles.certTitleContainer}>
                  <span className={styles.certContainerSubtitle}>
                    Действителен до
                  </span>
                  <span className={styles.certContainerText}>09.02.2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className={styles.payButtonContainer}>
        <Button
          text="Оплатить"
          onClick={() => alert("Сертификат отправлен!")}
          isCurrent={true}
        />
        <p className={styles.consent}>
          Я соглашаюсь с{" "}
          <a href="#" className={styles.blueLink}>
            Условиями обработки персональных данных
          </a>
        </p>
      </div>
    </div>
  );
};
