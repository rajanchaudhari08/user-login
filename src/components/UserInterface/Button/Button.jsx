import styles from "./Button.module.css";

const Button = (properties) => {
  return (
    <button
      type={properties.type || "button"}
      className={`${styles.button} ${properties.className}`}
      onClick={properties.onClick}
      disabled={properties.disabled}
    >
      {properties.children}
    </button>
  );
};

export default Button;
