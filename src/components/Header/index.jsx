import React from 'react';
import Search from './../../Features/Search';
import HeaderLogo from '../../Features/HeaderLogo';
import HeaderCart from '../../Features/HeaderCart';
import cls from './Header.module.scss';

const Header = () => {
  return (
    <div className={cls.header}>
      <div className={cls.container}>
        <HeaderLogo />
        <Search />
        <HeaderCart />
      </div>
    </div>
  );
};

export default Header;
