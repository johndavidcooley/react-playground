import React, { Component } from 'react'

import MapContainer from './MapContainer';

export default class GoogleMaps extends Component {
  render() {
    return (
      <div className="google-maps">
        Google Maps
        <MapContainer /> 
      </div>
    )
  }
}
