import React from 'react';
import cls from './headerLogo.module.scss';
import { Link } from 'react-router-dom';

const HeaderLogo = () => {
  return (
    <div className={cls.headerLogo}>
      <img src="./img/pizza-logo.svg" alt="Pizza logo" />
      <Link to={'/'}>
        <h1>REACT PIZZA V2</h1>
        <p>самая вкусная пицца во вселенной</p>
      </Link>
    </div>
  );
};

export default HeaderLogo;
