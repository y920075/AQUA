import React from 'react'

import { withRouter } from 'react-router-dom'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchMapmarks } from '../../actions/location/Location_Action'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// 參考資料 : https://leafletjs.com/examples/quick-start/ & https://juejin.im/post/5cc192976fb9a032092e8e0a
let mymap
class map extends React.Component {
  componentDidMount() {
    this.props.fetchMapmarks()
  }
  componentDidUpdate(prevProps) {
    if (this.props.mapmarksGCS !== prevProps.mapmarksGCS) {
      if (mymap !== undefined) {
        mymap.remove()
      }
      const currentmark = this.props.match.params
      const marksinfo = this.props.mapmarksGCS.DivelocationInfo
      // console.log(marksinfo)
      // console.log(currentmark)
      const locatecurrentmark = marksinfo.filter(
        marksinfo => marksinfo.LocationID === currentmark.LocationID
      )
      // console.log(locatecurrentmark)
      locatecurrentmark.forEach(function(locatecurrentmark) {
        mymap = L.map('mapid').setView(
          [locatecurrentmark.Latitude, locatecurrentmark.Longitude],
          15
        )
      })
      //locatecurrentmark.Latitude, locatecurrentmark.Longitude
      const OSMUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

      L.tileLayer(OSMUrl).addTo(mymap)

      // 使用 leaflet-color-markers ( https://github.com/pointhi/leaflet-color-markers ) 當作 marker
      const blueIcon = new L.Icon({
        iconUrl:
          'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
        shadowUrl:
          'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      })

      // const marksinfoarr = Object.keys(marksinfo).map(function(_) { return marksinfo[_]; })
      // const mapmarks = marksinfoarr.flat()
      //WTF type of ?????
      // console.log(marksinfo)
      // console.log(typeof marksinfo)

      // console.log(currentmark)
      marksinfo.forEach(function(marksinfo) {
        L.marker([marksinfo.Latitude, marksinfo.Longitude], { icon: blueIcon })
          .addTo(mymap)
          .bindPopup(marksinfo.LocationName)
      })
      // 打開現在地點
      locatecurrentmark.forEach(function(marksinfo) {
        L.marker([marksinfo.Latitude, marksinfo.Longitude], { icon: blueIcon })
          .addTo(mymap)
          .bindPopup(marksinfo.LocationName)
          .openPopup()
      })
    }
  }
  render() {
    return (
      <>
        <div id="mapid" className="divemap"></div>
      </>
    )
  }
}
// 取得Redux中store的值
const mapStateToProps = store => {
  return { mapmarksGCS: store.locationReducer.mapmarksGCS }
}

// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchMapmarks }, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(map))
