import React, { useState, useEffect, useReducer } from "react";
import styles from "./Login.module.css";
import Card from "../UserInterface/Card/Card";
import Button from "../UserInterface/Button/Button";

const reducerInputEmail = (state, action) => {
  if (action.type === "INPUT_EMAIL") {
    return {
      value: action.inputvalue,
      isValid: action.inputvalue.includes("@"),
    };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: state.value.includes("@"),
    };
  }
  return {
    value: "",
    isValid: false,
  };
};

const Login = (properties) => {
  // const [inputEmail, setInputEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();

  const [inputPassword, setInputPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();

  const [formIsValid, setFormIsValid] = useState(false);

  const [stateInputEmail, dispatchInputEmail] = useReducer(reducerInputEmail, {
    value: "",
    isValid: null,
  });

  /* For reference */
  /* 
  useEffect(() => {
    console.log("useEffect started");
    return () => {
      console.log("useEffect ended");
    };
  }, []);
  */
  /*
  useEffect(() => {
    const timeoutIdentifier = setTimeout(() => {
      // console.log("HTTP Request sent.");
      setFormIsValid(
        inputEmail.includes("@") &&
          inputEmail.includes(".") &&
          inputPassword.trim().length > 7
      );
    }, 1000);

    return () => {
      clearTimeout(timeoutIdentifier);
    };
  }, [inputEmail, inputPassword]);
  */

  const emailChangeHandler = (event) => {
    // setInputEmail(event.target.value);
    dispatchInputEmail({ type: "INPUT_EMAIL", inputvalue: event.target.value });

    setFormIsValid(
      event.target.value.includes("@") &&
        event.target.value.includes(".") &&
        inputPassword.trim().length > 7
    );
  };

  const passwordChangeHandler = (event) => {
    setInputPassword(event.target.value);
    setFormIsValid(
      stateInputEmail.isValid && event.target.value.trim().length > 7
    );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(stateInputEmail.isValid);
    dispatchInputEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(inputPassword.trim().length > 7);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    properties.onLogin(stateInputEmail.value, inputPassword);
    // console.log(inputEmail, inputPassword);
  };

  return (
    <Card className={styles.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${styles.control} ${
            stateInputEmail.isValid === false ? styles.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={stateInputEmail.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${styles.control} ${
            passwordIsValid === false ? styles.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={inputPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={styles.actions}>
          <Button type="submit" disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
