import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import { select } from '../actions';


const shortid = require('shortid');

class TableForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeIndex: 0,
            activeIndex2: 0,
        }
        this.handleOnClick = this.handleOnClick.bind(this);
        this.isCellActive = this.isCellActive.bind(this);
        this.isCellActive2 = this.isCellActive2.bind(this);
    };

    isCellActive(index) {
        this.setState({ activeIndex: index });
    }

    isCellActive2(index) {
        this.setState({ activeIndex2: index });
    }

    handleOnClick(index, point, secondCell) {
        switch (secondCell) {
            case 'secondCell':
                this.isCellActive2(index);
                this.props.onSelect(point); 
                break;
            default:
                this.isCellActive(index);
                this.props.onSelect(point); 
                break;
        }
    };
    
    tableForm = ({ headers, rows }) => {
        const customRenderRow = ({ factor, point, point2 }, index ) => ({
            key: shortid.generate(),
            cells: [
                <Table.Cell content={factor || 'N/A'} key={shortid.generate()} />,
                <Table.Cell
                    key={shortid.generate()}
                    content={point}
                    active={index === this.state.activeIndex}
                    textAlign={'center'} 
                    selectable 
                    onClick={() => this.handleOnClick(index, point)}
                />,
                <Table.Cell
                    key={shortid.generate()} 
                    content={point2}
                    active={index === this.state.activeIndex2}
                    textAlign={'center'} 
                    selectable
                    onClick={() => this.handleOnClick(index, point2, 'secondCell')}
                />
            ],
        });
        return (
            <Table
                key={shortid.generate()}
                size='large'
                padded
                striped
                celled
                verticalAlign={'middle'} 
                headerRow={this.props.headers.map((header)=>(
                     <Table.HeaderCell key={shortid.generate()} children={header} textAlign="center" />))} 
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

const mapDispatchToProps = (dispatch) => {
    return {
        onSelect: (point) => {dispatch(select(point))},
    }
}

TableForm.PropTypes = {
    onSelect: PropTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(TableForm);