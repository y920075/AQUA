import React, { useState } from 'react'

function Banner(props) {
  return (
    <>
      <div class="banner">
        <img src={props.BannerImgSrc} alt="" />
      </div>
    </>
  )
}

export default Banner
