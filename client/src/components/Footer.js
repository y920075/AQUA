/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../style/common.css'

function Footer() {
  return (
    <>
      <div class="footbody d-flex justify-content-around">
        <div class="d-flex align-self-center footlink">
          <div class="aqualogo align-self-center"></div>
          <a href="" class="mt-2 nav-link">
            購物說明
          </a>
          <a href="" class="mt-2 nav-link">
            隱私權政策
          </a>
          <a href="" class="mt-2 nav-link">
            關於AQUA
          </a>
        </div>
        <p class="align-self-end">
          Copyright © 2020 AQUA. All rights reserved.
        </p>
      </div>
    </>
  )
}

export default Footer
