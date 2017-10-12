import React, { Component } from 'react';
import { Segment, Table } from 'semantic-ui-react';
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
                <Segment>
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
                                <Table.HeaderCell textAlign="center"> Education </Table.HeaderCell>
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
                                <Table.HeaderCell> Points per factor </Table.HeaderCell>
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
                                <Table.HeaderCell> Points per factor </Table.HeaderCell>
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

                <Segment>
                    <h1>Education</h1>
                    <TableForm headers={educationHeader_1} rows={educationData} />
                </Segment>
                <Segment>
                    <TableForm headers={educationHeader_2} rows={educationData} />
                </Segment>

                <Segment>
                    <h1>Foreign work experience – With good official language proficiency</h1>
                    <TableForm headers={fweHeader_1} rows={fweData} />
                </Segment>

                <Segment>
                    <h1>Foreign work experience – With Canadian work experience</h1>
                    <TableForm headers={fweHeader_2} rows={fweData} />
                    <TableForm headers={coqHeader} rows={coqData} />
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

export default PartC;
