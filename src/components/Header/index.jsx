import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../Logo';
import './index.css';
import Search from "../Search";

const Header = ({searchText, changeText}) => {
    return (
        <header>
            <Logo/>
            <Search text={searchText} foo={changeText}/>
            <nav>
                <Link to="/">Главная</Link>
                <Link to="/catalog">Каталог постов</Link>
                
                <Link to="/Kabinet">Кабинет</Link>
            </nav>
        </header>
    )
}

export default Header;