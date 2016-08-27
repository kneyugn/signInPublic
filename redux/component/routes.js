/**
 * Configuring routes with components.
 */
import React from 'react';
import App from './appConnect';
import { Route, IndexRoute } from 'react-router';
import Client from './forms/client';
import Employee from './forms/employeeIn';
import Volunteer from './forms/volunteerIn';
import editEmployee from './admin/editEmployee';
import editProgram from './admin/editProgram';
import Reports from './admin/reportMain';
import SignOut from './forms/signOut';
import EmployeeOut from './forms/empOut';
import volunteerSignOut from './forms/volunteerOut';
import SignIn from './admin/signIn';
import Welcome from './forms/welcome';

export default(
    <Route path="/" component={ App }>
        <IndexRoute component={ Welcome } />
        <Route path="clients" component={ Client }/>
        <Route path="employees" component={ Employee } />
        <Route path="clientReport" component={ Reports } />
        <Route path="volunteers" component={ Volunteer } />
        <Route path="editEmployee" component={ editEmployee } />
        <Route path="editProgram" component={ editProgram } />
        <Route path="signOut" component={ SignOut } />
        <Route path="admin" component={ SignIn }/>
        <Route path="employeeOut" component={ EmployeeOut }/>
        <Route path="volunteerOut" component={ volunteerSignOut } />
        <Route path="welcome" component={ Welcome } />
    </Route>
);