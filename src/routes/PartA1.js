import React, { Component } from 'react';
import { SubspaceProvider } from 'react-redux-subspace';
import { Segment, Table } from 'semantic-ui-react';
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

class PartA1 extends Component {
    render() {
        return (
            <div className="partContainer" style={styles.container} >
                <Segment inverted color="orange">
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
                                <Table.HeaderCell textAlign="center"> Without a spouse or common-law partner </Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell> Age </Table.Cell>
                                <Table.Cell textAlign="center"> 110 </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell> Level of education </Table.Cell>
                                <Table.Cell textAlign="center"> 150 </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell> Official languages proficiency </Table.Cell>
                                <Table.Cell textAlign="center"> 160 </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell> Canadian work experience  </Table.Cell>
                                <Table.Cell textAlign="center"> 80 </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </Segment>
                
                <Segment inverted color="black">
                    <h1>Age </h1>
                    <SubspaceProvider mapState={state => state.withoutSpouseAge} namespace="withoutSpouseAge">
                        <TableForm 
                            headers={withoutSpouse_ageHeader} 
                            rows={withoutSpouse_ageData}
                        />
                    </SubspaceProvider>
                </Segment>

                <Segment inverted color="black">
                    <h1>Level of Education</h1>
                    <SubspaceProvider mapState={state => state.withoutSpouseLoe} namespace="withoutSpouseLoe">
                        <TableForm 
                            headers={withoutSpouse_educationHeader} 
                            rows={withoutSpouse_educationData} 
                        />
                    </SubspaceProvider>
                </Segment>

                <Segment inverted color="black">
                    <h1>Official languages proficiency - first official language</h1>
                    <SubspaceProvider mapState={state => state.withoutSpouseOlp} namespace="withoutSpouseOlp">
                        <TableForm 
                            headers={withoutSpouse_languageHeader} 
                            rows={withoutSpouse_languageFirstData} 
                        />
                    </SubspaceProvider>
                </Segment>

                <Segment inverted color="black">
                    <h1>Official languages proficiency - second official language</h1>
                    <SubspaceProvider mapState={state => state.withoutSpouseOlp2} namespace="withoutSpouseOlp2">
                        <TableForm 
                            headers={withoutSpouse_languageHeader} 
                            rows={withoutSpouse_languageSecondData} 
                        />
                    </SubspaceProvider>
                </Segment>

                <Segment inverted color="black">
                    <h1>Canadian work experience</h1>
                    <SubspaceProvider mapState={state => state.withoutSpouseExp} namespace="withoutSpouseExp">
                        <TableForm 
                            headers={withoutSpouse_workHeader} 
                            rows={withSpouse_workData} 
                        />
                    </SubspaceProvider>
                </Segment>
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
        
    },
};


export default PartA1;
