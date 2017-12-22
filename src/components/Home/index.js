import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component{
  render(){
    return(
      <div className="homeWrapper">
        <div className="homeFlex">
          <div className="homeItem">
            <h1 style={{color: '#080808'}}>Santa RM</h1>
            <h5 style={{color: '#000'}}>Music dashboard</h5>
          </div>
        </div>
        <div className="homeButtonContainer">
          <Link to="/testing"><div className="homeButton">Ir a la aplicación web</div></Link>
        </div>
      </div>
    )
  }
}
