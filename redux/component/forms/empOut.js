/**
 * Employee sign out form.
 * Only shows employees who have signed in.
 */
import React from 'react';
import { Panel, Form, FormGroup, FormControl, ControlLabel, Button, Col } from 'react-bootstrap';
import _ from 'lodash';
import { browserHistory } from 'react-router';

const EmployeeOut = React.createClass({
    componentWillMount(){
        //noinspection JSUnresolvedFunction
        this.props.fetchEmployeeOut();
    },
    timeOut(){
        var key = document.getElementById("employee").value;
        //noinspection JSUnresolvedFunction
        this.props.employeeTimeOut(key);
    },
    signOut(){
        var key = document.getElementById("employee").value;
        if (key.length > 0) {
            this.timeOut();
            //noinspection JSUnresolvedFunction
            this.props.employeeOut(key);
            browserHistory.push('/welcome');
        }
    },
    renderEmployees() {
        return _.map(this.props.employeesOut, (emp, key) => {
            return <option key={key} value={key + " " + emp.email + " "
            + emp.last + " " + emp.first}> { emp.last + ", " + emp.first }</option>
        });
    },
    render(){
        return (
            <div>
                <Panel header="Employee Sign-Out" bsStyle="primary">
                    <Form horizontal>
                        <FormGroup controlId="employee">
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
                                <Button bsStyle="danger" onClick={ this.signOut }>Sign Out</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </Panel>
            </div>
        );
    }
});

export default EmployeeOut;