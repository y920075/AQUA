import React from 'react'
// import ccc from '../../public/images/member/coralreef.jpg'

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
