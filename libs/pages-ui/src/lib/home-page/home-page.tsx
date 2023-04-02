import styles from './home-page.module.scss';

/* eslint-disable-next-line */
export interface HomePageProps {}

export function HomePage(props: HomePageProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to HomePage!</h1>
      <ul className={styles["list-group"]}>
        <li className={styles["list-group-item"]}>An item</li>
        <li className={styles["list-group-item"]}>A second item</li>
        <li className={styles["list-group-item"]}>A third item</li>
        <li className={styles["list-group-item"]}>A fourth item</li>
        <li className={styles["list-group-item"]}>And a fifth one</li>
      </ul>
    </div>
  );
}

export default HomePage;
