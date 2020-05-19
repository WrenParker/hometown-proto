import React, { Component } from 'react'
import StoreView from './components/StoreView.js'
import Navbar from '../Shared/Navbar.js'

export class Store extends Component {
  render() {
    return (
      <div className="window">
        <Navbar />
        <div className="row h-100">
          <div className="col">
            <StoreView/>
          </div>
        </div>
      </div>
    )
  }
}

export default Store
