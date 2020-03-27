import React from 'react'
import { Link } from 'react-router-dom'
import '../../style/Comment.scss'
import { withRouter } from 'react-router-dom'
import SweetAlert from '../class/SellerClassComponents/Sweetalert2'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  fetchLocationcomment,
  fetchBlogcomment,
  Submmitlocationcomment,
} from '../../actions/comment/comment_action'

export class Comment extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pageid: '',
      memberid: '',
      membername: '',
      commenttime: '',
      commentitdelf: '',
    }
  }
  componentDidMount() {
    this.props.fetchLocationcomment()
    this.props.fetchBlogcomment()
  }
  render() {
    let { locationcomment = [] } = this.props.Locationcomments
    const currentparams = this.props.match.params.LocationID
    let commenthere
    /// ===5 為地區 else為文章
    if (currentparams.length === 5) {
      commenthere = locationcomment.filter(
        id => id.Locationid === currentparams
      )
    } else {
      commenthere = locationcomment.filter(
        id => id.Locationid === currentparams
      )
    }
    let datapageid = this.state.pageid
    let datamemberid = this.state.memberid
    let membername = this.state.membername
    let datacommenttime = this.state.commenttime
    let commentitdelf = this.state.commentitdelf
    const sentcommentdatatodb = () => {
      let sentcommentdata = {
        datapageid,
        datamemberid,
        membername,
        datacommenttime,
        commentitdelf,
      }
      SweetAlert.sendConfirm(
        '確定要送出嗎?',
        true,
        this.props.Submmitlocationcomment,
        sentcommentdata
      )
    }

    return (
      <div>
        <div className="commentboard">
          {commenthere.map(value => {
            return (
              <div className="comments">
                <div className="d-flex">
                  <Link to="">
                    <img
                      src="/images/divelocation/portrait_technique_0014.jpg"
                      alt=""
                    />
                  </Link>
                  <div>
                    <div className="d-flex sign align-items-end">
                      <h4>{value.member_name}</h4>
                      <h6>{value.comment_date}</h6>
                    </div>
                    <div className="comentitself">
                      <p className="artical">{value.comment}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
          <div className="d-flex comments">
            <Link to="">
              <img
                src="/images/divelocation/portrait_technique_0014.jpg"
                alt=""
              />
            </Link>
            <div className="inputarea">
              <form>
                <div className="comentitself">
                  <textarea name="comment" id="" cols="30" rows="10"></textarea>
                </div>
                <div className="d-flex justify-content-end sentcomment">
                  <button type="button" className="btn">
                    送出
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
// 取得Redux中store的值
const mapStateToProps = store => {
  return {
    Locationcomments: store.commentReducer.Locationcomment,
    Blogcomment: store.commentReducer.Blogcomment,
  }
}
// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { fetchLocationcomment, fetchBlogcomment, Submmitlocationcomment },
    dispatch
  )
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Comment))
