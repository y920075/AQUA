// // 會員購物車結帳
// export const memberCheckOut = data => ({
//   type: 'NEW_ORDER',
//   value: data,
// })

// export const memberCheckOutAsync = cartData => {
//   return async dispatch => {
//     const cartJson = new FormData()

//     const request = new Request(`http://127.0.0.1:5000/member/orders`, {
//       method: 'POST',
//       headers: new Headers({
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       }),
//     })
//   }
// }

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
