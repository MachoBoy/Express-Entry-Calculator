import React, { Component } from 'react';
import { connect } from 'react-redux';
import StatusWindow from './StatusWindow';


class Footer extends Component {
    render() {
        return (
            <StatusWindow visibility={this.props.visibility} />
        );
    }
}

const mapStateToProps = state => ({
    visibility: state.toggle.toggle,
});

export default connect(mapStateToProps, null)(Footer);
