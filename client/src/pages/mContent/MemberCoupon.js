import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SweetAlert from '../../components/class/SellerClassComponents/Sweetalert2' //自訂提示窗


function MemberCoupon(props){

    return(
        <div className="card mt-3">
             <div
                className="card-header py-1 d-flex justify-content-between align-items-center"
              >
                <p >優惠編號：</p>

              </div>

               <div className="row">
                <div className="col-sm-6">
                  <div className="card-body">
                    <h5 className="card-title">Name</h5>
                    <p className="card-text">
                      類型：
                    </p>
                    <p className="card-text">
                      等級：
                    </p>
                    <p className="card-text">
                      起始日期：
                    </p>
                    <p className="card-text">
                     結束日期：
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
                    className="img-fluid"
                    src=""
                    alt=""
                  />
                </div>
              </div>
            </div>
    
    )
}

export default MemberCoupon
