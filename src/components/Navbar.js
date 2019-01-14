import React from 'react';
import mfLogoWhite from '../images/mf-logo-white.svg';
import '../css/Navbar.css';

import {Link} from 'react-router-dom';

class Navbar extends React.Component {
    render(){
        return(
            <ul className="Navbar__list">
                <li className="Navbar__item">
                    <Link className="Navbar__link" to="/">
                        <img src={mfLogoWhite} alt="logo"/>
                    </Link>
                </li>
                <li className="Navbar__item">
                    <Link className="Navbar__link" to="/about">About</Link>
                </li>
                <li className="Navbar__item">
                    <Link className="Navbar__link" to="/terms">Terms+Conditions</Link>
                </li>
                <li className="Navbar__item">
                    <Link className="Navbar__link" to="#">|</Link>
                </li>
                <li className="Navbar__item">
                    <Link className="Navbar__link" to="/all-products">All</Link> 
                </li>
                <li className="Navbar__item">
                    <Link className="Navbar__link" to="/category/seating">Seating</Link>
                </li>
                <li className="Navbar__item">
                    <Link className="Navbar__link" to="/category/tables">Tables</Link>
                </li>
                <li className="Navbar__item">
                    <Link className="Navbar__link" to="/category/desks">Desks</Link>
                </li>
                <li className="Navbar__item">
                    <Link className="Navbar__link" to="/category/storage">Storage</Link>
                </li>
                <li className="Navbar__item">
                    <Link className="Navbar__link" to="/category/bedroom">Bedroom</Link>
                </li>
                <li className="Navbar__item">
                    <Link className="Navbar__link" to="/category/miscellaneous">Misc</Link>
                </li>
                <li className="Navbar__item">
                    <Link className="Navbar__link" to="#">|</Link>
                </li>
                <button className="Navbar__cart" onClick={this.props.openCart}>
                    <img src="https://codyhouse.co/demo/quick-add-to-cart/img/cd-icon-cart.svg" alt="cart" />
                </button>
            </ul>
        );
    }
}

export default Navbar;