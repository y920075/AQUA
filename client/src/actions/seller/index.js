//賣家資料相關
//從後端用get方法在前端連接

export const sellerInfo = data => ({
  type: 'SELLER_INFO',
  value: data,
})

export const sellerInfoAsync = (sellerInfoData, callback) => {
  return async dispatch => {
    const request = new Request('http://localhost:5000/seller/basic_info', {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    console.log(JSON.stringify(sellerInfoData))

    const response = await fetch(request)
    const data = await response.json()
    console.log('res data', data)

    dispatch(sellerInfo(data))
  }
}

//從後端用get方法擷取seller的資料前端進行編輯

export const sellerEdit = data => ({
  type: 'SELLER_EDIT',
  value: data,
})

export const sellerEditAsync = (sellerEDData, callback) => {
  return async dispatch => {
    const request = new Request(
      // 'http://localhost:5000/seller/edit/:seller_id',
      'http://localhost:5000/seller/edit/S20010001',

      {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      }
    )

    console.log(JSON.stringify(sellerEDData))

    const response = await fetch(request)
    const data = await response.json()
    console.log('res data', data)

    dispatch(sellerEdit(sellerEDData))
  }
}

// //使用者更新個人資料動作函數
export const sellerUpdate = sellerData => ({
  type: 'SELLER_UPDATE',
  data: sellerData,
})

export const sellerUpdateAsync = (sellerData, callback) => {
  return async dispatch => {
    const request = new Request(
      'http://localhost:5000/seller/edit/:seller_id',
      {
        method: 'POST',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      }
    )

    console.log(JSON.stringify(sellerData))

    const response = await fetch(request)
    const data = await response.json()
    console.log('res data', data)

    dispatch(sellerUpdate(sellerData))
  }
}

//取得優惠券類型資料
export const getSellerNewCoupon = couponData => ({
  type: 'COUPON_ALL_GET',
  value: couponData,
})
//coup_cate_id=優惠券類型&coup_over=滿多少錢贈送贈品&givi_piece=贈送多少贈品&sort=排序類型(類型,方法)&page=頁碼
export const getSellerCouponAsync = coup_cate_id => {
  return async dispatch => {
    let query = []
    if (coup_cate_id) query.push(`coup_cate_id=${coup_cate_id.trim()}`)
    console.log(coup_cate_id)

    const request = new Request(
      `http://localhost:5000/seller/coupon/coupon_getdata?${query}`,
      {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      }
    )

    console.log(JSON.stringify(coup_cate_id))

    const response = await fetch(request)
    const data = await response.json()
    console.log('res data', data)

    dispatch(getSellerNewCoupon(data))
  }
}

// //取得新增頁面優惠券類型

export const getSellerNewInsertCoupon = couponGetDataInsert => ({
  type: 'COUPON_GET_INSERT',
  value: couponGetDataInsert,
})

export const getSellerNewInsertCouponAsync = (
  getcouponInsertData,
  callback
) => {
  return async dispatch => {
    const request = new Request(
      'http://localhost:5000/seller/coupon/insert_coup',
      {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      }
    )

    console.log(JSON.stringify(getcouponInsertData))

    const response = await fetch(request)
    const data = await response.json()
    console.log('res data', data)

    dispatch(getSellerNewInsertCoupon(data))
  }
}

// //優惠券新增動作函數
export const insertSellerNewInsertCoupon = coupInsertData => ({
  type: 'COUPON_INSERT',
  value: coupInsertData,
})
export const insertSellerNewInsertCouponAsync = (coupFormData, callback) => {
  console.log(coupFormData)
  return async dispatch => {
    const request = new Request(
      'http://localhost:5000/seller/coupon/insert_coup_data',
      {
        method: 'POST',
        body: coupFormData,
      }
    )

    const response = await fetch(request)
    const data = await response.json()
    console.log('res data', data)

    dispatch(insertSellerNewInsertCoupon(data))

    callback()
  }
}

//贈品新增動作函數

export const addGiviData = data => ({
  type: 'ADD_GIVIDATA',
  value: data,
})
export const addGiviDataAsync = GiviFormData => {
  console.log(GiviFormData)
  return async dispatch => {
    const givi_fd = new FormData()
    givi_fd.append('givi_cate_id', GiviFormData.givi_cate_id)
    givi_fd.append('givi_name', GiviFormData.givi_name)
    givi_fd.append('givi_img', GiviFormData.givi_img_upload)
    givi_fd.append('givi_num', GiviFormData.givi_num)

    const request = new Request(
      `http://localhost:5000/seller/coupon/coupon_givi`,
      {
        method: 'POST',
        body: givi_fd,
      }
    )

    const response = await fetch(request)
    const data = await response.json()
    console.log(data)
    dispatch(addGiviData(data))
  }
}
//常客管理動作函數
//get
export const customerGet = data => ({
  type: 'CUSTOMER_GET',
  value: data,
})

export const customerGetAsync = (customerData, callback) => {
  return async dispatch => {
    let query = []
    if (customerData) query.push(`searchType=${customerData.trim()}`)
    console.log(query[0])

    const request = new Request(
      `http://localhost:5000/seller/customermanager/customer-search?${query[0]}`,

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
    console.log('res data', data)

    dispatch(customerGet(data))
  }
}

export const customerUse = data => ({
  type: 'CUSTOMER_USE',
  value: data,
})
export const customerUseAsync = (customerData, callback) => {
  return async dispatch => {
    const request = new Request(
      `http://localhost:5000/seller/customermanager/customer-coupon-use`,

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
    console.log('res data', data)

    dispatch(customerUse(data))
  }
}

//mail動作

export const customerMailData = data => ({
  type: 'MAIL_TRANSFER',
  value: data,
})
export const customerMailDataAsync = (mailData, callback) => {
  return async dispatch => {
    const json = JSON.stringify(mailData)
    const request = new Request(
      'http://localhost:5000/seller/customermanager/customer-coupon-insert',
      {
        method: 'POST',
        body: json,
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      }
    )

    const response = await fetch(request)
    const data = await response.json()
    console.log(data)
    callback()

    dispatch(customerMailData(data))
  }
}

//對於前端輸入的優惠馬去後台抓取資料

export const getNowCoupData = data => ({
  type: 'NOWCOUPDATA',
  value: data,
})
export const getNowCoupDataAsync = (getCoupData, callback) => {
  return async dispatch => {
    const request = new Request(
      `http://localhost:5000/seller/getcoupon/usercouponget`,

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
    console.log('res data', data)

    dispatch(getNowCoupData(data))
  }
}

//抓點擊次數
export const getUserClickData = data => ({
  type: 'GET_USER_CLICK',
  value: data,
})
export const getUserClickDataAsync = (getCoupData, callback) => {
  return async dispatch => {
    const request = new Request(
      `http://localhost:5000/seller/customermanager/user-click-data`,

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
    console.log('res data', data)

    dispatch(getUserClickData(data))
  }
}

//抓總銷售額
export const getTotalData = data => ({
  type: 'TOTAL_DATA',
  value: data,
})

export const getTotalDataAsync = () => {
  return async dispatch => {
    const request = new Request(
      `http://localhost:5000/seller/customermanager/user-total-data`,

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
    console.log('res data', data)

    dispatch(getTotalData(data))
  }
}
export const itemGetData = data => ({
  type: 'ITEM_DATA',
  value: data,
})

export const itemGetDataAsync = data => {
  return async dispatch => {
    const request = new Request(
      `http://localhost:5000/seller/itemmanager/item-total-data`,

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
    console.log('res data', data)

    dispatch(itemGetData(data))
  }
}

//----------------------賣家中心課程相關action----------------

//取得賣家自己的課程資料
export const getSellerClassData = data => ({
  type: 'GET_SELLER_CLASSDATA',
  value: data,
})

export const getSellerClassDataAsync = (sort, page, isEnable) => {
  return async dispatch => {
    let query = []

    if (sort) query.push(`sort=${sort.trim()}`)
    if (page) query.push(`page=${page.trim()}`)
    if (isEnable) query.push(`expired=1`)
    if (query.length > 0) {
      query = query.join('&')
    } else {
      query = ''
    }

    const request = new Request(`http://localhost:5000/seller/class?${query}`, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
      credentials: 'include',
    })

    const response = await fetch(request)
    const data = await response.json()

    dispatch(getSellerClassData(data))
  }
}

//取得全台縣市資料
export const getCityData = data => ({
  type: 'GET_CITY_DATA',
  value: data,
})

export const getCityDataAsync = () => {
  return async dispatch => {
    const request = new Request(`http://localhost:5000/city`, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()

    dispatch(getCityData(data))
  }
}

//取得全台地區資料
export const getDistData = data => ({
  type: 'GET_DIST_DATA',
  value: data,
})

export const getDistDataAsync = city => {
  return async dispatch => {
    const request = new Request(`http://localhost:5000/dist?city=${city}`, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()

    dispatch(getDistData(data))
  }
}

//取得類別資料
export const getClassTypeDataForSeller = data => ({
  type: 'GET_CLASSTYPEDATA_FORSELLER',
  value: data,
})
//取得等級資料
export const getClassLevelDataForSeller = data => ({
  type: 'GET_CLASSLEVELDATA_FORSELLER',
  value: data,
})

//取得類別或等級資料資料
//type = true or false
//level = classTypeId
export const getClassTypeLevelDataForSellerAsync = (type, level) => {
  return async dispatch => {
    let query = ''
    if (type) query = `onlyType=${type}`
    if (level) query = `getLevel=${level}`

    const request = new Request(
      `http://localhost:5000/classtype/level?${query}`,
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

    switch (true) {
      case !type:
        dispatch(getClassLevelDataForSeller(data))
        break
      case !level:
        dispatch(getClassTypeDataForSeller(data))
        break
      default:
        console.log('none')
    }
  }
}

//新增課程資料
export const addClassData = data => ({
  type: 'ADD_CLASSDATA',
  value: data,
})

//新增課程資料
//formData = 傳送過來的表單值
export const addClassDataAsync = formData => {
  return async dispatch => {
    const fd = new FormData()
    for (let key in formData) {
      fd.append(`${key}`, formData[key])
    }

    const request = new Request(`http://127.0.0.1:5000/seller/class`, {
      method: 'POST',
      body: fd,
      credentials: 'include',
    })

    const response = await fetch(request)
    const data = await response.json()
    dispatch(addClassData(data))
  }
}

//刪除課程資料
export const delClassData = data => ({
  type: 'DEL_CLASSDATA',
  value: data,
})

export const delClassDataAsync = classId => {
  return async dispatch => {
    const request = new Request(
      `http://127.0.0.1:5000/seller/class/${classId}`,
      {
        method: 'DELETE',
        credentials: 'include',
      }
    )

    const response = await fetch(request)
    const data = await response.json()
    dispatch(delClassData(data))
  }
}

//取得單一筆詳細資料
export const getSellerClassDetailData = data => ({
  type: 'GET_CLASSDETAILDATA_FORSELLER',
  value: data,
})

export const getSellerClassDetailDataAsync = classId => {
  return async dispatch => {
    const request = new Request(
      `http://127.0.0.1:5000/seller/class/${classId}`,
      {
        method: 'GET',
        credentials: 'include',
      }
    )

    const response = await fetch(request)
    const data = await response.json()
    dispatch(getSellerClassDetailData(data))
  }
}

//編輯課程資料
export const editClassData = data => ({
  type: 'EDIT_CLASSDATA',
  value: data,
})

//formData = 傳送過來的表單值
export const editClassDataAsync = (formData, classId) => {
  return async dispatch => {
    const fd = new FormData()
    for (let key in formData) {
      fd.append(`${key}`, formData[key])
    }

    const request = new Request(
      `http://127.0.0.1:5000/seller/class/${classId}`,
      {
        method: 'PUT',
        body: fd,
        credentials: 'include',
      }
    )

    const response = await fetch(request)
    const data = await response.json()
    dispatch(editClassData(data))
  }
}

//取得賣家的教練資訊
export const getCoachData = data => ({
  type: 'GET_COACH_DATA',
  value: data,
})

export const getCoachDataAsync = () => {
  return async dispatch => {
    const request = new Request(`http://localhost:5000/seller/coach`, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()

    dispatch(getCoachData(data))
  }
}

//----------------------賣家中心課程相關action----------------
