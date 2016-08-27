/**
 * Contains all actions in this redux-react application.
 */
import Firebase from 'firebase';

var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    storageBucket: ""
};

Firebase.initializeApp(config);

const employeeEn = Firebase.database().ref('employees');
const clientEn = Firebase.database().ref('clients');
const employeeLogEn =  Firebase.database().ref('employeesLog');
const volunteerEn =  Firebase.database().ref('volunteers');
const programEn =  Firebase.database().ref('programs');

var timeStamp = Date.now();

/**
 * Logs client at sign in.
 * @returns function to push to database.
 */
export function clientIn(first, last, phone, email, program) {
    first = first.toLowerCase();
    last = last.toLowerCase();
    phone = phone.toLowerCase();
    email = email.toLowerCase();
    program = program.toLowerCase();
    return dispatch => clientEn.push({timeIn: timeStamp, first, last, phone, email, program});
}

/**
 * fetching list of all clients.
 * @returns {function(*)}
 */
export function fetchClients() {
    return dispatch => {
        clientEn.on('value', snapshot => {
            dispatch({
                type: 'FETCH_CLIENTS',
                payload: snapshot.val()
            });
        });
    }
}

/**
 * Logs volunteer time in
 * @returns function to store information to db.
 */
export function volunteerIn(first, last, phone, email, program){
    first = first.toLowerCase();
    last = last.toLowerCase();
    phone = phone.toLowerCase();
    email = email.toLowerCase();
    program = program.toLowerCase();
    return dispatch => volunteerEn.push({timeIn: timeStamp, loggedOut: false, first, last, phone, email, program});
}

/**
 * Removes volunteers from sign-out list
 * @param key of the volunteer
 * @returns {function(*)}
 */
export function volunteerIsOut(key){
    //noinspection JSUnresolvedFunction
    return dispatch => volunteerEn.child(key).update({ loggedOut: true });
}

/**
 * Logs volunteer time out.
 * @param key
 */
export function volunteerTimeOut(key){
    return dispatch => volunteerEn.child(key).update({key, timeOut: timeStamp});
}

/**
 * Fetches list of volunteers signed in.
 * This list is used for signing out.
 * @returns {function(*)}
 */
export function fetchVolunteer(){
    return dispatch => {
        volunteerEn.orderByChild("loggedOut").equalTo(false).on('value', snapshot => {
            dispatch({
                type: 'FETCH_VOLUNTEERS',
                payload: snapshot.val()
            });
        });
    }
}

/**
 * For admin to add a new program.
 * @param name of program.
 * @returns {function(*)}
 */
export function addProgram(name){
    return dispatch => programEn.child(name).set({name});
}

/**
 * For admin to remove a program.
 * @param key of the program for removal.
 * @returns {function(*): *}
 */
export function removeProgram(key){
    return dispatch => programEn.child(key).remove();
}

/**
 * Fetches a list of all programs for admin to edit.
 * @returns {function(*)}
 */
export function fetchPrograms(){
    return dispatch => {
        programEn.on('value', snapshot => {
            dispatch({
                type: 'FETCH_PROGRAMS',
                payload: snapshot.val()
            });
        });
    }
}

/**
 * Removes employee from log-in page and place them into log-out page.
 * @param key associated with employee.
 * @returns function that logs time in of employee.
 */
export function employeeIn(key){
    var arr = key.split(" ");
    return dispatch => employeeEn.child(arr[0]).update({ loggedOut: false});
}

/**
 * Logs employee sign-in time.
 * @param key
 * @returns {function(*)}
 */
export function employeeTimeIn(key){
    var arr = key.split(" ");
    return dispatch => employeeLogEn.push({email: arr[1], last: arr[2], first: arr[3],
        timeIn: timeStamp});
}

/**
 * Logs employee sign-out time.
 * @param key
 * @returns {function(*)}
 */
export function employeeTimeOut(key){
    var arr = key.split(" ");
    return dispatch => employeeLogEn.push({email: arr[1], last: arr[2], first: arr[3],
        timeOut: timeStamp})
}

/**
 * Moves employee from sign-out page to sign-in page.
 * @param key
 * @returns {function(*): (Firebase.Promise<any>|!Firebase.Promise.<void>)}
 */
export function employeeOut(key){
    var arr = key.split(" ");
    return dispatch => employeeEn.child(arr[0]).update({ loggedOut: true});
}

/**
 * For admin to add a new employee.
 * @returns {function(*)}
 */
export function addEmployee(first, last, email){
    first = first.toLowerCase();
    last = last.toLowerCase();
    email = email.toLowerCase();
    var key = email;
    key = key.replace(/\W/g, '');
    return dispatch => employeeEn.child(key).set({first, last, email, loggedOut: true});
}

