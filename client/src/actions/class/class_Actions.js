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

export const getClassDataAsync = event => {
  return async dispatch => {
    let query = []
    if (event) {
      if (event.target.getAttribute('data-type'))
        query.push(`type=${event.target.getAttribute('data-type').trim()}`)
      if (event.target.getAttribute('data-level'))
        query.push(`level=${event.target.getAttribute('data-level').trim()}`)
      if (event.target.value) query.push(`sort=${event.target.value}`)
      if (query.length > 0) {
        query = query.join('&')
      } else {
        query = ''
      }
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
