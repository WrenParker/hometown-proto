import React, { Component, Fragment } from 'react';
import "../Shared/css/main.css";

export class Home extends Component {

  render() {
    return (
      <div className="window">
        <div className="row h-100">
          <div className="jumbotron w-100">
            <div className="card w-25 mx-auto">
              <div className="card-header text-center">
                Login
              </div>
              <div className="card-body mx-auto">
                <form>
                  <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
