import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router'

//引入redux元件
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//引入action
import {
  getSellerClassDetailDataAsync,
  getCityDataAsync,
  getDistDataAsync,
  getClassTypeLevelDataForSellerAsync,
  editClassDataAsync,
} from '../../actions/seller/index'

import EditClassDataContent from '../../components/class/SellerClassComponents/EditClassDataContent'

function SellerEditClass(props) {
  const [classId, setClassId] = useState(props.match.params.classId)

  useEffect(() => {
    props.getSellerClassDetailDataAsync(classId)
    props.getCityDataAsync()
    props.getClassTypeLevelDataForSellerAsync(true, false)
  }, [])

  return (
    <>
      <div className="container JY-container-seller-editclass">
        <EditClassDataContent
          classId={classId}
          cityData={props.cityData}
          distData={props.distData}
          typeData={props.typeData}
          levelData={props.levelData}
          SellerClassDetailData={props.SellerClassDetailData}
          editClassDataResponse={props.editClassDataResponse}
          editClassDataAsync={props.editClassDataAsync}
          getDistDataAsync={props.getDistDataAsync}
          getClassTypeLevelDataForSellerAsync={
            props.getClassTypeLevelDataForSellerAsync
          }
        />
      </div>
    </>
  )
}

// 取得Redux中store的值
const mapStateToProps = store => {
  return {
    SellerClassDetailData: store.sellerReducer.SellerClassDetailData,
    cityData: store.sellerReducer.cityData,
    distData: store.sellerReducer.distData,
    typeData: store.sellerReducer.typeDataForSeller,
    levelData: store.sellerReducer.levelDataForSeller,
    editClassDataResponse: store.sellerReducer.editClassDataResponse,
  }
}

// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getSellerClassDetailDataAsync,
      getCityDataAsync,
      getDistDataAsync,
      getClassTypeLevelDataForSellerAsync,
      editClassDataAsync,
    },
    dispatch
  )
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SellerEditClass)
)
