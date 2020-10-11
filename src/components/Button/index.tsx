import Button from "@material-ui/core/Button";
import React from "react";
import styled from "styled-components";
import theme from "theme";

interface StyleButtonsProps {
  label: string;
  onClick: any;
  width?: number;
  height?: number;
  borderRadius?: number;
  bgColor?: string;
  isFullWidth?: boolean;
  labelColor?: string;
  isOutlined?: boolean;
  isUpperCase?: boolean;
  bottom?: number;
}

const StyledButton = ({
  width = 250,
  height = 40,
  borderRadius = 20,
  label,
  onClick,
  bgColor = theme.colors.mainBlue,
  isUpperCase = false,
  labelColor = "white",
  isOutlined = false,
  isFullWidth = false,
  bottom,
}: StyleButtonsProps) => {
  return (
    <Wrapper
      width={width}
      height={height}
      bgcolor={bgColor}
      onClick={onClick}
      isuppercase={isUpperCase ? isUpperCase : undefined}
      labelcolor={labelColor}
      borderradius={borderRadius}
      bottom={bottom}
      isfullwidth={isFullWidth ? isFullWidth.toString() : undefined}
      isoutlined={isOutlined ? isFullWidth.toString() : undefined}
    >
      {label}
    </Wrapper>
  );
};

const Wrapper = styled(Button)<{
  width: number;
  height: number;
  bgcolor: string;
  labelcolor: string;
  borderradius: number;
  bottom?: number;
  isfullwidth?: string;
  isuppercase?: boolean;
  isoutlined?: string;
}>`
  height: ${(props) => props.height}px !important;
  width: ${(props) =>
    props.isfullwidth ? "100%" : props.width + "px"} !important;
  color: ${(props) => props.labelcolor} !important;
  background-color: ${(props) => props.bgcolor} !important;
  border-radius: ${(props) => props.borderradius}px !important;
  text-transform: ${(props) =>
    props.isuppercase ? "uppercase" : "none"} !important;
  margin-bottom: ${(props) => (props.bottom ? props.bottom : 0)}px !important;
  font-weight: 600 !important;
  font-size: 15px !important;
  border: ${(props) =>
    props.isoutlined
      ? `1px solid ${props.theme.colors.darkenBlue}`
      : "none"} !important;
`;

export default StyledButton;
