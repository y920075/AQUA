import React from 'react'
import { link } from 'react-router-dom'

function ItemCard(props) {
  console.log(props)
  return (
    <>
      {!props.itemData ? (
        <h2>查無資料</h2>
      ) : (
        props.itemData.map((value, index) => {
          return (
            <div
              className="list-card col-md-3 col-6"
              key={index}
              onClick={() => {}}
            >
              <img
                className="list-card-img-top"
                src={
                  'http://127.0.0.1:5000/images/itemImg/test-item.jpg'
                  // + value.itemImg
                }
                alt=""
              />
              <div className="list-card-body">
                <h6 className="item-neme">{value.itemName}</h6>
                <span className="item-price">NT$ {value.itemPrice}</span>
              </div>
            </div>
          )
        })
      )}
    </>
  )
}

export default ItemCard
