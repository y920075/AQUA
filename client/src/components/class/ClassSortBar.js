import React from 'react'

/*
  傳入方法 props.getClassData() = 向伺服器取得新資料
  2020-03-21
*/
function ClassSortBar(props) {
  return (
    <>
      <div className="row">
        <div className="col-xl-12 d-flex justify-content-end">
          <div className="sortSelect ">
            <select
              name="sort"
              className="form-control"
              onChange={() => {
                props.getClassData()
              }}
            >
              <option value="">排序方式</option>
              <option value="classPrice,desc">價格高至低</option>
              <option value="classPrice,asc">價格低至高</option>
              <option value="classNOWpeople,desc">名額多至少</option>
              <option value="classNOWpeople,asc">名額少至多</option>
              <option value="classStartDate,asc">開課日期近至遠</option>
              <option value="classStartDate,desc">開課日期遠至近</option>
            </select>
          </div>
        </div>
      </div>
    </>
  )
}

export default ClassSortBar
