import React, { useState, useEffect } from 'react'
import SwitchButton from './MemberEventComponents/SwitchButton'

//傳入方法 props.getEventData() = 向伺服器請求新的資料
//傳入方法 props.setIsEnable() = 設定開關狀態
//傳入參數 props.isEnable() = 開關狀態
//2020-03-25
function EventSearchBar(props) {
  //每次點擊SwitchButton就改變state
  const toggleSwitchButton = () => {
    props.setIsEnable(!!props.isEnable)
  }
  return (
    <>
      <div className="row d-flex searchBox">
        <div className="col-xl-3 col-12">
          <div className="d-flex switchbutton-jy align-items-center justify-content-end">
            <p>包含已過期資料</p>
            <SwitchButton
              type="button"
              active={props.isEnable}
              clicked={toggleSwitchButton}
            />
          </div>
        </div>
        <div className="col-xl-2 col-12 d-flex">
          <select
            name="type"
            className="form-control mx-2"
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
        <div className="col-xl-2 col-12 d-flex">
          <select
            name="sort"
            className="form-control mx-2"
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
        <div className="col-xl col-12 d-flex">
          <div className="mx-2">
            <input
              type="text"
              className="form-control searchInput"
              placeholder="搜索主題"
            ></input>
          </div>
          <div>
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
      </div>
    </>
  )
}

export default EventSearchBar
