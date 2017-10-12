import React, { Component } from 'react';
import { Segment, Table } from 'semantic-ui-react';
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
                <Segment>
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

                <Segment>
                    <h1>Level of Education</h1>
                    <TableForm headers={educationHeader} rows={educationData} />
                </Segment>

                <Segment>
                    <h1>Official languages proficiency - first official language</h1>
                    <TableForm headers={folHeader} rows={folData} />
                   
                </Segment>

                <Segment>
                    <h1>Canadian work experience</h1>
                    <TableForm headers={experienceHeader} rows={experienceData} />
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

export default PartB;
