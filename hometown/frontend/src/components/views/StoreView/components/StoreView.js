import React, { Component } from 'react'
import {
  HashRouter as Router,
  Link
} from "react-router-dom";
import { currentBusiness } from '../../../../actions/business'
import {connect} from 'react-redux';
import {Jumbotron, Card, Image} from 'react-bootstrap'
import "../../Shared/img/store.png"

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
            <Jumbotron  className="h-100">
              <div className="row h-50">
                <Card id='card' className="col-sm-5 h-50">
                  <Card.Body>
                    <Card.Title>
                      {this.props.currentBusiness.name}
                    </Card.Title>
                    <Card.Text>
                      {this.props.currentBusiness.description}
                    </Card.Text>
                    <Card.Text>
                      {this.props.currentBusiness.phone} <br/> {this.props.currentBusiness.email}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="row">
                <div className ="col">
                  <img src="../../Shared/img/store.png" />
                </div>
              </div>
            </Jumbotron>
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
