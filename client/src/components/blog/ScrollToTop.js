import React from 'react'
import { withRouter } from 'react-router-dom'

// 頁面切換時要用捲軸讓頁面回到最上方
class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }
  componentDidMount(){
    window.scrollTo(0, 0)
  }
  render() {
    return this.props.children
  }
}

export default withRouter(ScrollToTop)