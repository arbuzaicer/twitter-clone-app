import React from "react";
import { Typography } from "@material-ui/core";

import TwitterIcon from "@material-ui/icons/Twitter";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import styled from "styled-components";

const TypographySection = () => (
  <Container>
    <Icon color="secondary" />
    <ListWrapper>
      <ListItem>
        <SearchOutlinedIcon />
        <TypographyStyles>Читайте те, що вам цікаво.</TypographyStyles>
      </ListItem>
      <ListItem>
        <PeopleOutlineIcon />
        <TypographyStyles>Послухайте, про що говорять люди.</TypographyStyles>
      </ListItem>
      <ListItem>
        <ChatBubbleOutlineOutlinedIcon />
        <TypographyStyles>Долучайтесь до розмов.</TypographyStyles>
      </ListItem>
    </ListWrapper>
  </Container>
);

const Container = styled.div`
  position: relative;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.mainBlue};
  height: 100%;
  width: 49.6%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled(TwitterIcon)`
  position: absolute;
  left: 72%;
  top: 48%;
  transform: translate(-50%, -50%);
  width: 185% !important;
  height: 185% !important;
  color: ${(props) => props.theme.colors.darkBlue} !important;
`;

const TypographyStyles = styled(Typography)`
  margin-left: 20px;
  font-size: 20px;
  font-weight: 800;
`;

const ListWrapper = styled.ul`
  color: ${(props) => props.theme.colors.white};
  width: 40%;
  z-index: 2;
`;

const ListItem = styled.li`
  display: flex;
  margin-bottom: 40px;
`;

export default TypographySection;
