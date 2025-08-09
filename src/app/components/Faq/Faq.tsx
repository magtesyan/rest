"use client";

import { ReactElement, useState } from "react";
import clsx from "clsx";

import { FaqItem } from "./FaqItem/FaqItem";

import styles from "./Faq.module.scss";
import { Button } from "../ui/Button/Button";

enum FaqTab {
  Answers,
  Question,
}

export const Faq = () => {
  const [tab, setTab] = useState(FaqTab.Answers);

  const faqItems1: FaqItem[] = [
    {
      question: "На какую сумму можно подарить сертификат?",
      answer: (
        <>
          Сертификаты доступны на любую сумму от 5 000 рублей. Стандартно мы
          предлагаем номиналы 50 000, 30 000, 15 000 и 5 000 рублей. Также можно
          задать свою сумму.
        </>
      ),
    },
    {
      question: "Как выглядит сертификат?",
      answer: (
        <>
          Вот в таком виде сертификат приходит получателю:{" "}
          <a className={styles.blueLink}>Сертификат.pdf</a>
        </>
      ),
    },
    {
      question: "Как проверить баланс?",
      answer: (
        <>
          Баланс можно проверить на странице вашего сертификата. Для этого
          перейдите по кнопке «Проверить» из email-письма.
        </>
      ),
    },
    {
      question:
        "Что делать, если стоимость счета в ресторане окажется меньше номинала?",
      answer: (
        <>
          Остаток не сгорает до истечения срока сертификата — он сохранится для
          повторного использования. Можно продолжать посещать рестораны, пока на
          счету есть средства.
        </>
      ),
    },
  ];
  const faqItems2: FaqItem[] = [
    {
      question: "Как долго действует сертификат?",
      answer: (
        <>
          Подарочный сертификат действует 6 месяцев со дня покупки. Срок
          действия всегда можно проверить на сертификате в email письме.
        </>
      ),
    },
    {
      question: "Сколько раз можно использовать сертификат?",
      answer: (
        <>
          Сертификат действует, пока с него не будут списаны все средства или
          пока не закончится срок действия.
        </>
      ),
    },
    {
      question:
        "Что делать, если стоимость счета в ресторане окажется больше номинала?",
      answer: (
        <>
          Все просто: остаток можно доплатить любым удобным способом в
          ресторане.
        </>
      ),
    },
  ];

  return (
    <div className={styles.certForm} id="faq">
      <div className={styles.tabs}>
        <button
          className={clsx(
            styles.tab,
            tab === FaqTab.Answers && styles.tab_current
          )}
          onClick={() => setTab(FaqTab.Answers)}
        >
          Ответы на вопросы
        </button>
        <button
          className={clsx(
            styles.tab,
            tab === FaqTab.Question && styles.tab_current
          )}
          onClick={() => setTab(FaqTab.Question)}
        >
          Задать вопрос
        </button>
      </div>

      {tab === FaqTab.Answers && (
        <div className={styles.faqLists}>
          <ul className={styles.faqList}>
            {faqItems1.map((item, index) => (
              <FaqItem faqItem={item} key={`faqItem-${index}`} />
            ))}
          </ul>
          <ul className={styles.faqList}>
            {faqItems2.map((item, index) => (
              <FaqItem faqItem={item} key={`faqItem-${index}`} />
            ))}
          </ul>
        </div>
      )}

      {tab === FaqTab.Question && (
        <div className={styles.questionContainer}>
          <div className={styles.formContainer}>
            <input className={styles.formInput} type="text" placeholder="Имя" />
            <input
              className={styles.formInput}
              type="text"
              placeholder="Телефон"
            />
            <input
              className={styles.formInput}
              type="text"
              placeholder="Email"
            />
            <textarea
              className={styles.formTextarea}
              placeholder="Ваш вопрос"
            />
            <Button
              className={styles.sendButton}
              text="Отправить"
              onClick={() => {}}
              isCurrent={true}
            />
          </div>
          <div className={styles.questionTitle}>
            Есть вопросы? Напишите нам!
          </div>
        </div>
      )}
    </div>
  );
};
