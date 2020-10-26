import React  from 'react';
import './DisplayProducts.css';

class DisplayProducts extends React.Component {
    constructor (props) {
        super(props);
        
        this.state = {
            hoverProducts: ([...this.props.items.keys()].map(() => false)),
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
                                    <li className={'item d-flex align-items-center position-relative' + this.displayHoverActiveClass(item.slug)} key={item.name}
                                        onClick={this.triggerChange.bind(this, item.slug)}
                                        onMouseEnter={this.toggleDisplayOptions.bind(this, index)}
                                        onMouseLeave={this.toggleDisplayOptions.bind(this, index)}
                                    >
                                        <input type="checkbox" id={`checkbox-${item.index}`} onClick={this.triggerChange.bind(this, item.index)} />
                                        <label htmlFor={`checkbox-${item.index}`}>{item.name}</label>
                                        <div className={this.displayClasses('options', index)}>
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
    
    triggerChange (value, e) {
        let element = e.target;
        
        if (element.tagName === 'LI') {
            let checkbox = element.querySelector('[type="checkbox"]');
            checkbox.checked = !checkbox.checked;
        }
        
        this.toggleSelected(value);
    }
    
    toggleDisplayOptions (index) {
        let hover = [...this.state.hoverProducts];
        hover[index] = !hover[index];
    
        this.setState({hoverProducts: hover});
    }
    
    toggleSelected (value) {
        let selected = this.state.selectedProducts;
        
        if (selected.includes(value)) {
            selected = selected.filter(e => e!== value);
        } else {
            selected.push(value);
        }
    
        this.setState({selectedProducts: selected});
    }
    
    displayHoverActiveClass (value) {
        return this.state.selectedProducts.includes(value) ? ' active': ''
    }
    
    displayClasses (classes, index) {
        return classes += this.state.hoverProducts[index] ? ' active': '';
    }
}

export default DisplayProducts;
