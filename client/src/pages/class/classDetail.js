import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

//引入redux元件
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//引入action
import { getclassDetailDataAsync } from '../../actions/class/class_Actions'

//引入自訂元件
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Loading from '../../components/class/Loading'

function ClassDetail(props) {
  const [classData, setClassData] = useState({}) //存放課程資料的物件
  const [classCoachData, setClassCoachData] = useState([]) //存放教練資料的陣列
  const [hasloading, setHasLoading] = useState(false) //是否正在載入中

  //取得資料
  useEffect(() => {
    const classId = props.match.params.classId
    props.getclassDetailDataAsync(classId)
  }, [])

  //將從資料庫取得的資料存放到本地的state
  useEffect(() => {
    setHasLoading(true)
    const nowClassData = props.classDetailData.classData
      ? props.classDetailData.classData[0]
      : ''

    const nowCoachData = props.classDetailData.classCoachData
      ? props.classDetailData.classCoachData
      : ''

    //0.5秒後判斷是否有成功載入資料
    setTimeout(() => {
      if (props.classDetailData.status) {
        setHasLoading(false)
      }
    }, 500)

    setClassData(nowClassData) //將課程資料設定到本地state
    setClassCoachData(nowCoachData) //將教練資料設定到本地state
  }, [props.classDetailData])

  const renderData =
    props.classDetailData.status === 404 ? (
      <h1>查無此筆課程資料</h1>
    ) : (
      <>
        <h1>{classData.className}</h1>
        <div className="row d-flex classDataBox">
          <div className="col-xl-5 classImgBox">
            <img
              src={`http://127.0.0.1:5000/images/classImg/${classData.classImg}`}
              alt=""
            />
          </div>
          <div className="col-xl-4 classInfoBox">
            <ul className="d-flex">
              <li>
                <img src="/images/classImg/icons/detail/type.svg" alt="" />
                {classData.classType}
              </li>
              <li>
                <img src="/images/classImg/icons/detail/level.svg" alt="" />
                {classData.classLevel}
              </li>
            </ul>
            <ul>
              <li>
                <img src="/images/classImg/icons/detail/date.svg" alt="" />
                {'開訓日期：' + classData.classStartDate}
              </li>
              <li>
                <img src="/images/classImg/icons/detail/date.svg" alt="" />
                {'結訓日期：' + classData.classEndDate}
              </li>
            </ul>
            <p>
              <img src="/images/classImg/icons/detail/local.svg" alt="" />
              {'開課地點：' + classData.classFullLocation}
            </p>
            <ul className="d-flex">
              <li>{'人數上限：' + classData.classMAXpeople}</li>
              <li>{'目前人數：' + classData.classNOWpeople}</li>
            </ul>
            <h1 className="classPrice">{'$' + classData.classPrice}</h1>
            <button className="btn-join btn btn-raised btn-warning">
              馬上報名
            </button>
          </div>
        </div>
        <div className="row shopNameBox">
          <div className="col-xl-5">
            <p className="shopName">
              <img src="/images/classImg/icons/shop.svg" alt="" />
              {'本課程由 ' + classData.seller_shop + ' 工作室提供'}
            </p>
          </div>
        </div>
        <h2 className="coachTitle">師資陣容</h2>
        <div className="row d-flex coachList">
          {classCoachData
            ? classCoachData.map(value => {
                return (
                  <div className=" coachInfo">
                    <div className="avatarBox">
                      <img
                        src={
                          'http://127.0.0.1:5000/images/coachImg/' +
                          value.classCoachImg
                        }
                        alt=""
                      />
                    </div>
                    <div className="coachName">
                      <p>{value.classCoachName}</p>
                      <p>教練</p>
                    </div>
                    <div className="coachEducation">
                      <p>
                        <img
                          src="/images/classImg/icons/detail/coachEducation.svg"
                          alt=""
                        />
                        {value.classCoachLicense1}
                      </p>
                      <p>
                        <img
                          src="/images/classImg/icons/detail/coachEducation.svg"
                          alt=""
                        />
                        {value.classCoachLicense2}
                      </p>
                      <p>
                        <img
                          src="/images/classImg/icons/detail/coachEducation.svg"
                          alt=""
                        />
                        {value.classCoachLicense3}
                      </p>
                    </div>
                  </div>
                )
              })
            : ''}
        </div>
        <h2 className="coachTitle">課程說明</h2>
        <div className="classDesc">
          <pre>{classData.classDesc}</pre>
        </div>
      </>
    )

  return (
    <>
      <Header />
      <Banner BannerImgSrc="/images/ClassBanner.jpg" />
      <div className="container JY-container-detail">
        {hasloading ? <Loading /> : renderData}
      </div>
      <Footer />
    </>
  )
}

// 取得Redux中store的值
const mapStateToProps = store => {
  return { classDetailData: store.classReducer.classDetailData }
}

// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getclassDetailDataAsync }, dispatch)
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ClassDetail)
)
