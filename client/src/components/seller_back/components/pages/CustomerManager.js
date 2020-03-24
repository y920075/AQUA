import React,{ useState, useEffect }from 'react'
import { Link, withRouter } from 'react-router-dom'

import {customerGetAsync,customerUseAsync} from '../../../../actions/seller/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import $ from "jquery";
import ProgressToMailBar from './ProgressToMailBar'

import CrossSvg from '../../../../image/customer/cancel.svg'

import CouponTableList from './CouponTableList'
import './Style/CustomerMan.scss'


function CustomerManager(props) {



  const [customermail,setCustomerMail] = useState([])

  const [childcoupon, setChildCoupon] = useState({})

  console.log(childcoupon)
  useEffect(() => {
    props.customerGetAsync()
    props.customerUseAsync()

  }, [])

   //類別選單的點擊active事件
 const handleChange = (event) =>{
  const selectType = event.target.value;
   props.customerGetAsync(selectType)

 }
  //類別選單的點擊掛上active
  function typeInputActive(event) {
    //找到所有代表等級的li元素
let customerMenuList = document.querySelectorAll('tr.tr-chin td')
customerMenuList.forEach(value => {
 value.classList.remove('active-chin-td') //移除active
})


 event.target.classList.add('active-chin-td') //為被點擊的目標新增active
 // console.log(coupMenuLiList)
 // console.log(coupMenuLiListspan)

}


// function getCustomerData(event) {
//   const customer_get = $('tr.tr-chin').find('td.active-chin-td')
//     ? $('tr.tr-chin').find('td.active-chin-td').attr('data-type')
//     : ''
//     console.log(customer_get)
// return customer_get
//   // props.getSellerCouponAsync(coup_cate_id)
// }
    function triggerDelete(index){
      if(window.confirm("你確定要刪除這個顧客嗎?")){
        customermail.splice(index, 1);
        setCustomerMail([...customermail])
     }
      }


 const clickCustomer = (event) =>{
   console.log(event.target);
 }
  const tableData = 
  (props.customer.result ? (props.customer.result.map((element,index)=>{
      const {comcus_id, comcus_name, comcus_img, comcus_gmail, comcus_buy_perc, comcus_visit_perc } = element
      return (
         <tr className="tr-chin" key={index}>
            <td  
            data-type={comcus_gmail}
            onClick={ event =>{
              typeInputActive(event) 
              // storeEmail(comcus_gmail)
              setCustomerMail([...customermail, comcus_gmail])
              // getCustomerData(event)
            clickCustomer(event)}}><input type="checkbox" 
            aria-label="Checkbox for following text input"/></td>
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
                <option defaultValue>全部顧客</option>
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
                    <div className="d-flex my-4">   
                    <div className="jumbotron jumbotron-fluid mx-5">
                    <div className="container">
                      <h1 className="display-4 mb-2">寄送名單:</h1>
                      <div className="d-flex flex-column">
                      {customermail.map((element,index)=>{
                       return  <span key={index} className="active-chin-td my-2 rounded">
                       <div onClick={
                         event =>{
                         event.stopPropagation()
                         event.preventDefault()
                         triggerDelete(index)}}>
                       <img width="30" height="30" src={CrossSvg}/>
                       </div>
                       {element += ", "}
                       </span>
                      })}
                      </div>
                    </div>
              
                  </div>
                  
                    <ProgressToMailBar people={customermail}/>
                    </div>
                    <div className="jumbotron jumbotron-fluid mx-5">
                        <div className="container">
                        <h1 className="display-4 mb-2">優惠券選擇名單:</h1>
                        <div className="d-flex flex-column">
                     <span className="active-chin-td my-2 rounded">
                     {childcoupon.coup_name}
                     
                     </span>
                      
                        </div>
                        </div>
                    </div>

                  </div>
                <CouponTableList setChildCoupon={setChildCoupon}/>
                {/* <button onClick={
                  // () => {
                  //   postToBack(props.memberEmail, props.cuponId)
                  // }
                }>送</button> */}
                  </div>
                  </div>  
}
const mapStateToProps = store => {
  // const memberEmail = store.sellerReducer.memberEmail
  // const cuponId = store.sellerReducer.cuponId
  return { 
    customer: store.sellerReducer.customer,
    // memberEmail,
    }
}

// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
  // postToBack
  // storeEmail(email)
  return bindActionCreators({ customerGetAsync,customerUseAsync }, dispatch)
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CustomerManager)
)
