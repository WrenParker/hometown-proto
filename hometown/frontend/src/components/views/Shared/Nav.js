import React, { Component, Fragment } from 'react';
import {Navbar, Button} from 'react-bootstrap'
import {connect} from 'react-redux';
import './css/nav.css';


export class Nav extends Component {

  render() {
    return (
      <div>
        <Navbar className="navbar" expand="lg">
          <Navbar.Brand href="#">Hometown</Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Button variant="outline-dark">
              Sign In
            </Button>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

const mapStateToProps = state => ({

})

export default Nav;