import styles from './other.module.css';

/* eslint-disable-next-line */
export interface OtherProps {}

export function Other(props: OtherProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Other!</h1>
    </div>
  );
}

export default Other;
