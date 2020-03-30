// 會員購物車結帳
export const memberCheckOut = data => ({
  type: 'NEW_ORDER',
  value: data,
})

export const memberCheckOutAsync = orderData => {
  orderData = JSON.stringify(orderData)
  return async dispatch => {
    // const cartJson = new FormData()
    // console.log(orderData)

    const request = new Request(`http://127.0.0.1:5000/member/checkout`, {
      method: 'POST',
      body: orderData,
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    console.log(data)
    dispatch(memberCheckOut(data))
    // window.location.href = '/member/checkout'
  }
}

// 會員購物填寫收件資訊
export const memberCheckOutStep2 = data => ({
  type: 'ORDER_INFO',
  value: data,
})

export const memberCheckOutStep2Async = orderInfo => {
  console.log(orderInfo)
  orderInfo = JSON.stringify(orderInfo)
  return async dispatch => {
    const request = new Request(`http://127.0.0.1:5000/member/orderInfo`, {
      method: 'POST',
      body: orderInfo,
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    dispatch(memberCheckOutStep2(data))
  }
}

export const getOrderDetailData = data => ({
  type: 'GET_ORDERDETAILDATA',
  value: data,
})

export const getOrderDetailDataAsync = id => {
  console.log(id)
  return async dispatch => {
    const request = new Request(`http://127.0.0.1:5000/member/checkout?${id}`, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    dispatch(getOrderDetailData(data))
  }
}
