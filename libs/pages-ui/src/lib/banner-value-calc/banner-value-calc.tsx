import styles from './banner-value-calc.module.scss';

/* eslint-disable-next-line */
export interface BannerValueCalcProps {}

export function BannerValueCalc(props: BannerValueCalcProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to BannerValueCalc!</h1>
    </div>
  );
}

export default BannerValueCalc;
