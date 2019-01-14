import React from 'react';
import "../css/Category.css";

import {Link} from 'react-router-dom';

class Category extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: [],
            types: []
        }

        this.allItems = this.allItems.bind(this);
        this.onSaleFilter = this.onSaleFilter.bind(this);
    }

    componentDidMount() {
        var {categoryType} = this.props.match.params;
        fetch('https://mallory-furniture-admin.now.sh/api/v1/products?category=' + categoryType)
        .then(response => response.json())
        .then(myJson => {
            this.setState({
                categories: myJson,
                types: myJson
            });
        });
    }

    componentDidUpdate(prevProps) {
        if(this.props.match.params.categoryType !== prevProps.match.params.categoryType) {
            var {categoryType} = this.props.match.params;
            fetch('https://mallory-furniture-admin.now.sh/api/v1/products?category=' + categoryType)
            .then(response => response.json())
            .then(myJson => {
                this.setState({
                    categories: myJson,
                    types: myJson
                });
            });
        }
    }

    onSaleFilter() {
        var onSaleProducts = this.state.categories.filter(category => category.onSale)
        this.setState({
            categories: onSaleProducts
        })
    }

    allItems() {
        this.setState({
            categories: this.state.types
        })
    }

    render(){
        var {categoryType} = this.props.match.params;
        return(
            <section className="Category-section">
                <img className="Category__image" src={require(`../images/category-${categoryType}.png`)} alt="Category Cover" />
                <h2>{categoryType}</h2>
                <h4>All {categoryType} products</h4>
                <div className="Category-showing">
                    <div>
                        <button onClick={this.allItems}>All Items</button>
                        <button onClick={this.onSaleFilter}>On sale</button>
                        <h4><strong>{this.state.categories.length}</strong> items showing</h4>
                    </div>
                </div>
                <ul className="Products">
                    {
                        this.state.categories.map(category => {
                            return(
                                <li className="Product" key={category._id}>
                                    <Link to={"/product/" + category._id}>
                                        <div className="Product__cover">
                                            <img src={category.imageLink} alt="Product Cover" />
                                        </div>
                                        <strong className="Product__name">{category.item}</strong>
                                        <strong className="Product__price">${category.price}</strong>
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

export default Category;