import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Home from '../routes/Home';
import Footer from './Footer';

class App extends Component {
    render() {
        return (
            <div style={{ width: '75%', margin: 'auto' }}>
                <Header />
                <Home />
                <Footer />
            </div>
        );
    }
}

export default App;
