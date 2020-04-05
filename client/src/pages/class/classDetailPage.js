import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router'

//引入redux元件
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//引入action
import { getclassDetailDataAsync } from '../../actions/class/class_Actions'

//引入自訂元件
import Header from '../../components/Header' //導航列
import Banner from '../../components/Banner' //橫幅廣告
import Footer from '../../components/Footer' //頁腳
import Loading from '../../components/class/Loading' //載入中圖示
import ClassDetailDataContent from '../../components/class/ClassDetailDataContent' //課程詳細資料框

function ClassDetail(props) {
  const [hasloading, setHasLoading] = useState(false) //是否正在載入中

  //取得資料
  useEffect(() => {
    const classId = props.match.params.classId
    props.getclassDetailDataAsync(classId)
  }, [])

  //將從資料庫取得的資料存放到本地的state
  useEffect(() => {
    setHasLoading(true)
    setTimeout(() => {
      if (props.classDetailData.status) {
        setHasLoading(false)
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
            classData={
              props.classDetailData.classData
                ? props.classDetailData.classData[0]
                : ''
            }
            classCoachData={
              props.classDetailData.classCoachData
                ? props.classDetailData.classCoachData
                : ''
            }
          />
        )}
      </div>
      <Footer />
    </>
  )
}

// 取得Redux中store的值
const mapStateToProps = store => {
  return {
    classDetailData: store.classReducer.classDetailData,
  }
}

// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getclassDetailDataAsync }, dispatch)
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ClassDetail)
)
