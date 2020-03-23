import React from 'react'
import { Accordion } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
//redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  fetchRegions,
  fetchMapmarks,
  fetchInfos,
  fetchImages,
} from '../../actions/location/Location_Action'
import { Link } from 'react-router-dom'
let mymap
class Area extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Eastcoastlist: [],
      Northeastcapelist: [],
      Greenislandlist: [],
      Iralalist: [],
      Kentinglist: [],
    }
  }
  componentDidMount() {
    this.props.fetchRegions()
  }
  componentDidUpdate(prevProps) {
    if (this.props.Regions !== prevProps.Regions) {
      const localRegions = this.props.Regions.Divelocationregion
      this.setState({
        Eastcoastlist: localRegions.filter(
          area => area.LocationArea === '花東海岸'
        ),
      })
      this.setState({
        Northeastcapelist: localRegions.filter(
          area => area.LocationArea === '東北角'
        ),
      })
      this.setState({
        Greenislandlist: localRegions.filter(
          area => area.LocationArea === '綠島'
        ),
      })
      this.setState({
        Iralalist: localRegions.filter(area => area.LocationArea === '蘭嶼'),
      })
      this.setState({
        Kentinglist: localRegions.filter(area => area.LocationArea === '墾丁'),
      })

      // console.log(onlyNortheastcape)
      // console.log(onlyGreenisland)
      // console.log(onlyIrala)
      // console.log(onlyKenting)
    }
  }
  //   console.log(props.Regions.Divelocationregion)
  // const localRegions = props.Regions.Divelocationregion
  // console.log(localRegions)
  // let Eastcoast
  // let Northeastcape
  // let Greenisland
  // let Irala
  // let Kenting

  // if(localRegions) {
  //     //切割
  // }

  render() {
    return (
      <div>
        <Accordion>
          <Card className="locationcard">
            <Accordion.Toggle as={Button} eventKey="0">
              <h2>東北角</h2>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <ul className="locationlist">
                  {this.state.Northeastcapelist.map((value, index) => {
                    return (
                      <li key={index}>
                        <Link
                          role="button"
                          to={value.LocationID}
                          onClick={() => {
                            this.props.fetchInfos()
                            this.props.fetchMapmarks()
                            this.props.fetchImages()
                          }}
                        >
                          {value.LocationName}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="locationcard">
            <Accordion.Toggle as={Button} eventKey="1">
              <h2>花東海岸</h2>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <ul className="locationlist">
                  {this.state.Eastcoastlist.map((value, index) => {
                    return (
                      <li key={index}>
                        <Link
                          role="button"
                          to={value.LocationID}
                          onClick={() => {
                            this.props.fetchInfos()
                            this.props.fetchMapmarks()
                            this.props.fetchImages()
                          }}
                        >
                          {value.LocationName}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="locationcard">
            <Accordion.Toggle as={Button} eventKey="2">
              <h2>綠島</h2>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <ul className="locationlist">
                  {this.state.Greenislandlist.map((value, index) => {
                    return (
                      <li key={index}>
                        <Link
                          role="button"
                          to={value.LocationID}
                          onClick={() => {
                            this.props.fetchInfos()
                            this.props.fetchMapmarks()
                            this.props.fetchImages()
                          }}
                        >
                          {value.LocationName}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="locationcard">
            <Accordion.Toggle as={Button} eventKey="3">
              <h2>蘭嶼</h2>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                <ul className="locationlist">
                  {this.state.Iralalist.map((value, index) => {
                    return (
                      <li key={index}>
                        <Link
                          role="button"
                          to={value.LocationID}
                          onClick={() => {
                            this.props.fetchInfos()
                            this.props.fetchMapmarks()
                            this.props.fetchImages()
                          }}
                        >
                          {value.LocationName}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="locationcard">
            <Accordion.Toggle as={Button} eventKey="4">
              <h2>墾丁</h2>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                <ul className="locationlist">
                  {this.state.Kentinglist.map((value, index) => {
                    return (
                      <li key={index}>
                        <Link
                          role="button"
                          to={value.LocationID}
                          onClick={() => {
                            this.props.fetchInfos()
                            this.props.fetchMapmarks()
                            this.props.fetchImages()
                          }}
                        >
                          {value.LocationName}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    )
  }
}
// 取得Redux中store的值
const mapStateToProps = store => {
  return { Regions: store.Regions }
}

// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { fetchRegions, fetchMapmarks, fetchInfos, fetchImages },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Area)
