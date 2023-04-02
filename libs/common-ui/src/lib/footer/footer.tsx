import styles from './footer.module.scss';

/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <footer className={[styles["bg-dark"], styles["text-center"], styles["text-lg-start"], styles["text-light"]].join(" ")}>
      {/* <!-- Copyright --> */}
      <div className={[styles["text-center"], styles["p-3"]].join(" ")}>
        <a className={styles["text-light"]} href="https://github.com/qdave5/primoless-manager.git">Primoless-Manager v1.0.0</a>
      </div>
      {/* <!-- Copyright --> */}
    </footer>
  );
}

export default Footer;
