import HomeNav from '../shared/HomeNav';
import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';

export class Home extends Component {

  render() {
    return (
      <div>
        <HomeNav />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  
})

export default connect(mapStateToProps)(Home);
