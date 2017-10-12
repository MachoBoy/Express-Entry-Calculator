import React, { Component } from 'react';
import { Segment, Table } from 'semantic-ui-react';
import { SubspaceProvider } from 'react-redux-subspace';
import TableForm from '../components/TableForm';


class PartD extends Component {
    render() {
        const additionalHeader = [
            'Additional points',
            'Maximum 600 points',
        ];

        const additionalData = [
            { factor: 'Brother or sister living in Canada who is a citizen or permanent resident of Canada', point: 15 },
            { factor: 'Scored NCLC 7 or higher on all four French language skills and scored CLB 4 or lower in English (or didn’t take an English test)', point: 15 },
            { factor: 'Scored NCLC 7 or higher on all four French language skills and scored CLB 5 or higher on all four English skills', point: 30 },
            { factor: 'Post-secondary education in  Canada - credential of one or two years', point: 15 },
            { factor: 'Post-secondary education in  Canada - credential three years or longer', point: 30 },
            { factor: 'Arranged employment - NOC 00', point: 200 },
            { factor: 'Arranged employment – any other NOC 0, A or B ', point: 50 },
            { factor: 'Provincial or territorial nomination', point: 600 },
        ];

        return (
            <div className="partContainer" style={styles.container} >
                <Segment inverted color="orange">
                    <h1> D. Additional points </h1>
                    
                    <Table 
                        className="summaryTable" 
                        size="large"
                        padded
                        striped
                        celled
                        verticalAlign={'middle'} 
                    >
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell> Fair </Table.HeaderCell>
                                <Table.HeaderCell textAlign="center"> Points per factor </Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell> Brother or sister living in Canada (citizen or permanent resident) </Table.Cell>
                                <Table.Cell textAlign="center"> 15 </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell> French language skills </Table.Cell>
                                <Table.Cell textAlign="center"> 30 </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell> Post-secondary education in Canada </Table.Cell>
                                <Table.Cell textAlign="center"> 30 </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell> Arranged employment </Table.Cell>
                                <Table.Cell textAlign="center"> 200 </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell> PN nomination </Table.Cell>
                                <Table.Cell textAlign="center"> 600 </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </Segment>

                <Segment inverted color="black">
                <SubspaceProvider mapState={state => state.additional} namespace="additional">
                    <TableForm headers={additionalHeader} rows={additionalData} />
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

export default PartD;
