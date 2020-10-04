import React, { useState } from "react";
import { withStyles, Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

import theme from "theme";

const LoginForm = () => {
  const [isForgotPasswordShown, setIsForgotPasswordShown] = useState<boolean>(
    false
  );

  const onFocusHandler = () => setIsForgotPasswordShown(true);
  const onBlurHandler = () => setIsForgotPasswordShown(false);

  return (
    <div
      className="login-form-section"
      style={{
        position: "fixed",
        display: "flex",
        alignItems: "center",
        marginLeft: 120,
        top: 20,
      }}
    >
      <form noValidate autoComplete="off" style={{ position: "relative" }}>
        <StyledInput
          id="filled-basic"
          label="Тел., ел.пошта або ім'я"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <StyledInput
          label="Пароль"
          type="password"
          id="password-input"
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <a
          className={`forgot-password ${
            isForgotPasswordShown
              ? "forgot-password-active"
              : "forgot-password-inactive"
          }`}
          href="#"
        >
          Забули пароль?
        </a>
      </form>
      <StyledButton fullWidth variant="outlined" color="secondary">
        Увійти
      </StyledButton>
    </div>
  );
};

const StyledButton = withStyles({
  root: {
    width: 70,
    marginLeft: 20,
    borderRadius: 20,
    fontSize: 15,
    padding: "5px 40px",
    textTransform: "none",
  },
})(Button);

const StyledInput = withStyles({
  root: {
    backgroundColor: "#f5f8fa",
    marginLeft: 20,
    width: 210,
    "&:hover": {
      backgroundColor: "#f5f8fa",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "black",
      borderBottomWidth: 2,
    },
    "& label": {
      padding: 10,
      fontSize: 18,
      width: "100%",
    },
    "& label.Mui-focused": {
      color: theme.palette.primary.dark,
    },
    "& input": {
      textIndent: 10,
      fontSize: 20,
    },
  },
})(TextField);

export default LoginForm;
