import React from 'react';
import '../assets/style/components/header.scss';

import imagen from '../assets/static/google.png'
import logo from '../assets/static/user-icon.png'

const Header = () => {
     return(
        <div className="header">
  <header class="header">
    <img class="header__img" src={imagen} alt="" width="150" ></img>
    <div class="header__menu">
      <div class="header__menu--profile">
        <img src={logo} alt=""></img>
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href="/">Cuenta</a></li>
        <li><a href="/">Cerrar Sesión</a></li>
      </ul>
    </div>
  </header>
        </div>
)
}
export default Header;




