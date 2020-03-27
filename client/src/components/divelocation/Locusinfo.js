import React from 'react'
import { withRouter } from 'react-router-dom'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchInfos } from '../../actions/location/Location_Action'

export class Locusinfo extends React.Component {
  componentDidMount() {
    this.props.fetchInfos()
  }
  render() {
    let { DivelocationInfo = [] } = this.props.LocusInfos
    // console.log(this.props)
    const currentid = this.props.match.params
    //   console.log(currentid)
    let currentlocation
    currentlocation = DivelocationInfo.filter(
      localinfo => localinfo.LocationID === currentid.LocationID
    )
    console.log(this.props)
    return (
      <div>
        {currentlocation.map((value, index) => {
          return (
            <div key={index}>
              <h2 className="locationh2">{value.LocationName}</h2>
              <hr />
              <ul>
                <li>潛點難度：{value.Locationlevel}</li>
                <li>交通資訊：{value.Transportation}</li>
                <li>{value.Locationdescribe}</li>
                <li>備註：{value.noted}</li>
              </ul>
            </div>
          )
        })}
      </div>
    )
  }
}
// 取得Redux中store的值
const mapStateToProps = store => {
  return { LocusInfos: store.locationReducer.LocusInfos }
}
// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchInfos }, dispatch)
}
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Locusinfo)
)
