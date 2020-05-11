import Nav from '../shared/Nav.js'
import Sidebar from './components/Sidebar';
import MainPage from './components/MainPage';
import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';

export class Home extends Component {

  render() {
    return (
      <div>
        <Nav />
        <div className="row">
          <div className="col-sm-3">
            <Sidebar />
          </div>
          <div className="col">
            <MainPage />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  
})

export default Home;
