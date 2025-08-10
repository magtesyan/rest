import styles from "./RestItem.module.scss";

export interface RestItem {
  name: string;
  img: string;
}

interface RestItemProps {
  rest: RestItem;
}

export const RestItem = (props: RestItemProps) => {
  const background = `linear-gradient(rgba(26, 40, 89, 0) 39.21%, #171717), url("/rests/${props.rest.img}")`;

  return (
    <li className={styles.restItem} style={{ backgroundImage: background }}>
      <span className={styles.restName}>{props.rest.name}</span>
    </li>
  );
};
