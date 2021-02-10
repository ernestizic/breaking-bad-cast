import React, { Component } from 'react';
import logo from '../../img/breaking-bad-logo.png';


const Header = () => {
    return ( 
        <header className="center">
            <img src={logo} alt= "" style={{width: "250px"}} />
        </header>
     );
}
 
export default Header;