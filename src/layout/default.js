import React, {Component} from 'react';
import Navigation from './navigation';

class Layout extends Component {
    render() {
        return(
            <div className="container">
            <div className="header">
                <Navigation />
            </div>
            <div className="main">
            <h1> Aici e un main <br/>
                React + Bootstrap = &hearts;
            </h1>
            </div>
            <div className="footer">
            <h1> Aici e un footer</h1>
            </div>
            </div>
        );
    }
}

export default Layout;