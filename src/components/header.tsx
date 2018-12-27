import * as React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header>
        <div className="container">
            <div className="header-inner-container">
                <h1 className="title-text">
                    Todos
                </h1>
                 <div className="nav-menu">
                    <Link className="nav-item active-nav" to="/"> Home </Link>  
                    
                    <Link className="nav-item"  to="/listoftodos">  List from API  </Link>
                       
                  
                </div>

            </div>
        </div>
    </header>
    );
};