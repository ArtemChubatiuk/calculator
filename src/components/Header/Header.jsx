import React from "react";
import classes from './Header.module.css';
import p1 from '../../p1.jpg'
/*
 <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqsvxI-cGsF7dSoYBmfQ3ufH76ekG7d9FZTA&usqp=CAU' />
*/

const Header = () => {
    return(
        <header className={classes.header}>
           <i><b>Калькулятор</b></i>
        </header>
    )
};

export default Header;