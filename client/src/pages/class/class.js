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
import Loading from '../../components/class/Loading'
import ClassDataList from '../../components/class/ClassDataList'
import ClassSortBar from '../../components/class/ClassSortBar'
import ClassListCategory from '../../components/class/ClassListCategory'
import EventPageButtons from '../../components/event/EventPageButtons'

function Class(props) {
  const [classData, setClassData] = useState([]) //存放課程列表的陣列
  const [hasloading, setHasLoading] = useState(false) //是否正在載入中

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
        setClassData(props.classData.result)
        setHasLoading(false) //載入完成
      }
    }, 500)
  }, [props.classData])

  //向伺服器取得資料
  function getClassData(page) {
    //收集擁有active的按鈕，如果存在就取得該按鈕的data-type以及level屬性值作為參數
    const type = document.querySelector('.typeMenu .active')
      ? document.querySelector('.typeMenu .active').getAttribute('data-type')
      : ''
    const level = document.querySelector('.typeMenu .active')
      ? document.querySelector('.typeMenu .active').getAttribute('data-level')
      : ''
    //取得sort的select的值
    const sort = document.querySelector('select[name="sort"]').value
    props.getClassDataAsync(type, level, sort, page)
  }

  return (
    <>
      <Header />
      <Banner BannerImgSrc="./images/ClassBanner.jpg" />
      <div className="container JYcontainer">
        <div className="row">
          <ClassListCategory
            getClassData={getClassData}
            classTypeData={props.classTypeData}
          />
          <div className="col-xl-9 col-sm-12">
            <ClassSortBar
              getClassData={getClassData}
              searchType={props.classData ? props.classData.searchType : ''}
            />
            {hasloading ? <Loading /> : <ClassDataList classData={classData} />}
            {hasloading ? (
              ''
            ) : (
              <EventPageButtons
                totalPages={props.classData.totalPages}
                getDataFromServer={getClassData}
              />
            )}
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
