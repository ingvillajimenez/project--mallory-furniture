import React from 'react';
import mfLogoBlack from '../images/mf-logo-black.svg';
import '../css/Footer.css';

import {Link} from 'react-router-dom';

class Footer extends React.Component {
    render(){
        return(
            <div className="Footer">
                <div className="Footer__logo">
                    <Link to="/"><img src={mfLogoBlack} alt="logo" /></Link>
                </div>
                <div className="Footer__grid">
                    <div className="Footer__column">
                        <p>Company</p>
                        <ul>
                            <li><Link to="/about">About</Link></li>
                            <li>Press</li>
                            <li><Link to="/terms">Terms + Conditions</Link></li>
                        </ul>
                    </div>
                    <div className="Footer__column">
                        <p>Categories</p>
                        <ul>
                            <li><Link to="/category/seating">Seating</Link></li>
                            <li><Link to="/category/tables">Tables</Link></li>
                            <li><Link to="/category/miscellaneous">Misc</Link></li>
                        </ul>
                    </div>
                    <div className="Footer__column"></div>
                    <div className="Footer__column">
                        <p>Social</p>
                        <span><i className="fab fa-instagram"></i></span>
                        <span><i className="fab fa-twitter"></i></span>
                        <span><i className="fab fa-pinterest"></i></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;