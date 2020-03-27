import React, { useState, useEffect } from 'react'
import SweetAlert from './Sweetalert2'

/*
    傳入參數
    classId = 課程編號
    SellerClassDetailData = 課程詳細資料(包含教練資訊及報名者資料)
    cityData = 全台城市資料
    distData = 依據選擇的城市得到相對應地區資料
    typeData = 類型資料
    levelData = 依據選擇的類型得到相對應等級資料
    editClassDataResponse = 編輯資料之後，後端傳送過來的資料

    //傳入方法
    editClassDataAsunc = 編輯一筆資料的action
    getDistDataAsunc = 取得地區資料的action
    getClassTypeLevelDataForSellerAsunc = 取得類型及等級的action
    2020-03-26
*/

function EditClassDataContent(props) {
  const [addressCity, setAddressCity] = useState('') //儲存使用者選擇的縣市
  const [addressDist, setAddressDist] = useState('') //儲存使用者選擇的地區
  const [response, setResponse] = useState(false) //確認是否有收到response資料

  //儲存表單值的本地state
  const [className, setClassName] = useState('')
  const [classType, setClassType] = useState('')
  const [classLevel, setClassLevel] = useState('')
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

  //每當本地state[addressDist]改變時就setClassLocation
  useEffect(() => {
    setClassLocation(
      document.querySelector('input[name="classLocation"]').value
    )
  }, [addressDist])

  //每當response改變時就秀出提示視窗
  useEffect(() => {
    if (response) {
      if (props.editClassDataResponse.status === 201) {
        SweetAlert.success('已成功修改一筆資料!')
        setResponse(false)
      } else {
        SweetAlert.errorAlert(
          props.editClassDataResponse.status,
          props.editClassDataResponse.msg
        )
        setResponse(false)
      }
    }
  }, [response])

  useEffect(() => {
    if (props.SellerClassDetailData.classData) {
      props.getDistDataAsunc(
        props.SellerClassDetailData.classData[0].classLocation.substr(0, 3)
      )
      props.getClassTypeLevelDataForSellerAsunc(
        false,
        props.SellerClassDetailData.classData[0].classTypeId
      )

      setClassName(props.SellerClassDetailData.classData[0].className)
      setClassType(props.SellerClassDetailData.classData[0].classType)
      setClassLevel(props.SellerClassDetailData.classData[0].classLevel)
      setClassTypeId(props.SellerClassDetailData.classData[0].classTypeId)
      setClassLevelId(props.SellerClassDetailData.classData[0].classLevelId)
      setClassLocation(props.SellerClassDetailData.classData[0].classLocation)
      setClassFullLocation(
        props.SellerClassDetailData.classData[0].classFullLocation
      )
      setClassStartDate(props.SellerClassDetailData.classData[0].classStartDate)
      setClassEndDate(props.SellerClassDetailData.classData[0].classEndDate)
      setClassPrice(props.SellerClassDetailData.classData[0].classPrice)
      setClassIntroduction(
        props.SellerClassDetailData.classData[0].classIntroduction
      )
      setClassDesc(props.SellerClassDetailData.classData[0].classDesc)
      setClassMAXpeople(props.SellerClassDetailData.classData[0].classMAXpeople)
      setClassImg(props.SellerClassDetailData.classData[0].classImg)
      setAddressCity(
        props.SellerClassDetailData.classData[0].classLocation.substr(0, 3)
      )
      setAddressDist(
        props.SellerClassDetailData.classData[0].classLocation.substr(3)
      )
    }
  }, [props.SellerClassDetailData.classData])

  //修改一筆課程資料用的函式
  const editClassData = async () => {
    const ClassFormData = {
      className,
      classType,
      classLevel,
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
      props.editClassDataAsunc,
      ClassFormData,
      props.classId
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
                defaultValue={className}
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
                  defaultValue=""
                  onChange={event => {
                    const type = event.target.value
                    const index = event.target.selectedIndex
                    props.getClassTypeLevelDataForSellerAsunc(false, type)
                    setClassTypeId(type)
                    setClassType(event.target.options[index].textContent) //設定課程類型到本地state
                  }}
                >
                  <option value="">請選擇類型</option>
                  {props.typeData.length > 0
                    ? props.typeData.map((value, index) => {
                        return (
                          <option
                            value={value.classTypeId}
                            key={index}
                            selected={
                              classTypeId === value.classTypeId
                                ? 'selected'
                                : ''
                            }
                          >
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
                  defaultValue=""
                  onChange={event => {
                    const index = event.target.selectedIndex
                    setClassLevel(event.target.options[index].textContent) //設定課程等級到本地state
                    setClassLevelId(event.target.value)
                  }}
                >
                  <option value="">請選擇等級</option>
                  {props.levelData.length > 0
                    ? props.levelData.map((value, index) => {
                        return (
                          <option
                            value={value.classLevelId}
                            key={index}
                            selected={
                              classLevelId === value.classLevelId
                                ? 'selected'
                                : ''
                            }
                          >
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
                  defaultValue=""
                  onChange={event => {
                    const city = event.target.value
                    props.getDistDataAsunc(city) //取得相對應的地區資料
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
                          <option
                            value={value.name}
                            key={index}
                            selected={
                              addressCity === value.name ? 'selected' : ''
                            }
                          >
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
                  defaultValue=""
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
                          <option
                            value={value}
                            key={index}
                            selected={
                              addressDist === value.name ? 'selected' : ''
                            }
                          >
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
                  defaultValue={classFullLocation}
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
                  defaultValue={classStartDate}
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
                  defaultValue={classEndDate}
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
                  defaultValue={classPrice}
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
                  defaultValue={classMAXpeople}
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
                defaultValue={classIntroduction}
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
              defaultValue={classDesc}
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
            //觸發新增課程資料的事件
            editClassData()
          }}
        >
          送出
        </button>
      </div>
    </>
  )
}

export default EditClassDataContent
