import React, { useState, useEffect } from "react";
import styles from "./Login.module.css";
import Card from "../UserInterface/Card/Card";
import Button from "../UserInterface/Button/Button";

const Login = (properties) => {
  const [inputEmail, setInputEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();

  const [inputPassword, setInputPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();

  const [formIsValid, setFormIsValid] = useState(false);

  /* For reference */
  /* 
  useEffect(() => {
    console.log("useEffect started");
    return () => {
      console.log("useEffect ended");
    };
  }, []);
  */

  useEffect(() => {
    /* Sending HTTP Request after specific time interval - Debounce Function*/

    const timeoutIdentifier = setTimeout(() => {
      // console.log("HTTP Request sent.");
      setFormIsValid(
        inputEmail.includes("@") &&
          inputEmail.includes(".") &&
          inputPassword.trim().length > 7
      );
    }, 1000);

    /* Cleanup Function */

    return () => {
      // console.log("Cleanup Function");
      clearTimeout(timeoutIdentifier);
    };
  }, [inputEmail, inputPassword]);

  const emailChangeHandler = (event) => {
    setInputEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setInputPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    setEmailIsValid(inputEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(inputPassword.trim().length > 7);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    properties.onLogin(inputEmail, inputPassword);
    // console.log(inputEmail, inputPassword);
  };

  return (
    <Card className={styles.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${styles.control} ${
            emailIsValid === false ? styles.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={inputEmail}
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
