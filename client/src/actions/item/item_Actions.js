//取得課程列表資料
export const getItemData = data => ({
  type: 'GET_ITEMDATA',
  value: data,
})

export const getItemDataAsync = (category, brand, price, page) => {
  console.log('123')
  return async dispatch => {
    let query = []

    if (category) query.push(`category=${category.trim()}`)
    if (brand) query.push(`brand=${brand.trim()}`)
    if (price) query.push(`price=${price.trim()}`)
    if (page) query.push(`page=${page.trim()}`)
    if (query.length > 0) {
      query = query.join('&')
    } else {
      query = ''
    }

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

export const getItemDetailData = data => ({
  type: 'GET_ITEMDETAILDATA',
  value: data,
})

export const getItemDetailDataAsync = itemId => {
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
