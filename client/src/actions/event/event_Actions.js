import Cookie from 'js-cookie'

//取得活動列表資料
export const getEventData = data => ({
  type: 'GET_EVENTDATA',
  value: data,
})

export const getEventDataAsync = (type, q, sort, page, isEnable) => {
  return async dispatch => {
    let query = []

    if (type) query.push(`type=${type.trim()}`)
    if (q) query.push(`q=${q.trim()}`)
    if (sort) query.push(`sort=${sort.trim()}`)
    if (page) query.push(`page=${page.trim()}`)
    if (isEnable) query.push(`expired=1`)
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

export const getEventDataForMapAsync = (type, q, sort, isEnable) => {
  return async dispatch => {
    let query = []

    if (type) query.push(`type=${type.trim()}`)
    if (q) query.push(`q=${q.trim()}`)
    if (sort) query.push(`sort=${sort.trim()}`)
    if (isEnable) query.push(`expired=1`)
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
        credentials: 'include',
        headers: new Headers({
          'access-token': Cookie.get('token'),
        }),
      }
    )

    const response = await fetch(request)
    const data = await response.json()
    dispatch(memberJoinEvent(data))
  }
}

//會員取得自己發起的活動資料
export const memberGetEventDataSelf = data => ({
  type: 'GET_MEMBER_EVENT_SELF',
  value: data,
})

export const memberGetEventDataAsync = (sort, page, nowClickTag, isEnable) => {
  return async dispatch => {
    let url = null

    let query = []

    if (sort) query.push(`sort=${sort.trim()}`)
    if (page) query.push(`page=${page.trim()}`)
    if (isEnable) query.push(`expired=1`)
    if (query.length > 0) {
      query = query.join('&')
    } else {
      query = ''
    }

    //依據點擊的tag給予不同的路徑
    // 1 = 取得會員自己發起的活動
    // 2 = 取得會員報名的活動
    switch (nowClickTag) {
      case 1:
        url = `http://127.0.0.1:5000/member/event/self?${query}`
        break
      case 2:
        url = `http://127.0.0.1:5000/member/event/join?${query}`
        break
      default:
    }

    const request = new Request(url, {
      method: 'GET',
      credentials: 'include',
      headers: new Headers({
        'access-token': Cookie.get('token'),
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    dispatch(memberGetEventDataSelf(data))
  }
}

//會員刪除自己發起的活動資料
export const delEventData = data => ({
  type: 'DEL_EVENTDATA',
  value: data,
})

export const delEventDataAsync = eventId => {
  return async dispatch => {
    const request = new Request(
      `http://127.0.0.1:5000/member/event/${eventId}`,
      {
        method: 'DELETE',
        credentials: 'include',
        headers: new Headers({
          'access-token': Cookie.get('token'),
        }),
      }
    )

    const response = await fetch(request)
    const data = await response.json()
    dispatch(delEventData(data))
  }
}

//會員取消報名活動
export const memberUnJoinEvent = data => ({
  type: 'UNJOIN_EVENT',
  value: data,
})

export const memberUnJoinEventAsync = eventId => {
  return async dispatch => {
    const request = new Request(
      `http://127.0.0.1:5000/member/event/join/${eventId}`,
      {
        method: 'DELETE',
        credentials: 'include',
        headers: new Headers({
          'access-token': Cookie.get('token'),
        }),
      }
    )

    const response = await fetch(request)
    const data = await response.json()
    console.log(data)
    dispatch(memberUnJoinEvent(data))
  }
}

//會員新增一筆活動資料
export const addEventData = data => ({
  type: 'ADD_EVENTDATA',
  value: data,
})

//formData = 傳送過來的表單值
export const addEventDataAsync = formData => {
  return async dispatch => {
    const fd = new FormData()
    for (let key in formData) {
      fd.append(`${key}`, formData[key])
    }

    const request = new Request(`http://127.0.0.1:5000/member/event`, {
      method: 'POST',
      body: fd,
      credentials: 'include',
      headers: new Headers({
        'access-token': Cookie.get('token'),
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    dispatch(addEventData(data))
  }
}

//取得單一筆詳細資料
export const getMemberEventDetailData = data => ({
  type: 'GET_EVENTDETAILDATA_FORMEMBER',
  value: data,
})

export const getMemberEventDetailDataAsync = eventId => {
  return async dispatch => {
    const request = new Request(
      `http://127.0.0.1:5000/member/event/self/${eventId}`,
      {
        method: 'GET',
        credentials: 'include',
        headers: new Headers({
          'access-token': Cookie.get('token'),
        }),
      }
    )

    const response = await fetch(request)
    const data = await response.json()
    dispatch(getMemberEventDetailData(data))
  }
}

//編輯活動資料
export const editEventData = data => ({
  type: 'EDIT_EVENTDATA',
  value: data,
})

//formData = 傳送過來的表單值
export const editEventDataAsync = (formData, eventId) => {
  return async dispatch => {
    const fd = new FormData()
    for (let key in formData) {
      fd.append(`${key}`, formData[key])
    }

    const request = new Request(
      `http://127.0.0.1:5000/member/event/${eventId}`,
      {
        method: 'PUT',
        body: fd,
        credentials: 'include',
        headers: new Headers({
          'access-token': Cookie.get('token'),
        }),
      }
    )

    const response = await fetch(request)
    const data = await response.json()
    dispatch(editEventData(data))
  }
}

//會員取消其他人的報名
export const memberUnOtherJoinEvent = data => ({
  type: 'UNJOIN_OTHER_EVENT',
  value: data,
})

export const memberUnOtherJoinEventAsync = (eventId, memberId) => {
  return async dispatch => {
    const fd = new FormData()
    fd.append('memberId', memberId)
    const request = new Request(
      `http://127.0.0.1:5000/member/event/unjoin/${eventId}`,
      {
        method: 'DELETE',
        body: fd,
        credentials: 'include',
        headers: new Headers({
          'access-token': Cookie.get('token'),
        }),
      }
    )

    const response = await fetch(request)
    const data = await response.json()
    dispatch(memberUnOtherJoinEvent(data))
  }
}

//取得聊天室列表
export const memberGetChatList = data => ({
  type: 'MEMBER_GET_CHATLIST',
  value: data,
})

export const memberGetChatListAsync = mylist => {
  return async dispatch => {
    const request = new Request(
      `http://127.0.0.1:5000/member/event/chatList?mylist=${mylist}`,
      {
        method: 'GET',
        headers: new Headers({
          'access-token': Cookie.get('token'),
        }),
      }
    )

    const response = await fetch(request)
    const data = await response.json()
    console.log(data)
    dispatch(memberGetChatList(data))
  }
}

//是否按下已過期按鈕
export const switchButtonisEnable = isEnable => ({
  type: 'SWITCHBUTTON_ENABLE',
  value: !isEnable,
})
