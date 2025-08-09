import Image from "next/image";

import { Header } from "./components/Header/Header";
import { Promo } from "./components/Promo/Promo";
import { Advantages } from "./components/Advantages/Advantages";
import { CertForm } from "./components/CertForm/CertForm";
import { HowWorks } from "./components/HowWorks/HowWorks";
import { Faq } from "./components/Faq/Faq";
import { Footer } from "./components/Footer/Footer";

import styles from "./page.module.css";

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
          <Faq />
        </main>
        <Footer />
      </div>
    </div>
  );
}
