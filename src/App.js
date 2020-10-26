import React from 'react';
import './ui/App.css';

import suggestions from './static/suggestions.json';
import products from './static/products.json';

/* Import components */
import ProductList from './components/ProductList/ProductList';

class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            products: products,
            suggestions: suggestions
        };
    }
    
    render () {
        return (
            <div className="wrapper">
                <ProductList items={this.state.products} />
            </div>
        )
    }
}

export default App;
