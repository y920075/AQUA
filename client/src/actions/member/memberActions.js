import Swal from 'sweetalert2'

//Register
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


//Login
export const userLogin = userData => ({
  type: 'USER_LOGIN',
  data: userData,
})

export const userLoginAsync = (userData, callback) => {
  console.log(userData)
  return async dispatch => {
    const fd = new FormData()
    fd.append('loginId', userData.username)
    fd.append('loginPwd', userData.password)

    const request = new Request(
      'http://localhost:5000/members/login',
      {
        method: 'POST',
        body: fd,
      }
    )
    const response = await fetch(request)
    const data = await response.json()
    console.log('res data', data)

    if (data.success) {
      if (data.loginPwd == userData.loginPwd) {
        localStorage.setItem('username', data.username)
        localStorage.setItem('memberId', data.memberId)

        // 設定資料
        console.log(userData)
        dispatch(userLogin(userData))
        // alert('登入')
        Swal.fire(
          '歡迎回來!',
          'Redirect in 5 seconds...!',
          'success'
        )
        setTimeout(function () {
          window.location.href = './memberuser'
        }, 5000);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: '密碼錯誤!',
        })
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: '沒有這個帳號!',
      })
    }
  }
}

// get user info 
export const getuserDetailData = data => ({
  type: 'GET_USERINFO',
  value: data,
})

export const getuserDetailDataAsync = memberId => {
  return async dispatch => {
    const request = new Request(`http://127.0.0.1:5000/members/M20030003`, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    dispatch(getuserDetailData(data))
    console.log(getuserDetailData(data))
  }
}

