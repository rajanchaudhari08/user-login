import React from "react";
import styles from "./Input.module.css";

const Input = (properties) => {
  return (
    <React.Fragment>
      <div
        className={`${styles.control} ${
          properties.isValid === false ? styles.invalid : ""
        }`}
      >
        <label htmlFor={properties.id}>{properties.label}</label>
        <input
          type={properties.type}
          id={properties.id}
          value={properties.value}
          onChange={properties.onChange}
          onBlur={properties.onBlur}
        />
      </div>
    </React.Fragment>
  );
};

export default Input;
