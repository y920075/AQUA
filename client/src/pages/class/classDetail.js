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
import ClassDetailDataContent from '../../components/class/ClassDetailDataContent'

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

    //0.5秒後判斷是否有成功載入資料
    setTimeout(() => {
      if (props.classDetailData.status) {
        const nowClassData = props.classDetailData.classData
          ? props.classDetailData.classData[0]
          : ''

        const nowCoachData = props.classDetailData.classCoachData
          ? props.classDetailData.classCoachData
          : ''
        setHasLoading(false)
        setClassData(nowClassData) //將課程資料設定到本地state
        setClassCoachData(nowCoachData) //將教練資料設定到本地state
      }
    }, 500)
  }, [props.classDetailData])

  return (
    <>
      <Header />
      <Banner BannerImgSrc="/images/ClassBanner.jpg" />
      <div className="container JY-container-detail">
        {hasloading ? (
          <Loading />
        ) : (
          <ClassDetailDataContent
            classData={classData}
            classCoachData={classCoachData}
          />
        )}
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
