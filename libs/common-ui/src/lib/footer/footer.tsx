import styles from './footer.module.scss';

/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <footer className={[styles["mt-auto"], styles["py-3"]].join(" ")}>
      <div className={styles["container-fluid"]}>
        <a className={styles[""]} href="./">Primoless-Manager</a>
      </div>
    </footer>
  );
}

export default Footer;
