import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Icon, Menu, Checkbox } from 'semantic-ui-react';
import StatusWindow from './StatusWindow';
import { toggle, withSpouseSum, withoutSpouseSum } from '../actions';
import Points from './Points';

const shortid = require('shortid');

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            menuData: [
                { to: "/about", title: "Express Entry" },
                { to: "/core", title: "Core / human capital factors" },
                { to: "/spouse", title: "Spouse or common-law partner factors" },
                { to: "/skill", title: "Skill transferability factors" },
                { to: "/additional", title: "Additional points" },
            ],
        };
    }

    onMenuClick(index) {
        this.setState({ activeIndex: index });
    }
    render() {
        const {
            // core withSpouse states
            withSpouseAgePoint,
            withSpouseLoePoint,
            withSpouseOlpPoint,
            withSpouseOlp2Point,
            withSpouseExpPoint,
            // core withoutSpouse
            withoutSpouseAgePoint, 
            withoutSpouseLoePoint, 
            withoutSpouseOlpPoint, 
            withoutSpouseOlp2Point, 
            withoutSpouseExpPoint,
            // Spouse factor
            BwithSpouseLoePoint,
            BwithSpouseOlpPoint,
            BwithSpouseExpPoint,
            // skill transferability factors
            skillEducation1Point,
            skillEducation2Point,
            skillFwe1Point,
            skillFwe2Point,
            skillCertificatePoint,
            // Additional
            additionalPoint,
        } = this.props;

        const withoutSpousePointsArray = [ 
            withoutSpouseAgePoint, 
            withoutSpouseLoePoint, 
            withoutSpouseOlpPoint, 
            withoutSpouseOlp2Point, 
            withoutSpouseExpPoint, 
            skillEducation1Point,
            skillEducation2Point,
            skillFwe1Point,
            skillFwe2Point,
            skillCertificatePoint,
            additionalPoint,
        ];
        
        const withSpousePointsArray = [
            withSpouseAgePoint, 
            withSpouseLoePoint, 
            withSpouseOlpPoint, 
            withSpouseOlp2Point, 
            withSpouseExpPoint, 
            BwithSpouseLoePoint,
            BwithSpouseOlpPoint,
            BwithSpouseExpPoint,
            skillEducation1Point,
            skillEducation2Point,
            skillFwe1Point,
            skillFwe2Point,
            skillCertificatePoint,
            additionalPoint,
        ];

        // calculate the array of objects (point)
        const withoutSpousePointSum = withoutSpousePointsArray.map(points => points.point).reduce((acc, curr) => acc + parseInt(curr, 10), 0);
        const withSpousePointSum = withSpousePointsArray.map(points => points.point).reduce((acc, curr) => acc + parseInt(curr, 10), 0);

        const { activeIndex } = this.state;
        return (
            <div className="header" style={{ height: '120%' }}>
                <Menu pointing vertical inverted style={{ height: '120%', width: '100%' }}>
                    <Menu.Item header style={{ marginBottom: '50px' }}>
                        Express Entry Calculator
                        <Icon
                            name="calculator"
                            size={"huge"}
                            color={'green'}
                        />
                    </Menu.Item>
                    { this.state.menuData.map((menu, index) => ( 
                        <Menu.Item
                            key={shortid.generate()}
                            active={activeIndex === index}
                            as={Link} 
                            to={menu.to}  
                            children={menu.title} 
                            onClick={() => this.onMenuClick(index)}
                        />),
                    )}
                    <Menu.Item onClick={this.props.pointToggle} > Points
                        <Icon
                            name="user circle"
                            size={'large'}
                            color={'green'}
                        />
                    </Menu.Item>
                    <div className="pointIndicator" style={styles.pointContainer}>
                        {this.props.activeNumber === 1 ? 
                            <Points
                                key={shortid.generate()} 
                                color={"green"}
                                value={withSpousePointSum}
                                label={"Points"}
                            /> :
                            <Points
                                key={shortid.generate()}
                                color={"orange"}
                                value={withoutSpousePointSum} 
                                label={"Points"}
                            />
                        }
                    </div>
                    <div style={styles.resetContainer}>
                        <Checkbox toggle onClick={this.props.deSelectAll} />
                    </div>
                </Menu>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    // core withSpouse states
    withSpouseAgePoint: state.withSpouseAge,
    withSpouseLoePoint: state.withSpouseLoe,
    withSpouseOlpPoint: state.withSpouseOlp,
    withSpouseOlp2Point: state.withSpouseOlp2,
    withSpouseExpPoint: state.withSpouseExp,
    // core withoutSpouse
    withoutSpouseAgePoint: state.withoutSpouseAge,
    withoutSpouseLoePoint: state.withoutSpouseLoe,
    withoutSpouseOlpPoint: state.withoutSpouseOlp,
    withoutSpouseOlp2Point: state.withoutSpouseOlp2,
    withoutSpouseExpPoint: state.withoutSpouseExp,
    // Spouse factor
    BwithSpouseLoePoint: state.BwithSpouseLoe,
    BwithSpouseOlpPoint: state.BwithSpouseOlp,
    BwithSpouseExpPoint: state.BwithSpouseExp,
    // skill transferability factors
    skillEducation1Point: state.skillEducation1,
    skillEducation2Point: state.skillEducation2,
    skillFwe1Point: state.skillFwe1,
    skillFwe2Point: state.skillFwe2,
    skillCertificatePoint: state.skillCertificate,
    // Additional
    additionalPoint: state.additional,
    // Toggle
    activeNumber: state.activeIndexNumber.point,
    deselect: state.deselectAll,
});


const styles = {
    pointContainer: {
        marginTop: '20px',
        marginLeft: '90px',
    },
    resetContainer: {
        marginTop: '20px',
        marginLeft: '90px',
    },
};

const mapDispatchToProps = dispatch => ({
    deSelectAll: () => dispatch({ type: 'DESELECT' }),
    pointToggle: () => dispatch({ type: 'TOGGLE_progress' }),
    withSpouseSum: (total) => dispatch(withSpouseSum(total)),
    withoutSpouseSum: (total) => dispatch(withoutSpouseSum(total)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
