import React from 'react';

/* Import components */
import Header from './Header';
import DisplayProducts from './DisplayProducts';
import DisplaySuggestions from "./DisplaySuggestions";

class ProductList extends React.Component {
    constructor (props) {
        super(props);
        
        this.state = {
            selected: []
        };
    }
    
    render () {
        
        return (
            <div>
                <Header />
                <DisplayProducts items={this.props.items} />
                <DisplaySuggestions />
            </div>
        )
    }
}

export default ProductList;
