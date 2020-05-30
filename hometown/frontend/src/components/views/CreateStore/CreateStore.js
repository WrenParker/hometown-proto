import React, { Component } from 'react'
import './css/create-store.css'
import { StorePage } from '../StoreView/StorePage'


export class CreateStore extends Component {
  state = {
    selectedOption: 0
  }

  componentDidMount() {
    document.getElementById('store-details').style.backgroundColor = "#0069d9"
    document.getElementById('store-inventory').style.backgroundColor = "#007bff"
  }

  changeOption = (e, num) => {
    e.preventDefault();
    console.log(e);
    this.state = {
      selectedOption: num
    }
    if(this.state.selectedOption===0){
      document.getElementById('store-details').style.backgroundColor = "#0069d9"
      document.getElementById('store-inventory').style.backgroundColor = "#007bff"
    } else if(this.state.selectedOption===1){
      document.getElementById('store-details').style.backgroundColor = "#007bff"
      document.getElementById('store-inventory').style.backgroundColor = "#0069d9"
    }
  }

  addHours = (e) => {
    e.preventDefault();

    let day = document.getElementById("day").value
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let card = document.getElementById("current-hours");

    let newHours = document.createElement("div");
    newHours.innerHTML = `<div>${day + " from " + from + " to " + to}</div></br>`
    card.appendChild(newHours)
  }

  render() {
    return (
      <div className="jumbotron h-100">
        <div className="row">
          <div className="col-sm-4">
            <div className="text-left text-top">
              <h3>My Store</h3>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="btn-group btn-block">
              <div className="btn btn-primary round-border" id="store-details" onClick={e => this.changeOption(e, 0)}>Store Details</div>
              <div className="btn btn-primary round-border" id="store-inventory" onClick={e => this.changeOption(e, 1)}>Inventory</div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="text-right text-top">
            </div>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label className="ml-3">store name</label>
                  <input type="text" className="form-control round-border" id="store-name" placeholder="enter store name" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label className="ml-3">store type</label>
                  <select className="form-control round-border" id="store-type">
                    <option>Restaurant</option>
                    <option>Retail</option>
                  </select>
                </div>
              </div>
              <div className="col-sm-6"></div>
            </div>
            <div className="row pt-3">
              <div className="col-sm-6">
                <div className="form-group">
                  <label className="ml-3">store description</label>
                  <textarea type="text" className="form-control round-border" id="store-description" placeholder="enter store description" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="row">
                  <div className="col">
                    <div className="text-left ml-3 mt-1">
                      store hours
                    </div>
                  </div>
                  <div className="col">
                    <div className="text-right">
                      <button className="btn btn-success btn-sm" onClick={e=>this.addHours(e)}>add</button>
                    </div>
                  </div>
                </div>
                <div className="row pt-2">
                  <div className="col-sm-3">
                    <div>
                      <select className="round-border" id="day">
                        <option>Monday</option>
                        <option>Tuesday</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-2 text-left">
                    From
                  </div>
                  <div className="col-sm-3">
                    <div>
                      <select className="round-border" id="from">
                        <option>00:00</option>
                        <option>00:30</option>
                        <option>01:00</option>
                        <option>01:30</option>
                        <option>02:00</option>
                        <option>02:30</option>
                        <option>03:00</option>
                        <option>03:30</option>
                        <option>04:00</option>
                        <option>04:30</option>
                        <option>05:30</option>
                        <option>06:30</option>
                        <option>07:00</option>
                        <option>07:30</option>
                        <option>08:30</option>
                        <option>16:00</option>
                        <option>17:00</option>
                        <option>18:00</option>
                        <option>19:00</option>
                        <option>6:00</option>
                        <option>6:30</option>
                        <option>7:00</option>
                        <option>7:30</option>
                        <option>8:00</option>
                        <option>8:30</option>
                        <option>9:00</option>
                        <option>10:00</option>
                        <option>11:00</option>
                        <option>12:00</option>
                        <option>13:00</option>
                        <option>14:00</option>
                        <option>15:00</option>
                        <option>16:00</option>
                        <option>17:00</option>
                        <option>18:00</option>
                        <option>19:00</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-1 text-left">
                    To
                  </div>
                  <div className="col-sm-2">
                    <div>
                      <select className="round-border" id="to">
                        <option>00:00</option>
                        <option>00:30</option>
                        <option>01:00</option>
                        <option>01:30</option>
                        <option>02:00</option>
                        <option>02:30</option>
                        <option>03:00</option>
                        <option>03:30</option>
                        <option>04:00</option>
                        <option>04:30</option>
                        <option>05:30</option>
                        <option>06:30</option>
                        <option>07:00</option>
                        <option>07:30</option>
                        <option>08:30</option>
                        <option>16:00</option>
                        <option>17:00</option>
                        <option>18:00</option>
                        <option>19:00</option>
                        <option>6:00</option>
                        <option>6:30</option>
                        <option>7:00</option>
                        <option>7:30</option>
                        <option>8:00</option>
                        <option>8:30</option>
                        <option>9:00</option>
                        <option>10:00</option>
                        <option>11:00</option>
                        <option>12:00</option>
                        <option>13:00</option>
                        <option>14:00</option>
                        <option>15:00</option>
                        <option>16:00</option>
                        <option>17:00</option>
                        <option>18:00</option>
                        <option>19:00</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row pt-3">
                  <div className="col">
                    <div className="overflow-auto">
                      <div className="card">
                        <div className="card-header">
                          Current Hours
                        </div>
                        <div className="card-body card-scroll" id="current-hours">

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="container">
              store view
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CreateStore
