import React, { Component } from 'react'
import {Jumbotron, Card} from 'react-bootstrap';

export class MainPage extends Component {
  render() {
    return (
      <Jumbotron fluid>
        <Card>
          <Card.Body>
            <Card.Title>
              Some Text
            </Card.Title>
            <Card.Text>
              Some more Text
            </Card.Text>
          </Card.Body>
        </Card>
      </Jumbotron>
    )
  }
}

export default MainPage
