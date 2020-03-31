//取得商品列表資料
export const getItemData = data => ({
  type: 'GET_ITEMDATA',
  value: data,
})

export const getItemDataAsync = (type, brand, price, sort, page) => {
  console.log('fetch itemlist c,b,pri,pag', type, brand, price, sort, page)
  return async dispatch => {
    let query = []

    if (type) query.push(`type=${type.trim()}`)
    if (brand) query.push(`brand=${brand.trim()}`)
    if (price) query.push(`price=${price.trim()}`)
    if (page) query.push(`page=${page.trim()}`)
    if (sort) query.push(`sort=${sort.trim()}`)
    if (query.length > 0) {
      query = query.join('&')
    } else {
      query = ''
    }
    console.log('query', query)

    const request = new Request(`http://127.0.0.1:5000/items?${query}`, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    // console.log(data)
    dispatch(getItemData(data))
  }
}

export const getAsideData = data => ({
  type: 'GET_ASIDEDATA',
  value: data,
})

export const getAsideDataAsync = () => {
  // console.log('fetch aside')
  return async dispatch => {
    const request = new Request('http://127.0.0.1:5000/itemaside', {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    // console.log(data)
    dispatch(getAsideData(data))
  }
}

export const getItemDetailData = data => ({
  type: 'GET_ITEMDETAILDATA',
  value: data,
})

export const getItemDetailDataAsync = itemId => {
  console.log('fetch itemdetail', itemId)
  return async dispatch => {
    const request = new Request(`http://127.0.0.1:5000/items/${itemId}`, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    dispatch(getItemDetailData(data))
  }
}

//點擊時更新資料庫的使用者點擊資料
export const onClickUpdate = data => ({
  type: 'CLICK_UPDATE',
  value: data,
})

export const onClickUpdateAsync = updatedata => {
  console.log(updatedata)
  return async dispatch => {
    const json = JSON.stringify(updatedata)
    const request = new Request(
      'http://127.0.0.1:5000/seller/customermanager/user-click-update',
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
    // console.log(data)
    dispatch(onClickUpdate(data))
  }
}
///user-click-update
