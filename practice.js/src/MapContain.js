// import React, {useState, useRef, useMemo, useEffect} from 'react'
// import "leaflet/dist/leaflet.css";
// import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
// import markerIconPng from "leaflet/dist/images/marker-icon.png"
// import {Icon} from 'leaflet'

// export default function MapContain() {
//     function LocationMarker() {
//         const [position, setPosition] = useState(null)
//         const markerRef = useRef(null)
//         const eventHandlers = useMemo(
//             () => ({
//               dragend() {
//                 const marker = markerRef.current
//                 if (marker != null) {
//                   setPosition(marker.getLatLng())
//                 }
//               },
//             }),
//             [],
//           )
//         const map = useMapEvents({
//           click() {
//             map.locate()
//           },
//           locationfound(e) {
//             setPosition(e.latlng)
//             map.flyTo(e.latlng, map.getZoom())
//           },
//         })
//         return position === null ? null : (
//             <Marker draggable={true} eventHandlers={eventHandlers} ref={markerRef} position={position} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
//                 <Popup>Your Location</Popup>
//             </Marker>
//         )
//       }
//   return (
//     <div className="Map">
//       <MapContainer
//         center={[51.505, -0.09]}
//         zoom={13}
//         style={{ height: "200px", width: "100%"}}
//       >
//         <TileLayer
//           attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <LocationMarker/>
//       </MapContainer>
//     </div>
//   );
// }