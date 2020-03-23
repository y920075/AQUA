import React,{ useState, useEffect }from 'react'
import { Link, withRouter } from 'react-router-dom'

import {customerGetAsync} from '../../../../actions/seller/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Select from 'react-select'

import './Style/CustomerMan.scss'


function CustomerManager(props) {

  useEffect(() => {
    props.customerGetAsync()
    
  }, [])
  console.log(props.customer.result)

   //類別選單的點擊active事件
 const handleChange = (event) =>{
   console.log(event.target.value)
 }
  const tableData = 
  (props.customer.result ? (props.customer.result.map((element,index)=>{
      const { comcus_name, comcus_img, comcus_gmail, comcus_buy_perc, comcus_visit_perc } = element
      return (
         <tr key={index}>
            <td><input type="checkbox" aria-label="Checkbox for following text input"/></td>
            <td>{comcus_name}</td>
            <td><img width="50" height="50" src={ "http://localhost:5000/images/customerImg/" + comcus_img} className="img-fluid" alt="Responsive image"/></td>
            <td>{comcus_gmail}</td>
            <td>{comcus_buy_perc}</td>
            <td>{comcus_visit_perc}</td>

         </tr>
      )
    })): 
    " "
    
  )

  
                return <div>
              <div className="container">
              <h3 className="text-center my-5">顧客管理</h3>
              <div className="row">
              <div className="col-sm-12">
              <select className="custom-select" onChange={event => handleChange(event)}>
                <option defaultValue>請選擇顧客族群</option>
                <option value="buyPercentHight">購買率高的顧客</option>
                <option value="visitPercentHight">到訪率高的顧客</option>
                <option value="commonPercentHight">常客</option>
                <option value="other">其他顧客</option>

              </select>
              <table className="table table-borderless">
                <thead  className="table-bgcolor-chin thead-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">顧客名</th>
                    <th scope="col">照片</th>
                    <th scope="col">email</th>
                    <th scope="col">購買率</th>
                    <th scope="col">到訪點擊率</th>
                  </tr>
                </thead>
                <tbody>
                {tableData}
                </tbody>
              </table>
                    </div>
                  
                    
                  </div>
                      
              
                    
                  </div>
                  </div>  
}
const mapStateToProps = store => {
  return { customer: store.sellerReducer.customer }
}

// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ customerGetAsync }, dispatch)
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CustomerManager)
)
