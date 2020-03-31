import React from 'react'
import { Link } from 'react-router-dom'
import '../../style/Comment.scss'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  fetchLocationcomment,
  Submmitlocationcomment,
} from '../../actions/comment/comment_action'
import withReactContent from 'sweetalert2-react-content'
import sweetalert from 'sweetalert2'

export class Comment extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pageid: this.props.match.params.LocationID,
      memberid: localStorage.getItem('memberId'),
      membername: '',
      commentitself: '',
    }
  }
  componentDidMount() {
    this.props.fetchLocationcomment()
  }
  render() {
    let { locationcomment = [] } = this.props.Locationcomments
    const currentparams = this.props.match.params.LocationID
    let commenthere
    commenthere = locationcomment.filter(id => id.Locationid === currentparams)

    const sentcommentdatatodb = () => {
      let sentcommentdata = {
        pageid: this.state.pageid,
        memberid: this.state.memberid,
        membername: this.state.membername,
        commentitself: this.state.commentitself,
      }
      const MySwal = withReactContent(sweetalert)

      MySwal.fire({
        title: '確定送出?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: '送出',
        cancelButtonText: '取消',
      }).then(result => {
        if (result.value) {
          MySwal.fire('送出成功!', '已成功送出評論', 'success')
          this.props.Submmitlocationcomment(sentcommentdata)
          this.props.fetchLocationcomment()
        }
      })
    }
    console.log(this.state)
    return (
      <div>
        <div className="commentboard">
          {commenthere.map(value => {
            return (
              <div className="comments">
                <div className="d-flex">
                  <Link to="">
                    <img src="/images/member/nemo.jpg" alt="" />
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
              <img src="/images/member/avatar.png" alt="" />
            </Link>
            <div className="inputarea">
              <form>
                <div className="comentitself">
                  <textarea
                    name="comment"
                    id=""
                    cols="30"
                    rows="10"
                    onChange={event => {
                      this.setState({
                        commentitself: event.target.value,
                      })
                    }}
                  ></textarea>
                </div>
                <div className="d-flex justify-content-end sentcomment">
                  <button
                    type="button"
                    className="btn"
                    onClick={() => {
                      sentcommentdatatodb() //觸發新增活動資料的事件
                    }}
                  >
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
  }
}
// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { fetchLocationcomment, Submmitlocationcomment },
    dispatch
  )
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Comment))
