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

function ClassDetail(props) {
  const [classData, setClassData] = useState({})

  useEffect(() => {
    const classId = props.match.params.classId
    props.getclassDetailDataAsync(classId)
  }, [])

  useEffect(() => {
    const nowClassData = props.classDetailData.classData
      ? props.classDetailData.classData[0]
      : ''
    setClassData(nowClassData)
  }, [props.classDetailData])

  return (
    <>
      <Header />
      <Banner BannerImgSrc="/images/ClassBanner.jpg" />
      <div className="container JY-container-detail">
        <h2>{classData.className}</h2>
        <div className="row">
          <div className="col-xl-6 classImgBox">
            <img
              src={`http://127.0.0.1:5000/images/classImg/${classData.classImg}`}
              alt=""
            />
            <p>
              <img src="/images/classImg/icons/shop.svg" alt="" /> 本課程由
              {classData.seller_shop}提供
            </p>
          </div>
          <div className="col-xl-6">這裡放詳細內容</div>
        </div>
      </div>
    </>
  )
}

// 取得Redux中store的值
const mapStateToProps = store => {
  return { classDetailData: store.classDetailData }
}

// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getclassDetailDataAsync }, dispatch)
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ClassDetail)
)
