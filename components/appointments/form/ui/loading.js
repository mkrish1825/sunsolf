import styles from "./loading.module.css";

const Loading = () => {
  return (
    <>
      <div className={styles.loading}></div>;
      <div className={styles.backdrop}></div>
    </>
  );
};

export default Loading;
