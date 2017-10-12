import React, { Component } from 'react';
import { Segment, Table } from 'semantic-ui-react';
import { SubspaceProvider } from 'react-redux-subspace';
import TableForm from '../components/TableForm';
import { 
    educationHeader_1,
    educationHeader_2,
    fweHeader_1,
    fweHeader_2,
    coqHeader,
    educationData,
    fweData,
    coqData, 
} from '../components/source/PartCSource';

class PartC extends Component {
    render() {
        return (
            <div className="partContainer" style={styles.container} >
                <Segment inverted color="orange">
                    <h1> C. Skill Transferability factors </h1>
                    
                    <Table 
                        size="large"
                        padded
                        striped
                        celled
                        verticalAlign={'middle'} 
                    >
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell> Education </Table.HeaderCell>
                                <Table.HeaderCell textAlign="center"> Points per factor </Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell> With good/strong official languages proficiency and a post-secondary degree </Table.Cell>
                                <Table.Cell textAlign="center"> 50 </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell> With Canadian work experience and a post-secondary degree </Table.Cell>
                                <Table.Cell textAlign="center"> 50 </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>

                    <Table 
                        size="large"
                        padded
                        striped
                        celled
                        verticalAlign={'middle'} 
                    >
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell> Foreign work experience </Table.HeaderCell>
                                <Table.HeaderCell textAlign="center"> Points per factor </Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell> With good/strong official languages proficiency (Canadian Language Benchmark [CLB] level 7 or higher) and foreign work experience </Table.Cell>
                                <Table.Cell textAlign="center"> 50 </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell> With Canadian work experience and foreign work experience </Table.Cell>
                                <Table.Cell textAlign="center"> 50 </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>

                    <Table 
                        size="large"
                        padded
                        striped
                        celled
                        verticalAlign={'middle'} 
                    >
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell> Certificate of qualification (for people in trade occupations) </Table.HeaderCell>
                                <Table.HeaderCell textAlign="center"> Points per factor </Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell> With good/strong official languages proficiency and a certificate of qualification </Table.Cell>
                                <Table.Cell textAlign="center"> 50 </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </Segment>

                
                <Segment inverted color="black">
                    <h1>Education</h1>
                    <SubspaceProvider mapState={state => state.skillEducation1} namespace="skillEducation1">
                        <TableForm 
                            headers={educationHeader_1} 
                            rows={educationData} 
                        />
                    </SubspaceProvider>
                </Segment>
                <Segment inverted color="black">
                    <SubspaceProvider mapState={state => state.skillEducation2} namespace="skillEducation2">
                        <TableForm 
                            headers={educationHeader_2} 
                            rows={educationData} 
                        />
                    </SubspaceProvider>
                </Segment>

                
                <Segment inverted color="black">
                    <h1>Foreign work experience – With good official language proficiency</h1>
                    <SubspaceProvider mapState={state => state.skillFwe1} namespace="skillFwe1">
                        <TableForm 
                            headers={fweHeader_1} 
                            rows={fweData} 
                        />
                    </SubspaceProvider>
                </Segment>

                <Segment inverted color="black">
                    <h1>Foreign work experience – With Canadian work experience</h1>
                    <SubspaceProvider mapState={state => state.skillFwe2} namespace="skillFwe2">
                        <TableForm 
                            headers={fweHeader_2} 
                            rows={fweData} 
                        />
                    </SubspaceProvider>
                </Segment>
                <Segment inverted color="black">
                    <SubspaceProvider mapState={state => state.skillCertificate} namespace="skillCertificate">
                        <TableForm 
                            headers={coqHeader} 
                            rows={coqData} 
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

export default PartC;
