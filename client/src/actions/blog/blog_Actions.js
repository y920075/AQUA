
//取得文章列表資料
export const getBlogData = data => ({
    type: 'GET_BLOGDATA',
    value: data,
  })
  export const getBlogDataAsync = (blogInfoData, callback) => {
    return async dispatch => {
      const request = new Request('http://localhost:5000/blog', {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })
  
      console.log(JSON.stringify(blogInfoData))
  
      const response = await fetch(request)
      const data = await response.json()
      console.log('res data', data)
  
      dispatch(getBlogData(data))
    }
  }
  

//   export const getBlogDataAsync = (type, tag, search, page) => {
//       console.log("123")
//     return async dispatch => {
//       let query = []
  
//       if (type) query.push(`type=${type.trim()}`)
//       if (tag) query.push(`tag=${tag.trim()}`)
//       if (search) query.push(`search=${search.trim()}`)
//       if (page) query.push(`page=${page.trim()}`)
//       if (query.length > 0) {
//         query = query.join('&')
//       } else {
//         query = ''
//       }
//           console.log('query', query)


//     const request = new Request(`http://127.0.0.1:5000/blog?${query}`, {
//     method: 'GET',
//     headers: new Headers({
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//     }),
//     })

//     const response = await fetch(request)
//     const data = await response.json()
//     // console.log(data)
//     dispatch(getBlogData(data))
//   }
// }