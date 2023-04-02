import styles from './pages-ui.module.scss';

/* eslint-disable-next-line */
export interface PagesUiProps {}

export function PagesUi(props: PagesUiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to PagesUi!</h1>
    </div>
  );
}

export default PagesUi;
