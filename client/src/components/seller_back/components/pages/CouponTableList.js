import React,{ useState, useEffect }from 'react'
import { Link, withRouter } from 'react-router-dom'

import {customerUseAsync} from '../../../../actions/seller/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './Style/CustomerMan.scss'

function CouponTableList(props) {
    useEffect(() => {
        props.customerUseAsync()
    
      }, [])
      console.log(props)

      const tableData1 = (props.cutomeruse.table1 ? (props.cutomeruse.table1.map((element,index)=>{
        const { coup_name, datecoup_one,datecoup_two} = element
        return (
           <tr key={index}>
              <td><input type="checkbox" aria-label="Checkbox for following text input"/></td>
              <td>{coup_name}</td>
              <td>{datecoup_one}</td>
              <td>{datecoup_two}</td>
    
  
           </tr>
        )
      })): 
      " "
      
    )

    const tableData2 = (props.cutomeruse.table1 ? (props.cutomeruse.table2.map((element,index)=>{
        const { coup_name, datecoup_three,datecoup_four} = element
        return (
           <tr key={index}>
              <td><input type="checkbox" aria-label="Checkbox for following text input"/></td>
              <td>{coup_name}</td>
              <td>{datecoup_three}</td>
              <td>{datecoup_four}</td>
    
  
           </tr>
        )
      })): 
      " "
      
    )
    const tableData3 = (props.cutomeruse.table1 ? (props.cutomeruse.table3.map((element,index)=>{
        const { coup_name, datecoup_five,datecoup_six} = element
        return (
           <tr key={index}>
              <td><input type="checkbox" aria-label="Checkbox for following text input"/></td>
              <td>{coup_name}</td>
              <td>{datecoup_five}</td>
              <td>{datecoup_six}</td>
    
  
           </tr>
        )
      })): 
      " "
      
    )

    return (
        <div className="row">
        <div className="col-sm-4">
        <table className="table table-borderless">
        <thead  className="table-bgcolor-chin thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">優惠名</th>
            <th scope="col">優惠開始</th>
            <th scope="col">優惠結束</th>
          </tr>
        </thead>
        <tbody>
        {tableData1}
        </tbody>
      </table>
        </div>
        <div className="col-sm-4">
        <table className="table table-borderless">
        <thead  className="table-bgcolor-chin thead-dark">
          <tr>
          <th scope="col">#</th>
            <th scope="col">優惠名</th>
            <th scope="col">優惠開始</th>
            <th scope="col">優惠結束</th>
          </tr>
        </thead>
        <tbody>
        {tableData2}

        </tbody>
      </table>
        </div>
        <div className="col-sm-4">
        <table className="table table-borderless">
        <thead  className="table-bgcolor-chin thead-dark">
          <tr>
          <th scope="col">#</th>
            <th scope="col">優惠名</th>
            <th scope="col">優惠開始</th>
            <th scope="col">優惠結束</th>
          </tr>
        </thead>
        <tbody>
        {tableData3}

        </tbody>
      </table>
        </div>
        </div>
    )
}
const mapStateToProps = store => {
    return { cutomeruse: store.sellerReducer.cutomeruse }
  }
  
  // 指示dispatch要綁定哪些action creators
  const mapDispatchToProps = dispatch => {
    return bindActionCreators({ customerUseAsync }, dispatch)
  }
  
  export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(CouponTableList)
  )
  
