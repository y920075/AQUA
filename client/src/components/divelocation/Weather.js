import React from 'react'
import { Tabs } from 'react-bootstrap'
import { Tab } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  fetchSeastate,
  fetchWeeklyreport,
  fetchgetTidereport,
} from '../../actions/location/Location_Action'
export class Weather extends React.Component {
  componentDidMount() {
    this.props.fetchWeeklyreport()
    this.props.fetchgetTidereport()
    this.props.fetchSeastate()
  }
  render() {
    const currentid = this.props.match.params.LocationID
    let idfour = currentid[3]
    let idfive = currentid[4]
    let idtonum = idfour + idfive
    // console.log(this.props.LocusWeeklyreport)
    // console.log(this.props.LocusTidereport)
    let { weekweather = [] } = this.props.LocusWeeklyreport
    let { seastate = [] } = this.props.LocusSeastate
    let { tide = [] } = this.props.LocusTidereport
    let currentseastate
    let currentweekweather
    let currenttide
    if (idtonum < '02') {
      currentseastate = seastate.filter(area => area.Area === '花東海岸')
      currentweekweather = weekweather.filter(
        area => area.locationName === '豐濱鄉'
      )
      currenttide = tide.filter(area => area.StationId === '001508')
    } else if (idtonum > '01' && idtonum < '10') {
      currentseastate = seastate.filter(area => area.Area === '東北角')
      currentweekweather = weekweather.filter(
        area => area.locationName === '貢寮區'
      )
      currenttide = tide.filter(area => area.StationId === '500026')
    } else if (idtonum > '09' && idtonum < '12') {
      currentseastate = seastate.filter(area => area.Area === '墾丁')
      currentweekweather = weekweather.filter(
        area => area.locationName === '恆春鎮'
      )
      currenttide = tide.filter(area => area.StationId === '001304')
    } else if (idtonum > '11' && idtonum < '15') {
      currentseastate = seastate.filter(area => area.Area === '東部離島')
      currentweekweather = weekweather.filter(
        area => area.locationName === '綠島鄉'
      )
      currenttide = tide.filter(area => area.StationId === '001411')
    } else if (idtonum > '14' && idtonum < '21') {
      currentseastate = seastate.filter(area => area.Area === '東部離島')
      currentweekweather = weekweather.filter(
        area => area.locationName === '蘭嶼鄉'
      )
      currenttide = tide.filter(area => area.StationId === '001416')
    }
    // console.log(currentseastate)
    // console.log(currentweekweather)
    // console.log(currenttide)

    return (
      <div>
        <Tabs>
          <Tab eventKey="SeaForNow" title="現在海況">
            <table className="table weathertable">
              <thead>
                <tr>
                  <th>觀測時間</th>
                  <th>海溫(攝氏)</th>
                  <th>氣溫(攝氏)</th>
                  <th>浪週期(毫秒)</th>
                  <th>浪高(公分)</th>
                  <th>浪向</th>
                </tr>
              </thead>
              <tbody>
                {currentseastate.map((value, index) => {
                  return (
                    <tr>
                      <td>{value.date}</td>
                      <td>{value.seatemperature}</td>
                      <td>{value.temperature}</td>
                      <td>{value.waveperiod}</td>
                      <td>{value.waveheight}</td>
                      <td>{value.wavedirection}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </Tab>
          <Tab eventKey="Week" title="一周天氣預報">
            <table className="table weathertable">
              <thead>
                <tr>
                  <th>日期</th>
                  <th>氣候描述</th>
                </tr>
              </thead>
              <tbody>
                {currentweekweather.map((value, index) => {
                  return (
                    <tr>
                      <td className="weekweatherdate">{value.Date}</td>
                      <td className="WeatherDescription">
                        {value.WeatherDescription}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </Tab>
          <Tab eventKey="Tide" title="潮汐預報">
            <table className="table weathertable ">
              <thead>
                <tr>
                  <th>日期</th>
                  <th>農曆日期</th>
                  <th>潮差種類</th>
                  <th>潮汐種類</th>
                  <th>潮汐時間</th>
                  <th>潮差(台灣高程基準)</th>
                </tr>
              </thead>
              <tbody>
                {currenttide.map((value, index) => {
                  return (
                    <tr>
                      <td>{value.Date}</td>
                      <td>{value.Lunardate}</td>
                      <td>{value.Tidalrange}</td>
                      <td>{value.Tidetype}</td>
                      <td>{value.Tidetime}</td>
                      <td>{value.Tideheight}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </Tab>
        </Tabs>
      </div>
    )
  }
}
const mapStateToProps = store => {
  return {
    LocusSeastate: store.locationReducer.LocusSeastate,
    LocusWeeklyreport: store.locationReducer.LocusWeeklyreport,
    LocusTidereport: store.locationReducer.LocusTidereport,
  }
}
// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { fetchSeastate, fetchWeeklyreport, fetchgetTidereport },
    dispatch
  )
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Weather))
