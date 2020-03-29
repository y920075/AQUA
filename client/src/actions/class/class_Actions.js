import Cookie from 'js-cookie'

//取得課程類型與等級
export const getTypeLevelData = data => ({
  type: 'GET_TYPEDATA',
  value: data,
})
export const getTypeLevelDataAsync = () => {
  return async dispatch => {
    const request = new Request('http://127.0.0.1:5000/classtype/level', {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    dispatch(getTypeLevelData(data))
  }
}

//取得課程列表資料
export const getClassData = data => ({
  type: 'GET_CLASSDATA',
  value: data,
})

export const getClassDataAsync = (type, level, sort, page, isEnable) => {
  return async dispatch => {
    let query = []

    if (type) query.push(`type=${type.trim()}`)
    if (level) query.push(`level=${level.trim()}`)
    if (sort) query.push(`sort=${sort.trim()}`)
    if (page) query.push(`page=${page.trim()}`)
    if (isEnable) query.push(`expired=1`)
    if (query.length > 0) {
      query = query.join('&')
    } else {
      query = ''
    }

    const request = new Request(`http://127.0.0.1:5000/class?${query}`, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
      credentials: 'include',
    })

    const response = await fetch(request)
    const data = await response.json()
    dispatch(getClassData(data))
  }
}

//取得課程的詳細資料
export const getclassDetailData = data => ({
  type: 'GET_CLASSDETAIDATA',
  value: data,
})

export const getclassDetailDataAsync = classId => {
  return async dispatch => {
    const request = new Request(`http://127.0.0.1:5000/class/${classId}`, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    dispatch(getclassDetailData(data))
  }
}

//會員報名一筆課程
export const memberJoinClass = data => ({
  type: 'APPLY_CLASS',
  value: data,
})

export const memberJoinClassAsync = (classId, memberMemo) => {
  return async dispatch => {
    const fd = new FormData()
    fd.append('memberMemo', memberMemo)
    const request = new Request(
      `http://127.0.0.1:5000/member/class/${classId}`,
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
    dispatch(memberJoinClass(data))
  }
}

//會員取得自己報名的課程資料
export const memberGetClassData = data => ({
  type: 'MEMBER_GETCLASSDATA',
  value: data,
})

export const memberGetClassDataAsync = (sort, page, isEnable) => {
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

    const request = new Request(`http://127.0.0.1:5000/member/class?${query}`, {
      method: 'GET',
      credentials: 'include',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'access-token': Cookie.get('token'),
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    dispatch(memberGetClassData(data))
  }
}

//會員"取消"報名一筆課程
export const memberUnJoinClass = data => ({
  type: 'UNJOIN_CLASS',
  value: data,
})

export const memberUnJoinClassAsync = classId => {
  return async dispatch => {
    const request = new Request(
      `http://127.0.0.1:5000/member/class/${classId}`,
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
    dispatch(memberUnJoinClass(data))
  }
}
