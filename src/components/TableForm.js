import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'semantic-ui-react';
import { selectWithSpouse, deselectAll } from '../actions';

const shortid = require('shortid');

class TableForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeIndex: 0,
        }
        this.handleOnClick = this.handleOnClick.bind(this);
    };

    handleOnClick(point, index) {
        this.setState({ activeIndex: index });
        this.props.selectWithSpouse(point, index);
    };

    tableForm = ({ headers, rows }) => {
        
        const customRenderRow = ({ factor, point, point2 }, index ) => ({
            
            key: shortid.generate(),
            cells: [
                <Table.Cell content={factor || 'N/A'} />,
                <Table.Cell 
                    content={point}
                    active={index === this.state.activeIndex}
                    textAlign={'center'} 
                    selectable 
                    //onClick={() => this.handleOnClick(withSpouse, index)}
                />,
                <Table.Cell content={point2} /> || 'unknown'
            ],
        });
        return (
            <Table
                size='large'
                padded
                striped
                celled
                verticalAlign={'middle'} 
                headerRow={this.props.headers} 
                renderBodyRow={customRenderRow} 
                tableData={this.props.rows} 
            />
        )
    };

    render() {
        const { headers, rows } = this.props;
        return (
            <div>
                {this.tableForm(headers, rows)}
            </div>
        );  
    }
};

const mapStateToProps = state => ({
    withSpousePoints: state.pointsContainer.points,
    selectedIndex: state.pointsContainer.activeIndex,
});

export default connect(mapStateToProps, { 
    selectWithSpouse, deselectAll, 
})(TableForm);
