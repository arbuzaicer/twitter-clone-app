import React, { SyntheticEvent, useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TwitterIcon from "@material-ui/icons/Twitter";
import Button from "@material-ui/core/Button";
import theme from "theme";
import {
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    height: "67%",
    width: 600,
    borderRadius: 18,
    backgroundColor: theme.palette.primary.light,
    display: "flex",
    flexDirection: "column",
  },
  headerPart: {
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  formPart: {
    border: "2px solid red",
    padding: "20px 30px",
  },
  counterPart: {
    color: theme.palette.primary.contrastText,
    fontSize: 14,
    marginRight: 10,
    margin: "10px 0",
    float: "right",
  },
  mailText: {
    fontSize: 14,
    marginTop: 25,
    color: theme.palette.primary.dark,
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

interface RegisterModalProps {
  isModalVisible: boolean;
  setIsModalVisible: () => void;
}

const RegisterModal = ({
  isModalVisible,
  setIsModalVisible,
}: RegisterModalProps) => {
  const classes = useStyles();
  const MAX_NAME_LENGTH = 50;
  const [userName, setUserName] = useState<string>("");
  const [isEmailFieldSelected, setIsEmailFieldSelected] = useState<boolean>(
    false
  );
  const MONTH_DATA = [
    "Січень",
    "Лютий",
    "Береень",
    "Квітень",
    "Травень",
    "Червень",
    "Липень",
    "Серпень",
    "Вересень",
    "Жовтень",
    "Листопад",
    "Грудень",
  ];

  const setNameHandler = (e: any) => {
    if (userName.length >= MAX_NAME_LENGTH) {
      return;
    }
    setUserName(e.target.value);
  };

  return (
    <Modal
      className={classes.modal}
      open={isModalVisible}
      onClose={setIsModalVisible}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isModalVisible}>
        <div className={classes.wrapper}>
          <div className={classes.headerPart}>
            <TwitterIcon color="secondary" style={{ fontSize: 30 }} />
            <NextButton variant="contained" color="primary">
              Далі
            </NextButton>
          </div>
          <div className={classes.formPart}>
            <StyledHeaderText variant="h5">
              Створіть свій профіль
            </StyledHeaderText>
            <div
              style={{
                marginTop: 25,
              }}
            >
              <StyledInput
                label="Ім'я"
                value={userName}
                onChange={setNameHandler}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <p className={classes.counterPart}>
                {userName.length}/{MAX_NAME_LENGTH}
              </p>
            </div>
            <div
              style={{
                marginTop: 50,
              }}
            >
              <StyledInput
                label={isEmailFieldSelected ? "Ел. пошта" : "Телефон"}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <p
                className={classes.mailText}
                onClick={() => setIsEmailFieldSelected((prev) => !prev)}
              >
                {isEmailFieldSelected
                  ? "Використати номер тел."
                  : "Використати ел. пошту"}
              </p>
            </div>
            <div
              style={{
                marginTop: 30,
                color: theme.palette.primary.contrastText,
                fontSize: 14,
              }}
            >
              <StyledDateBirthText variant="h6">
                Дата народження
              </StyledDateBirthText>
              <p>
                Ці дані не будуть загальнодоступні. Підтвердьте свій вік, навіть
                якщо це профіль компанії, домашнього улюбленця чи ще щось.
              </p>
              <FormControl className={classes.formControl}>
                <InputLabel shrink id="demo-simple-select-label">
                  Місяць
                </InputLabel>
                <Select>
                  {MONTH_DATA.map((month, index) => (
                    <StyledSelectOption key={month} value={index}>
                      {month}
                    </StyledSelectOption>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
      </Fade>
    </Modal>
  );
};

const NextButton = withStyles({
  root: {
    color: "#fff",
    fontSize: 16,
    textTransform: "none",
    padding: "0px 15px",
    borderRadius: 20,
    position: "absolute",
    right: 15,
    top: 15,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },
})(Button);

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

const StyledInput = withStyles({
  root: {
    backgroundColor: "#f5f8fa",
    width: "100%",
    "&:hover": {
      backgroundColor: "#f5f8fa",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "black",
      borderBottomWidth: 2,
    },
    "& label": {
      padding: "5px 10px",
      fontSize: 20,
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

const StyledSelectOption = withStyles({
  root: {
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
      color: "white",
    },
  },
})(MenuItem);

export default RegisterModal;
