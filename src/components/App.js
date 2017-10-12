import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Home from '../routes/Home';
import Footer from './Footer';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="Home" style={{ position: 'relative', right: '0' }}>
                    <Home />
                </div>
                <div className="Header" style={{ position: 'fixed', top: '0px', bottom: '1em' }}>
                    <Header />
                </div>
                <div className="Footer">
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;
