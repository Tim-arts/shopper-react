import React  from 'react';
import './DisplayProducts.css';
import { ToggleValueFromArray } from '../../assets/helpers';

class DisplayProducts extends React.Component {
    constructor (props) {
        super(props);
        
        this.state = {
            selectedProducts: []
        };
    }
    
    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 px-0">
                        <ul className="item-list">
                            {
                                this.props.items.map((item, index) => (
                                    <li className={'item d-flex align-items-center position-relative' + this.hoverActiveClass(item.slug)} key={item.name}
                                        onClick={this.triggerCheckboxChange.bind(this, item.slug)}
                                    >
                                        <input type="checkbox" id={`checkbox-${item.index}`} />
                                        <label htmlFor={`checkbox-${item.index}`}>{item.name}</label>
                                        <div className="options">
                                            <button className="delete-item position-absolute">
                                                <i className="fas fa-times"/>
                                            </button>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
    
    triggerCheckboxChange (value, e) {
        let element = e.target;
        let array = ToggleValueFromArray(value, this.state.selectedProducts);

        if (element.tagName === 'LI') {
            let checkbox = element.querySelector('[type="checkbox"]');
            checkbox.checked = !checkbox.checked;
        }

        this.setState({selectedProducts: array});
    }

    hoverActiveClass (value) {
        return this.state.selectedProducts.includes(value) ? ' active': ''
    }
}

export default DisplayProducts;
