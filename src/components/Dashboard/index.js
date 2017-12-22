import React, { Component } from 'react';

import Header from '../Header'

export default class Dashboard extends Component{
  render(){
    return(
      <div>
        <Header titulo="Este es un titulo muy diferente"/>
        <Header titulo="ESte es el segundo titulo"/>
        <Header titulo="ESte es el tercero titulo"/>
        <Header titulo="ESte es el cuarto titulo"/>
      </div>
    )
  }
}
