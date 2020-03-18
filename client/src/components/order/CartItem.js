import React from 'react'

function CartItem(params) {
  return (
    <>
      <div class="col-1 d-flex align-items-center">
        <input type="checkbox" name="" id="" />
      </div>
      <div class="card-item-img col-2 d-flex align-items-center">
        <img src="/20200117125234.jpg" alt="" />
      </div>
      <div class="card-item-info col-8 d-flex align-items-center">
        <div class="item-name col-4 text-truncate">
          <h6>C4 - DEEP SPEARO碳纖維長蛙鞋</h6>
          <h6>S size</h6>
        </div>
        <div class="item-qty w-25">
          <select class="custom-select">
            <option value="1" selected>
              1
            </option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div class="item-price">
          <h6>NT$ 13800</h6>
        </div>
      </div>
      <div class="item-delete col-1 d-flex align-items-center">
        <i class="material-icons">close</i>
      </div>
    </>
  )
}

export default CartItem
