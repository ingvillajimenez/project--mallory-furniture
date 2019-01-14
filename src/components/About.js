import React from 'react';
import '../css/About.css';

class About extends React.Component {
    render(){
        return(
            <div className="About">
                <h1>About Mallory Furniture</h1>
                <p>Mallory Furniture is a local vintage furniture retailer with a constantly changing selection. Their showroom has limited floor space so they initially wanted to build an ecommerce website to show all their inventory, including items in the warehouse.</p>
                <p>They have obtained mockups for the site's design, and they have recently built a back-end API that contains their current listings. They now need to implement the front-end functionality. As a forward-looking company, they are interested in building the front-end in React to keep their views orderly and easily modifiable.</p>
            </div>
        );
    }
}

export default About;