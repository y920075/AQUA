//編輯活動資料
export const editEventData = data => ({
  type: 'EDIT_EVENTDATA',
  value: data,
})

//formData = 傳送過來的表單值
export const editEventDataAsunc = (formData, eventId) => {
  return async dispatch => {
    const fd = new FormData()
    fd.append('eventName', formData.eventName)
    fd.append('eventTypeId', formData.eventTypeId)
    fd.append('eventType', formData.eventType)
    fd.append('eventLocation', formData.eventLocation)
    fd.append('eventFullLocation', formData.eventFullLocation)
    fd.append('eventStartDate', formData.eventStartDate)
    fd.append('eventEndDate', formData.eventEndDate)
    fd.append('eventDesc', formData.eventDesc)
    fd.append('eventNeedPeople', formData.eventNeedPeople)
    fd.append('eventImg', formData.eventImg)

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