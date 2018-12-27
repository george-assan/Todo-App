import * as React from 'react';
import { Link } from 'react-router-dom';



/*
* Header links component
*/


const toggleActivelink = () =>{
    $(".nav-item").toggleClass('active-nav');
}

export const Header = () => {

    return (
        <header>
        <div className="container">
            <div className="header-inner-container">
                <h1 className="title-text">
                    Todos
                </h1>
                 <div className="nav-menu">
                    <Link className="nav-item active-nav" to="/" onClick={toggleActivelink}> Home </Link>  
                    
                    <Link className="nav-item"  to="/listoftodos" onClick={toggleActivelink}>  List from API  </Link>
                       
                  
                </div>

            </div>
        </div>
    </header>
    );
};


