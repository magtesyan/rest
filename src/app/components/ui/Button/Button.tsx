import clsx from "clsx";

import styles from "./Button.module.scss";

interface ButtonProps {
  text: string;
  onClick: () => void;
  isCurrent?: boolean;
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={clsx(styles.button, props.isCurrent && styles.button_current)}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};
