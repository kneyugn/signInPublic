/**
 * Form for volunteer to sign out.
 * Only volunteers who have signed in are shown here.
 */
import React from 'react';
import { Panel, Form, FormGroup, FormControl, ControlLabel, Button, Col } from 'react-bootstrap';
import _ from 'lodash';
import { browserHistory } from 'react-router';

const volunteerSignOut = React.createClass({
    componentWillMount(){
        this.props.fetchVolunteer();
    },
    timeOut(){
        var key = document.getElementById("nameVolunteer").value;
        this.props.volunteerTimeOut(key);
        browserHistory.push('/welcome');
    },
    removeFromList(){
        var key = document.getElementById("nameVolunteer").value;
        if (key.length > 0) {
            this.timeOut();
            this.props.volunteerIsOut(key);
        }
    },
    renderVolunteers() {
        return _.map(this.props.volunteers, (vol, key) => {
            return <option key={key} value={key}>{ vol.last.toString() + ", " + vol.first.toString() }</option>
        });
    },
    render(){
        return (
            <div>
                <Panel header="Volunteer Sign-Out" bsStyle="primary">
                    <Form horizontal>
                        <FormGroup controlId="nameVolunteer">
                            <Col componentClass={ControlLabel} sm={3}>
                                Volunteer Name:
                            </Col>
                            <Col sm={9}>
                                <FormControl componentClass="select" placeholder="select">
                                    { this.renderVolunteers() }
                                    <option></option>
                                </FormControl>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col smOffset={3} sm={9}>
                                <Button bsStyle="danger" ref="outBtn" onClick={ this.removeFromList }>Sign Out</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </Panel>
            </div>
        );
    }
});

export default volunteerSignOut;