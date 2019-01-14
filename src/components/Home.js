import React, { Component } from 'react';
import '../css/Home.css';

import {Link} from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          products: []
        };
    }
    
    componentDidMount() {
        fetch('https://mallory-furniture-admin.now.sh/api/v1/products')
        .then(response => response.json())
        .then(myJson => {
            var featuredProducts = myJson.filter(product => product.featured);
            this.setState({
                products: featuredProducts
            });
        })
    }

    render() {
        return (
        <React.Fragment>
            <header className="Title">
                <div className="Title__center">
                    <h1>Mallory Furniture</h1>
                    <h3>Your furniture is old.</h3>
                    <h3>Ours is older.</h3>
                </div>
            </header>

            <section className="Products-section">
                <h2>Featured Products</h2>
                <h4>Check out some our favorite listings</h4>
                <ul className="Products">
                    {
                        this.state.products.map(product => {
                            return(
                                <li  className="Product" key={product._id}>
                                    <Link to={"/product/" + product._id}>
                                        <div className="Product__cover">
                                            <img src={product.imageLink} alt="Product Cover" />
                                        </div>
                                        <strong className="Product__name">{product.item}</strong>
                                        <strong className="Product__price">${product.price}</strong>
                                    </Link>
                                </li>
                            );
                        })
                    }
                </ul>
                <button className="All-products"><Link to="/all-products">All Products</Link></button>
            </section>

            <section className="Categories-section">
                <h2>Browse by Categories</h2>
                <h4>Explore by furniture type</h4>
                <div className="Categories">
                    <button className="Category"><Link to="/category/seating">Seating</Link></button>
                    <button className="Category"><Link to="/category/tables">Tables</Link></button>
                    <button className="Category"><Link to="/category/desks">Desks</Link></button>
                    <button className="Category"><Link to="/category/bedroom">Bedroom</Link></button>
                    <button className="Category"><Link to="/category/storage">Storage</Link></button>
                    <button className="Category"><Link to="/category/miscellaneous">Misc</Link></button>
                </div>
            </section>
        </React.Fragment>
        );
    }
}

export default Home;

