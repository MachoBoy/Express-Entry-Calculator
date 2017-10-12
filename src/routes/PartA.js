import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Segment, Table, Checkbox } from 'semantic-ui-react';
import TableForm from '../components/TableForm';
import {
    // header 
    spouse_ageHeaders,
    withoutSpouse_ageHeader,
    spouse_educationHeader,
    withoutSpouse_educationHeader,
    spouse_languageHeader,
    withoutSpouse_languageHeader,
    spouse_workHeader,
    withoutSpouse_workHeader,
    // data
    spouse_ageData,
    withoutSpouse_ageData,
    withoutSpouse_educationData,
    spouse_educationData,
    spouse_languageFirstData,
    withoutSpouse_languageFirstData,
    spouse_languageSecondData,
    withoutSpouse_languageSecondData,
    spouse_workData,
    withSpouse_workData,
 } from '../components/source/PartASource';

class PartA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false,
        };
    }

    toggle = () => {
        this.setState({ toggle: !this.state.toggle })
    }
    render() {
        return (
            <div className="partContainer" style={styles.container} >
                <Checkbox toggle onClick={this.toggle}/>
                <Segment>
                    <h1>A. Core/human capital factors </h1>
                    <Table 
                        className="summaryTable" 
                        size="large"
                        padded
                        striped
                        celled
                        verticalAlign={'middle'} 
                    >
                        <Table.Header >
                            <Table.Row >
                                <Table.HeaderCell> Factor </Table.HeaderCell>
                                <Table.HeaderCell textAlign="center"> With a spouse or common-law partner </Table.HeaderCell>
                                <Table.HeaderCell textAlign="center"> Without a spouse or common-law partner </Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell> Age </Table.Cell>
                                <Table.Cell textAlign="center"> 100 </Table.Cell>
                                <Table.Cell textAlign="center"> 110 </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell> Level of education </Table.Cell>
                                <Table.Cell textAlign="center"> 140 </Table.Cell>
                                <Table.Cell textAlign="center"> 150 </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell> Official languages proficiency </Table.Cell>
                                <Table.Cell textAlign="center"> 150 </Table.Cell>
                                <Table.Cell textAlign="center"> 160 </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell> Canadian work experience  </Table.Cell>
                                <Table.Cell textAlign="center"> 70 </Table.Cell>
                                <Table.Cell textAlign="center"> 80 </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </Segment>
                
                <Segment>
                    <h1>Age </h1>
                    {this.state.toggle ? 
                    <TableForm headers={spouse_ageHeaders} rows={spouse_ageData} /> :
                    <TableForm headers={withoutSpouse_ageHeader} rows={withoutSpouse_ageData} />}
                </Segment>

                <Segment>
                    <h1>Level of Education</h1>
                    {this.state.toggle ?
                    <TableForm headers={spouse_educationHeader} rows={spouse_educationData} /> :
                    <TableForm headers={withoutSpouse_educationHeader} rows={withoutSpouse_educationData} />}
                </Segment>

                <Segment>
                    <h1>Official languages proficiency - first official language</h1>
                    {this.state.toggle ?
                    <TableForm headers={spouse_languageHeader} rows={spouse_languageFirstData} /> :
                    <TableForm headers={withoutSpouse_languageHeader} rows={withoutSpouse_languageFirstData} />}
                </Segment>

                <Segment>
                    <h1>Official languages proficiency - second official language</h1>
                    {this.state.toggle ?
                    <TableForm headers={spouse_languageHeader} rows={spouse_languageSecondData} /> :
                    <TableForm headers={withoutSpouse_languageHeader} rows={withoutSpouse_languageSecondData} />}
                </Segment>

                <Segment>
                    <h1>Canadian work experience</h1>
                    {this.state.toggle ?
                    <TableForm headers={spouse_workHeader} rows={spouse_workData} /> :
                    <TableForm headers={withoutSpouse_workHeader} rows={withSpouse_workData} />}
                </Segment>
            </div>
        );
    }
}

const styles = {
    container: {
        padding: '30px',
        backgroundColor: '#F9F9F9',
    },
};


export default PartA;
