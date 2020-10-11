import React, { useState } from "react";
import styled from "styled-components";

import StyledButton from "components/Button";
import theme from "theme";
import StyledInput from "components/Input";

const LoginForm = () => {
  const [isForgotPasswordShown, setIsForgotPasswordShown] = useState<boolean>(
    false
  );

  const onFocusHandler = () => setIsForgotPasswordShown(true);
  const onBlurHandler = () => setIsForgotPasswordShown(false);

  return (
    <Container className="login-form-section">
      <HeaderForm
        noValidate
        autoComplete="off"
        style={{ position: "relative" }}
      >
        <StyledInput label="Тел., ел.пошта або ім'я" shrink />
        <StyledInput
          label="Пароль"
          type="password"
          shrink={true}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
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
      </HeaderForm>
      <StyledButton
        width={70}
        label="Увійти"
        isOutlined={true}
        onClick={() => {}}
        bgColor={theme.colors.white}
        labelColor={theme.colors.darkenBlue}
      />
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  margin-left: 120px;
  top: 20px;
`;

const HeaderForm = styled.form`
  position: relative;
`;

export default LoginForm;
