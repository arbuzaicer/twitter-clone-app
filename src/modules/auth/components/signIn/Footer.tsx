import React from "react";

const CURRENT_YEAR = new Date().getFullYear();

interface FooterProps {
  footer: any;
}

const Footer = ({ footer }: FooterProps) => (
  <nav className={footer}>
    <ul>
      <li>
        <a href="#">Про нас</a>
      </li>
      <li>
        <a href="#">Довідковий центр</a>
      </li>
      <li>
        <a href="#">Умови надання послуг</a>
      </li>
      <li>
        <a href="#">Політика конфіденційності</a>
      </li>
      <li>
        <a href="#">Політика використання файлів cookie</a>
      </li>
      <li>
        <a href="#">Як працює Реклама у Твіттері</a>
      </li>
      <li>
        <a href="#">Блог</a>
      </li>
      <li>
        <a href="#">Стан</a>
      </li>
      <li>
        <a href="#">Кар'єра</a>
      </li>
      <li>
        <a href="#">Ресурси бренду</a>
      </li>
      <li>
        <a href="#">Реклама</a>
      </li>
      <li>
        <a href="#">Маркетинг</a>
      </li>
      <li>
        <a href="#">Твіттер для бізнесу</a>
      </li>
      <li>
        <a href="#">Розробники</a>
      </li>
      <li>
        <a href="#">Каталог</a>
      </li>
      <li>
        <a href="#">Налаштування</a>
      </li>
      <li>© {CURRENT_YEAR} Twitter, Inc.</li>
    </ul>
  </nav>
);

export default Footer;
