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
    dispatch(memberCheckOut(data))
  }
}

// export const getMemberOrderData = data => ({
//   type: 'GET_MEMBERORDERDATA',
//   value: data,
// })

// export const getMemberOrderDataAsync = memberId => {
//   console.log('fetch memberorder', memberId)
//   return async dispatch => {
//     const request = new Request(`http://127.0.0.1:5000/order/${memberId}`, {
//       method: 'GET',
//       headers: new Headers({
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       }),
//     })

//     const response = await fetch(request)
//     const data = await response.json()
//     dispatch(getItemDetailData(data))
//   }
// }
