import axios from 'axios'

//取得地點留言
export const getLocationcomment = data => ({
  type: 'GET_LOCATIONCOMMENT',
  value: data,
})
export const fetchLocationcomment = () => {
  return dispatch => {
    axios
      .get('http://localhost:5000/comment/location')
      .then(function(response) {
        // Success
        const comment = response.data
        dispatch(getLocationcomment(comment))
      })
      .catch(function(error) {
        // Error
        console.log(error)
      })
  }
}

//取得文章留言
export const getBlogcomment = data => ({
  type: 'GET_BLOGCOMMENT',
  value: data,
})
export const fetchBlogcomment = () => {
  return dispatch => {
    axios
      .get('http://localhost:5000/comment/blog')
      .then(function(response) {
        // Success
        const comment = response.data
        dispatch(getBlogcomment(comment))
      })
      .catch(function(error) {
        // Error
        console.log(error)
      })
  }
}
//送出留言資料
export const Sentlocationcomment = data => ({
  type: 'SENT_COMMENT',
  value: data,
})

export const Submmitlocationcomment = formData => {
  console.log(formData)
  return async dispatch => {
    const fd = new FormData()
    fd.append('pageid', formData.pageid)
    fd.append('memberid', formData.memberid)
    fd.append('membername', formData.membername)
    fd.append('commentitself', formData.commentitself)
    console.log(fd)
    const request = new Request(
      'http://localhost:5000/comment/sentlocationcomment',
      {
        method: 'POST',
        body: fd,
      }
    )
    const response = await fetch(request)
    const data = await response.json()
    dispatch(Sentlocationcomment(data))
  }
}
