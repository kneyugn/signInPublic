/**
 * Form for employee to sign in.
 * Only shows employee who have signed out.
 */
import React from 'react';
import { Panel, Form, FormGroup,
    FormControl, ControlLabel, Button, Col } from 'react-bootstrap';
import _ from 'lodash';
import { browserHistory } from 'react-router';

const Employee = React.createClass({
    componentWillMount(){
        //noinspection JSUnresolvedFunction
        this.props.fetchEmployeesIn();
    },
    timeIn(){
        var key = document.getElementById("nameEmployee").value;
        //noinspection JSUnresolvedFunction
        this.props.employeeTimeIn(key);
    },
    signIn(){
        var key = document.getElementById("nameEmployee").value;
        if (key.length > 0) {
            this.timeIn();
            //noinspection JSUnresolvedFunction
            this.props.employeeIn(key);
            browserHistory.push('/welcome');
        }
    },
    renderEmployees() {
        return _.map(this.props.employeesIn, (emp, key) => {
            return <option key={key} value={key + " " + emp.email + " " + emp.last + " " + emp.first}>{emp.last.toString()}, {emp.first.toString()}</option>
        });
    },
    render(){
        return (
            <div>
                <Panel header="Employee Sign-In" bsStyle="primary">
                    <Form horizontal>
                        <FormGroup controlId="nameEmployee">
                            <Col componentClass={ControlLabel} sm={3}>
                                Employee Name:
                            </Col>
                            <Col sm={9}>
                                <FormControl componentClass="select" placeholder="select">
                                    { this.renderEmployees() }
                                    <option></option>
                                </FormControl>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col smOffset={3} sm={9}>
                                <Button bsStyle="primary" onClick={ this.signIn }>Sign In</Button> &nbsp;
                            </Col>
                        </FormGroup>
                    </Form>
                </Panel>
            </div>
        );
    }
});

export default Employee