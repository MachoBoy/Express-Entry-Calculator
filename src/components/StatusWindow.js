import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Sidebar, Segment, Progress } from 'semantic-ui-react';

class StatusWindow extends Component {
    constructor(props) {
        super(props);
        this.state = { total: 1200 };
    }
    render() {
        const { visibility } = this.props;
        return (
            <div style={{ position: 'absolute' }}>
                <Sidebar
                    className="withSpouseProgress"
                    as={Segment} 
                    animation="push" 
                    direction="bottom" 
                    visible={visibility} 
                    inverted 
                    width="thin"
                >
                    <Progress 
                        success 
                        active 
                        // total={this.state.total}
                    >
                        Withspouse
                    </Progress>
                  </Sidebar>       
            </div>
        );
    }
}

export default StatusWindow;
