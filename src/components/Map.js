import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import React from 'react'
import 'leaflet/dist/leaflet.css'
// import icon from '../Images/icon.png'
import icon from './img/marker-icon.png'
import L from 'leaflet'

export default function Map() {
  const displayName = 'Our Office'
  const latitude = 6.5956
  const longitude = 3.35755
  //   const { latitude, longitude } = coords

  const customIcon = new L.Icon({
    //creating a custom icon to use in Marker
    iconUrl: icon,
    iconSize: [25, 35],
    iconAnchor: [5, 30],
  })

  function MapView() {
    let map = useMap()
    map.setView([latitude, longitude], map.getZoom())
    //Sets geographical center and zoom for the view of the map
    return null
  }

  return (
    <MapContainer
      classsName='map'
      center={[latitude, longitude]}
      zoom={10}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> 
        contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker icon={customIcon} position={[latitude, longitude]}>
        <Popup>{displayName}</Popup>
      </Marker>
      <MapView />
    </MapContainer>
  )
}
