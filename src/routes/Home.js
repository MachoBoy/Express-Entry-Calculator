import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './About';
import PartA from './PartA';
import PartB from './PartB';
import PartC from './PartC';
import PartD from './PartD';

const Home = () => (
    <div>
        <Switch>
            <Route path="/about" component={About} />
            <Route path="/core" component={PartA} />
            <Route path="/spouse" component={PartB} />
            <Route path="/skill" component={PartC} />
            <Route path="/additional" component={PartD} />
        </Switch>
    </div>
);

export default Home;
