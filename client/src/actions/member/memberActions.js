import Swal from 'sweetalert2'
import Cookie from 'js-cookie'

//Register
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

    const request = new Request('http://localhost:5000/members/login', {
      method: 'POST',
      body: fd,
      credentials: 'include',
    })
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
        Swal.fire('歡迎回來!', 'Redirect in 1 seconds...!', 'success')
        setTimeout(function() {
          window.location.href = './memberuser/user'
        }, 1000)
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
    const request = new Request(`http://127.0.0.1:5000/members/`, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'access-token': Cookie.get('token'),
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    dispatch(getuserDetailData(data))
    // console.log(getuserDetailData(data))
  }
}

//update user info
export const updateuserDetailData = data => ({
  type: 'CHANGE_INFO',
  value: data,
})

export const updateuserDetailDataAsync = (formData, memberId) => {
  return async dispatch => {
    const fd = new FormData()
    fd.append('fullName', formData.fullName)
    fd.append('mobileNumber', formData.mobileNumber)
    fd.append('email', formData.email)
    fd.append('address', formData.address)
    const request = new Request(`http://127.0.0.1:5000/members/`, {
      method: 'POST',
      body: fd,
      credentials: 'include',
      headers: new Headers({
        'access-token': Cookie.get('token'),
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    dispatch(updateuserDetailData(data))
    console.log(updateuserDetailData(data))
  }
}

//從賣家那裏得到優惠券的使用資料
export const getUserCouponDetail = data => ({
  type: 'GET_USERCOUPON',
  value: data,
})

export const getUserCouponDetaiAsync = usercoupondata => {
  return async dispatch => {
    const request = new Request(
      `http://127.0.0.1:5000/seller/customermanager/user-coupondata`,
      {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      }
    )

    const response = await fetch(request)
    const data = await response.json()
    console.log(data)
    dispatch(getUserCouponDetail(data))
  }
}

//登出
export const memberLogout = data => ({
  type: 'USER_LOGOUT',
  value: data,
})

export const memberLogoutAsync = () => {
  return async dispatch => {
    const request = new Request(`http://127.0.0.1:5000/logout`, {
      method: 'POST',
    })

    const response = await fetch(request)
    const data = await response.json()
    console.log(data)
    if (data.status === 201) {
      localStorage.removeItem('username')
      localStorage.removeItem('memberId')
      Cookie.remove('token')
      Swal.fire('登出成功!', 'Redirect in 1 seconds...!', 'success')
      setTimeout(function() {
        window.location.href = './memberuser/login'
      }, 1000)
    }
    dispatch(memberLogout(data))
  }
}
