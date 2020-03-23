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

//取得活動列表資料(地圖用)
export const getEventDataForMap = data => ({
  type: 'GET_EVENTDATA_MAP',
  value: data,
})

export const getEventDataForMapAsync = (type, q, sort) => {
  return async dispatch => {
    let query = []

    if (type) query.push(`type=${type.trim()}`)
    if (q) query.push(`q=${q.trim()}`)
    if (sort) query.push(`sort=${sort.trim()}`)
    if (query.length > 0) {
      query = query.join('&')
    } else {
      query = ''
    }

    const request = new Request(`http://127.0.0.1:5000/event/map?${query}`, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    dispatch(getEventDataForMap(data))
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

//取得活動詳細資料
export const getEventDetailData = data => ({
  type: 'GET_EVENT_DETAIL_DATA',
  value: data,
})

export const getEventDetailDataAsync = eventId => {
  return async dispatch => {
    const request = new Request(`http://127.0.0.1:5000/event/${eventId}`, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    dispatch(getEventDetailData(data))
  }
}

//會員報名一筆活動
export const memberJoinEvent = data => ({
  type: 'APPLY_EVENT',
  value: data,
})

export const memberJoinEventAsync = (eventId, memberMemo) => {
  return async dispatch => {
    const fd = new FormData()
    fd.append('memberMemo', memberMemo)
    const request = new Request(
      `http://127.0.0.1:5000/member/event/join/${eventId}`,
      {
        method: 'POST',
        body: fd,
      }
    )

    const response = await fetch(request)
    const data = await response.json()
    console.log(data)
    dispatch(memberJoinEvent(data))
  }
}
