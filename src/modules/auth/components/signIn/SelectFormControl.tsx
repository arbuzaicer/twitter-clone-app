import { FormControl, InputLabel, MenuItem } from "@material-ui/core";
import getYear from "date-fns/getYear";
import * as R from "ramda";
import React, { useState } from "react";
import styled from "styled-components";

import Select from "components/Select/Select";

const DAYS_DATA = R.range(1, 32);
const YEARS_DATA = R.range(1900, getYear(new Date()) + 1).reverse();

const MONTH_DATA = [
  "Січень",
  "Лютий",
  "Березень",
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

interface SelectFormControlProps {
  month: string;
  setMonth: any;
  days: string;
  setDays: any;
  year: string;
  setYear: any;
}

const SelectFormControl = ({
  month,
  setMonth,
  days,
  setDays,
  year,
  setYear,
}: SelectFormControlProps) => {
  return (
      <FormWrapper>
        <FormControl>
          <InputLabel shrink id="demo-simple-select-label">
            Місяць
          </InputLabel>
          <Select value={month} onChange={(e: any) => setMonth(e.target.value)}>
            {MONTH_DATA.map((month) => (
              <MenuItemStyled key={month} value={month}>
                {month}
              </MenuItemStyled>
            ))}
          </Select>
        </FormControl>

        <FormControl>
          <InputLabel shrink id="demo-simple-select-label">
            День
          </InputLabel>
          <Select
            width={100}
            value={days}
            onChange={(e: any) => setDays(e.target.value)}
          >
            {DAYS_DATA.map((month) => (
              <MenuItemStyled key={month} value={month}>
                {month}
              </MenuItemStyled>
            ))}
          </Select>
        </FormControl>

        <FormControl>
          <InputLabel shrink id="demo-simple-select-label">
            Рік
          </InputLabel>
          <Select
            width={100}
            value={year}
            onChange={(e: any) => setYear(e.target.value)}
          >
            {YEARS_DATA.map((month) => (
              <MenuItemStyled key={month} value={month}>
                {month}
              </MenuItemStyled>
            ))}
          </Select>
        </FormControl>
      </FormWrapper>
  );
};

const MenuItemStyled = styled(MenuItem)`
  width: 100%;
  background-color: white;
  color: black;
  &:hover {
    background-color: ${({ theme }) => theme.colors.darkBlue} !important;
    color: white;
  }
`;

const FormWrapper = styled.div`
  margin-top: 20px;
`;

export default SelectFormControl;
