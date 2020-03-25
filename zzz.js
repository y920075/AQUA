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