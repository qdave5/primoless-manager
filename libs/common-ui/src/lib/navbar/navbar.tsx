import styles from './navbar.module.scss';

/* eslint-disable-next-line */
export interface NavbarProps {}

export function Navbar(props: NavbarProps) {
  return (
    <nav className={[styles["navbar"], styles["navbar-expand-lg"], styles["navbar-dark"]].join(" ")}>
      <div className={styles["container-fluid"]}>
        <a className={styles["navbar-brand"]} href='/'>Navbar</a>
        <button className={styles["navbar-toggler"]} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className={styles["navbar-toggler-icon"]}></span>
        </button>
        <div className={[styles["collapse"], styles["navbar-collapse"]].join(" ")} id="navbarSupportedContent">
          <ul className={[styles["navbar-nav"], styles["me-auto"], styles["mb-2"], styles["mb-lg-0"]].join(" ")}>
            <li className={styles["nav-item"]}>
              <a className={[styles["nav-link"]].join(" ")} aria-current="page" href='/'>Home</a>
            </li>
            <li className={styles["nav-item"]}>
              <a className={styles["nav-link"]} href='/banner-value'>Banner Value</a>
            </li>
            <li className={[styles["nav-item"], styles["dropdown"]].join(" ")}>
              <a className={[styles["nav-link"], styles["dropdown-toggle"]].join(" ")} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className={styles["dropdown-menu"]} aria-labelledby="navbarDropdown">
                <li><a className={styles["dropdown-item"]} href="#">Action</a></li>
                <li><a className={styles["dropdown-item"]} href="#">Another action</a></li>
                <li><hr className={styles["dropdown-divider"]}/></li>
                <li><a className={styles["dropdown-item"]} href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
