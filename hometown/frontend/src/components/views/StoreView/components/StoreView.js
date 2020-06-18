import React, { Component } from 'react'
import {
  HashRouter as Router,
  Link
} from "react-router-dom";
import { currentBusiness } from '../../../../actions/business'
import {connect} from 'react-redux';

export class StoreView extends Component {
  componentDidMount() {
    console.log(this.props);
    document.getElementById('card').style.backgroundColor = this.props.currentBusiness.storefront[0].color
  }
  render() {
    return (
      <Router>
        <div className="row h-100">
          <div className="col-lg-9 h-100">
            <div  className="jumbotron h-100">
              <div className="row h-100">
                <div className="col-sm-6 h-50">
                  <div className="row">
                    <div id='card' className="card w-100 mx-auto">
                      <div className="card-header">
                          {this.props.currentBusiness.name}
                      </div>
                      <div className="card-body">
                      {this.props.currentBusiness.description}
                      <br/>
                      {this.props.currentBusiness.phone} <br/> {this.props.currentBusiness.email}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className ="col">
                      blank
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="row">
                    <div className="card w-100 ml-2">
                      <div className="card-header">
                        Menu
                      </div>
                      <div className="card-body">
                        items
                      </div>
                    </div>
                  </div>
              </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            Blank
          </div>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = state => ({
  currentBusiness: state.business.currentBusiness
})

export default connect(mapStateToProps)(StoreView)
