import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import SweetAlert from '../../components/class/SellerClassComponents/Sweetalert2' //自訂提示窗
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUserCouponDetaiAsync } from '../../actions/member/memberActions'
import Loading from '../../../src/components/seller_back/components/components/Loading'

function MemberCoupon(props){
  const [state,setState] = useState({})
  useEffect(() => {
    props.getUserCouponDetaiAsync()

  }, [])
  console.log(props['userCouponData'])
  const couponData = 
          props['userCouponData'] ? (
            Object.keys( props['userCouponData']).map(key=>{
              if(key === 'CouponResultData') {
                const coupon_info =  props['userCouponData'][key]
                return coupon_info.map((value,index)=>{
                  return(
                    <div className="card mt-3">
                          <div
                              className="card-header py-1 d-flex justify-content-between align-items-center"
                            >
                              <p >優惠編號：{value.coup_id}</p>

                            </div>
                            <div className="row">
                              <div className="col-sm-6">
                                <div className="card-body">
                                  <h5 className="card-title">優惠名稱:{value.coup_name}</h5>
                                  <p className="card-text">
                                    類型：{value.coup_cate_id == "coup002" ? "商品優惠券" : <h2 hidden>"其他種類優惠券"</h2>}
                                    {value.coup_cate_id == "coup001" ? "全單滿額類型優惠券" : <h2 hidden>"其他種類優惠券"</h2>}
                                    {value.coup_cate_id == "coup003" ? "贈品類型優惠券" : <h2 hidden>"其他種類優惠券"</h2>}

                                  </p>
                                  <p className="card-text">
                                    折扣碼：{value.coup_code}
                                  </p>
                                  <p className="card-text">
                                    起始日期：{value.coup_start}
                                  </p>
                                  <p className="card-text">
                                  結束日期：{value.coup_end}
                                  </p>
                                  {/* <Link
                                    className="btn btn-primary"
                                    to={'class/' + value.classId}
                                  >
                                    詳細
                                  </Link> */}
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <img
                                 height="250"
                                  src={"http://localhost:5000/images/coup/" + value.coup_img}
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                  )
                })
              }
            })
          ): (
            <Loading/>
      
          )
    return(
      <>
      {couponData}
      </>
     
      
    )
}
const mapStateToProps = store => {
  return { userCouponData : store.memberReducer.userCouponData  }
}

// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
  return bindActionCreators({getUserCouponDetaiAsync}, dispatch)
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MemberCoupon)
)
