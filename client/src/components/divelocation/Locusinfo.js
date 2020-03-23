import React from 'react'
import { withRouter } from 'react-router-dom'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchInfos } from '../../actions/location/Location_Action'

export class Locusinfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentlocation: [],
    }
  }
  componentDidMount() {
    this.props.fetchInfos()
  }
  componentDidUpdate(prevProps) {
    if (this.props.LocusInfos !== prevProps.LocusInfos) {
      const localinfo = this.props.LocusInfos.DivelocationInfo
      //   console.log(localinfo)
      const currentid = this.props.match.params
      //   console.log(currentid)
      this.setState({
        currentlocation: localinfo.filter(
          localinfo => localinfo.LocationID === currentid.LocationID
        ),
      })
    }
  }
  render() {
    return (
      <div>
        {this.state.currentlocation.map((value, index) => {
          return (
            <div key={index}>
              <h2>{value.LocationName}</h2>
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
