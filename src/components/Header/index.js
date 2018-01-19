import React, { Component } from 'react';
import Logo from  '../../img/srm.png'

class Header extends Component{
  render(){
    return(
      <div className="headerWrapper">
        <div className="headerFirstGroup">
          <div className="headerFirstGroupItem">
            <img width='80' src={Logo} alt="santa rm logo" />
          </div>
          <div className="headerFirstGroupItem">
            <div style={{display:'flex'}}>
              <p className="boldFont">Mexico</p>
              <p className="lighterFont">, city</p>
            </div>
          </div>
          <div className="headerFirstGroupItem">
            <div style={{display:'flex'}}>
              <p style={{marginRight: '5px'}} className="lighterFont">Next concert </p>
              <p className="boldFont">23/01/2018</p>
            </div>
          </div>
        </div>
        <div className="headerSecondGroup">
          <div className="headerSecondGroupItem">
            <div>
              <input className="searchInput" placeholder="Search for albums, songs, etc" type="text"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
