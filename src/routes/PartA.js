import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tab } from 'semantic-ui-react';
import { SubspaceProvider } from 'react-redux-subspace';
import PartA1 from './PartA1';
import PartA2 from './PartA2';
import { select } from '../actions';

class PartA extends Component {
    constructor(props){
        super(props);
        this.state = { activeIndex: 0 }
    }

    handleTabChange = (e, {activeIndex}) => {
        this.setState({ activeIndex });
        this.props.onActive(activeIndex);
    }

    render() {
        const pane = [ 
            { menuItem: 'Without a spouse or common-law partner', render: () => <Tab.Pane><PartA1 /></Tab.Pane> },
            { menuItem: 'With a spouse or common-law partner', render: () => <Tab.Pane><PartA2 /></Tab.Pane > },
        ];
        const { activeIndex } = this.state;
        return (
            <div style={styles.container}>
                <Tab 
                    panes={pane} 
                    activeIndex={activeIndex} 
                    renderActiveOnly={true} 
                    onTabChange={this.handleTabChange} 
                />
            </div>
        );
    }
}

const styles = {
    container: {
        paddingTop: '30px',
        paddingBottom: '90px',
        paddingRight: '60px',
        paddingLeft: '60px',
        backgroundColor: '#F9F9F9',
        marginLeft: '270px',
    },
};

const mapDispatchToProps = (dispatch) => ({
    onActive: (point) => {dispatch(select(point))},
});

export default connect(null, mapDispatchToProps)(PartA);
