import React, { Component } from 'react';

import Header from '../Header'
import SidebarMenu from '../SidebarMenu'
import FooterPlayer from '../FooterPlayer'

export default class Dashboard extends Component{
  render(){
    return(
      <div className="mainContainer">
        <Header />
        <SidebarMenu />
        <FooterPlayer />
      </div>
    )
  }
}
