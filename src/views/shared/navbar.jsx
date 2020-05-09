import React, { Component } from 'react'
import Navbar from 'react-bootstrap'


export class navbar extends Component {
  static propTypes = {
    
  }

  render() {
    return (
      <Navbar>
        <Navbar.Badge href>

        </Navbar.Badge>
      </Navbar>
    )
  }
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(navbar);
