import React, { Component, Fragment } from 'react';
import {Navbar, Button} from 'react-bootstrap'
import {connect} from 'react-redux';
import './css/nav-style.css';


export class Nav extends Component {
  state={
    auth: true,
    accountName: "John"
  }

  componentDidMount() {
    this.checkLogIn();
  }

  checkLogIn() {
    let login = document.getElementById("account");
    if(this.state.auth===true) {
      let user = document.createElement("div");
      user.innerHTML = `Hello, ${this.state.accountName}!`
      let signOut = document.createElement("a");
      signOut.addEventListener("click", this.changeRoute, false); //for later
      signOut.innerHTML = `Sign out`;
      login.appendChild(user);
    }
    else {
      let user = document.createElement("a");
      user.innerHTML = `Sign In / Register`
      login.appendChild(user);

    }
  }

  changeRoute() {
    console.log("hi")
  }

  render() {
    return (
      <div>
        <Navbar className="navbar" expand="lg">
          <div className="container">
            <Navbar.Brand href="#">Hometown</Navbar.Brand>
            <Navbar.Collapse id="account" className="justify-content-end">
              
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