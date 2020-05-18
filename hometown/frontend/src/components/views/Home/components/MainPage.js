import React, { Component } from 'react'
import {Jumbotron, Card, ListGroup, Badge} from 'react-bootstrap';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { getBusiness } from '../../../../actions/business'
import '../css/mainpage.css'
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';

export class MainPage extends Component {
  state = {
    lat: 0,
    long: 0,
    zoom: 15
  }

  constructor(props) {
    super(props);
    this.navTap = this.navTap.bind(this);
  }

  navTap(e) {
    document.getElementById("select-name").innerHTML = e.name
    document.getElementById("select-text").innerHTML = e.description

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
      <div className="main-page">
        <Jumbotron style={{height: "100%"}}>
          <div className="main-grid">
            <Card id="card" className="selected-item">
              <Card.Body id="select">
                <Card.Title id="select-name">
                  Select a store
                </Card.Title>
                <Card.Text id="select-text">
                </Card.Text>
              </Card.Body>
            </Card>
            <div className="map-spot">
              <div id="map"></div>
            </div>
            <div className="list-business">
              <ListGroup as="ul">
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
    )
  }
}

const MapStateToProps = state => ({
  business: state.business.business
})

export default connect(MapStateToProps, {getBusiness})(MainPage);
