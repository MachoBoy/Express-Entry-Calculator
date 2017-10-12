import React from 'react';
import { Segment } from 'semantic-ui-react';

const About = () => (
    <div className="About" style={styles.container}>
        <Segment textAlign="center" >
            <h1>Express Entry</h1>
            <p>Express Entry is an immigration system which selects skilled workers to Canada under Rederal Economic programs.</p>
            <p>Applicants submit an online profile to the Express Entry Pool.</p>
            <p>Canadian employers and provincial governments across Canada access the best candidates who are invited by the Federal government to apply for Canadian permanent residence.</p>

            <p>For more Information, please visit here http://www.cic.gc.ca/english/express-entry/grid-crs.asp</p>
        </Segment>
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
