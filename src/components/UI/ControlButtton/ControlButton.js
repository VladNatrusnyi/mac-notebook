import  styles from './ControlButton.module.css'
export const ControlButton = ({ disabled, onClick, icon }) => {
  return (
    <button
      className={`${styles.wrapper} ${disabled ? styles.disabled : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <i style={{fontSize: 24}}  className={`bi ${icon}`}></i>}
    </button>
  );
}
