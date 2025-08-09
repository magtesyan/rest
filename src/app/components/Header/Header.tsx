import Link from "next/link";

import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src="/icons/burger.svg" alt="Menu" />
      <Link href="/">
        <img className={styles.logo} src="/icons/logo.svg" alt="Logo" />
      </Link>
      <a className={styles.socialLink} href="https://t.me/kseniya_rusakova">
        <img src="/icons/tg.svg" alt="Telegram" />
      </a>
    </header>
  );
};
