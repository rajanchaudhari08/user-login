import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
  useRef,
} from "react";
import styles from "./Login.module.css";
import Card from "../UserInterface/Card/Card";
import Button from "../UserInterface/Button/Button";
import AuthenticationContext from "../../../AuthenticationContext/authentication-context";
import Input from "../UserInterface/Input/Input";

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

const reducerInputPassword = (state, action) => {
  if (action.type === "INPUT_PASSWORD") {
    return {
      value: action.inputvalue,
      isValid: action.inputvalue.trim().length > 7,
    };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: state.value.trim().length > 7,
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

  // const [inputPassword, setInputPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();

  const [formIsValid, setFormIsValid] = useState(false);

  const [stateInputEmail, dispatchInputEmail] = useReducer(reducerInputEmail, {
    value: "",
    isValid: null,
  });

  const [stateInputPassword, dispatchInputPassword] = useReducer(
    reducerInputPassword,
    {
      value: "",
      isValid: null,
    }
  );

  /* Object De-structuring */
  const { isValid: isValidEmail } = stateInputEmail;
  const { isValid: isValidPassword } = stateInputPassword;

  const loginAuthenticationContext = useContext(AuthenticationContext);

  const refInputEmail = useRef();
  const refInputPassword = useRef();

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
    const timeoutIdentifier = setTimeout(() => {
      // console.log("HTTP Request sent.");
      setFormIsValid(isValidEmail && isValidPassword);
    }, 1000);

    return () => {
      // console.log("Cleanup completed");
      clearTimeout(timeoutIdentifier);
    };
  }, [isValidEmail, isValidPassword]);

  const emailChangeHandler = (event) => {
    // setInputEmail(event.target.value);
    dispatchInputEmail({ type: "INPUT_EMAIL", inputvalue: event.target.value });
    /*
    setFormIsValid(
      event.target.value.includes("@") &&
        event.target.value.includes(".") &&
        stateInputPassword.isValid
    );
    */
  };

  const passwordChangeHandler = (event) => {
    // setInputPassword(event.target.value);
    dispatchInputPassword({
      type: "INPUT_PASSWORD",
      inputvalue: event.target.value,
    });
    /*
    setFormIsValid(
      stateInputEmail.isValid && event.target.value.trim().length > 7
    );
    */
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(stateInputEmail.isValid);
    dispatchInputEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(inputPassword.trim().length > 7);
    dispatchInputPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      loginAuthenticationContext.onLogin(
        stateInputEmail.value,
        stateInputPassword.value
      );
    } else if (!isValidEmail) {
      refInputEmail.current.focus();
    } else {
      refInputPassword.current.focus();
    }
    // console.log(inputEmail, inputPassword);
  };

  return (
    <Card className={styles.login}>
      <form onSubmit={submitHandler}>
        <Input
          id="email"
          label="E-Mail"
          type="email"
          value={stateInputEmail.value}
          isValid={isValidEmail}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          ref={refInputEmail}
        />
        <Input
          id="password"
          label="Password"
          type="password"
          value={stateInputPassword.value}
          isValid={isValidPassword}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          ref={refInputPassword}
        />
        <div className={styles.actions}>
          <Button type="submit">Login</Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
