import React, { Component } from 'react'
import loading from './load.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className="container my-5">
        <img src={loading} alt=""  className='rounded mx-auto d-block' style={{height:"70px"}}/>
      </div>
    )
  }
}

export default Spinner