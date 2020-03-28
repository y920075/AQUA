import React, { Component } from 'react'
import ImageGallery from 'react-image-gallery'
import '../../style/divelocation/image-gallery.scss'

import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchImages } from '../../actions/location/Location_Action'
export class Images extends Component {
  componentDidMount() {
    this.props.fetchImages()
  }
  render() {
    const currentimageID = this.props.match.params
    let { Divelocationimages = [] } = this.props.LocusImages
    // console.log(locationimages)
    let currentimages
    currentimages = Divelocationimages.filter(
      locationimages =>
        locationimages.originalTitle === currentimageID.LocationID
    )
    return (
      <div>
        <ImageGallery items={currentimages} />
      </div>
    )
  }
}
// 取得Redux中store的值
const mapStateToProps = store => {
  return { LocusImages: store.locationReducer.LocusImages }
}

// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchImages }, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Images))
