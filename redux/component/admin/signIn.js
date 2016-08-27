/**
 * Component for adding/removing employees.
 */
import React from 'react';
import { Alert, Panel, Form, FormGroup, Col,
    FormControl, ControlLabel, Button} from 'react-bootstrap';
import { browserHistory } from 'react-router';

const SignIn = React.createClass({
    submit(e){
        e.preventDefault();
        var email = document.getElementById("email").value;
        var pass = document.getElementById("password").value;
        //noinspection JSUnresolvedFunction
        this.props.authenticateUser(email, pass);
        //noinspection JSUnresolvedFunction
        this.props.fetchCurrentUser();
    },
    signInError(){
        if (this.props.signInError){
            return <Alert bsStyle="warning">{this.props.signInError}</Alert>
        }
    },
    render() {
        if (this.props.user == 'success'){
            browserHistory.push('/clientReport');
        }
        return (
            <div>
                {this.signInError()}
                <Panel header="Admin Log-In" bsStyle="primary">
                    <Form horizontal onSubmit={this.submit}>
                        <FormGroup controlId="email">
                            <Col componentClass={ControlLabel} sm={3}>
                                Email:
                            </Col>
                            <Col sm={9}>
                                <FormControl type="email" placeholder="email"/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="password">
                            <Col componentClass={ControlLabel} sm={3}>
                                Password:
                            </Col>

                            <Col sm={9}>
                                <FormControl type="password" placeholder="password"/>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col smOffset={3} sm={9}>
                                <Button bsStyle="primary" type="submit">Sign-In</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </Panel>
            </div>
        )}
});

export default SignIn;