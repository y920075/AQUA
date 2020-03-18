import React from 'react'

function EventSearchBar(props) {
  return (
    <>
      <div className="row d-flex searchBox">
        <div className="col-xl col-12">
          <select
            name="type"
            className="form-control"
            onChange={() => {
              props.getEventData()
            }}
          >
            <option value="">選擇活動類別</option>
            {props.eventTypeData.length > 0
              ? props.eventTypeData.map((value, index) => {
                  return (
                    <option value={value.eventTypeName} key={index}>
                      {value.eventTypeName}
                    </option>
                  )
                })
              : ''}
          </select>
        </div>
        <div className="col-xl col-12">
          <select
            name="sort"
            className="form-control"
            onChange={() => {
              props.getEventData()
            }}
          >
            <option value="">選擇排序方式</option>
            <option value="eventStartDate,asc">日期由近到遠</option>
            <option value="eventStartDate,desc">日期由遠到近</option>
            <option value="eventNeedPeople,asc">名額由少至多</option>
            <option value="eventNeedPeople,desc">名額由多至少</option>
          </select>
        </div>
        <div className="col-xl col-12">
          <input
            type="text"
            className="form-control searchInput"
            placeholder="搜索主題"
          ></input>
        </div>
        <div className="col-xl col-12">
          <button
            type="button"
            className="btn-search btn btn-outline-secondary"
            onClick={() => {
              props.getEventData()
            }}
          >
            搜索
          </button>
        </div>
      </div>
    </>
  )
}

export default EventSearchBar
