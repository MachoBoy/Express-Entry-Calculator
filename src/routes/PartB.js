import React, { Component } from 'react';
import { Segment, Table } from 'semantic-ui-react';
import { SubspaceProvider } from 'react-redux-subspace';
import TableForm from '../components/TableForm';
import { 
    educationHeader,
    folHeader,
    experienceHeader,
    educationData,
    folData,
    experienceData,
 } from '../components/source/PartBSource';

class PartB extends Component {
    render() {
        return (
            <div className="partContainer" style={styles.container} >
                <Segment inverted color="orange">
                    <h1> B. Spouse or common-law partner factors (if applicable) </h1>

                    <Table 
                        size="large"
                        padded
                        striped
                        celled
                        verticalAlign={'middle'} 
                    >
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell> Factor </Table.HeaderCell>
                                <Table.HeaderCell textAlign="center"> Points per factor </Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell> Level of education </Table.Cell>
                                <Table.Cell textAlign="center"> 10 </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell> Official language proficiency </Table.Cell>
                                <Table.Cell textAlign="center"> 20 </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell> Canadian Work Experience </Table.Cell>
                                <Table.Cell textAlign="center"> 10 </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </Segment>

                <Segment inverted color="black">
                    <h1>Level of Education</h1>
                    <SubspaceProvider mapState={state => state.BwithSpouseLoe} namespace="BwithSpouseLoe">
                        <TableForm 
                            headers={educationHeader} 
                            rows={educationData} 
                        />
                    </SubspaceProvider>
                </Segment>

                <Segment inverted color="black">
                    <h1>Official languages proficiency - first official language</h1>
                    <SubspaceProvider mapState={state => state.BwithSpouseOlp} namespace="BwithSpouseOlp">
                        <TableForm 
                            headers={folHeader} 
                            rows={folData} 
                        />
                    </SubspaceProvider>
                </Segment>

                <Segment inverted color="black">
                    <h1>Canadian work experience</h1>
                    <SubspaceProvider mapState={state => state.BwithSpouseExp} namespace="BwithSpouseExp">
                        <TableForm 
                            headers={experienceHeader} 
                            rows={experienceData} 
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
        marginLeft: '270px',
    },
};

export default PartB;
