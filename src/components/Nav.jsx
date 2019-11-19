import React from 'react';
import logo from '../logo.png';

const Nav = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" >
                    <img data-testid="logo" src={logo} width="112" height="28" />
                </a>
            </div>
        </nav>
);
};

export default Nav;