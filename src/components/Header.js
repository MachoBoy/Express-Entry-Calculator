import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Icon, Menu } from 'semantic-ui-react';
import StatusWindow from './StatusWindow';
import { toggle } from '../actions';


class Header extends Component {
    render() {
        return (
            <div className="header">
                <Menu>
                    <Menu.Item as={Link} to="/about"> About </Menu.Item>
                    <Menu.Item as={Link} to="/core"> Core/human capital factors </Menu.Item>
                    <Menu.Item as={Link} to="/spouse"> Spouse or common-law partner factors </Menu.Item>
                    <Menu.Item as={Link} to="/skill"> Skill transferability factors </Menu.Item>
                    <Menu.Item as={Link} to="/additional"> Additional points </Menu.Item>
                        <Menu.Menu position="right" onClick={this.props.toggle}>
                            <Menu.Item>
                                <Icon name="user circle" />
                            </Menu.Item>
                        </Menu.Menu>
                </Menu>

            </div>
        );
    }
}

export default connect(null, { toggle })(Header);
