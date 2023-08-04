import styles from './posts.module.css';

/* eslint-disable-next-line */
export interface PostsProps {}

export function Posts(props: PostsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Posts!</h1>
      <h3>Third subtitle.</h3>
    </div>
  );
}

export default Posts;
