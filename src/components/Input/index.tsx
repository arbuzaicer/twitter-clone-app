import { TextField } from "@material-ui/core";

import React from "react";
import styled from "styled-components";
import theme from "theme";

interface StyleButtonsProps {
  label: string;
  width?: number;
  value?: string;
  height?: number;
  bgColor?: string;
  labelColor?: string;
  shrink?: boolean;
  isFullWidth?: boolean;
  type?: "text" | "password";
  onFocus?: () => void;
  onBlur?: () => void;
  onChange?: (e: any) => void;
}

const StyledInput = ({
  label,
  width = 250,
  height = 50,
  shrink = false,
  isFullWidth = false,
  bgColor = theme.colors.lightWhite,
  labelColor = "white",
  type = "text",
  onFocus,
  onBlur,
  value,
  onChange,
}: StyleButtonsProps) => {
  return (
    <Wrapper
      width={width}
      label={label}
      height={height}
      bgcolor={bgColor}
      type={type}
      labelcolor={labelColor}
      InputLabelProps={{
        shrink: shrink,
      }}
      onFocus={onFocus}
      onBlur={onBlur}
      fullwidth={isFullWidth ? isFullWidth.toString() : undefined}
      value={value}
      onChange={onChange}
    />
  );
};

const Wrapper = styled(TextField)<{
  width: number;
  height: number;
  bgcolor: string;
  labelcolor: string;
  fullwidth?: string;
}>`
  height: ${(props) => props.height}px !important;
  width: ${(props) =>
    props.fullwidth ? "100%" : props.width + "px"} !important;
  color: ${(props) => props.labelcolor} !important;
  background-color: ${(props) => props.bgcolor} !important;
  font-weight: 600 !important;
  margin-right: 20px !important;

  .MuiInputBase-input {
    padding: 6px 10px 7px !important;
  }

  .MuiInput-underline:before {
    border-bottom-color: black;
    border-bottom-width: 1px;
  }
  .MuiInput-underline:after {
    border-bottom-color: ${({ theme }) => theme.colors.darkBlue};
  }
  & > label {
    padding: 10px;
    font-size: 16px;
    width: 100%;
  }

  & > label.Mui-focused {
    color: ${(props) => props.theme.colors.darkBlue};
  }
`;

export default StyledInput;
