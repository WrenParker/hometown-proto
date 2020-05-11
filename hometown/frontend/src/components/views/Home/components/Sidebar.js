import React, { Component } from 'react'
import {Nav, Form, Button, ToggleButtonGroup , ToggleButton} from 'react-bootstrap'
import '../css/sidenav.css'

export class Sidebar extends Component {
  render() {
    return (
      <Nav className="flex-column side-nav">
        <Form.Group className="col-sm-10 mx-auto mt-2">
          <Form.Label className="ml-2">Location</Form.Label>
          <Form.Control placeholder="Enter Location" className="nav-border"></Form.Control>
        </Form.Group>
        <div className="col-sm-10 mx-auto">
          <div className="ml-2">
            Storefront Type
          </div>
        </div>
        <div className="mt-2 col-sm-10 mx-auto">
          <ToggleButtonGroup toggle className="btn-block" name="store-type">
            <ToggleButton className="nav-border" value={1} name="retail" onClick={console.log(this)}>Retail</ToggleButton>
            <ToggleButton className="nav-border" value={2} name="restaurant" onClick={console.log(this)}>Restaurant</ToggleButton>
          </ToggleButtonGroup>
        </div>
        <div className="col-sm-10 mt-4 mx-auto">
          <Form.Check className="ml-2 nav-border" type="checkbox" label="Offers Delivery"/>
        </div>
      </Nav>
    )
  }
}

export default Sidebar
