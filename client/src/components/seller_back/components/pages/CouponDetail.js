import React, { useEffect } from 'react'
import Loading from '../components/Loading'
import { NavLink } from 'react-router-dom'
import './Style/CouponDetail.scss'
import Sr from '../ScrollReveal'

function CouponDetail(props) {
  console.log(props)

  useEffect(() => {
    Sr.reveal('.card', {
      //  origin: 'right',
      duration: 1000,
      delay: 150,
      distance: '500px',
      scale: 1,
      easing: 'ease',
    })
  }, [props['status'].coupon['result']])
  console.log(props['status'].coupon)
  return (
    <>
      {props['status'].coupon['status'] === 200 ? (
        props['status'].coupon['result'].map((value, index) => {
          return (
            <div className="col-sm-4" key={value.coup_id}>
              <div className="card my-3">
                <img
                  height="250"
                  className="card-img-top"
                  src={'http://localhost:5000/images/coup/' + value.coup_img}
                  alt=""
                />
                <div className="card-body text-wrap">
                  <h4 className="card-title text-center">{value.coup_name}</h4>
                  <div className="d-flex">
                    <p>優惠碼:</p>
                    <p className="card-text">{value.coup_code}</p>
                  </div>
                  <div className="mb-3">
                    <p>優惠期間:</p>
                    <p className="card-text">起:{value.coup_start}</p>
                    <p className="card-text">迄:{value.coup_end}</p>
                  </div>
                  <div className="d-flex justify-content-lg-around">
                    <NavLink
                      exact
                      activeClassName="active"
                      className="nav-link"
                      to="/info/selleredit"
                    >
                      <button className="btn bg-aqua-chin text-white">
                        編輯
                      </button>
                    </NavLink>
                    <NavLink
                      exact
                      activeClassName="active"
                      className="nav-link"
                      to="/info/selleredit"
                    >
                      <button className="btn bg-aqua-chin text-white">
                        刪除
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      ) : (
        <Loading />
      )}
    </>
  )
}

export default CouponDetail
