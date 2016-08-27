/**
 * Entry page for signing out.
 */
import React from 'react';
import { Panel, ListGroupItem, ListGroup } from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap';

class SignOut extends React.Component {
    render() {
        return (
            <div>
                <Panel header="Sign Out" bsStyle="primary">
                    <ListGroup>
                        <LinkContainer to="/volunteerOut"><ListGroupItem bsStyle="info">Volunteers</ListGroupItem></LinkContainer>
                        <LinkContainer to="/employeeOut"><ListGroupItem>Employees</ListGroupItem></LinkContainer>
                    </ListGroup>
                </Panel>
            </div>
        )
    }
}

export default SignOut;
