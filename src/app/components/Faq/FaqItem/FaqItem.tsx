"use client";

import { ReactElement, useState } from "react";
import clsx from "clsx";

import styles from "./FaqItem.module.scss";

export interface FaqItem {
  question: string;
  answer: ReactElement;
}

interface FaqItemProps {
  faqItem: FaqItem;
}

export const FaqItem = (props: FaqItemProps) => {
  const [isOpen, toggle] = useState(false);

  return (
    <li className={styles.faqItem}>
      <div>
        <button className={styles.question} onClick={() => toggle(!isOpen)}>
          {props.faqItem.question}
          <img
            className={clsx(styles.faqIcon, isOpen && styles.faqIcon_closed)}
            src={`/icons/faq/plus.svg`}
            alt="Раскрыть"
          />
        </button>
      </div>
      {isOpen && <div className={styles.answer}>{props.faqItem.answer}</div>}
    </li>
  );
};
