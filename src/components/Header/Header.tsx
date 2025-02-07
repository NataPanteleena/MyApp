import style from './Header.module.scss'
import myLogo from '../../assets/hedgehog.svg';
import React from 'react';

interface IProps {
    title: string;
    text: string;
}

const Header: React.FC<IProps> = ({ title, text}: IProps):JSX.Element => {

    return (
      <header className={style.header}>
          <img src={myLogo} className={style.logo} alt="logo" />
          <div className={style.header__textblock}>
              <h1>{title}</h1>
              <span className={style.headertext}>{text}</span>
          </div>
      </header>
    );
};

export default Header;