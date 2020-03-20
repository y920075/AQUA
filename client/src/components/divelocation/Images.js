import React, { Component } from 'react'
import ImageGallery from 'react-image-gallery'
import '../../style/divelocation/image-gallery.scss'

import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchImages } from '../../actions/location/Location_Action'
export class Images extends Component {
  constructor(props) {
    super(props)
    this.state = {
      localimages: [],
    }
  }
  componentDidMount() {
    this.props.fetchImages()
  }
  componentDidUpdate(prevProps) {
    if (this.props.LocusImages !== prevProps.LocusImages) {
      const currentimageID = this.props.match.params
      const locationimages = this.props.LocusImages.Divelocationimages
      // console.log(locationimages)
      this.setState({
        localimages: locationimages.filter(
          locationimages =>
            locationimages.originalTitle === currentimageID.LocationID
        ),
      })
    }
  }
  render() {
    return (
      <div>
        <ImageGallery items={this.state.localimages} />
      </div>
    )
  }
}
// 取得Redux中store的值
const mapStateToProps = store => {
  return { LocusImages: store.LocusImages }
}

// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchImages }, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Images))
