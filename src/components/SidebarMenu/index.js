import React, { Component } from 'react'
import FaUser from 'react-icons/lib/fa/user'
import FaMusic from 'react-icons/lib/fa/music'
import FaHeadphones from 'react-icons/lib/fa/headphones'
import FaFacebook from 'react-icons/lib/fa/facebook'
// import FaFacebookOfficial from 'react-icons/lib/fa/facebook-official'
import FaTwitter from 'react-icons/lib/fa/twitter'
import FaInstagram from 'react-icons/lib/fa/instagram'

class SidebarMenu extends Component{
  render(){
    return(
      <div className="sidebarMenuWrapper">
        <div className="sidebarMenuItem">
          <span className="lighterFont" style={{fontSize: '14px', color: '#88888f'}}>Menu</span>
          <ul>
            <li><FaUser size={25}/> <span>Profile</span></li>
            <li><FaMusic size={25}/> <span>Mi Música</span></li>
            <li>
              <ul>
                <li>Albums</li>
                <li>Playlist</li>
                <li>Favorites</li>
              </ul>
            </li>
            <li><FaHeadphones size={25}/> <span>Random</span></li>
          </ul>
        </div>
        <div className="sidebarMenuItem">
          <span className="lighterFont" style={{fontSize: '14px', color: '#88888f'}}>News</span>
          <ul>
            <li>
              <div className="boldFont">Proximo concierto</div>
              <div className="lighterFont">23/01/2018</div>
            </li>
            <li>
              <div className="boldFont">Lanzamiento de album</div>
              <div className="lighterFont">14/07/2018</div>
            </li>
            <li>
              <div className="boldFont">Nuevo single</div>
              <div className="lighterFont">09/04/2018</div>
            </li>
          </ul>
        </div>
        <div className="sidebarMenuItem" style={{padding: '10px 0'}}>
          <ul className="sidebarMenuSocialWrapper">
            <li className="sidebarMenuSocialItem">
              <FaFacebook size={20} />
            </li>
            <li className="sidebarMenuSocialItem">
              <FaTwitter size={20} />
            </li>
            <li className="sidebarMenuSocialItem">
              <FaInstagram size={20} />
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default SidebarMenu
