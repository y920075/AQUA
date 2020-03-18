//取得活動列表資料
export const getEventData = data => ({
  type: 'GET_EVENTDATA',
  value: data,
})

export const getEventDataAsync = (type, q, sort, page) => {
  return async dispatch => {
    let query = []

    if (type) query.push(`type=${type.trim()}`)
    if (q) query.push(`q=${q.trim()}`)
    if (sort) query.push(`sort=${sort.trim()}`)
    if (page) query.push(`page=${page.trim()}`)
    if (query.length > 0) {
      query = query.join('&')
    } else {
      query = ''
    }

    console.log(query)

    const request = new Request(`http://127.0.0.1:5000/event?${query}`, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    dispatch(getEventData(data))
  }
}

//取得活動類型資料
export const getEventTypeData = data => ({
  type: 'GET_EVENT_TYPEDATA',
  value: data,
})

export const getEventTypeDataAsync = () => {
  return async dispatch => {
    const request = new Request(`http://127.0.0.1:5000/event/type`, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    dispatch(getEventTypeData(data))
  }
}
