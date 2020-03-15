import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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
  const [loading, setLoading] = useState(false)
  const [pageButton, setPageButton] = useState([])

  //取得資料
  useEffect(() => {
    props.getTypeLevelDataAsync()
    props.getClassDataAsync()
  }, [])

  //提示加載中
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [props.classData])

  useEffect(() => {
    let nowPageButton = []
    for (let i = 1; i <= props.classData.totalPages; i++) {
      nowPageButton.push(
        <li className="page-item">
          <a className="page-link" href="#">
            {i}
          </a>
        </li>
      )
    }
    setPageButton(nowPageButton)
  }, [props.classData.totalPages])

  function active(event) {
    let abcd = document.querySelectorAll('ul[class="subMenu"] li')
    abcd.forEach(value => {
      value.classList.remove('active')
    })
    event.target.classList.add('active')
  }

  let getSiblings = el => {
    //取出父層第一個子元素
    let sibling = el.parentNode.firstChild
    //建立一個siblings空陣列
    let siblings = []
    //如果有sibling子元素執行迴圈
    while (sibling) {
      //節點類型為元素節點 且 sibling不等於自己 就push到siblings
      if (sibling.nodeType === 1 && sibling != el) {
        siblings.push(sibling)
      }
      //找siblings下一個同層元素
      sibling = sibling.nextSibling
    }
    //執行至無同層元素回傳至陣列
    return siblings
  }

  const load = (
    <div className="loading">
      <img src="../images/logo/Ripple-1s-200px.svg" alt="" />
      <h2>加載中...</h2>
    </div>
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
                <Link
                  data-type="AIDA 國際自由潛水證照班"
                  className="levelTitle"
                  onClick={event => {
                    props.getClassDataAsync(event)
                  }}
                >
                  AIDA 國際自由潛水證照班
                </Link>
                <ul className="subMenu">
                  {props.classTypeData.map((value, index) => {
                    if (value.classTypeId === 'classTypeAIDA') {
                      return (
                        <li
                          key={index}
                          data-type={value.classTypeName}
                          data-level={value.classLevel}
                          onClick={event => {
                            props.getClassDataAsync(event)
                            active(event)
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
                <Link
                  data-type="SSI 國際潛水執照班"
                  className="levelTitle"
                  onClick={event => {
                    props.getClassDataAsync(event)
                  }}
                >
                  SSI 國際潛水執照班
                </Link>
                <ul className="subMenu">
                  {props.classTypeData.map((value, index) => {
                    if (value.classTypeId === 'classTypeSSI') {
                      return (
                        <li
                          key={index}
                          data-type={value.classTypeName}
                          data-level={value.classLevel}
                          onClick={event => {
                            props.getClassDataAsync(event)
                            active(event)
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
                <Link
                  data-type="PADI 潛水員證照班"
                  className="levelTitle"
                  onClick={event => {
                    props.getClassDataAsync(event)
                  }}
                >
                  PADI 潛水員證照班
                </Link>
                <ul className="subMenu">
                  {props.classTypeData.map((value, index) => {
                    if (value.classTypeId === 'calssTypePADI') {
                      return (
                        <li
                          key={index}
                          data-type={value.classTypeName}
                          data-level={value.classLevel}
                          onClick={event => {
                            props.getClassDataAsync(event)
                            active(event)
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
                <Link
                  data-type="普通班"
                  className="levelTitle"
                  onClick={event => {
                    props.getClassDataAsync(event)
                  }}
                >
                  普通班
                </Link>
                <ul className="subMenu">
                  {props.classTypeData.map((value, index) => {
                    if (value.classTypeId === 'classType01') {
                      return (
                        <li
                          key={index}
                          data-type={value.classTypeName}
                          data-level={value.classLevel}
                          onClick={event => {
                            props.getClassDataAsync(event)
                            active(event)
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
                <select
                  name="sort"
                  onChange={async event => {
                    event.target.setAttribute('data-type', '')
                    event.target.setAttribute('data-level', '')
                    if (props.classData.searchType) {
                      event.target.setAttribute(
                        'data-type',
                        props.classData.searchType
                      )
                    }
                    if (props.classData.searchLevel) {
                      event.target.setAttribute(
                        'data-level',
                        props.classData.searchLevel
                      )
                    }
                    props.getClassDataAsync(event)
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
            {loading
              ? load
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
                                台北市
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
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-end">
                <li className="page-item disabled">
                  <a className="page-link" href="#" tabindex="-1">
                    Previous
                  </a>
                </li>
                {loading
                  ? ''
                  : pageButton.map((value, index) => {
                      return value
                    })}
                <li className="page-item">
                  <a className="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
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
