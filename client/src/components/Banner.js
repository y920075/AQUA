import React from 'react'

function Banner(props) {
  return (
    <>
      <div className="banner">
        <img src={props.BannerImgSrc} alt="" />
      </div>
    </>
  )
}

export default Banner
