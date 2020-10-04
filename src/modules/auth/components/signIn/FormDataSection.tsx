import React from "react";

import TwitterIcon from "@material-ui/icons/Twitter";
import { Typography, withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import LoginForm from "./LoginForm";

interface FormDataSectionProps {
  loginSection: any;
  loginWrapper: any;
}

const FormDataSection = ({
  loginSection,
  loginWrapper,
}: FormDataSectionProps) => {
  return (
    <div className={loginSection}>
      <LoginForm />
      <div className={loginWrapper}>
        <TwitterIcon
          color="secondary"
          style={{ fontSize: 45, marginBottom: 20 }}
        />
        <LoginTypography variant="h5">
          Дізнайтесь, що відбувається у світі просто зараз
        </LoginTypography>

        <JoinTypography variant="h6">
          Приєднуйтеся до Твіттера вже сьогодні.
        </JoinTypography>
        <Buttons
          fullWidth
          variant="contained"
          color="secondary"
          style={{ color: "#fff" }}
        >
          Зареєструватися
        </Buttons>
        <Buttons fullWidth variant="outlined" color="secondary">
          Увійти
        </Buttons>
      </div>
    </div>
  );
};

const Buttons = withStyles({
  root: {
    borderRadius: 40,
    marginBottom: 10,
    height: 40,
    fontSize: 15,
    fontWeight: 700,
    textTransform: "none",
  },
})(Button);

const JoinTypography = withStyles({
  root: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 700,
  },
})(Typography);

const LoginTypography = withStyles({
  root: {
    fontWeight: 700,
    marginBottom: 45,
    fontSize: 30,
  },
})(Typography);

export default FormDataSection;