import styles from './CustomBtn.module.css'

export const CustomBtn = ({title, onClick}) => {
  return (
    <button
      className={styles.wrapper}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
