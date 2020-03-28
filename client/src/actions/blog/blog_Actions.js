
//取得文章列表資料
export const getBlogData = data => ({
    type: 'GET_BLOGDATA',
    value: data,
  })
  export const getBlogDataAsync = (blogInfoData, callback) => {
    // console.log(blogInfoData)
    return async dispatch => {
      let query=[]
      if (blogInfoData) query.push(`blogInfoData=${blogInfoData.trim()}`)
      // console.log(blogInfoData)

      const request = new Request(`http://localhost:5000/blog?${query}`, {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })
      
      // console.log(JSON.stringify(blogInfoData))
  
      const response = await fetch(request)
      const data = await response.json()
      // console.log('res data', data)
  
      dispatch(getBlogData(data))
    }
  }


//取得文章評論
export const getBlogCommentsData = data => ({
  type: 'GET_BLOGCOMMENTSDATA',
  value: data,
})

export const getBlogCommentsDataAsync = (blogCommentsData, callback) => {
  // console.log(blogCommentsData)
  return async dispatch => {

    const request = new Request('http://localhost:5000/blog/comments', {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    
    // console.log(JSON.stringify(blogCommentsData))

    const response = await fetch(request)
    const data = await response.json()

    dispatch(getBlogCommentsData(data))
  }
}

//新增評論

export const addContentCommentsData = data => ({
  type: 'POST_ADDCONTENTCOMMENTS',
  value: data,
})

export const addContentCommentsDataAsync = (contentCommentsData, callback) => {
  console.log(contentCommentsData)
  return async dispatch => {
    const request = new Request(
      'http://localhost:5000/blog/addComments',
      {
        method: 'POST',
        body: contentCommentsData,
      }
    )

    const response = await fetch(request)
    const data = await response.json()
    console.log('res data', data)

    dispatch(addContentCommentsData(data))

    // callback()
  }
}