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
import withReactContent from 'sweetalert2-react-content'
import sweetalert from 'sweetalert2'

export class Comment extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pageid: '',
      memberid: '',
      membername: '',
      commentitself: '',
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

    let pageid = this.state.pageid
    let memberid = this.state.memberid
    let membername = this.state.membername
    let commentitself = this.state.commentitself
    const sentcommentdatatodb = () => {
      this.setState({
        pageid: currentparams,
        memberid: 'M20010002',
        membername: 'Anna Tulius',
      })

      let sentcommentdata = {
        pageid,
        memberid,
        membername,
        commentitself,
      }
      const MySwal = withReactContent(sweetalert)

      MySwal.fire({
        title: '確定送出?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '送出',
        cancelButtonText: '取消',
      }).then(result => {
        if (result.value) {
          MySwal.fire('Deleted!', 'Your file has been deleted.', 'success')
          this.setState({
            pageid: currentparams,
            memberid: 'M20010002',
            membername: 'Anna Tulius',
          })
          this.props.Submmitlocationcomment(sentcommentdata)
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
