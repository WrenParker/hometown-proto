import React, { Component, Fragment } from 'react';
import {Navbar, Button} from 'react-bootstrap'
import {connect} from 'react-redux';
import './css/nav-style.css';


export class Nav extends Component {

  render() {
    return (
      <div>
        <Navbar className="navbar" expand="lg">
          <div className="container">
            <Navbar.Brand href="#">Hometown</Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
              <div className="link">
                Sign In
              </div>
              {" / "}
              <div className="link">
                Register
              </div>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
    )
  }
}

const mapStateToProps = state => ({

})

export default Nav;