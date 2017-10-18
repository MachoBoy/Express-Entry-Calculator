import React, { Component } from 'react';
import { Statistic } from 'semantic-ui-react';


const Points = ({ color, value, label }) => (
    <div>
    <Statistic color={color} inverted>
        <Statistic.Value>{value}</Statistic.Value>
        <Statistic.Label color={color}>{label}</Statistic.Label>
    </Statistic>    
    </div>
);

export default Points;
