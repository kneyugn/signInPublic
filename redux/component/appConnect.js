/**
 * Connects front end to actions and reducers.
 */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actions';
import Main from './main';

function mapStateToProps(state) {
    return {
        clients: state.clients,
        employees: state.employees,
        programs: state.programs,
        volunteers: state.volunteers,
        employeesIn: state.employeesIn,
        employeesOut: state.employeesOut,
        report: state.report,
        user: state.user,
        volunteerHours: state.volunteerHours,
        signInError: state.signInError
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;