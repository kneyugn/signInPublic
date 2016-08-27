/**
 * Form for client to sign in.
 * Features: Toggles between two languages.
 * Ensures that user puts in first name, last name, and email.
 */
import React from 'react';
import { Alert, Panel, Form, FormGroup, Col, FormControl, ControlLabel, Button } from 'react-bootstrap';
import _ from 'lodash';
import {browserHistory} from 'react-router';

const Client = React.createClass({
    componentWillMount(){
        //noinspection JSUnresolvedFunction
        this.props.fetchPrograms();
        this.props.getVolunteerHours();
    },
    getInitialState(){
        return {english: false, formValidated: true, submitted: false,
            phone: '', first: '', last: ''};
    },
    setLanguageState(){
        this.setState({english: !this.state.english});
    },
    validatePhone(){
        this.setState({formValidated: true, submitted: false});
        var phone = document.getElementById("phoneClient").value;
        if (phone.length < 10){
            this.setState({formValidated: false, errorMsg: "Phone"})
        } else {
            this.setState({phone: phone})
        }
    },
    validateFirstName(){
        this.setState({formValidated: true, submitted: false});
        var first = document.getElementById("firstNameClient").value;
        if (first.length == 0){
            this.setState({formValidated: false, errorMsg: "First Name"})
        } else {
            this.setState({first: first})
        }
    },
    validateLastName(){
        this.setState({formValidated: true, submitted: false});
        var last = document.getElementById("lastNameClient").value;
        if (last.length == 0){
            this.setState({formValidated: false, errorMsg: "Last Name"})
        } else {
            this.setState({last: last})
        }
    },
    handleSubmit(e) {
        e.preventDefault();
        if ((this.state.phone.length && this.state.first.length  && this.state.last.length) != 0){
            var email = document.getElementById("emailClient").value;
            var program = document.getElementById("programClient").value;
            //noinspection JSUnresolvedFunction
            this.props.clientIn(this.state.first, this.state.last, this.state.phone, email, program);
            this.setState({submitted: true});
        } else {
            this.setState({formValidated: false, errorMsg: "First, Last, Phone.", submitted: false});
        }
    },
    showError(){
        if (!this.state.formValidated){
            return <Alert bsStyle="danger">Please check <strong>{ this.state.errorMsg }</strong></Alert>;
        }
        if (this.state.submitted){
            this.resetForm();
            browserHistory.push('/welcome');
            //return <Alert bsStyle="success">Welcome to BPSOS!</Alert>
        }
    },
    renderPrograms() {
        return _.map(this.props.programs, (prog, key) => {
            return <option key={key} value={key}>{prog.name.toString()}</option>
        });
    },
    resetForm(){
        const fields = ['firstNameClient', 'lastNameClient', 'emailClient', 'phoneClient'];
        fields.map(field => {
            document.getElementById(field).value = '';
        });
    },
    render() {
        var first = 'Tên: ';
        var last =  'Họ: ';
        var email = 'Email: ';
        var phone = 'Phone: ';
        var program = 'Chương Trình';
        var languageState = 'English Version';
        if (this.state.english){
            first = 'First Name:';
            last = 'Last Name:';
            program = 'Program:';
            languageState = 'Tiếng Việt';
        }
        var disabledBool = false;
        if (!this.state.formValidated){
            disabledBool = true;
        }
        return (
            <Panel header="Client/Guests Sign-In" bsStyle="primary">
                <br/>
                { this.showError() }
                <Form horizontal onSubmit={ this.handleSubmit }>
                    <FormGroup controlId="firstNameClient" bsSize="large" onBlur={() => this.validateFirstName()}>
                        <Col componentClass={ControlLabel} sm={3}>
                            { first }
                        </Col>
                        <Col sm={9}>
                            <FormControl type="text" placeholder="First Name"/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="lastNameClient" bsSize="large" onBlur={() => this.validateLastName()}>
                        <Col componentClass={ControlLabel} sm={3}>
                            { last }
                        </Col>
                        <Col sm={9}>
                            <FormControl type="text"  placeholder="Last Name" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="emailClient" bsSize="large">
                        <Col componentClass={ControlLabel} sm={3}>
                            { email }
                        </Col>
                        <Col sm={9}>
                            <FormControl type="email" placeholder="you@gmail.com"/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="phoneClient" bsSize="large" onBlur={() => this.validatePhone()}>
                        <Col componentClass={ControlLabel} sm={3}>
                            { phone }
                        </Col>
                        <Col sm={9}>
                            <FormControl type="phone"  placeholder="" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="programClient" bsSize="large">
                        <Col componentClass={ControlLabel} sm={3}>
                            { program }
                        </Col>
                        <Col sm={9}>
                            <FormControl componentClass="select" placeholder="select">
                                { this.renderPrograms() }
                            </FormControl>
                        </Col>
                    </FormGroup>
                    <FormGroup bsSize="large">
                        <Col smOffset={3} sm={9}>
                            <Button bsStyle="primary" type="submit" bsSize="large" disabled={ disabledBool }>Sign In</Button>
                        </Col>
                    </FormGroup>
                </Form>
                <a href="#" onClick={ this.setLanguageState }><strong>{languageState}</strong></a>
            </Panel>
        )
    }
});

export default Client;