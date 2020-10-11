import React from "react";
import styled from "styled-components";

import Footer from "../components/signIn/Footer";
import FormDataSection from "../components/signIn/FormDataSection";
import TypographySection from "../components/signIn/TypographySection";

const SignIn = () => {
  return (
    <>
      <Wrapper>
        <TypographySection />
        <FormDataSection />
      </Wrapper>
      <Footer />
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: 92%;
`;

export default SignIn;
