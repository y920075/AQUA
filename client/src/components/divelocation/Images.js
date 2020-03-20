import React, { Component } from 'react'
import ImageGallery from 'react-image-gallery'
import '../../style/divelocation/image-gallery.scss'

export class Images extends Component {
  constructor(props) {
    super(props)
    this.state = {
      localimages: [],
    }
  }
  componentDidMount() {
    this.setState({
      localimages: [
        {
          original: 'https://picsum.photos/id/1018/1000/600/',
          thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1015/1000/600/',
          thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1019/1000/600/',
          thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
      ],
    })
  }
  componentDidUpdate(prevProps) {
    if (this.props.Regions !== prevProps.Regions) {
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
export default Images
