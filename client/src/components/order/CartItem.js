import React from 'react'

function CartItem(props) {
  console.log('carditem', props)
  return (
    <>
      {!props.mycartDisplay ? (
        <h2>購物車是空的</h2>
      ) : (
        props.mycartDisplay.map((value, index) => {
          return (
            <>
              <div className="row" key={index}>
                <div className="col-1 d-flex align-items-center">
                  <input type="checkbox" name="" id="" />
                </div>
                <div className="card-item-img col-2 d-flex align-items-center">
                  <img
                    src="http://127.0.0.1:5000/images/itemImg/test-item.jpg"
                    alt=""
                  />
                </div>
                <div className="card-item-info col-8 d-flex align-items-center">
                  <div className="item-name col-4 text-truncate">
                    <h6>{value.name}</h6>
                    <h6>S size</h6>
                  </div>
                  <div className="item-qty w-25">
                    <select className="custom-select">
                      <option value="{value.amount}" selected>
                        {value.amount}
                      </option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                  <div className="item-price">
                    <h6>NT$ {value.price}</h6>
                  </div>
                </div>
                <div className="item-delete col-1 d-flex align-items-center">
                  <i className="material-icons">close</i>
                </div>
              </div>
            </>
          )
        })
      )}
    </>
  )
}

export default CartItem
