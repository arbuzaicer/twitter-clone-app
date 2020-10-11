import SelectMaterial from "@material-ui/core/Select";

import React from "react";
import styled from "styled-components";
import theme from "theme";

interface StyleButtonsProps {
  children: any;
  width?: number;
  value?: string;
  height?: number;
  bgColor?: string;
  labelColor?: string;
  isFullWidth?: boolean;
  onChange?: (e: any) => void;
}

const Select = ({
  children,
  width = 250,
  height = 50,
  isFullWidth = false,
  bgColor = theme.colors.lightWhite,
  labelColor = "white",
  value,
  onChange,
}: StyleButtonsProps) => {
  return (
    <Wrapper
      width={width}
      height={height}
      bgcolor={bgColor}
      labelcolor={labelColor}
      fullwidth={isFullWidth ? isFullWidth.toString() : undefined}
      value={value}
      onChange={onChange}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled(SelectMaterial)<{
  width: number;
  height: number;
  bgcolor: string;
  labelcolor: string;
  fullwidth?: string;
}>`
  height: ${(props) => props.height}px !important;
  width: ${(props) =>
    props.fullwidth ? "100%" : props.width + "px"} !important;
  color: black;
  padding: 5px 10px;
  background-color: ${(props) => props.bgcolor} !important;
  margin-right: 20px !important;
  .MuiSelect-select:after {
    color: red;
    border-bottom-width: 2px;
    border-bottom-color: red;
  }
`;

export default Select;
