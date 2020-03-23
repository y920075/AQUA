//註冊
// action = {type, value}
// type: ADD_VALUE, MINUS_VALUE
// ex. action = {type: 'ADD_VALUE', value: 10}

export const addValue = value => ({ type: 'ADD_VALUE', value: value })
export const minusValue = value => ({ type: 'MINUS_VALUE', value: value })

// 模擬與伺服器相連
export const addValueAsync = value => {
  return dispatch => {
    setTimeout(() => {
      console.log('delay 3s to add value')

      dispatch(addValue(value))
    }, 3000)
  }
}

export const initValue = value => ({ type: 'INIT_VALUE', value: value })

// 模擬與伺服器相連
export const initValueAsync = value => {
  return async dispatch => {
    // 注意資料格式要設定，伺服器才知道是json格式
    const request = new Request('http://localhost:5000/members/register', {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()

    // 設定資料
    dispatch(initValue(data.total))
  }
}


// 登入
// action = {type, value}
// type: ADD_VALUE, MINUS_VALUE
// ex. action = {type: 'ADD_VALUE', value: 10}
export const userRegister = userData => ({
  type: 'USER_REGISTER',
  data: userData,
})

export const userRegisterAsync = (userData, callback) => {
  return async dispatch => {
    const request = new Request('http://localhost:5000/members/memberlogin', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    console.log(JSON.stringify(userData))

    const response = await fetch(request)
    const data = await response.json()
    console.log(data)

    // 設定資料
    dispatch(userRegister(data))
    callback()
  }
}

export const userLogin = userData => ({
  type: 'USER_LOGIN',
  data: userData,
})

export const userLoginAsync = (userData, callback) => {
  return async dispatch => {
    const request = new Request(
      'http://localhost:5000/users/?username=' + userData.username,
      {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      }
    )

    console.log(JSON.stringify(userData))

    const response = await fetch(request)
    const data = await response.json()
    console.log('res data', data)

    if (data.length > 0) {
      if (data[0].password === userData.password) {
        // 設定資料
        dispatch(userLogin(userData))
        alert('登入成功')
      } else {
        alert('密碼錯誤')
      }
    } else {
      alert('沒有這個帳號')
    }
  }
}

// export const addValue = value => ({ type: 'ADD_VALUE', value: value })
// export const minusValue = value => ({ type: 'MINUS_VALUE', value: value })

// // 模擬與伺服器相連
// export const addValueAsync = value => {
//   return dispatch => {
//     setTimeout(() => {
//       console.log('delay 3s to add value')

//       dispatch(addValue(value))
//     }, 3000)
//   }
// }

// export const initValue = value => ({ type: 'INIT_VALUE', value: value })

// // 模擬與伺服器相連
// export const initValueAsync = value => {
//   return async dispatch => {
//     // 注意資料格式要設定，伺服器才知道是json格式
//     const request = new Request('http://localhost:5555/counter/1', {
//       method: 'GET',
//       headers: new Headers({
//         Accept: 'application/json',
//         'Content-Type': 'appliaction/json',
//       }),
//     })

//     const response = await fetch(request)
//     const data = await response.json()

//     // 設定資料
//     dispatch(initValue(data.total))
//   }
// }
