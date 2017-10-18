import React from 'react';
import { Segment, Header, Message, Icon, Table } from 'semantic-ui-react';

const About = () => (
    <div className="About" style={styles.container}>
        <Segment.Group>
            <Segment color="green">
                <Header size="large">Express Entry</Header>
                <p>Express Entry is an immigration system which selects skilled workers to Canada under Federal Economic programs.</p>
                <p>Applicants submit an online profile to the Express Entry Pool.</p>
                <p>Canadian employers and provincial governments across Canada access the best candidates who are invited by the Federal government to apply for Canadian permanent residence.</p>

                <p>For more Information, please visit here http://www.cic.gc.ca/english/express-entry/grid-crs.asp</p>
            </Segment>
            <Segment color="orange">
                <Header size="large">Express Entry Calculator</Header>
                <Message warning><Icon name="warning circle" size="large" />This tool is intended solely for general guidance and reference purposes.</Message>
                <p>This tool will help you calculate your Comprehensive Ranking System (CRS) score based on the answers you provide. The CRS is a points-based system. </p>
                <p>There are 4 parts of section</p>
                <ul>
                    <li>Skills and experience factors</li>
                    <li>Spouse or common-law partner factors, such as their language skills and education</li>
                    <li>Skills transferability, including education and work experience</li>
                    <li>Additional: Up to 600 points for:</li>
                    <ul>
                        <li>Canadian degrees, diplomas or certificates</li>
                        <li>a valid job offer</li>
                        <li>a nomination from a province or territory</li>
                        <li>a brother or sister living in Canada who is a citizen or permanent residen</li>
                        <li>strong French language skills</li>
                    </ul>
                </ul>
                <p> Core Points + Additional Points = Your Total Score</p>
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
                        <Table.HeaderCell textAlign="center"> Single candidates </Table.HeaderCell>
                        <Table.HeaderCell textAlign="center"> With a spouse or common-law partner </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell textAlign="center"> 1. Skills and experience factors (maximum 500) </Table.Cell>
                        <Table.Cell textAlign="center"> 1. Skills and experience factors (maximum 460) </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell textAlign="center"> N/A </Table.Cell>
                        <Table.Cell textAlign="center"> 2. Spouse or common-law partner factors (maximum 40) </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell textAlign="center"> 3. Skill transferability factors (maximum 100) </Table.Cell>
                        <Table.Cell textAlign="center"> 3. Skill transferability factors (maximum 100) </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell textAlign="center"> 4. points (maximum 600)  </Table.Cell>
                        <Table.Cell textAlign="center"> 4. points (maximum 600) </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
            </Segment>
            <Segment color="black" inverted textAlign="right">
                Developed by Machoboy 2017 &nbsp;&nbsp;
                <Icon name="mail" size="large" /> &nbsp; jiiwon0@gmail.com &nbsp;&nbsp;
                <Icon name="github" size="large" />
            </Segment>
        </Segment.Group>
    </div>
);

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


export default About;
