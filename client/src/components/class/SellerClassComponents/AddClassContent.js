import React, { useState, useEffect } from 'react'
import Select from 'react-select'

import SweetAlert from './Sweetalert2'

/*
    傳入參數
    cityData = 全台城市資料
    distData= 依據選擇的城市得到相對應地區資料
    typeData= 全部課程類型資料
    levelData= 依據選擇的類型得到相對應等級資料
    addClassDataResponse= 新增資料後，後端回傳的資訊

    傳入方法
    addClassData= 新增資料用的action
    handleGetDistData= 取得地區資料的action
    handleGetLevelData= 取得等級資料的action

    2020-03-22

*/

function AddClassContent(props) {
  const [addressCity, setAddressCity] = useState('') //儲存使用者選擇的縣市
  const [addressDist, setAddressDist] = useState('') //儲存使用者選擇的地區
  const [response, setResponse] = useState(false) //確認是否有收到response資料

  //儲存表單值的本地state
  const [className, setClassName] = useState('')
  const [classTypeId, setClassTypeId] = useState('')
  const [classLevelId, setClassLevelId] = useState('')
  const [classLocation, setClassLocation] = useState('')
  const [classFullLocation, setClassFullLocation] = useState('')
  const [classStartDate, setClassStartDate] = useState('')
  const [classEndDate, setClassEndDate] = useState('')
  const [classPrice, setClassPrice] = useState('')
  const [classIntroduction, setClassIntroduction] = useState('')
  const [classDesc, setClassDesc] = useState('')
  const [classMAXpeople, setClassMAXpeople] = useState('')
  const [classImg, setClassImg] = useState('')

  //儲存表單值的本地state

  //每當response改變時就秀出提示視窗
  useEffect(() => {
    if (response) {
      if (props.addClassDataResponse.status === 201) {
        SweetAlert.success('已成功新增一筆資料!')
        setResponse(false)
      } else {
        SweetAlert.errorAlert(
          props.addClassDataResponse.status,
          props.addClassDataResponse.msg
        )
        setResponse(false)
      }
    }
  }, [response])

  //每當本地state[addressDist]改變時就setClassLocation
  useEffect(() => {
    setClassLocation(
      document.querySelector('input[name="classLocation"]').value
    )
  }, [addressDist])

  //新增一筆課程資料用的函式
  const addClassData = async () => {
    const ClassFormData = {
      className,
      classTypeId,
      classLevelId,
      classLocation,
      classFullLocation,
      classStartDate,
      classEndDate,
      classPrice,
      classIntroduction,
      classDesc,
      classMAXpeople,
      classImg,
    }

    //跳出確認視窗
    SweetAlert.sendConfirm(
      '確定要送出嗎?',
      setResponse,
      true,
      props.addClassData,
      ClassFormData
    )
  }

  return (
    <>
      <div className="row addClassForm">
        <div className="col-xl-6">
          <form name="addClassForm">
            <div className="form-group">
              <label htmlFor="">課程名稱</label>
              <input
                type="text"
                name="className"
                className="form-control"
                placeholder="15字以內"
                onChange={event => {
                  setClassName(event.target.value) //設定課程名稱到本地state
                }}
              />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="">課程類型</label>
                <select
                  name="classTypeId"
                  id=""
                  className="form-control"
                  onChange={event => {
                    const type = event.target.value
                    props.handleGetLevelData(false, type)
                    setClassTypeId(event.target.value) //設定課程類型到本地state
                  }}
                >
                  <option value="">請選擇類型</option>
                  {props.typeData.length > 0
                    ? props.typeData.map((value, index) => {
                        return (
                          <option value={value.classTypeId} key={index}>
                            {value.classTypeName}
                          </option>
                        )
                      })
                    : ''}
                </select>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="">課程等級</label>
                <select
                  name="classLevelId"
                  id=""
                  className="form-control"
                  onChange={event => {
                    setClassLevelId(event.target.value) //設定課程等級到本地state
                  }}
                >
                  <option value="">請選擇等級</option>
                  {props.levelData.length > 0
                    ? props.levelData.map((value, index) => {
                        return (
                          <option value={value.classLevelId} key={index}>
                            {value.classLevel}
                          </option>
                        )
                      })
                    : ''}
                </select>
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="">上課地點</label>
                <select
                  name=""
                  className="form-control"
                  onChange={event => {
                    const city = event.target.value
                    props.handleGetDistData(city) //取得相對應的地區資料
                    setAddressCity(city) //設定課程地點(縣市)到本地state
                    setAddressDist('')
                    setClassFullLocation('')
                    setClassLocation('')
                    document.querySelector(
                      'input[name="classFullLocation"]'
                    ).value = ''
                  }}
                >
                  <option value="">請選擇縣市</option>
                  {props.cityData.length > 0
                    ? props.cityData.map((value, index) => {
                        return (
                          <option value={value.name} key={index}>
                            {value.name}
                          </option>
                        )
                      })
                    : ''}
                </select>
              </div>
              <div className="form-group col-md-3">
                <label htmlFor=""></label>
                <select
                  name=""
                  id=""
                  className="form-control"
                  onChange={event => {
                    const dist = event.target.value
                    setAddressDist(dist) //設定課程地區到本地state
                    setClassFullLocation('')
                    setClassLocation('')
                    document.querySelector(
                      'input[name="classFullLocation"]'
                    ).value = ''
                  }}
                >
                  <option value="">請選擇地區</option>
                  {props.distData.length > 0
                    ? props.distData.map((value, index) => {
                        return (
                          <option value={value} key={index}>
                            {value}
                          </option>
                        )
                      })
                    : ''}
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-3">
                <input
                  type="text"
                  name="classLocation"
                  className="form-control"
                  placeholder=""
                  value={addressCity + addressDist}
                  readOnly
                />
              </div>
              <div className="form-group col-md-6">
                <input
                  type="text"
                  name="classFullLocation"
                  className="form-control"
                  placeholder=""
                  onChange={event => {
                    setClassFullLocation(
                      addressCity + addressDist + event.target.value
                    ) //設定課程地點(完整)到本地state
                  }}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="">開課日期</label>
                <input
                  type="datetime-local"
                  name="classStartDate"
                  className="form-control"
                  onChange={event => {
                    setClassStartDate(event.target.value) //設定開課日期到本地state
                  }}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="">結訓日期</label>
                <input
                  type="datetime-local"
                  name="classEndDate"
                  className="form-control"
                  onChange={event => {
                    setClassEndDate(event.target.value) //設定結訓日期到本地state
                  }}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="">課程售價</label>
                <input
                  type="number"
                  name="classPrice"
                  className="form-control"
                  onChange={event => {
                    setClassPrice(event.target.value) //設定課程售價到本地state
                  }}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="">招生人數</label>
                <input
                  type="number"
                  name="classMAXpeople"
                  className="form-control"
                  onChange={event => {
                    setClassMAXpeople(event.target.value) //設定最大人數到本地state
                  }}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="">上傳一張圖片</label>
              <input
                type="file"
                name="classImg"
                className="form-control-file"
                onChange={event => {
                  setClassImg(event.target.files[0]) //設定課程圖片到本地state
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">課程簡介(70字內)</label>
              <textarea
                className="form-control"
                name="classIntroduction"
                rows="3"
                onChange={event => {
                  setClassIntroduction(event.target.value) //設定課程簡介到本地state
                }}
              ></textarea>
            </div>
          </form>
        </div>
        <div className="col-xl-6">
          <div className="form-group classDescBox">
            <label htmlFor="">課程說明(3000字內)</label>
            <textarea
              className="form-control"
              name="classDesc"
              rows="5"
              onChange={event => {
                setClassDesc(event.target.value) //設定課程說明到本地state
              }}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="col-12 btn-box d-flex">
        <button
          type="button"
          className="btn btn-outline-warning"
          onClick={() => {
            addClassData() //觸發新增課程資料的事件
          }}
        >
          送出
        </button>
      </div>
    </>
  )
}

export default AddClassContent
