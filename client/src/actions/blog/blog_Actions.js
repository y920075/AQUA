
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
  console.log(blogCommentsData)
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
  type: 'ADD_CONTENTCOMMENTSDATA',
  value: data,
})

export const addContentCommentsDataAsync = (commentsData, callback) => {
  console.log(commentsData)
  return async dispatch => {
    const request = new Request(
      'http://localhost:5000/blog/addComments',
      {
        method: 'POST',
        body: commentsData,
      }
    )

    const response = await fetch(request)
    const data = await response.json()
    console.log('res data', data)

    dispatch(addContentCommentsData(data))

    // callback()
  }
}

//新增文章
export const addContentData = data => ({
  type: 'ADD_CONTENTDATA',
  value: data,
})

export const addContentDataAsync = (contentData, callback) => {
  console.log(contentData)
  return async dispatch => {
    const request = new Request(
      'http://localhost:5000/add',
      {
        method: 'POST',
        body: contentData,
      }
    )

    const response = await fetch(request)
    const data = await response.json()
    console.log('res data', data)

    dispatch(addContentData(data))

    // callback()
  }
}

//更新文章
export const editContentData = data => ({
  type: 'EDIT_CONTENTDATA',
  value: data,
})
export const editContentDataAsync = (contentData, callback) => {
  console.log(contentData)
  return async dispatch => {
    const request = new Request(
      'http://localhost:5000/edit',
      {
        method: 'POST',
        body: contentData,
      }
    )

    const response = await fetch(request)
    const data = await response.json()
    console.log('res data', data)

    dispatch(editContentData(data))

    // callback()
  }
}
