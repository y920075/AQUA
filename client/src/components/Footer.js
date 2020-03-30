/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../style/common.scss'

function Footer() {
  return (
    <>
      <div className="footbody d-flex justify-content-around row ">
        <div className="d-flex align-self-center footlink col-sm-6 row">
          <div className="aqualogo align-self-center col-sm-3"></div>
          <a href="" className="mt-2 nav-link col-sm-3">
            購物說明
          </a>
          <a href="" className="mt-2 nav-link col-sm-3">
            隱私權政策
          </a>
          <a href="" className="mt-2 nav-link col-sm-3">
            關於AQUA
          </a>
        </div>
        <p className="align-self-end col-sm-3">
          Copyright © 2020 AQUA. All rights reserved.
        </p>
      </div>
    </>
  )
}

export default Footer
