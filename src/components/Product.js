import React from 'react';
import '../css/Product.css';

class Products extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            product: {}
        }

    }

    componentDidMount() {   
        var {productId} = this.props.match.params;
        fetch('https://mallory-furniture-admin.now.sh/api/v1/products/' + productId)
        .then(response => response.json())
        .then(myJson => {
            this.setState({
                product: myJson
            });
        });
    }

    render(){
        return(
            <div className="Single-product">
                <div className="Product__image">
                    <img src={this.state.product.imageLink} alt="item cover" />
                </div>
                <div className="Product__description">
                    <h2>{this.state.product.item}</h2>
                    <h4>${this.state.product.price}</h4>
                    <div className="Product__details">
                        <div>
                            <p style={{textDecoration: "underline"}}>Conditions:</p>
                            <p>{this.state.product.condition}</p>
                        </div>
                        <div>
                            <p style={{textDecoration: "underline"}}>Measurement:</p>
                            <p>W:{this.state.product.width} L:{this.state.product.length} H:{this.state.product.height}</p>
                        </div>
                        <button onClick={() => this.props.addToCart(this.state.product)}>Add to Cart</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Products;