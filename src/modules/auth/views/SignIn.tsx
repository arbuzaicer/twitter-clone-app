import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Footer from "../components/signIn/Footer";
import FormDataSection from "../components/signIn/FormDataSection";
import TypographySection from "../components/signIn/TypographySection";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    height: "92%",
  },
  typographySection: {
    position: "relative",
    overflow: "hidden",
    backgroundColor: theme.palette.primary.main,
    height: "100%",
    width: "49.6%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& ul": {
      color: theme.palette.primary.light,
      width: "40%",
      zIndex: 2,
      "& li": {
        display: "flex",
        marginBottom: 40,
      },
    },
  },
  typographyIcon: {
    position: "absolute",
    left: "72%",
    top: "48%",
    transform: "translate(-50%, -50%)",
    width: "185%",
    height: "185%",
  },
  loginSection: {
    height: "100%",
    width: "50.4%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop: -10,
  },
  loginWrapper: {
    width: 380,
  },
  footer: {
    padding: "10px 15px",
    margin: 0,
    "& ul": {
      display: "flex",
      flexWrap: "wrap",
      margin: 0,
      padding: 0,
      justifyContent: "center",
      "& li": {
        listStyle: "none",
        marginLeft: 15,
        color: "rgb(101, 119, 134)",
        fontSize: 13,
        lineHeight: 2,
        "& a": {
          textDecoration: "none",
          color: "rgb(101, 119, 134)",
          fontSize: 13,
          "&:hover": {
            textDecoration: "underline",
          },
        },
      },
    },
  },
}));

const SignIn = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.wrapper}>
        <TypographySection
          typographySection={classes.typographySection}
          typographyIcon={classes.typographyIcon}
        />
        <FormDataSection
          loginSection={classes.loginSection}
          loginWrapper={classes.loginWrapper}
        />
      </div>
      <Footer footer={classes.footer} />
    </>
  );
};

export default SignIn;
