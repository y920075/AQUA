import React from 'react'
import { Link } from 'react-router-dom'

function ItemCard(props) {
  // console.log('itemcard', props)
  return (
    <>
      {!props.itemData ? (
        <h2>查無資料</h2>
      ) : (
        props.itemData.map((value, index) => {
          // console.log(value)
          return (
            <Link
              className="list-card col-md-3 col-6"
              key={index}
              to={`/items/${value.itemId}`}
            >
              <img
                className="list-card-img-top"
                src={
                  `http://${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}/images/itemImg/${value.itemImg}`
                  // + value.itemImg
                }
                alt=""
              />
              <div className="list-card-body">
                <h6 className="item-neme">{value.itemName}</h6>
                <span className="item-price">NT$ {value.itemPrice}</span>
              </div>
            </Link>
          )
        })
      )}
    </>
  )
}

export default ItemCard
