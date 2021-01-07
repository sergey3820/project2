import React from 'react';
import "./Menu.css";
import Menu1 from './Menu1/Menu1';
import Menu2 from './Menu2/Menu';

function Menu() {
    return (
        <div className="menu_wrapper">
            <Menu1 />
            <Menu2 />
        </div>
    )
}

export default Menu;
