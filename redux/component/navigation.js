/**
 * Component for navigation.
 */
import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { browserHistory } from 'react-router';

const Navigation = React.createClass({
    componentWillMount(){
        this.props.fetchCurrentUser();
    },
    signOut(){
        this.props.signOut();
        browserHistory.push('/welcome');
    },
    showAdmin(){
        if (this.props.user == 'success'){
            return <Nav pullRight>
                <LinkContainer to="/clientReport"><NavItem>Clients Reports</NavItem></LinkContainer>
                <NavItem onClick={() => this.signOut()}>Sign Out</NavItem>
            </Nav>
        } else {
            return <Nav pullRight>
                <LinkContainer to="/admin"><NavItem>Admin</NavItem></LinkContainer>
            </Nav>
        }
    },
    render(){
       return <Navbar>
           <div className="container-fluid">
               <Navbar.Header>
                   <LinkContainer to="/welcome">
                       <Navbar.Brand>
                           BPSOS-Atlanta
                       </Navbar.Brand>
                   </LinkContainer>
               </Navbar.Header>
               <Nav>
                   <LinkContainer to="/clients"><NavItem>Clients</NavItem></LinkContainer>
                   <LinkContainer to="/volunteers"><NavItem>Volunteers</NavItem></LinkContainer>
                   <LinkContainer to="/employees"><NavItem>Employees</NavItem></LinkContainer>
                   <LinkContainer to="/signOut"><NavItem>Sign Out</NavItem></LinkContainer>
               </Nav>
               {this.showAdmin()}
           </div>
       </Navbar>
   }
});

export default Navigation;