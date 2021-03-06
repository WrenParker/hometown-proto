import React, { Component } from 'react'
import {Jumbotron, Card, ListGroup, Badge, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { getBusiness, selectBusiness } from '../../../../actions/business'
import '../css/mainpage.css'
import {
  HashRouter as Router,
  Link,
  useHistory
} from "react-router-dom";
import {Redirect} from 'react-router'
import L from 'leaflet'

export class MainPage extends Component {
  state = {
    currentSelected: null
  }

  constructor(props) {
    super(props);
    this.navTap = this.navTap.bind(this);
    
  }

  navTap(e) {
    document.getElementById("select-name").innerHTML = e.name
    document.getElementById("select-text").innerHTML = e.description
    document.getElementById("card").style.backgroundColor = e.storefront[0].color
    this.props.selectBusiness(e);
    let a = document.getElementById("link")
    a.setAttribute("to", "/StoreView")
    a.setAttribute("href", "/StoreView")
    this.state = {
      currentSelected: e
    }
  }

  componentDidMount() {
    this.props.getBusiness();
    let mymap = L.map('map').setView([39.6306,-79.9552], 15);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    maxZoom: 24
    }).addTo(mymap);
  }

  render() {

    return (
      <Router>
        <div className="main-page">
          <Jumbotron style={{height: "100%"}}>
            <div className="main-grid">
              <Link id="link" to="/Store">
                <Card id="card" className="selected-item">
                  <Card.Body id="select">
                    <Card.Title>
                      <div id="select-name">
                        Select a store
                      </div>
                    </Card.Title>
                    <Card.Text id="select-text">
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
              <div className="map-spot">
                <div id="map"></div>
              </div>
              <div className="list-business">
                <ListGroup id="list-group" as="ul">
                  {this.props.business.map(store => (
                    <ListGroup.Item key={store.id} action onClick={e => this.navTap(store)}>
                      <div className="row">
                        <div className="col">
                          <h5>{store.name}</h5>
                        </div>
                        <div className="col text-right font-weight-bold">
                          {store.storeType}
                        </div>
                      </div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </div>
            </div>
          </Jumbotron>
        </div>
      </Router>
    )
  }
}

const MapStateToProps = state => ({
  business: state.business.business
})

export default connect(MapStateToProps, {getBusiness, selectBusiness})(MainPage);
