import React, { Component, Fragment } from 'react';
import {Navbar} from 'react-bootstrap'
import {connect} from 'react-redux';


export class HomeNav extends Component {

  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#">Add Nav</Navbar.Brand>
        </Navbar>
      </div>
    )
  }
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(HomeNav);
