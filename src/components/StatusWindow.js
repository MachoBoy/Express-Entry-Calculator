import React, { Component } from 'react';
import { Sidebar, Segment, Progress } from 'semantic-ui-react';

class StatusWindow extends Component {
    render() {
      const { visibility } = this.props;
        return (
            <div style={{ position: 'absolute', bottom: 100 }}>
                  <Sidebar as={Segment} animation="push" direction="bottom" visible={visibility} inverted width="thin">
                    <Progress percent={50} progress />
                  </Sidebar>
                 
            </div>
        );
    }
}

export default StatusWindow;
