import Image from "next/image";

import { Header } from "./components/Header/Header";
import { Promo } from "./components/Promo/Promo";
import { Advantages } from "./components/Advantages/Advantages";
import { CertForm } from "./components/CertForm/CertForm";

import styles from "./page.module.css";
import { HowWorks } from "./components/HowWorks/HowWorks";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.pageContainer}>
        <Header />
        <main className={styles.main}>
          <Promo />
          <CertForm />
          <Advantages />
          <HowWorks />
        </main>
        <footer className={styles.footer}></footer>
      </div>
    </div>
  );
}
