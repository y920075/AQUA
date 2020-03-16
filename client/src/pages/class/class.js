import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  getTypeLevelDataAsync,
  getClassDataAsync,
} from '../../actions/class/class_Actions'

//引入元件
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'

//AOS模組
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()

function Class(props) {
  const [hasloading, setHasLoading] = useState(false) //是否正在載入中
  const [pageButton, setPageButton] = useState([]) //存放page按鈕的陣列

  //取得初始資料
  useEffect(() => {
    props.getTypeLevelDataAsync()
    props.getClassDataAsync()
  }, [])

  //提示加載中
  useEffect(() => {
    setHasLoading(true)
    setTimeout(() => {
      setHasLoading(false)
    }, 1000)
  }, [props.classData])

  //依據totalPages製作頁數按鈕
  useEffect(() => {
    let nowPageButton = []
    for (let i = 1; i <= props.classData.totalPages; i++) {
      nowPageButton.push(
        <li className="page-item JY-classPage" key={i} data-page={i}>
          <span
            className="page-link"
            onClick={event => {
              pageActive(event)
              getClassData()
            }}
          >
            {i}
          </span>
        </li>
      )
    }
    setPageButton(nowPageButton)
  }, [props.classData.totalPages])

  //類別選單的點擊active事件
  function typeMenuActive(event) {
    //找到所有代表等級的li元素
    let subMenuLiList = document.querySelectorAll('ul[class="subMenu"] li')
    subMenuLiList.forEach(value => {
      value.classList.remove('active') //移除active
    })
    //找到所有代表類型的a元素
    let levelTitleList = document.querySelectorAll(
      'ul[class="typeMenu"] li span'
    )
    levelTitleList.forEach(value => {
      value.classList.remove('active') //移除active
    })

    event.target.classList.add('active') //為被點擊的目標新增active
  }

  //頁面按鈕的點擊active事件
  function pageActive(event) {
    let pageList = document.querySelectorAll('li.JY-classPage')
    pageList.forEach(value => {
      value.classList.remove('active')
    })
    event.target.parentElement.classList.add('active') //為被點擊的目標新增active
  }

  //向伺服器取得資料
  function getClassData() {
    const type = document.querySelector('.typeMenu .active')
      ? document.querySelector('.typeMenu .active').getAttribute('data-type')
      : ''
    const level = document.querySelector('.typeMenu .active')
      ? document.querySelector('.typeMenu .active').getAttribute('data-level')
      : ''
    const sort = document.querySelector('select[name="sort"]').value
    const page = document.querySelector('li.JY-classPage.active')
      ? document.querySelector('li.JY-classPage.active').textContent
      : '1'
    props.getClassDataAsync(type, level, sort, page)
  }

  const loading = (
    <div className="loading">
      <img src="../images/logo/Ripple-1s-200px.svg" alt="" />
      <h2>加載中...</h2>
    </div>
  )

  const page = (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-end">
        <li className="page-item disabled">
          <span className="page-link">Previous</span>
        </li>
        {hasloading
          ? ''
          : pageButton.map(value => {
              return value
            })}
        <li className="page-item">
          <span className="page-link">Next</span>
        </li>
      </ul>
    </nav>
  )

  return (
    <>
      <Header />
      <Banner BannerImgSrc="./images/ClassBanner.jpg" />
      <div className="container JYcontainer">
        <div className="row">
          <div className="col-xl-3">
            <h2>課程類型</h2>
            <ul className="typeMenu">
              <li>
                <span
                  data-type="AIDA 國際自由潛水證照班"
                  className="levelTitle"
                  onClick={event => {
                    typeMenuActive(event)
                    getClassData()
                  }}
                >
                  AIDA 國際自由潛水證照班
                </span>
                <ul className="subMenu">
                  {props.classTypeData.map((value, index) => {
                    if (value.classTypeId === 'classTypeAIDA') {
                      return (
                        <li
                          key={index}
                          data-type={value.classTypeName}
                          data-level={value.classLevel}
                          onClick={event => {
                            typeMenuActive(event)
                            getClassData()
                          }}
                        >
                          {value.classLevel}
                        </li>
                      )
                    }
                  })}
                </ul>
              </li>
              <li>
                <span
                  data-type="SSI 國際潛水執照班"
                  className="levelTitle"
                  onClick={event => {
                    typeMenuActive(event)
                    getClassData()
                  }}
                >
                  SSI 國際潛水執照班
                </span>
                <ul className="subMenu">
                  {props.classTypeData.map((value, index) => {
                    if (value.classTypeId === 'classTypeSSI') {
                      return (
                        <li
                          key={index}
                          data-type={value.classTypeName}
                          data-level={value.classLevel}
                          onClick={event => {
                            typeMenuActive(event)
                            getClassData()
                          }}
                        >
                          {value.classLevel}
                        </li>
                      )
                    }
                  })}
                </ul>
              </li>
              <li>
                <span
                  data-type="PADI 潛水員證照班"
                  className="levelTitle"
                  onClick={event => {
                    typeMenuActive(event)
                    getClassData()
                  }}
                >
                  PADI 潛水員證照班
                </span>
                <ul className="subMenu">
                  {props.classTypeData.map((value, index) => {
                    if (value.classTypeId === 'calssTypePADI') {
                      return (
                        <li
                          key={index}
                          data-type={value.classTypeName}
                          data-level={value.classLevel}
                          onClick={event => {
                            typeMenuActive(event)
                            getClassData()
                          }}
                        >
                          {value.classLevel}
                        </li>
                      )
                    }
                  })}
                </ul>
              </li>
              <li>
                <span
                  data-type="普通班"
                  className="levelTitle"
                  onClick={event => {
                    typeMenuActive(event)
                    getClassData()
                  }}
                >
                  普通班
                </span>
                <ul className="subMenu">
                  {props.classTypeData.map((value, index) => {
                    if (value.classTypeId === 'classType01') {
                      return (
                        <li
                          key={index}
                          data-type={value.classTypeName}
                          data-level={value.classLevel}
                          onClick={event => {
                            typeMenuActive(event)
                            getClassData()
                          }}
                        >
                          {value.classLevel}
                        </li>
                      )
                    }
                  })}
                </ul>
              </li>
            </ul>
          </div>
          <div className="col-xl-9 col-sm-12">
            <div className="row">
              <div className="col-xl-12">
                {props.classData.searchType ? (
                  <p>目前檢視類型 {props.classData.searchType}</p>
                ) : (
                  ''
                )}

                <select
                  name="sort"
                  onChange={() => {
                    getClassData()
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
            {hasloading
              ? loading
              : Object.keys(props.classData).map(key => {
                  if (key === 'result') {
                    const result = props.classData[key]
                    return result.map((value, index) => {
                      return (
                        <div
                          className="row classBox"
                          key={index}
                          data-aos="fade-left"
                        >
                          <div className="col-xl-7 col-12 classImgBox">
                            <img
                              src={
                                'http://127.0.0.1:5000/images/classImg/' +
                                value.classImg
                              }
                              alt=""
                            />
                          </div>
                          <div className="col-xl-5 col-12 classInfoContent">
                            <h2>{value.className}</h2>
                            <ul className="d-flex">
                              <li>
                                <img
                                  src="./images/classImg/icons/type.svg"
                                  alt=""
                                />
                                {value.classType}
                              </li>
                              <li>
                                <img
                                  src="./images/classImg/icons/level.svg"
                                  alt=""
                                />
                                {value.classLevel}
                              </li>
                            </ul>
                            <ul className="d-flex">
                              <li>
                                <img
                                  src="./images/classImg/icons/date.svg"
                                  alt=""
                                />
                                {value.classStartDate}
                              </li>
                              <li>
                                <img
                                  src="./images/classImg/icons/local.svg"
                                  alt=""
                                />
                                {value.classLocation}
                              </li>
                            </ul>
                            <p className="introduction">
                              {value.classIntroduction}
                            </p>
                            <h2 className="price">{'$' + value.classPrice}</h2>
                            <button
                              type="button"
                              className="btn-more btn btn-raised btn-warning"
                            >
                              了解詳情
                            </button>
                          </div>
                        </div>
                      )
                    })
                  }
                })}
            {hasloading ? '' : page}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

// 取得Redux中store的值
const mapStateToProps = store => {
  return { classTypeData: store.classTypeData, classData: store.classData }
}

// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { getTypeLevelDataAsync, getClassDataAsync },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Class)
