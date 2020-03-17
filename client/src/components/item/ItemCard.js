import React from 'react'

function ItemCard(params) {
  return (
    <div className="list-card col-md-3 col-6" onClick={() => {}}>
      <img className="list-card-img-top" src="/20200117125234.jpg" alt="" />
      <div className="list-card-body">
        <h6 className="item-neme">C4 - DEEP SPEARO碳纖維長蛙鞋</h6>
        <span className="item-price">NT$ 13800</span>
      </div>
    </div>
  )
}

export default ItemCard
