import { Typography } from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import { withStyles } from "@material-ui/core/styles";
import TwitterIcon from "@material-ui/icons/Twitter";
import React, { useState } from "react";
import styled from "styled-components";
import * as Yup from "yup";

import StyledButton from "components/Button";
import StyledInput from "components/Input";
import theme from "theme";

import SelectFormControl from "./SelectFormControl";
import { Formik, Form, Field } from "formik";

interface RegisterModalProps {
  isModalVisible: boolean;
  setIsModalVisible: () => void;
}

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const RegisterModal = ({
  isModalVisible,
  setIsModalVisible,
}: RegisterModalProps) => {
  const MAX_NAME_LENGTH = 50;

  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [userPhone, setUserPhone] = useState<string>("");
  const [isEmailFieldSelected, setIsEmailFieldSelected] = useState<boolean>(
    false
  );

  const [month, setMonth] = useState<string>("");

  const [days, setDays] = useState<string>("");

  const [year, setYear] = useState<string>("");

  // TODO: add to
  const setNameHandler = (e: any) => {
    const { value } = e.target;
    setUserName(value.slice(0, MAX_NAME_LENGTH));
  };

  const onSubmit = (e: any) => {
    console.log(month, days, year, userName);
  };

  const validateEmail = (value: string) => {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  };

  return (
    <ModalContainer
      open={isModalVisible}
      onClose={setIsModalVisible}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isModalVisible}>
        <Wrapper>
          <FormHeader>
            <TwitterIcon
              style={{ fontSize: 30, color: theme.colors.darkBlue }}
            />
            <NextButtonWrapper>
              <StyledButton
                label="Далі"
                width={50}
                height={30}
                onClick={onSubmit}
              />
            </NextButtonWrapper>
          </FormHeader>
          <Formik
            onSubmit={(values) => console.log(values)}
            validationSchema={SignupSchema}
            initialValues={{
              userName,
              email,
              userPhone,
            }}
          >
            {({ errors, touched, isValidating }) => (
              <Form>
                {({ errors, touched }: any) => (
                  <Form>
                    <Field name="firstName" />
                    {errors.firstName && touched.firstName ? (
                      <div>{errors.firstName}</div>
                    ) : null}
                    <Field name="userPhone" />
                    {errors.userPhone && touched.userPhone ? (
                      <div>{errors.userPhone}</div>
                    ) : null}
                    <Field name="email" type="email" />
                    {errors.email && touched.email ? (
                      <div>{errors.email}</div>
                    ) : null}
                    <button type="submit">Submit</button>
                  </Form>
                )}
              </Form>
            )}
          </Formik>
        </Wrapper>
      </Fade>
    </ModalContainer>
  );
};

const ModalContainer = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  height: 67%;
  width: 600px;
  border-radius: 18px;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: column;
`;

const NextButtonWrapper = styled.div`
  position: absolute;
  right: 25px;
`;

const FormHeader = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const FormBody = styled.div`
  padding: 20px 30px;
`;

const ChartCounter = styled.p`
  color: ${(props) => props.theme.colors.textGray};
  font-size: 14px;
  margin: 10px 0;
  float: right;
`;

const MailText = styled.p`
  font-size: 14px;
  margin-top: 25px;
  color: ${(props) => props.theme.colors.darkBlue};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const StyledHeaderText = withStyles({
  root: {
    fontWeight: 800,
    fontSize: 23,
  },
})(Typography);

const StyledDateBirthText = withStyles({
  root: {
    fontWeight: 800,
    fontSize: 16,
    color: "black",
  },
})(Typography);

{/*<StyledHeaderText variant="h5">*/}
{/*  Створіть свій профіль*/}
{/*</StyledHeaderText>*/}
{/*<div*/}
{/*  style={{*/}
{/*    marginTop: 25,*/}
{/*  }}*/}
{/*>*/}
{/*  <StyledInput*/}
{/*    label="Ім'я"*/}
{/*    value={userName}*/}
{/*    onChange={setNameHandler}*/}
{/*    shrink={true}*/}
{/*    isFullWidth={true}*/}
{/*  />*/}
{/*  <ChartCounter>*/}
{/*    {userName.length}/{MAX_NAME_LENGTH}*/}
{/*  </ChartCounter>*/}
{/*</div>*/}
{/*<div*/}
{/*  style={{*/}
{/*    marginTop: 50,*/}
{/*  }}*/}
{/*>*/}
{/*  {isEmailFieldSelected ? (*/}
{/*    <Field name="email">*/}
{/*      {({ field, form: { touched, errors }, meta }) => (*/}
{/*        <StyledInput*/}
{/*          label={"Ел. пошта"}*/}
{/*          shrink*/}
{/*          isFullWidth*/}
{/*          value={email}*/}
{/*          onChange={(e: any) => setEmail(e.target.value)}*/}
{/*        />*/}
{/*      )}*/}
{/*    </Field>*/}
{/*  ) : (*/}
{/*    <StyledInput*/}
{/*      label={"Телефон"}*/}
{/*      shrink*/}
{/*      isFullWidth*/}
{/*      value={userPhone}*/}
{/*      onChange={(e: any) =>*/}
{/*        !isNaN(e.target.value) && setUserPhone(e.target.value)*/}
{/*      }*/}
{/*    />*/}
{/*  )}*/}

{/*  <MailText*/}
{/*    onClick={() => setIsEmailFieldSelected((prev) => !prev)}*/}
{/*  >*/}
{/*    {isEmailFieldSelected*/}
{/*      ? "Використати номер тел."*/}
{/*      : "Використати ел. пошту"}*/}
{/*  </MailText>*/}
{/*</div>*/}
{/*<div*/}
{/*  style={{*/}
{/*    marginTop: 30,*/}
{/*    color: theme.colors.textGray,*/}
{/*    fontSize: 14,*/}
{/*  }}*/}
{/*>*/}
{/*  <StyledDateBirthText variant="h6">*/}
{/*    Дата народження*/}
{/*  </StyledDateBirthText>*/}
{/*  <p>*/}
{/*    Ці дані не будуть загальнодоступні. Підтвердьте свій вік,*/}
{/*    навіть якщо це профіль компанії, домашнього улюбленця чи ще*/}
{/*    щось.*/}
{/*  </p>*/}
{/*</div>*/}
{/*<SelectFormControl*/}
{/*  month={month}*/}
{/*  days={days}*/}
{/*  year={year}*/}
{/*  setDays={setDays}*/}
{/*  setMonth={setMonth}*/}
{/*  setYear={setYear}*/}
{/*/>*/}

export default RegisterModal;
