import React from 'react';
import '../css/AllProducts.css';

import {Link} from 'react-router-dom';

class AllProducts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            items: []
        }

        this.allItems = this.allItems.bind(this);
        this.onSaleFilter = this.onSaleFilter.bind(this);
    }

    componentDidMount() {
        fetch('https://mallory-furniture-admin.now.sh/api/v1/products')
        .then(response => response.json())
        .then(myJson => {
            // console.log(myJson)
            this.setState({
                products: myJson,
                items: myJson        
            });
        });
    }

    onSaleFilter() {
        var onSaleProducts = this.state.products.filter(product => product.onSale) 
        this.setState({
            products: onSaleProducts
        })
    }

    allItems() {
        this.setState({
            products: this.state.items
        }); 
    }

    render(){
        return(
            <section className="Products-section">
                <h2>All Products</h2>
                <h4>All available listings</h4>
                <div className="Products-showing">
                    <div>
                        <button onClick={this.allItems}>All Items</button>
                        <button onClick={this.onSaleFilter}>On sale</button>
                        <h4><strong>{this.state.products.length}</strong> items showing</h4>
                    </div>
                </div>
                <ul className="Products">
                    {
                        this.state.products.map(product => {
                            return(
                                <li className="Product" key={product._id}>
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
            </section>
        );
    }
}

export default AllProducts;