/**
 * For admin to remove an employee.
 * @param key of employee to be removed.
 * @returns {function(*): *}
 */
export function removeEmployee(key){
    return dispatch => employeeEn.child(key).remove();
}

/**
 * Gets a list of employees for admin to review.
 * @returns {function(*)}
 */
export function fetchEmployees(){
    return dispatch => {
        employeeEn.on('value', snapshot => {
            dispatch({
                type: 'FETCH_EMPLOYEES',
                payload: snapshot.val()
            });
        });
    }
}

/**
 * Gets a list of employees signedOut for the log-out page.
 * @returns {function(*)}
 */
export function fetchEmployeeOut(){
    return dispatch => {
        employeeEn.orderByChild("loggedOut").equalTo(false).on('value', snapshot => {
            dispatch({
                type: 'FETCH_EMPLOYEES_OUT',
                payload: snapshot.val()
            });
        });
    }
}

/**
 * Fetches list of employees for the sign-in page.
 * This list is used for signing out.
 * @returns {function(*)}
 */
export function fetchEmployeesIn(){
    return dispatch => {
        employeeEn.orderByChild("loggedOut").equalTo(true).on('value', snapshot => {
            dispatch({
                type: 'FETCH_ARRAY_IN_LIST',
                payload: snapshot.val()
            });
        });
    }
}

/**
 * Generates general report for clients, volunteers, or employees.
 * @param entity
 * @returns {function(*)}
 */
export function fetchReport(entity){
    if (entity == 'employees'){
        entity = 'employeesLog';
    }
    return dispatch => {
        Firebase.database().ref(entity).on('value', snapshot =>{
            dispatch({
                type: 'FETCH_REPORT',
                payload: snapshot.val()
            })
        })
    }
}

/**
 * Generates search reports.
 * @param entity
 * @param child
 * @param value
 * @returns {function(*)}
 */
export function fetchReportCustom(entity, child, value){
    if (entity == 'employees'){
        entity = 'employeesLog';
    }
    return dispatch => {
        Firebase.database().ref(entity).orderByChild(child).equalTo(value).on('value', snapshot => {
            dispatch({
                type: 'FETCH_REPORT_CUSTOM',
                payload: snapshot.val()
            });
        });
    }
}

/**
 * Creating a new user in fb.
 * Not needed for sign-in application.
 * May be useful if this application expands its uses.
 * @returns {function(*)}
 */
export function createUser(){
    return dispatch => {
        Firebase.auth().createUserWithEmailAndPassword('abc@bpsos.org', '12345678910').catch(error => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
            dispatch({
                type: 'RETURN_USER',
                payload: Firebase.User
            })
        });
    }
}

/**
 * Authenticates the user when signing in.
 * @param email
 * @param password
 * @returns {function(*)}
 */
export function authenticateUser(email, password){
    return dispatch => {
        Firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
            dispatch({
                type: 'SIGN_IN_ERROR',
                payload: errorMessage
            })
        });
    }
}

export function fetchCurrentUser(){
    return dispatch =>{
        Firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                console.log("loggedIn!");
                dispatch({
                    type: 'FETCH_USER',
                    payload: 'success'
                })
            } else {
                console.log("Not logged in.");
                dispatch({
                    type: 'FETCH_USER',
                    payload: 'not logged'
                })
            }
        });
    }
}

/**
 * Sign out of application.
 * @returns {function(*)}
 */
export function signOut(){
    return dispatch =>{
        Firebase.auth().signOut().then(function() {
            dispatch({
                type: 'SIGN_OUT_SUCCESSFUL',
                payload: ''
            })
        }, function(error) {
            console.log(error);
        });
    }
}

/**
 * Gets total volunteer hours donated.
 * @returns {function(*)}
 */
export function getVolunteerHours(){
    return dispatch =>{
        volunteerEn.on('value', snapshot =>{
            var total = 0;
            snapshot.forEach(tuple =>{
                if (tuple.val().timeIn != null && tuple.val().timeOut != null){
                    total += (tuple.val().timeOut - tuple.val().timeIn);
                }
            });
            dispatch({
                type: 'GET_VOLUNTEER_HOURS',
                payload: total
            })
        });
    }
}

export function getEmployeeHours(){
    return dispatch =>{
        employeeLogEn.on('value', snapshot =>{
            var timeInTotal = 0;
            var timeOutTotal = 0;
            snapshot.forEach(tuple =>{
                if (tuple.val().timeIn != null){
                    timeInTotal += tuple.val().timeIn;
                }
                if (tuple.val().timeOut != null){
                    timeOutTotal += tuple.val().timeOut;
                }
            });
            var total = Math.abs(timeOutTotal - timeInTotal);
            dispatch({
                type: 'GET_EMPLOYEES_HOURS',
                payload: total
            })
        });
    }
}
