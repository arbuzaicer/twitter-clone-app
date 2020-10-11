import React from "react";
import styled from "styled-components";

const CURRENT_YEAR = new Date().getFullYear();

const Footer = () => (
  <Container>
    <ul>
      <li>
        <a href="http://localhost:3000/">Про нас</a>
      </li>
      <li>
        <a href="http://localhost:3000/">Довідковий центр</a>
      </li>
      <li>
        <a href="http://localhost:3000/">Умови надання послуг</a>
      </li>
      <li>
        <a href="http://localhost:3000/">Політика конфіденційності</a>
      </li>
      <li>
        <a href="http://localhost:3000/">Політика використання файлів cookie</a>
      </li>
      <li>
        <a href="http://localhost:3000/">Як працює Реклама у Твіттері</a>
      </li>
      <li>
        <a href="http://localhost:3000/">Блог</a>
      </li>
      <li>
        <a href="http://localhost:3000/">Стан</a>
      </li>
      <li>
        <a href="http://localhost:3000/">Кар'єра</a>
      </li>
      <li>
        <a href="http://localhost:3000/">Ресурси бренду</a>
      </li>
      <li>
        <a href="http://localhost:3000/">Реклама</a>
      </li>
      <li>
        <a href="http://localhost:3000/">Маркетинг</a>
      </li>
      <li>
        <a href="http://localhost:3000/">Твіттер для бізнесу</a>
      </li>
      <li>
        <a href="http://localhost:3000/">Розробники</a>
      </li>
      <li>
        <a href="http://localhost:3000/">Каталог</a>
      </li>
      <li>
        <a href="http://localhost:3000/">Налаштування</a>
      </li>
      <li>© {CURRENT_YEAR} Twitter, Inc.</li>
    </ul>
  </Container>
);

const Container = styled.nav`
  padding: 10px 15px;
  margin: 0;
  & > ul {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    justify-content: center;
    & > li {
      list-style: none;
      margin-left: 15px;
      color: ${(props) => props.theme.colors.textBlue};
      font-size: 13px;
      line-height: 2;
      & > a {
        text-decoration: none;
        color: ${(props) => props.theme.colors.textBlue};
        font-size: 13px;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

export default Footer;
