import Nav from '../shared/Nav.js'
import Sidebar from './components/Sidebar';
import MainPage from './components/MainPage';
import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import "../Shared/css/main.css";

export class Home extends Component {

  render() {
    return (
      <div className="window">
        <Nav />
        <div className="row h-100">
          <div className="col-sm-3">
            <Sidebar />
          </div>
          <div className="col-sm-9">
            <MainPage/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  
})

export default Home;
