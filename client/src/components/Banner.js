import React, { useState } from 'react'

function Banner(props) {
  return (
    <>
      <div className="banner overflow-hidden mb-4 w-100">
        <img className="w-100" src={props.BannerImgSrc} alt="" />
      </div>
    </>
  )
}

export default Banner
