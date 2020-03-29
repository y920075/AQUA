import React from 'react'

function CartItem(props) {
  const { handleDelete, mycart } = props
  // console.log('carditem', { mycart })

  return (
    <>
      {mycart != null && mycart.length >= 1 ? (
        props.mycart.map((value, index) => {
          return (
            <>
              <div className="d-flex cart-item border-bottom" key={index}>
                <div className="col-1 d-flex align-items-center">
                  <input type="checkbox" name="" id="" />
                </div>
                <div className="card-item-img col-4 col-md-2 d-flex align-items-center">
                  <img
                    src={`http://127.0.0.1:5000/images/itemImg/${value.img}`}
                    alt=""
                  />
                </div>
                <div className="card-item-info col-6 col-md-8 d-flex flex-column flex-md-row align-items-md-center">
                  <div className="item-name col col-md-6 order-0 order-md-0">
                    <h6>{value.name}</h6>
                    <h6>S size</h6>
                  </div>
                  <div className="item-qty w-25 order-2 order-md-1">
                    <select className="custom-select">
                      <option value="{value.amount}" selected>
                        {value.amount}
                      </option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                  <div className="item-price order-1 order-md-2">
                    <h6>NT$ {value.price}</h6>
                  </div>
                </div>
                <div className="item-delete col-1 d-flex align-items-center">
                  <i
                    className="material-icons"
                    onClick={() =>
                      handleDelete({
                        id: `${value.id}`,
                      })
                    }
                  >
                    close
                  </i>
                </div>
              </div>
            </>
          )
        })
      ) : (
        <h2>購物車是空的</h2>
      )}
    </>
  )
}

export default CartItem
