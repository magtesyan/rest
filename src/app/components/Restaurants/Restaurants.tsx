import { rests } from "./restaurants.ts";
import { RestItem } from "./RestItem/RestItem";

import styles from "./Restaurants.module.scss";

export const Restaurants = () => {
  return (
    <section className={styles.restaurants}>
      <h2 className={styles.restaurantsTitle}>Подключенные рестораны</h2>
      <p className={styles.restaurantsPromo}>
        Сертификат дает возможность посетить самые интересные рестораны Москвы с
        отличной едой и атмосферой.
      </p>
      <ul className={styles.restaurantsList}>
        {rests.map((rest, index) => (
          <RestItem key={index} rest={rest} />
        ))}
      </ul>
    </section>
  );
};
