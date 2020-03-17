import React, { useState } from 'react'

function Aside(props) {
  return (
    <div className="aside-wrapper">
      <div className="aside-wrapper-title">
        <h2>商品分類</h2>
      </div>
      <ul>
        <li>
          自由潛水蛙鞋
          <ul className="type">
            <li>碳纖維蛙鞋</li>
            <li>玻璃纖維蛙鞋</li>
          </ul>
        </li>
        <li>
          自由潛水面鏡
          <ul className="type">
            <li>玻璃面鏡</li>
            <li>塑膠面鏡</li>
          </ul>
        </li>
      </ul>
      <div className="aside-wrapper-title">
        <h2>品牌分類</h2>
      </div>
      <ul>
        <li>DIVER</li>
        <li>Prussian Blue</li>
        <li>BARREL</li>
        <li>BESTDIVE</li>
        <li>GULL</li>
        <li>LAZYFISH</li>
      </ul>
      <div className="aside-wrapper-title">
        <h2>金額</h2>
      </div>
    </div>
  )
}

export default Aside
