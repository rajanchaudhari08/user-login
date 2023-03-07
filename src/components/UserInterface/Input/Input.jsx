import React, { useRef, useImperativeHandle } from "react";
import styles from "./Input.module.css";

const Input = React.forwardRef((properties, ref) => {
  const refInput = useRef();
  const activateFocus = () => {
    refInput.current.focus();
  };
  useImperativeHandle(ref, () => {
    return {
      focus: activateFocus,
    };
  });
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
          ref={refInput}
        />
      </div>
    </React.Fragment>
  );
});

export default Input;
