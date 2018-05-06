import React, {Component} from 'react';
import Navigation from './navigation';
import Footer from './footer';

class Layout extends Component {
    render() {
        return(
            <div className="container-fluid">
                <div className="header">
                    <Navigation />
                </div>
                <div className="main">
                <h1> Aici e un main <br/>
                    React + Bootstrap = &hearts;
                </h1>
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Layout;