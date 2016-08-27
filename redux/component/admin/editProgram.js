/**
 * Component for editing/removing programs.
 */
import _ from 'lodash';
import React from 'react';
import { Col, Form, FormGroup, FormControl,
    ControlLabel, Button, ListGroup, ListGroupItem, Panel } from 'react-bootstrap';

const editProgram = React.createClass({
    componentWillMount(){
        //noinspection JSUnresolvedFunction
        this.props.fetchPrograms();
    },
    handleSubmit(e) {
        e.preventDefault();
        var name = document.getElementById("programName").value;
        //noinspection JSUnresolvedFunction
        this.props.addProgram(name);
    },
    removeProgram(key){
        this.props.removeProgram(key);
    },
    renderPrograms(){
        return _.map(this.props.programs, (prog, key) => {
            return <ListGroupItem key={key}>
                <Col sm={9}>{ prog.name.toString() }</Col> <Col>
                <Button bsStyle="danger" onClick={() => this.removeProgram(key)}>Remove</Button></Col></ListGroupItem>;
        });
    },
    render() {
        return (
            <div>
                <Panel header="Edit Programs" bsStyle="primary">
                    <Col smOffset={3} sm={9}>
                        <ListGroup>
                            { this.renderPrograms() }
                        </ListGroup>
                    </Col>
                    <Form horizontal onSubmit={ this.handleSubmit }>
                        <FormGroup controlId="programName">
                            <Col componentClass={ControlLabel} sm={3}>
                                Program Name:
                            </Col>
                            <Col sm={9}>
                                <FormControl type="text" placeholder="Program Name"/>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col smOffset={3} sm={9}>
                                <Button bsStyle="primary" type="submit">Add Program</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </Panel>
            </div>
        )}
});

export default editProgram;