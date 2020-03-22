import React, { useState } from 'react'

function AddClassContent(props) {
  const [addressCity, setAddressCity] = useState('')
  const [addressDist, setAddressDist] = useState('')

  //---接收表單上的值
  const [className, setClassName] = useState(null)
  const [classTypeId, setClassTypeId] = useState(null)
  const [classLevelId, setClassLevelId] = useState(null)
  const [classLocation, setClassLocation] = useState('台北市')
  const [classFullLocation, setClassFullLocation] = useState(null)
  const [classStartDate, setClassStartDate] = useState(null)
  const [classEndDate, setClassEndDate] = useState(null)
  const [classPrice, setClassPrice] = useState(null)
  const [classIntroduction, setClassIntroduction] = useState(null)
  const [classDesc, setClassDesc] = useState(null)
  const [classMAXpeople, setClassMAXpeople] = useState(null)
  const [classImg, setClassImg] = useState(null)

  const form = React.createRef()

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
    props.addClassData(ClassFormData)
  }

  return (
    <>
      <div className="row">
        <div className="col-6">
          <form name="addClassForm" ref={form}>
            <div className="form-group">
              <label htmlFor="">課程名稱</label>
              <input
                type="text"
                name="className"
                className="form-control"
                placeholder="15字以內"
                onChange={event => {
                  setClassName(event.target.value)
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
                    setClassTypeId(event.target.value)
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
                    setClassLevelId(event.target.value)
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
                    props.handleGetDistData(city)
                    setAddressCity(city)
                    setAddressDist('')
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
                    setAddressDist(dist)
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
                  onChange={event => {
                    setClassLocation(event.target.value)
                  }}
                />
              </div>
              <div className="form-group col-md-6">
                <input
                  type="text"
                  name="classFullLocation"
                  className="form-control"
                  placeholder=""
                  onChange={event => {
                    setClassFullLocation(event.target.value)
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
                    setClassStartDate(event.target.value)
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
                    setClassEndDate(event.target.value)
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
                    setClassPrice(event.target.value)
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
                    setClassMAXpeople(event.target.value)
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
                  setClassImg(event.target.files[0])
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
                  setClassIntroduction(event.target.value)
                }}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="">課程說明(3000字內)</label>
              <textarea
                className="form-control"
                name="classDesc"
                rows="5"
                onChange={event => {
                  setClassDesc(event.target.value)
                }}
              ></textarea>
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                addClassData()
              }}
            >
              送出
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddClassContent
