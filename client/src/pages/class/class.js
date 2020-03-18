import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

//引入redux元件
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//引入action
import {
  getTypeLevelDataAsync,
  getClassDataAsync,
} from '../../actions/class/class_Actions'

//引入自訂元件
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'

//AOS模組
// import AOS from 'aos'
// import 'aos/dist/aos.css'
// AOS.init()

function Class(props) {
  console.log(props)
  const [hasloading, setHasLoading] = useState(false) //是否正在載入中
  const [pageButton, setPageButton] = useState([]) //存放page按鈕的陣列

  //取得初始資料
  useEffect(() => {
    props.getTypeLevelDataAsync()
    props.getClassDataAsync()
  }, [])

  //判斷資料是否已載入進來
  useEffect(() => {
    setHasLoading(true)

    setTimeout(() => {
      if (props.classData.status) {
        setHasLoading(false) //載入完成

        //取得所有page按鈕並移除active
        let pageList = document.querySelectorAll('li.JY-classPage')
        pageList.forEach(value => {
          value.classList.remove('active')
        })

        //如果page按鈕上的data-page值與後端回傳回來的現在頁數相等的話就加上active
        if (
          document.querySelector(
            `li.JY-classPage[data-page="${props.classData.page}"]`
          ) !== null
        ) {
          document
            .querySelector(
              `li.JY-classPage[data-page="${props.classData.page}"]`
            )
            .classList.add('active')
        }

        //如果總頁數等於現在頁數，則表示已到達最後一頁，鎖住next按鈕
        if (props.classData.totalPages === props.classData.page) {
          document.querySelector('li.page-next').classList.add('disabled')
        }
        //如果現在頁數等於1，則表示目前是第一頁，鎖住prev按鈕
        if (props.classData.page === 1) {
          document.querySelector('li.page-prev').classList.add('disabled')
        }
      }
    }, 500)
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
              getClassData(event)
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

  //向伺服器取得資料
  function getClassData(event) {
    //收集擁有active的按鈕，如果存在就取得該按鈕的data-type以及level屬性值作為參數
    const type = document.querySelector('.typeMenu .active')
      ? document.querySelector('.typeMenu .active').getAttribute('data-type')
      : ''
    const level = document.querySelector('.typeMenu .active')
      ? document.querySelector('.typeMenu .active').getAttribute('data-level')
      : ''
    //取得sort的select的值
    const sort = document.querySelector('select[name="sort"]').value
    //page按鈕被點擊時會傳送event參數過來，用event.target判定使用者點下哪一頁
    const page = event ? event.target.textContent : '1'
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
        <li className="page-item page-prev">
          <span className="page-link">Previous</span>
        </li>
        {hasloading
          ? ''
          : pageButton.map(value => {
              return value
            })}
        <li className="page-item page-next">
          <span className="page-link">Next</span>
        </li>
      </ul>
    </nav>
  )

  const classData =
    props.classData.status === 404 ? (
      <h2>查無相關資料</h2>
    ) : (
      Object.keys(props.classData).map(key => {
        if (key === 'result') {
          const result = props.classData[key]
          return result.map((value, index) => {
            return (
              <div className="row classBox" key={index} data-aos="fade-left">
                <div className="col-xl-7 col-12 classImgBox">
                  <img
                    src={
                      'http://127.0.0.1:5000/images/classImg/' + value.classImg
                    }
                    alt=""
                  />
                </div>
                <div className="col-xl-5 col-12 classInfoContent">
                  <h2>{value.className}</h2>
                  <ul className="d-flex">
                    <li>
                      <img src="./images/classImg/icons/type.svg" alt="" />
                      {value.classType}
                    </li>
                    <li>
                      <img src="./images/classImg/icons/level.svg" alt="" />
                      {value.classLevel}
                    </li>
                  </ul>
                  <ul className="d-flex">
                    <li>
                      <img src="./images/classImg/icons/date.svg" alt="" />
                      {value.classStartDate}
                    </li>
                    <li>
                      <img src="./images/classImg/icons/local.svg" alt="" />
                      {value.classLocation}
                    </li>
                  </ul>
                  <p className="introduction">{value.classIntroduction}</p>
                  <h2 className="price">{'$' + value.classPrice}</h2>
                  <Link
                    className="btn-more btn btn-raised btn-warning"
                    to={`/Class/${value.classId}`}
                  >
                    了解詳情
                  </Link>
                </div>
              </div>
            )
          })
        }
      })
    )

  return (
    <>
      <Header />
      <Banner BannerImgSrc="./images/ClassBanner.jpg" />
      <div className="container JYcontainer">
        <div className="row">
          <div className="col-xl-3 col-sm-12">
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

                <div className="sortSelect">
                  <select
                    name="sort"
                    className="form-control"
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
            </div>
            {hasloading ? loading : classData}
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
  return {
    classTypeData: store.classReducer.classTypeData,
    classData: store.classReducer.classData,
  }
}

// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { getTypeLevelDataAsync, getClassDataAsync },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Class)
