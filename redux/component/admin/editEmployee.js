/**
 * Component for adding/removing employees.
 */
import React from 'react';
import { Panel, Form, FormGroup, Col, FormControl, ControlLabel,
    Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import _ from 'lodash';

const editEmployee = React.createClass({
    componentWillMount(){
        //noinspection JSUnresolvedFunction
        this.props.fetchEmployees();
    },
    handleSubmit(e) {
        e.preventDefault();
        var firstName = document.getElementById("firstNameEmployee").value;
        var lastName = document.getElementById("lastNameEmployee").value;
        var email = document.getElementById("email").value;
        //noinspection JSUnresolvedFunction
        this.props.addEmployee(firstName, lastName, email);
    },
    removeEmployee(key){
      this.props.removeEmployee(key);
    },
    renderEmployees() {
        return _.map(this.props.employees, (emp, key) => {
            return <ListGroupItem key={key}>
                <Col sm={9}>{ emp.last.toString() }, { emp.first.toString() }, { emp.email.toString() }</Col> <Col>
                <Button bsStyle="danger" onClick={() => this.removeEmployee(key)}>Remove</Button></Col></ListGroupItem>;
        });
    },
    render() {
        return (
            <div>
                <Panel header="Edit Employees" bsStyle="primary">
                    <Col smOffset={3} sm={9}>
                        <ListGroup>
                            { this.renderEmployees() }
                        </ListGroup>
                    </Col>
                    <Form horizontal onSubmit={ this.handleSubmit }>
                        <FormGroup controlId="firstNameEmployee">
                            <Col componentClass={ControlLabel} sm={3}>
                                First Name:
                            </Col>
                            <Col sm={9}>
                                <FormControl type="text" placeholder="First Name"/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="lastNameEmployee">
                            <Col componentClass={ControlLabel} sm={3}>
                                Last Name:
                            </Col>
                            <Col sm={9}>
                                <FormControl type="text" placeholder="Last Name"/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="email">
                            <Col componentClass={ControlLabel} sm={3}>
                                Email:
                            </Col>
                            <Col sm={9}>
                                <FormControl type="text" placeholder="Email"/>
                            </Col>
                        </FormGroup>

                        <FormGroup>
                            <Col smOffset={3} sm={9}>
                                <Button bsStyle="primary" type="submit">Add Employee</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </Panel>
            </div>
    )}
});

export default editEmployee;