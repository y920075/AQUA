// action = {type, value}
// type: ADD_VALUE, MINUS_VALUE
// ex. action = {type: 'ADD_VALUE', value: 10}

export const addValue = value => ({ type: 'ADD_VALUE', value: value })
export const minusValue = value => ({ type: 'MINUS_VALUE', value: value })

// 模擬與伺服器相連
export const addValueAsync = value => {
  return dispatch => {
    setTimeout(() => {
      console.log('delay 3s to add value')

      dispatch(addValue(value))
    }, 3000)
  }
}

export const initValue = value => ({ type: 'INIT_VALUE', value: value })

// 模擬與伺服器相連
export const initValueAsync = value => {
  return async dispatch => {
    // 注意資料格式要設定，伺服器才知道是json格式
    const request = new Request('http://localhost:5000/', {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()

    // 設定資料
    dispatch(initValue(data.total))
  }
}
