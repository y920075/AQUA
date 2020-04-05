import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import SweetAlert from '../../components/class/SellerClassComponents/Sweetalert2' //自訂提示窗
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUserCouponDetaiAsync } from '../../actions/member/memberActions'
import Loading from '../../../src/components/seller_back/components/Loading'

function MemberCoupon(props) {
  const [state, setState] = useState({})
  useEffect(() => {
    props.getUserCouponDetaiAsync()
  }, [])
  console.log(props['userCouponData'])
  const couponData = props['userCouponData'] ? (
    Object.keys(props['userCouponData']).map(key => {
      if (key === 'CouponResultData') {
        const coupon_info = props['userCouponData'][key]
        return coupon_info.map((value, index) => {
          return (
            <div className="card mt-3">
              <div className="card-header py-1 d-flex justify-content-between align-items-center">
                <p>
                  優惠編號：
                  {value.order_coup_code ? (
                    value.order_coup_code
                  ) : (
                    <h2 hidden>其他種類的優惠編號 </h2>
                  )}
                  {value.givi_coup_code ? (
                    value.givi_coup_code
                  ) : (
                    <h2 hidden>其他種類的優惠編號 </h2>
                  )}
                  {value.goods_coup_code ? (
                    value.goods_coup_code
                  ) : (
                    <h2 hidden>其他種類的優惠編號 </h2>
                  )}
                </p>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="card-body">
                    <h5 className="card-title">
                      優惠名稱:
                      {value.order_coup_name ? (
                        value.order_coup_name
                      ) : (
                        <h2 hidden>"其他種類優惠券名稱"</h2>
                      )}
                      {value.goods_coup_name ? (
                        value.goods_coup_name
                      ) : (
                        <h2 hidden>"其他種類優惠券名稱"</h2>
                      )}
                      {value.givi_coup_name ? (
                        value.givi_coup_name
                      ) : (
                        <h2 hidden>"其他種類優惠券名稱"</h2>
                      )}
                    </h5>
                    <p className="card-text">
                      類型：
                      {value.goods_cate_id == 'coup002' ? (
                        '商品優惠券'
                      ) : (
                        <h2 hidden>"其他種類優惠券"</h2>
                      )}
                      {value.order_cate_id == 'coup001' ? (
                        '全單滿額類型優惠券'
                      ) : (
                        <h2 hidden>"其他種類優惠券"</h2>
                      )}
                      {value.givi_cate_id == 'coup003' ? (
                        '贈品類型優惠券'
                      ) : (
                        <h2 hidden>"其他種類優惠券"</h2>
                      )}
                    </p>
                    <p className="card-text">
                      折扣碼：
                      {value.goods_coup_code ? (
                        value.goods_coup_code
                      ) : (
                        <h2 hidden>"其他種類coup_code"</h2>
                      )}
                      {value.order_coup_code ? (
                        value.order_coup_code
                      ) : (
                        <h2 hidden>"其他種類coup_code"</h2>
                      )}
                      {value.givi_coup_code ? (
                        value.givi_coup_code
                      ) : (
                        <h2 hidden>"其他種類coup_code"</h2>
                      )}
                    </p>

                    <p className="card-text">
                      起始日期：
                      {value.givi_coup_start ? (
                        value.givi_coup_start
                      ) : (
                        <h2 hidden>"其他種類coup_start"</h2>
                      )}
                      {value.order_coup_start ? (
                        value.order_coup_start
                      ) : (
                        <h2 hidden>"其他種類coup_start"</h2>
                      )}
                      {value.goods_coup_start ? (
                        value.goods_coup_start
                      ) : (
                        <h2 hidden>"其他種類coup_start"</h2>
                      )}
                    </p>
                    <p className="card-text">
                      結束日期：{value.coup_end}
                      {value.givi_coup_end ? (
                        value.givi_coup_end
                      ) : (
                        <h2 hidden>"其他種類coup_end"</h2>
                      )}
                      {value.order_coup_end ? (
                        value.order_coup_end
                      ) : (
                        <h2 hidden>"其他種類coup_end"</h2>
                      )}
                      {value.goods_coup_end ? (
                        value.goods_coup_end
                      ) : (
                        <h2 hidden>"其他種類coup_end"</h2>
                      )}
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
                  {<img
                    height="250"
                    width="300"
                    src={
                      'http://localhost:5000/images/coup/' +
                      value.order_coup_img
                    }
                    alt=""
                  /> ? (
                    <img
                      height="250"
                      width="300"
                      src={
                        'http://localhost:5000/images/coup/' +
                        value.order_coup_img
                      }
                      alt=""
                    />
                  ) : (
                    <img hidden />
                  )}
                  {<img
                    height="250"
                    width="300"
                    src={
                      'http://localhost:5000/images/coup/' +
                      value.goods_coup_img
                    }
                    alt=""
                  /> ? (
                    <img
                      height="250"
                      width="300"
                      src={
                        'http://localhost:5000/images/coup/' +
                        value.goods_coup_img
                      }
                      alt=""
                    />
                  ) : (
                    <img hidden />
                  )}
                  {<img
                    height="250"
                    width="300"
                    src={
                      'http://localhost:5000/images/coup/' + value.givi_coup_img
                    }
                    alt=""
                  /> ? (
                    <img
                      height="250"
                      width="300"
                      src={
                        'http://localhost:5000/images/coup/' +
                        value.givi_coup_img
                      }
                      alt=""
                    />
                  ) : (
                    <img hidden />
                  )}
                </div>
              </div>
            </div>
          )
        })
      }
    })
  ) : (
    <Loading />
  )
  return <>{couponData}</>
}
const mapStateToProps = store => {
  return { userCouponData: store.memberReducer.userCouponData }
}

// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getUserCouponDetaiAsync }, dispatch)
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MemberCoupon)
)
