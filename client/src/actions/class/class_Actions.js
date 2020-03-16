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

    const response = await fetch(request) //等待
    const data = await response.json() //回傳
    dispatch(getTypeLevelData(data))
  }
}

export const getClassData = data => ({
  type: 'GET_CLASSDATA',
  value: data,
})

export const getClassDataAsync = (type, level, sort, page) => {
  return async dispatch => {
    let query = []

    if (type) query.push(`type=${type.trim()}`)
    if (level) query.push(`level=${level.trim()}`)
    if (sort) query.push(`sort=${sort.trim()}`)
    if (page) query.push(`page=${page.trim()}`)
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
    })

    const response = await fetch(request)
    const data = await response.json()
    dispatch(getClassData(data))
  }
}
