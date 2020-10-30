import React from 'react';
import './Header.css';

class Header extends React.Component {
    render () {
        return (
            <header className="container">
                <nav className="row">
                    <div className="col-12">
                        <h1 className="h3">Shopper</h1>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header;
