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
} from '../../actions/location/Location_Action'
import { Link } from 'react-router-dom'
class Area extends React.Component {
  componentDidMount() {
    this.props.fetchRegions()
  }
  render() {
    let { Divelocationregion = [] } = this.props.Regions
    let Eastcoastlist = Divelocationregion.filter(
      area => area.LocationArea === '花東海岸'
    )
    let Northeastcapelist = Divelocationregion.filter(
      area => area.LocationArea === '東北角'
    )
    let Greenislandlist = Divelocationregion.filter(
      area => area.LocationArea === '綠島'
    )
    let Iralalist = Divelocationregion.filter(
      area => area.LocationArea === '蘭嶼'
    )
    let Kentinglist = Divelocationregion.filter(
      area => area.LocationArea === '墾丁'
    )
    return (
      <div>
        <Accordion>
          <Card className="locationcard">
            <Accordion.Toggle as={Button} eventKey="0">
              <h2 className="locationh2">東北角</h2>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <ul className="locationlist">
                  {Northeastcapelist.map((value, index) => {
                    return (
                      <li key={index}>
                        <Link
                          role="button"
                          to={value.LocationID}
                          onClick={() => {
                            this.props.fetchMapmarks()
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
              <h2 className="locationh2">花東海岸</h2>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <ul className="locationlist">
                  {Eastcoastlist.map((value, index) => {
                    return (
                      <li key={index}>
                        <Link
                          role="button"
                          to={value.LocationID}
                          onClick={() => {
                            this.props.fetchMapmarks()
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
              <h2 className="locationh2">綠島</h2>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <ul className="locationlist">
                  {Greenislandlist.map((value, index) => {
                    return (
                      <li key={index}>
                        <Link
                          role="button"
                          to={value.LocationID}
                          onClick={() => {
                            this.props.fetchMapmarks()
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
              <h2 className="locationh2">蘭嶼</h2>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                <ul className="locationlist">
                  {Iralalist.map((value, index) => {
                    return (
                      <li key={index}>
                        <Link
                          role="button"
                          to={value.LocationID}
                          onClick={() => {
                            this.props.fetchMapmarks()
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
              <h2 className="locationh2">墾丁</h2>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                <ul className="locationlist">
                  {Kentinglist.map((value, index) => {
                    return (
                      <li key={index}>
                        <Link
                          role="button"
                          to={value.LocationID}
                          onClick={() => {
                            this.props.fetchMapmarks()
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
  return { Regions: store.locationReducer.Regions }
}

// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchRegions, fetchMapmarks }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Area)
