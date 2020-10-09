import React from "react";
import { Typography, withStyles } from "@material-ui/core";

import TwitterIcon from "@material-ui/icons/Twitter";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";

interface TypographySectionProps {
  typographySection: any;
  typographyIcon: any;
}

const TypographySection = ({
  typographySection,
  typographyIcon,
}: TypographySectionProps) => (
  <div className={typographySection}>
    <TwitterIcon color="secondary" className={typographyIcon} />
    <ul>
      <li>
        <SearchOutlinedIcon />
        <TypographyStyles>Читайте те, що вам цікаво.</TypographyStyles>
      </li>
      <li>
        <PeopleOutlineIcon />
        <TypographyStyles>Послухайте, про що говорять люди.</TypographyStyles>
      </li>
      <li>
        <ChatBubbleOutlineOutlinedIcon />
        <TypographyStyles>Долучайтесь до розмов.</TypographyStyles>
      </li>
    </ul>
  </div>
);

const TypographyStyles = withStyles({
  root: {
    marginLeft: "20px",
    fontSize: 20,
    fontWeight: 800,
  },
})(Typography);

export default TypographySection;
