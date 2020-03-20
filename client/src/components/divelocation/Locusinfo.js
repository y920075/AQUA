import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchInfos } from '../../actions/location/Location_Action'

export class Locusinfo extends React.Component {
  componentDidMount() {
    this.props.fetchInfos()
  }
  componentDidUpdate(prevProps) {
    if (this.props.LocusInfos !== prevProps.LocusInfos) {
      const localinfo = this.props.LocusInfos
      console.log(localinfo)
      const currentid = this.props.match.params
      //   console.log(currentid)
    }
  }
  render() {
    return (
      <div>
        <h2></h2>
        <hr />
        <ul>
          <li>潛點難度</li>
          <li>交通資訊</li>
          <li></li>
          <li>備註：</li>
        </ul>
      </div>
    )
  }
}
// 取得Redux中store的值
const mapStateToProps = store => {
  return { LocusInfos: store.LocusInfos }
}
// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchInfos }, dispatch)
}
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Locusinfo)
)
