import React, { useState } from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Typography, withStyles } from "@material-ui/core";

import StyledButton from "components/Button";
import styled from "styled-components";
import theme from "theme";

import LoginForm from "./LoginForm";
import RegisterModal from "./RegisterModal";

const FormDataSection = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);

  return (
    <Container>
      <LoginWrapper>
        <Icon style={{ fontSize: 45, marginBottom: 20 }} />
        <LoginTypography variant="h5">
          Дізнайтесь, що відбувається у світі просто зараз
        </LoginTypography>

        <JoinTypography variant="h6">
          Приєднуйтеся до Твіттера вже сьогодні.
        </JoinTypography>
        <StyledButton
          onClick={() => setIsModalOpen(true)}
          label="Зареєструватися"
          isFullWidth={true}
          bottom={20}
          bgColor={theme.colors.darkBlue}
        />
        <StyledButton
          onClick={() => setIsModalOpen(true)}
          label="Увійти"
          isFullWidth={true}
          isOutlined={true}
          labelColor={theme.colors.darkenBlue}
          bgColor={theme.colors.white}
        />
      </LoginWrapper>
      <RegisterModal
        isModalVisible={isModalOpen}
        setIsModalVisible={() => setIsModalOpen(false)}
      />

      <LoginForm />
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 50.4%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: -10px;
`;

const LoginWrapper = styled.div`
  width: 380px;
`;

const Icon = styled(TwitterIcon)`
  color: ${(props) => props.theme.colors.darkBlue};
`;

const JoinTypography = withStyles({
  root: {
    fontSize: 14,
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
