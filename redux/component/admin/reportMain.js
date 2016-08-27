/**
 * Main component for reports.
 */
import React from 'react';
import _ from 'lodash';
import { Panel, Breadcrumb, Table, FormGroup, FormControl,
    DropdownButton, MenuItem, InputGroup  } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Reports = React.createClass({
    componentWillMount(){
        this.props.getVolunteerHours();
    },
    getInitialState(){
        //noinspection JSUnresolvedFunction
        this.props.getVolunteerHours();
        var volHours = this.props.volunteerHours/3600000;
        volHours = Math.floor(volHours * 100) / 100;
        return {reportType: 'Clients', volHours: volHours, showReport: true}
    },
    changeSearchBy(searchBy){
        var value = document.getElementById("searchLast").value.toLowerCase();
        searchBy = searchBy.toLowerCase();
        //noinspection JSUnresolvedFunction
        this.props.fetchReportCustom(this.state.reportType.toLowerCase(), searchBy, value);
    },
    generateReport(entity){
        this.setState({reportType: entity});
        entity = entity.toLowerCase();
        //noinspection JSUnresolvedFunction
        this.props.fetchReport(entity);
    },
    signOut(){
      this.props.signOut();
    },
    renderReport(){
        var count = 0;
        return _.map(this.props.report, (tuple, key) => {
            var timeIn = tuple.timeIn;
            if (timeIn > 0){
                var time = new Date(timeIn);
                var month = time.getMonth() + 1;
                time = time.getFullYear() + "/" + month + "/" + time.getDate()
                    + " " + time.getHours() + ":" + time.getMinutes() + ":" +time.getSeconds();
                timeIn = time;
            }
            var timeOut = tuple.timeOut;
            if (timeOut > 0){
                time = new Date(timeOut);
                month = time.getMonth() + 1;
                time = time.getFullYear() + "/" + month + "/" + time.getDate()
                    + " " + time.getHours() + ":" + time.getMinutes() + ":" +time.getSeconds();
                timeOut = time;
            }
            return <tr key={key}>
                <td>{ count++ }</td>
                <td>{ tuple.last }</td>
                <td>{ tuple.first }</td>
                <td>{ tuple.email }</td>
                <td>{ tuple.phone }</td>
                <td>{ tuple.program }</td>
                <td>{ timeIn }</td>
                <td>{ timeOut }</td>
            </tr>;
        });
    },
    render() {
        return (
            <div>
                <Panel header={this.state.reportType} bsStyle="primary">
                    <FormGroup controlId="searchLast">
                        <InputGroup>
                            <FormControl type="text" placeholder={"Search by " + this.state.reportType.toLowerCase() + "..."}/>
                            <DropdownButton
                                componentClass={InputGroup.Button}
                                id="input-dropdown-addon"
                                title="Search">
                                <MenuItem key="0" onClick={() => this.changeSearchBy('last')}>Last Name</MenuItem>
                                <MenuItem key="1" onClick={() => this.changeSearchBy('first')}>First Name</MenuItem>
                                <MenuItem key="2" onClick={() => this.changeSearchBy('email')}>Email</MenuItem>
                                <MenuItem key="3" onClick={() => this.changeSearchBy('phone')}>Phone</MenuItem>
                                <MenuItem key="4" onClick={() => this.changeSearchBy('program')}>Program</MenuItem>
                            </DropdownButton>
                        </InputGroup>
                    </FormGroup>
                    <Breadcrumb>
                        <Breadcrumb.Item onClick={() => this.generateReport('Clients')}>
                            Client Log
                        </Breadcrumb.Item>
                        <Breadcrumb.Item onClick={() => this.generateReport('Volunteers')}>
                            Volunteer Log
                        </Breadcrumb.Item>
                        <Breadcrumb.Item onClick={() => this.generateReport('Employees')}>
                            Employee Log
                        </Breadcrumb.Item>
                        <LinkContainer to="editEmployee">
                            <Breadcrumb.Item>
                                Edit Employees
                            </Breadcrumb.Item>
                        </LinkContainer>
                        <LinkContainer to="editProgram">
                            <Breadcrumb.Item>
                                Edit Programs
                            </Breadcrumb.Item>
                        </LinkContainer>
                    </Breadcrumb>
                    <h4>{"Total Volunteers Hours: " + this.state.volHours}</h4>
                    <Table striped bordered hover condensed>
                        <thead>
                        <tr>
                            <th>No.</th>
                            <th>Last Name</th>
                            <th>First Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Program</th>
                            <th>Time In</th>
                            <th>Time Out</th>
                        </tr>
                        </thead>
                        <tbody>
                        { this.renderReport() }
                        </tbody>
                    </Table>
                </Panel>
            </div>
        )
    }
});

export default Reports;