import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Swal from 'sweetalert2'
import noImg from '../../image/image.png'
// import Swal from 'sweetalert2/src/sweetalert2.js'
import '../../style/CW_items.scss'

// import { userRegisterAsync } from '../actions/index'
// 購物車寫入資料庫
import { memberCheckOutAsync } from '../../actions/order/order_Actions'

//得到買家的優惠券資料動作
import { getUserCouponDetaiAsync } from '../../actions/member/memberActions'

//引入rodal
import Rodal from 'rodal'
import '../../../node_modules/rodal/lib/rodal.css'

// import { getNowCoupDataAsync } from '../../actions/seller/index'

//引入元件
import Header from '../../components/Header'
import Banner from '../../components/Banner'
// import Breadcrumb from '../../components/item/Breadcrumb'
import CartItem from '../../components/order/CartItem'
import Loading from '../../../src/components/seller_back/components/Loading'

function ShoppingCart(props) {
  const [mycart, setMycart] = useState([])
  const [hasLoading, setHasLoading] = useState(false)

  const [newCoup, setNewCoup] = useState([])

  const [coupCode, setCouponCode] = useState('')
  const [couptInput, setCouptInput] = useState({})
  const [rodalState, setRodal] = useState({
    visible: false,
  })
  const [couponChoose, setCouponChoose] = useState({})

  // 取得購物車
  const localCart = JSON.parse(localStorage.getItem('cart'))

  // 訂單資料初始
  const orderData = {
    orderMemberId: 'M123',
    orderItems: [],
    // checkSubtotal: handleOrderSum,
  }
  let itemData = {}
  // for (let i = 0; i < localCart.length; i++) {
  //   itemData.orderItemId = array[i].id;
  //   itemData.checkPrice = array[i].amount;
  //   itemData.checkQty = array[i].price;
  //   orderData.orderItems.push(itemData)
  // }
  // 點擊結帳
  function checkOut() {
    if (localCart == null || localCart.length < 1) {
      Swal.fire({
        // title: 'Error!',
        text: '購物車是空的喔！',
        icon: 'warning',
        confirmButtonText: '確定',
      })
    } else {
      Swal.fire({
        // title: 'Error!',
        text: `確定商品總金額 NT$！${sum(mycart)}`,
        icon: 'info',
        confirmButtonText: '確定',
        showCancelButton: true,
        cancelButtonText: '取消',
      }).then(result => {
        if (result.value === true) {
          for (let i = 0; i < localCart.length; i++) {
            console.log(localCart[i])
            itemData.orderItemId = localCart[i].id
            itemData.checkPrice = localCart[i].price
            itemData.checkQty = localCart[i].amount
            orderData.orderItems.push(itemData)
            itemData = {}
          }
          // props.changeSteps(1)
          console.log(orderData)
          props.memberCheckOutAsync(orderData)
          orderData.orderItems = []
          // 購物完清掉 localstorage 購物車
          localStorage.removeItem('cart')
          // window.location.href = '/member/checkout'
          props.history.push({
            pathname: '/member/checkout',
          })
        }
      })
    }
  }
  // 點擊刪除
  function handleDelete(item) {
    Swal.fire({
      // title: 'Error!',
      text: `確定刪除商品嗎?`,
      icon: 'warning',
      confirmButtonText: '確定',
      showCancelButton: true,
      cancelButtonText: '取消',
    }).then(result => {
      if (result.value) {
        const index = localCart.findIndex(arr => arr.id === item.id)
        if (index !== -1) {
          localCart.splice(index, 1)
          localStorage.setItem('cart', JSON.stringify(localCart))
        }
      }
    })
  }
  // const localCart = JSON.parse(localStorage.getItem('cart'))
  // const index = localCart.indexOf(item)
  // localstorage 購物車設定給 mycart
  async function getCartFromLocalStorage() {
    setHasLoading(true)
    setMycart(localCart)
  }

  function typeInputActive(event) {
    //找到所有代表等級的li元素
    let customerMenuList = document.querySelectorAll('tr.tr-chin td')
    customerMenuList.forEach(value => {
      value.classList.remove('active-chin-check') //移除active
    })

    event.target.classList.add('active-chin-check') //為被點擊的目標新增active
  }
  // function cartcalculate(event) {
  //   console.log(couponChoose)
  // }
  function couponCheck(event) {
    if (
      couponChoose.order_coup_name == null &&
      couponChoose.givi_coup_name == null &&
      couponChoose.order_coup_code == null &&
      couponChoose.givi_coup_code == null
    ) {
      delete couponChoose.order_coup_name
      delete couponChoose.givi_coup_name
      delete couponChoose.order_coup_code
      delete couponChoose.givi_coup_code
    } else if (
      couponChoose.goods_coup_name == null &&
      couponChoose.givi_coup_name == null &&
      couponChoose.goods_coup_code == null &&
      couponChoose.givi_coup_code == null
    ) {
      delete couponChoose.goods_coup_name
      delete couponChoose.givi_coup_name
      delete couponChoose.goods_coup_code
      delete couponChoose.givi_coup_code
    } else {
      delete couponChoose.order_coup_name
      delete couponChoose.goods_coup_name
      delete couponChoose.order_coup_code
      delete couponChoose.goods_coup_code
    }
    Swal.fire({
      // title: 'Error!',
      text: `確定要設定所選擇的優惠嗎?`,
      icon: 'warning',
      confirmButtonText: '確定',
      showCancelButton: true,
      cancelButtonText: '取消',
    }).then(result => {
      if (result.value) {
        setCouptInput(couponChoose)
        setNewCoup(couponChoose)
      }
    })
    // console.log(couponChoose)
  }

  //設定完成傳到後端抓資料
  useEffect(() => {
    getCartFromLocalStorage()
    props.getUserCouponDetaiAsync()
  }, [])

  //優惠券彈跳視窗函式
  //開啟
  const show = event => {
    setRodal({ visible: true })
  }
  // //關閉
  const hide = event => {
    setRodal({ visible: false })
  }

  const sum = items => {
    let total = 0
    if (items != null) {
      for (let i = 0; i < items.length; i++) {
        total += items[i].amount * items[i].price
      }
    }
    return total
  }
  //全單優惠的四種函數
  //全單滿__件__打__折
  //全單滿__件__減__元
  //全單滿__元__減__元
  //全單滿__元__打__折
  const handleOrderSum = (items, newCoup) => {
    console.log(items)
    let totalPrice = 0
    let itemsToal = 0
    let priceToal = 0
    if (
      newCoup.hasOwnProperty('order_coup_name') &&
      newCoup.order_coup_code.substr(0, 2) == 'PI'
    ) {
      //超過金額打折
      console.log(newCoup.order_over)
      for (let i = 0; i < items.length; i++) {
        totalPrice += items[i].amount * items[i].price
      }
      if (totalPrice > newCoup.order_over) {
        return parseInt(totalPrice * (newCoup.order_pri_perc / 10))
      }
    } else if (
      newCoup.hasOwnProperty('order_coup_name') &&
      newCoup.order_coup_code.substr(0, 2) == 'PM'
    ) {
      //超過金額減價
      for (let i = 0; i < items.length; i++) {
        totalPrice += items[i].amount * items[i].price
      }
      return parseInt(totalPrice - newCoup.order_pri_perc)
    } else if (
      newCoup.hasOwnProperty('order_coup_name') &&
      newCoup.order_coup_code.substr(0, 2) == 'II'
    ) {
      //超過件數打折
      for (let i = 0; i < items.length; i++) {
        itemsToal += items[i].amount
        // priceToal += items[i].price
      }
      console.log(itemsToal)
      // console.log(priceToal)

      console.log(newCoup)

      if (itemsToal >= newCoup.order_over) {
        // totalPrice = itemsToal * priceToal * (newCoup.order_pri_perc / 10)
        for (let f = 0; f < items.length; f++) {
          totalPrice += items[f].amount * parseInt(items[f].price)
          // console.log(items[f].amount)
          // console.log(parseInt(items[f].price))
        }
        console.log(totalPrice)
        return parseInt(totalPrice * (newCoup.order_pri_perc / 10))
      }
    } else if (
      newCoup.hasOwnProperty('order_coup_name') &&
      newCoup.order_coup_code.substr(0, 2) == 'IM'
    ) {
      //超過件數減價
      for (let i = 0; i < items.length; i++) {
        itemsToal += items[i].amount
        // priceToal += items[i].price
      }
      console.log(itemsToal)
      // console.log(priceToal)

      console.log(newCoup)

      if (itemsToal >= newCoup.order_over) {
        // totalPrice = itemsToal * priceToal * (newCoup.order_pri_perc / 10)
        for (let f = 0; f < items.length; f++) {
          totalPrice += items[f].amount * parseInt(items[f].price)
          // console.log(items[f].amount)
          // console.log(parseInt(items[f].price))
        }
        console.log(totalPrice)
        return parseInt(totalPrice - newCoup.order_pri_perc)
      }
    } else {
      return totalPrice
    }
    // console.log(items)

    // if (
    //   newCoup.order_coup_code.substr(0, 2) == 'II' ||
    //   newCoup.order_coup_code = undefined
    // ) {
    //}
    // } else {
    //   for (let i = 0; i < items.length; i++) {
    //     total += items[i].amount * items[i].price
    //   }
    //   return total
    // }
    //優惠券函式
    //第一種類的優惠券:全單優惠

    //  if(coupCode.substr(0,2) == "II" || coupCode.substr(0,2) == "PI" || coupCode.substr(0,2) == "PM" ||  coupCode.substr(0,2) == "PI"){
    //   }else if(coupCode.substr(0,3) == "III" || coupCode.substr(0,3) == "PII" || coupCode.substr(0,3) == "PMI" ||  coupCode.substr(0,3) == "IMI"){
    //   }else{
    //   }
  }
  //生成買家特選的優惠券modal

  //生成item類型的優惠券函數
  //使用計算物件值的函式sumObj
  const handleItemSum = (items, newCoup) => {
    // console.log(newCoup)
    // console.log(items)
    // let specificItemNum = 0
    let inneritems
    let InnerTotal = 0

    let innerAllAmount = 0
    let ItemTotalPrice = 0

    //只打算做兩種商品的四種折扣,所以是八種 PMI IMI III PII
    if (
      newCoup.hasOwnProperty('goods_coup_name') &&
      newCoup.goods_coup_code.substr(0, 3) == 'III' &&
      newCoup.itemType == '潛水配件'
    ) {
      //特定商品:潛水配件超過件數打折
      for (let i = 0; i < items.length; i++) {
        if (items[i].itemCategoryId == 'c005') {
          // console.log(items.find(x => x.itemCategoryId === 'c005').amount)
          inneritems = items.filter(function(item, index, array) {
            return item.itemCategoryId === 'c005'
          })
          // console.log(x)
        }
      }
      console.log(inneritems)
      //計算陣列裡面的物件值
      function countObj(array, key) {
        return array.reduce(function(r, a) {
          return r + a[key]
        }, 0)
      }
      let objAmount = countObj(inneritems, 'amount')

      // console.log(objAmount)
      if (objAmount >= newCoup.goods_over) {
        for (let x = 0; x < items.length; x++) {
          ItemTotalPrice +=
            items[x].amount * items[x].price * (newCoup.goods_pri_perc / 10)
        }
        return ItemTotalPrice
      }
    } else if (
      newCoup.hasOwnProperty('goods_coup_name') &&
      newCoup.goods_coup_code.substr(0, 3) == 'IMI' &&
      newCoup.itemType == '潛水配件'
    ) {
      //以下是超過件數減價
      for (let i = 0; i < items.length; i++) {
        if (items[i].itemCategoryId == 'c005') {
          // console.log(items.find(x => x.itemCategoryId === 'c005').amount)
          inneritems = items.filter(function(item, index, array) {
            return item.itemCategoryId === 'c005'
          })
          // console.log(x)
        }
      }
      // console.log(inneritems)
      //計算陣列裡面的物件值
      function countObj(array, key) {
        return array.reduce(function(r, a) {
          return r + a[key]
        }, 0)
      }
      let objAmount = countObj(inneritems, 'amount')

      // console.log(objAmount)
      if (objAmount >= newCoup.goods_over) {
        for (let x = 0; x < items.length; x++) {
          ItemTotalPrice += items[x].amount * items[x].price
        }
        const FinallyTotal = ItemTotalPrice - newCoup.goods_pri_perc
        return FinallyTotal
      }
    } else if (
      newCoup.hasOwnProperty('goods_coup_name') &&
      newCoup.goods_coup_code.substr(0, 3) == 'PMI' &&
      newCoup.itemType == '潛水配件'
    ) {
      //特定商品超過金額減價
      for (let i = 0; i < items.length; i++) {
        if (items[i].itemCategoryId == 'c005') {
          // console.log(items.find(x => x.itemCategoryId === 'c005').amount)
          inneritems = items.filter(function(item, index, array) {
            return item.itemCategoryId === 'c005'
          })
          // console.log(x)
        }
      }
      console.log(inneritems)

      for (let t = 0; t < inneritems.length; t++) {
        // console.log(inneritems[t].amount)
        InnerTotal += inneritems[t].amount * parseInt(inneritems[t].price)
      }
      console.log(InnerTotal)

      console.log(newCoup)
      if (InnerTotal >= newCoup.goods_over) {
        for (let x = 0; x < items.length; x++) {
          ItemTotalPrice += items[x].amount * items[x].price
        }
        const FinallyToal = ItemTotalPrice - parseInt(newCoup.goods_pri_perc)
        return FinallyToal
      }
    } else if (
      newCoup.hasOwnProperty('goods_coup_name') &&
      newCoup.goods_coup_code.substr(0, 3) == 'PII' &&
      newCoup.itemType == '潛水配件'
    ) {
      //特定商品超過金額打折
      for (let i = 0; i < items.length; i++) {
        if (items[i].itemCategoryId == 'c005') {
          // console.log(items.find(x => x.itemCategoryId === 'c005').amount)
          inneritems = items.filter(function(item, index, array) {
            return item.itemCategoryId === 'c005'
          })
          // console.log(x)
        }
      }
      console.log(inneritems)
      // function countObj(array, key) {
      //   return array.reduce(function(r, a) {
      //     return r + a[key]
      //   }, 0)
      // }
      // let objAmount = countObj(inneritems, 'amount')
      // let objPrice = countObj(inneritems, 'price')
      for (let t = 0; t < inneritems.length; t++) {
        // console.log(inneritems[t].amount)
        InnerTotal += inneritems[t].amount * parseInt(inneritems[t].price)
      }
      console.log(InnerTotal)
      if (InnerTotal >= newCoup.goods_over) {
        for (let x = 0; x < items.length; x++) {
          ItemTotalPrice += items[x].amount * items[x].price
        }
        console.log(ItemTotalPrice)
        console.log(newCoup.goods_pri_perc)
        const finallyTotal = parseInt(
          ItemTotalPrice * (newCoup.goods_pri_perc / 10)
        )

        return finallyTotal
      }
    } else if (
      newCoup.hasOwnProperty('goods_coup_name') &&
      newCoup.goods_coup_code.substr(0, 3) == 'III' &&
      newCoup.itemType == '自由潛水蛙鞋'
    ) {
      //特定商品:自由潛水蛙鞋 超過件數打折
      for (let i = 0; i < items.length; i++) {
        if (items[i].itemCategoryId == 'c001') {
          // console.log(items.find(x => x.itemCategoryId === 'c005').amount)
          inneritems = items.filter(function(item, index, array) {
            return item.itemCategoryId === 'c001'
          })
          // console.log(x)
        }
      }
      console.log(inneritems)
      //計算陣列裡面的物件值
      function countObj(array, key) {
        return array.reduce(function(r, a) {
          return r + a[key]
        }, 0)
      }
      let objAmount = countObj(inneritems, 'amount')

      // console.log(objAmount)
      if (objAmount >= newCoup.goods_over) {
        for (let x = 0; x < items.length; x++) {
          ItemTotalPrice +=
            items[x].amount * items[x].price * (newCoup.goods_pri_perc / 10)
        }
        return ItemTotalPrice
      }
    } else if (
      newCoup.hasOwnProperty('goods_coup_name') &&
      newCoup.goods_coup_code.substr(0, 3) == 'PMI' &&
      newCoup.itemType == '自由潛水蛙鞋'
    ) {
      //特定商品:自由潛水蛙鞋 超過金額減價
      for (let i = 0; i < items.length; i++) {
        if (items[i].itemCategoryId == 'c001') {
          // console.log(items.find(x => x.itemCategoryId === 'c005').amount)
          inneritems = items.filter(function(item, index, array) {
            return item.itemCategoryId === 'c001'
          })
          // console.log(x)
        }
      }
      console.log(inneritems)

      for (let t = 0; t < inneritems.length; t++) {
        // console.log(inneritems[t].amount)
        InnerTotal += inneritems[t].amount * parseInt(inneritems[t].price)
      }
      console.log(InnerTotal)

      console.log(newCoup)
      if (InnerTotal >= newCoup.goods_over) {
        for (let x = 0; x < items.length; x++) {
          ItemTotalPrice += items[x].amount * items[x].price
        }
        const FinallyToal = ItemTotalPrice - parseInt(newCoup.goods_pri_perc)
        return FinallyToal
      }
    } else if (
      newCoup.hasOwnProperty('goods_coup_name') &&
      newCoup.goods_coup_code.substr(0, 3) == 'IMI' &&
      newCoup.itemType == '自由潛水蛙鞋'
    ) {
      //以下是自由潛水蛙鞋超過件數減價
      for (let i = 0; i < items.length; i++) {
        if (items[i].itemCategoryId == 'c001') {
          // console.log(items.find(x => x.itemCategoryId === 'c005').amount)
          inneritems = items.filter(function(item, index, array) {
            return item.itemCategoryId === 'c001'
          })
          // console.log(x)
        }
      }
      // console.log(inneritems)
      //計算陣列裡面的物件值
      function countObj(array, key) {
        return array.reduce(function(r, a) {
          return r + a[key]
        }, 0)
      }
      let objAmount = countObj(inneritems, 'amount')

      // console.log(objAmount)
      if (objAmount >= newCoup.goods_over) {
        for (let x = 0; x < items.length; x++) {
          ItemTotalPrice += items[x].amount * items[x].price
        }
        const FinallyTotal = ItemTotalPrice - newCoup.goods_pri_perc
        return FinallyTotal
      }
    } else if (
      newCoup.hasOwnProperty('goods_coup_name') &&
      newCoup.goods_coup_code.substr(0, 3) == 'PII' &&
      newCoup.itemType == '自由潛水蛙鞋'
    ) {
      //特定商品超過金額打折
      for (let i = 0; i < items.length; i++) {
        if (items[i].itemCategoryId == 'c001') {
          // console.log(items.find(x => x.itemCategoryId === 'c005').amount)
          inneritems = items.filter(function(item, index, array) {
            return item.itemCategoryId === 'c001'
          })
          // console.log(x)
        }
      }
      console.log(inneritems)
      // function countObj(array, key) {
      //   return array.reduce(function(r, a) {
      //     return r + a[key]
      //   }, 0)
      // }
      // let objAmount = countObj(inneritems, 'amount')
      // let objPrice = countObj(inneritems, 'price')
      for (let t = 0; t < inneritems.length; t++) {
        // console.log(inneritems[t].amount)
        InnerTotal += inneritems[t].amount * parseInt(inneritems[t].price)
      }
      console.log(InnerTotal)
      if (InnerTotal >= newCoup.goods_over) {
        for (let x = 0; x < items.length; x++) {
          ItemTotalPrice += items[x].amount * items[x].price
        }
        console.log(ItemTotalPrice)
        console.log(newCoup.goods_pri_perc)
        const finallyTotal = parseInt(
          ItemTotalPrice * (newCoup.goods_pri_perc / 10)
        )

        return finallyTotal
      }
    } else if (
      newCoup.hasOwnProperty('goods_coup_name') &&
      newCoup.goods_coup_code.substr(0, 3) == 'III' &&
      newCoup.itemType == '防寒衣'
    ) {
      //特定商品c004防寒衣超過件數打折
      //特定商品:自由潛水蛙鞋 超過件數打折
      for (let i = 0; i < items.length; i++) {
        if (items[i].itemCategoryId == 'c004') {
          // console.log(items.find(x => x.itemCategoryId === 'c005').amount)
          inneritems = items.filter(function(item, index, array) {
            return item.itemCategoryId === 'c004'
          })
          // console.log(x)
        }
      }
      console.log(inneritems)
      //計算陣列裡面的物件值
      function countObj(array, key) {
        return array.reduce(function(r, a) {
          return r + a[key]
        }, 0)
      }
      let objAmount = countObj(inneritems, 'amount')

      // console.log(objAmount)
      if (objAmount >= newCoup.goods_over) {
        for (let x = 0; x < items.length; x++) {
          ItemTotalPrice +=
            items[x].amount * items[x].price * (newCoup.goods_pri_perc / 10)
        }
        return ItemTotalPrice
      }
    } else if (
      newCoup.hasOwnProperty('goods_coup_name') &&
      newCoup.goods_coup_code.substr(0, 3) == 'PMI' &&
      newCoup.itemType == '防寒衣'
    ) {
      //特定商品防寒衣超過金額減價
      //特定商品超過金額減價
      for (let i = 0; i < items.length; i++) {
        if (items[i].itemCategoryId == 'c004') {
          // console.log(items.find(x => x.itemCategoryId === 'c005').amount)
          inneritems = items.filter(function(item, index, array) {
            return item.itemCategoryId === 'c004'
          })
          // console.log(x)
        }
      }
      console.log(inneritems)

      for (let t = 0; t < inneritems.length; t++) {
        // console.log(inneritems[t].amount)
        InnerTotal += inneritems[t].amount * parseInt(inneritems[t].price)
      }
      console.log(InnerTotal)

      console.log(newCoup)
      if (InnerTotal >= newCoup.goods_over) {
        for (let x = 0; x < items.length; x++) {
          ItemTotalPrice += items[x].amount * items[x].price
        }
        const FinallyToal = ItemTotalPrice - parseInt(newCoup.goods_pri_perc)
        return FinallyToal
      }
    } else if (
      newCoup.hasOwnProperty('goods_coup_name') &&
      newCoup.goods_coup_code.substr(0, 3) == 'IMI' &&
      newCoup.itemType == '防寒衣'
    ) {
      //以下是超過件數減價
      for (let i = 0; i < items.length; i++) {
        if (items[i].itemCategoryId == 'c004') {
          // console.log(items.find(x => x.itemCategoryId === 'c005').amount)
          inneritems = items.filter(function(item, index, array) {
            return item.itemCategoryId === 'c004'
          })
          // console.log(x)
        }
      }
      // console.log(inneritems)
      //計算陣列裡面的物件值
      function countObj(array, key) {
        return array.reduce(function(r, a) {
          return r + a[key]
        }, 0)
      }
      let objAmount = countObj(inneritems, 'amount')

      // console.log(objAmount)
      if (objAmount >= newCoup.goods_over) {
        for (let x = 0; x < items.length; x++) {
          ItemTotalPrice += items[x].amount * items[x].price
        }
        const FinallyTotal = ItemTotalPrice - newCoup.goods_pri_perc
        return FinallyTotal
      }
    } else if (
      newCoup.hasOwnProperty('goods_coup_name') &&
      newCoup.goods_coup_code.substr(0, 3) == 'PII' &&
      newCoup.itemType == '防寒衣'
    ) {
      for (let i = 0; i < items.length; i++) {
        if (items[i].itemCategoryId == 'c004') {
          // console.log(items.find(x => x.itemCategoryId === 'c005').amount)
          inneritems = items.filter(function(item, index, array) {
            return item.itemCategoryId === 'c004'
          })
          // console.log(x)
        }
      }
      console.log(inneritems)
      // function countObj(array, key) {
      //   return array.reduce(function(r, a) {
      //     return r + a[key]
      //   }, 0)
      // }
      // let objAmount = countObj(inneritems, 'amount')
      // let objPrice = countObj(inneritems, 'price')
      for (let t = 0; t < inneritems.length; t++) {
        // console.log(inneritems[t].amount)
        InnerTotal += inneritems[t].amount * parseInt(inneritems[t].price)
      }
      console.log(InnerTotal)
      if (InnerTotal >= newCoup.goods_over) {
        for (let x = 0; x < items.length; x++) {
          ItemTotalPrice += items[x].amount * items[x].price
        }
        console.log(ItemTotalPrice)
        console.log(newCoup.goods_pri_perc)
        const finallyTotal = parseInt(
          ItemTotalPrice * (newCoup.goods_pri_perc / 10)
        )

        return finallyTotal
      }
    } else if (
      newCoup.hasOwnProperty('goods_coup_name') &&
      newCoup.goods_coup_code.substr(0, 3) == 'III' &&
      newCoup.itemType == '自由潛水面鏡'
    ) {
      //特定商品c004防寒衣超過件數打折
      //特定商品:自由潛水蛙鞋 超過件數打折
      for (let i = 0; i < items.length; i++) {
        if (items[i].itemCategoryId == 'c002') {
          // console.log(items.find(x => x.itemCategoryId === 'c005').amount)
          inneritems = items.filter(function(item, index, array) {
            return item.itemCategoryId === 'c002'
          })
          // console.log(x)
        }
      }
      console.log(inneritems)
      //計算陣列裡面的物件值
      function countObj(array, key) {
        return array.reduce(function(r, a) {
          return r + a[key]
        }, 0)
      }
      let objAmount = countObj(inneritems, 'amount')

      // console.log(objAmount)
      if (objAmount >= newCoup.goods_over) {
        for (let x = 0; x < items.length; x++) {
          ItemTotalPrice +=
            items[x].amount * items[x].price * (newCoup.goods_pri_perc / 10)
        }
        return ItemTotalPrice
      }
    } else if (
      newCoup.hasOwnProperty('goods_coup_name') &&
      newCoup.goods_coup_code.substr(0, 3) == 'PMI' &&
      newCoup.itemType == '自由潛水面鏡'
    ) {
      //特定商品防寒衣超過金額減價
      //特定商品超過金額減價
      for (let i = 0; i < items.length; i++) {
        if (items[i].itemCategoryId == 'c002') {
          // console.log(items.find(x => x.itemCategoryId === 'c005').amount)
          inneritems = items.filter(function(item, index, array) {
            return item.itemCategoryId === 'c002'
          })
          // console.log(x)
        }
      }
      console.log(inneritems)

      for (let t = 0; t < inneritems.length; t++) {
        // console.log(inneritems[t].amount)
        InnerTotal += inneritems[t].amount * parseInt(inneritems[t].price)
      }
      console.log(InnerTotal)

      console.log(newCoup)
      if (InnerTotal >= newCoup.goods_over) {
        for (let x = 0; x < items.length; x++) {
          ItemTotalPrice += items[x].amount * items[x].price
        }
        const FinallyToal = ItemTotalPrice - parseInt(newCoup.goods_pri_perc)
        return FinallyToal
      }
    } else if (
      newCoup.hasOwnProperty('goods_coup_name') &&
      newCoup.goods_coup_code.substr(0, 3) == 'IMI' &&
      newCoup.itemType == '自由潛水面鏡'
    ) {
      //以下是超過件數減價
      for (let i = 0; i < items.length; i++) {
        if (items[i].itemCategoryId == 'c002') {
          // console.log(items.find(x => x.itemCategoryId === 'c005').amount)
          inneritems = items.filter(function(item, index, array) {
            return item.itemCategoryId === 'c002'
          })
          // console.log(x)
        }
      }
      // console.log(inneritems)
      //計算陣列裡面的物件值
      function countObj(array, key) {
        return array.reduce(function(r, a) {
          return r + a[key]
        }, 0)
      }
      let objAmount = countObj(inneritems, 'amount')

      // console.log(objAmount)
      if (objAmount >= newCoup.goods_over) {
        for (let x = 0; x < items.length; x++) {
          ItemTotalPrice += items[x].amount * items[x].price
        }
        const FinallyTotal = ItemTotalPrice - newCoup.goods_pri_perc
        return FinallyTotal
      }
    } else if (
      newCoup.hasOwnProperty('goods_coup_name') &&
      newCoup.goods_coup_code.substr(0, 3) == 'PII' &&
      newCoup.itemType == '自由潛水面鏡'
    ) {
      for (let i = 0; i < items.length; i++) {
        if (items[i].itemCategoryId == 'c002') {
          // console.log(items.find(x => x.itemCategoryId === 'c005').amount)
          inneritems = items.filter(function(item, index, array) {
            return item.itemCategoryId === 'c002'
          })
          // console.log(x)
        }
      }
      console.log(inneritems)
      // function countObj(array, key) {
      //   return array.reduce(function(r, a) {
      //     return r + a[key]
      //   }, 0)
      // }
      // let objAmount = countObj(inneritems, 'amount')
      // let objPrice = countObj(inneritems, 'price')
      for (let t = 0; t < inneritems.length; t++) {
        // console.log(inneritems[t].amount)
        InnerTotal += inneritems[t].amount * parseInt(inneritems[t].price)
      }
      console.log(InnerTotal)
      if (InnerTotal >= newCoup.goods_over) {
        for (let x = 0; x < items.length; x++) {
          ItemTotalPrice += items[x].amount * items[x].price
        }
        console.log(ItemTotalPrice)
        console.log(newCoup.goods_pri_perc)
        const finallyTotal = parseInt(
          ItemTotalPrice * (newCoup.goods_pri_perc / 10)
        )

        return finallyTotal
      }
    } else if (
      newCoup.hasOwnProperty('goods_coup_name') &&
      newCoup.goods_coup_code.substr(0, 3) == 'III' &&
      newCoup.itemType == '呼吸管'
    ) {
      //特定商品c004防寒衣超過件數打折
      //特定商品:自由潛水蛙鞋 超過件數打折
      for (let i = 0; i < items.length; i++) {
        if (items[i].itemCategoryId == 'c003') {
          // console.log(items.find(x => x.itemCategoryId === 'c005').amount)
          inneritems = items.filter(function(item, index, array) {
            return item.itemCategoryId === 'c003'
          })
          // console.log(x)
        }
      }
      console.log(inneritems)
      //計算陣列裡面的物件值
      function countObj(array, key) {
        return array.reduce(function(r, a) {
          return r + a[key]
        }, 0)
      }
      let objAmount = countObj(inneritems, 'amount')

      // console.log(objAmount)
      if (objAmount >= newCoup.goods_over) {
        for (let x = 0; x < items.length; x++) {
          ItemTotalPrice +=
            items[x].amount * items[x].price * (newCoup.goods_pri_perc / 10)
        }
        return ItemTotalPrice
      }
    } else if (
      newCoup.hasOwnProperty('goods_coup_name') &&
      newCoup.goods_coup_code.substr(0, 3) == 'PMI' &&
      newCoup.itemType == '呼吸管'
    ) {
      //特定商品防寒衣超過金額減價
      //特定商品超過金額減價
      for (let i = 0; i < items.length; i++) {
        if (items[i].itemCategoryId == 'c003') {
          // console.log(items.find(x => x.itemCategoryId === 'c005').amount)
          inneritems = items.filter(function(item, index, array) {
            return item.itemCategoryId === 'c003'
          })
          // console.log(x)
        }
      }
      console.log(inneritems)

      for (let t = 0; t < inneritems.length; t++) {
        // console.log(inneritems[t].amount)
        InnerTotal += inneritems[t].amount * parseInt(inneritems[t].price)
      }
      console.log(InnerTotal)

      console.log(newCoup)
      if (InnerTotal >= newCoup.goods_over) {
        for (let x = 0; x < items.length; x++) {
          ItemTotalPrice += items[x].amount * items[x].price
        }
        const FinallyToal = ItemTotalPrice - parseInt(newCoup.goods_pri_perc)
        return FinallyToal
      }
    } else if (
      newCoup.hasOwnProperty('goods_coup_name') &&
      newCoup.goods_coup_code.substr(0, 3) == 'IMI' &&
      newCoup.itemType == '呼吸管'
    ) {
      //以下是超過件數減價
      for (let i = 0; i < items.length; i++) {
        if (items[i].itemCategoryId == 'c003') {
          // console.log(items.find(x => x.itemCategoryId === 'c005').amount)
          inneritems = items.filter(function(item, index, array) {
            return item.itemCategoryId === 'c003'
          })
          // console.log(x)
        }
      }
      // console.log(inneritems)
      //計算陣列裡面的物件值
      function countObj(array, key) {
        return array.reduce(function(r, a) {
          return r + a[key]
        }, 0)
      }
      let objAmount = countObj(inneritems, 'amount')

      // console.log(objAmount)
      if (objAmount >= newCoup.goods_over) {
        for (let x = 0; x < items.length; x++) {
          ItemTotalPrice += items[x].amount * items[x].price
        }
        const FinallyTotal = ItemTotalPrice - newCoup.goods_pri_perc
        return FinallyTotal
      }
    } else if (
      newCoup.hasOwnProperty('goods_coup_name') &&
      newCoup.goods_coup_code.substr(0, 3) == 'PII' &&
      newCoup.itemType == '呼吸管'
    ) {
      for (let i = 0; i < items.length; i++) {
        if (items[i].itemCategoryId == 'c003') {
          // console.log(items.find(x => x.itemCategoryId === 'c005').amount)
          inneritems = items.filter(function(item, index, array) {
            return item.itemCategoryId === 'c003'
          })
          // console.log(x)
        }
      }
      console.log(inneritems)
      // function countObj(array, key) {
      //   return array.reduce(function(r, a) {
      //     return r + a[key]
      //   }, 0)
      // }
      // let objAmount = countObj(inneritems, 'amount')
      // let objPrice = countObj(inneritems, 'price')
      for (let t = 0; t < inneritems.length; t++) {
        // console.log(inneritems[t].amount)
        InnerTotal += inneritems[t].amount * parseInt(inneritems[t].price)
      }
      console.log(InnerTotal)
      if (InnerTotal >= newCoup.goods_over) {
        for (let x = 0; x < items.length; x++) {
          ItemTotalPrice += items[x].amount * items[x].price
        }
        console.log(ItemTotalPrice)
        console.log(newCoup.goods_pri_perc)
        const finallyTotal = parseInt(
          ItemTotalPrice * (newCoup.goods_pri_perc / 10)
        )

        return finallyTotal
      }
    } else if (
      newCoup.hasOwnProperty('goods_coup_name') &&
      newCoup.goods_coup_code.substr(0, 3) == 'III' &&
      newCoup.itemType == '其他周邊'
    ) {
      //特定商品c004防寒衣超過件數打折
      //特定商品:自由潛水蛙鞋 超過件數打折
      for (let i = 0; i < items.length; i++) {
        if (items[i].itemCategoryId == 'c006') {
          // console.log(items.find(x => x.itemCategoryId === 'c005').amount)
          inneritems = items.filter(function(item, index, array) {
            return item.itemCategoryId === 'c006'
          })
          // console.log(x)
        }
      }
      console.log(inneritems)
      //計算陣列裡面的物件值
      function countObj(array, key) {
        return array.reduce(function(r, a) {
          return r + a[key]
        }, 0)
      }
      let objAmount = countObj(inneritems, 'amount')

      // console.log(objAmount)
      if (objAmount >= newCoup.goods_over) {
        for (let x = 0; x < items.length; x++) {
          ItemTotalPrice +=
            items[x].amount * items[x].price * (newCoup.goods_pri_perc / 10)
        }
        return ItemTotalPrice
      }
    } else if (
      newCoup.hasOwnProperty('goods_coup_name') &&
      newCoup.goods_coup_code.substr(0, 3) == 'PMI' &&
      newCoup.itemType == '其他周邊'
    ) {
      //特定商品防寒衣超過金額減價
      //特定商品超過金額減價
      for (let i = 0; i < items.length; i++) {
        if (items[i].itemCategoryId == 'c006') {
          // console.log(items.find(x => x.itemCategoryId === 'c005').amount)
          inneritems = items.filter(function(item, index, array) {
            return item.itemCategoryId === 'c006'
          })
          // console.log(x)
        }
      }
      console.log(inneritems)

      for (let t = 0; t < inneritems.length; t++) {
        // console.log(inneritems[t].amount)
        InnerTotal += inneritems[t].amount * parseInt(inneritems[t].price)
      }
      console.log(InnerTotal)

      console.log(newCoup)
      if (InnerTotal >= newCoup.goods_over) {
        for (let x = 0; x < items.length; x++) {
          ItemTotalPrice += items[x].amount * items[x].price
        }
        const FinallyToal = ItemTotalPrice - parseInt(newCoup.goods_pri_perc)
        return FinallyToal
      }
    } else if (
      newCoup.hasOwnProperty('goods_coup_name') &&
      newCoup.goods_coup_code.substr(0, 3) == 'IMI' &&
      newCoup.itemType == '其他周邊'
    ) {
      //以下是超過件數減價
      for (let i = 0; i < items.length; i++) {
        if (items[i].itemCategoryId == 'c006') {
          // console.log(items.find(x => x.itemCategoryId === 'c005').amount)
          inneritems = items.filter(function(item, index, array) {
            return item.itemCategoryId === 'c006'
          })
          // console.log(x)
        }
      }
      // console.log(inneritems)
      //計算陣列裡面的物件值
      function countObj(array, key) {
        return array.reduce(function(r, a) {
          return r + a[key]
        }, 0)
      }
      let objAmount = countObj(inneritems, 'amount')

      // console.log(objAmount)
      if (objAmount >= newCoup.goods_over) {
        for (let x = 0; x < items.length; x++) {
          ItemTotalPrice += items[x].amount * items[x].price
        }
        const FinallyTotal = ItemTotalPrice - newCoup.goods_pri_perc
        return FinallyTotal
      }
    } else if (
      newCoup.hasOwnProperty('goods_coup_name') &&
      newCoup.goods_coup_code.substr(0, 3) == 'PII' &&
      newCoup.itemType == '其他周邊'
    ) {
      for (let i = 0; i < items.length; i++) {
        if (items[i].itemCategoryId == 'c006') {
          // console.log(items.find(x => x.itemCategoryId === 'c005').amount)
          inneritems = items.filter(function(item, index, array) {
            return item.itemCategoryId === 'c006'
          })
          // console.log(x)
        }
      }
      console.log(inneritems)
      // function countObj(array, key) {
      //   return array.reduce(function(r, a) {
      //     return r + a[key]
      //   }, 0)
      // }
      // let objAmount = countObj(inneritems, 'amount')
      // let objPrice = countObj(inneritems, 'price')
      for (let t = 0; t < inneritems.length; t++) {
        // console.log(inneritems[t].amount)
        InnerTotal += inneritems[t].amount * parseInt(inneritems[t].price)
      }
      console.log(InnerTotal)
      if (InnerTotal >= newCoup.goods_over) {
        for (let x = 0; x < items.length; x++) {
          ItemTotalPrice += items[x].amount * items[x].price
        }
        console.log(ItemTotalPrice)
        console.log(newCoup.goods_pri_perc)
        const finallyTotal = parseInt(
          ItemTotalPrice * (newCoup.goods_pri_perc / 10)
        )

        return finallyTotal
      }
    }
  }
  // c004 防寒衣
  //生成givi的函式
  const handleGivi = (items, newCoup) => {
    console.log(newCoup)
    console.log(items)
    // const transferGivi = {}

    if (newCoup.hasOwnProperty('givi_coup_name')) {
      function countObj(array, key) {
        return array.reduce(function(r, a) {
          return r + a[key]
        }, 0)
      }
      let objGiviAmount = countObj(items, 'amount')
      let objPrice = countObj(items, 'price')

      if (objGiviAmount * objPrice >= newCoup.givi_over) {
        const transferGivi = {
          givi_name: newCoup.givi_coup_name,
          givi_img: newCoup.givi_coup_img,
        }
        return transferGivi
      }
    }
  }
  const coupTableData = props.userCouponData ? (
    Object.keys(props['userCouponData']).map(key => {
      if (key === 'CouponResultData') {
        const coupon_info = props['userCouponData'][key]
        return coupon_info.map((value, index) => {
          const {
            order_coup_name,
            goods_coup_name,
            givi_coup_name,
            order_coup_img,
            goods_coup_img,
            givi_coup_img,
            goods_coup_code,
            order_coup_code,
            givi_coup_code,
            order_coup_start,
            givi_coup_start,
            goods_coup_start,
            givi_coup_end,
            goods_coup_end,
            order_coup_end,
            goods_over,
            order_over,
            givi_over,
            order_pri_perc,
            goods_pri_perc,
            itemType,
          } = value
          return (
            <tr
              className="tr-chin"
              onClick={event => {
                typeInputActive(event)
                setCouponChoose({
                  ...couponChoose,
                  order_coup_name,
                  goods_coup_name,
                  givi_coup_name,
                  goods_coup_code,
                  order_coup_code,
                  givi_coup_code,
                  goods_over,
                  order_over,
                  givi_over,
                  order_pri_perc,
                  goods_pri_perc,
                  itemType,
                  givi_coup_img,
                })
              }}
            >
              <td></td>
              <td className="check_box_ex">
                <p>
                  {order_coup_name ? (
                    order_coup_name
                  ) : (
                    <h2 hidden>"其他種類優惠券名稱"</h2>
                  )}
                  {goods_coup_name ? (
                    goods_coup_name
                  ) : (
                    <h2 hidden>"其他種類優惠券名稱"</h2>
                  )}
                  {givi_coup_name ? (
                    givi_coup_name
                  ) : (
                    <h2 hidden>"其他種類優惠券名稱"</h2>
                  )}
                </p>
              </td>
              <td className="check_box_ex">
                {<img
                  width="50"
                  height="50"
                  src={'http://localhost:5000/images/coup/' + order_coup_img}
                  alt=""
                /> ? (
                  <img
                    width="50"
                    height="50"
                    src={'http://localhost:5000/images/coup/' + order_coup_img}
                    alt=""
                  />
                ) : (
                  <img hidden />
                )}
                {<img
                  width="50"
                  height="50"
                  src={'http://localhost:5000/images/coup/' + goods_coup_img}
                  alt=""
                /> ? (
                  <img
                    width="50"
                    height="50"
                    src={'http://localhost:5000/images/coup/' + goods_coup_img}
                    alt=""
                  />
                ) : (
                  <img hidden />
                )}
                {<img
                  height="50"
                  width="50"
                  src={'http://localhost:5000/images/coup/' + givi_coup_img}
                  alt=""
                /> ? (
                  <img
                    width="50"
                    height="50"
                    src={'http://localhost:5000/images/coup/' + givi_coup_img}
                    alt=""
                  />
                ) : (
                  <img hidden />
                )}
              </td>
              <td className="check_box_ex">
                <p>
                  {goods_coup_code ? (
                    goods_coup_code
                  ) : (
                    <h2 hidden>"其他種類coup_code"</h2>
                  )}
                  {order_coup_code ? (
                    order_coup_code
                  ) : (
                    <h2 hidden>"其他種類coup_code"</h2>
                  )}
                  {givi_coup_code ? (
                    givi_coup_code
                  ) : (
                    <h2 hidden>"其他種類coup_code"</h2>
                  )}
                </p>
              </td>
              <td className="check_box_ex">
                <p>
                  {givi_coup_start ? (
                    givi_coup_start
                  ) : (
                    <h2 hidden>"其他種類coup_start"</h2>
                  )}
                  {order_coup_start ? (
                    order_coup_start
                  ) : (
                    <h2 hidden>"其他種類coup_start"</h2>
                  )}
                  {goods_coup_start ? (
                    goods_coup_start
                  ) : (
                    <h2 hidden>"其他種類coup_start"</h2>
                  )}
                </p>
              </td>
              <td className="check_box_ex">
                {givi_coup_end ? (
                  givi_coup_end
                ) : (
                  <h2 hidden>"其他種類coup_end"</h2>
                )}
                {order_coup_end ? (
                  order_coup_end
                ) : (
                  <h2 hidden>"其他種類coup_end"</h2>
                )}
                {goods_coup_end ? (
                  goods_coup_end
                ) : (
                  <h2 hidden>"其他種類coup_end"</h2>
                )}
              </td>
            </tr>
          )
        })
      }
    })
  ) : (
    <Loading />
  )

  // handleDelete = product => {
  //   const cart = this.props.data.cart
  //   const index = cart.indexOf(product)
  //   cart.splice(index, 1)
  //   this.setState({ cart })
  //   document.body.style.overflow = 'auto'
  // }

  return (
    <>
      <Header handleDelete={handleDelete} />
      <Banner BannerImgSrc="/images/ShoppingBanner.jpg" />
      <div className="container CW">
        <div className="row CW-shoppingCart">
          <div className="col-12 cart-header">{/* <Breadcrumb /> */}</div>
          <div className="col-md-8 mb-3 table-wrapper">
            <div className="card">
              <div className="card-header d-flex ">
                <div className="col-1">
                  <input type="checkbox" name="" id="" />
                </div>
                <div className="col d-flex align-items-center">
                  <i className="material-icons">storefront</i>
                  <span>{}</span>
                </div>
                <div className="col">
                  <h6>數量</h6>
                </div>
                <div className="col">
                  <h6>金額</h6>
                </div>
              </div>
              <div className="card-body">
                {<CartItem mycart={mycart} handleDelete={handleDelete} />}
              </div>
            </div>
          </div>
          <div className="col-md-4 check-wrapper">
            <div className="card">
              <div className="card-header d-flex justify-content-lg-around bg-light">
                <h6 className="mt-2">訂單摘要</h6>
                <button onClick={event => show(event)} className="btn chin_btn">
                  使用優惠
                </button>
              </div>
              <div className="check-main card-body">
                <div className="d-flex justify-content-between">
                  <span>商品總計</span>
                  <span>NT$ {sum(mycart)}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>折扣金額</span>
                  <span>
                    {newCoup.hasOwnProperty('goods_coup_name')
                      ? handleItemSum(mycart, newCoup) - sum(mycart)
                      : ''}
                    {newCoup.hasOwnProperty('order_coup_name')
                      ? handleOrderSum(mycart, newCoup) - sum(mycart)
                      : ''}
                    {newCoup.hasOwnProperty('givi_coup_name') ? 0 : ''}
                  </span>
                </div>
                <br />
                <div className="d-flex justify-content-between">
                  <span>輸入折扣碼</span>
                  {couptInput.hasOwnProperty('goods_coup_name') ? (
                    <input
                      readOnly
                      value={couptInput.goods_coup_code}
                      type="text"
                      name=""
                      className="w-50"
                      id=""
                      // onChange={e =>
                      //   setNewCoup([...newCoup, couptInput.goods_coup_code])
                      // }
                    />
                  ) : (
                    <h2 hidden>沒有這種優惠券</h2>
                  )}
                  {couptInput.hasOwnProperty('order_coup_name') ? (
                    <input
                      readOnly
                      value={couptInput.order_coup_code}
                      type="text"
                      name=""
                      className="w-50"
                      id=""
                      // onChange={e =>
                      //   setNewCoup([...newCoup, couptInput.order_coup_code])
                      // }
                    />
                  ) : (
                    <h2 hidden>沒有這種優惠券</h2>
                  )}
                  {couptInput.hasOwnProperty('givi_coup_name') ? (
                    <input
                      readOnly
                      value={couptInput.givi_coup_code}
                      type="text"
                      name=""
                      className="w-50"
                      id=""
                      // onChange={e =>
                      //   setNewCoup([...newCoup, couptInput.givi_coup_code])
                      // }
                    />
                  ) : (
                    <h2 hidden>沒有這種優惠券</h2>
                  )}
                </div>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-between">
                  <h5>結帳總金額</h5>
                  <h5>NT$ {sum(mycart)}</h5>
                </div>
                <div className="d-flex justify-content-between">
                  <h5>折扣後金額</h5>

                  <h5>
                    NT$
                    {newCoup.hasOwnProperty('goods_coup_name')
                      ? handleItemSum(mycart, newCoup)
                      : ''}
                    {newCoup.hasOwnProperty('order_coup_name')
                      ? handleOrderSum(mycart, newCoup)
                      : ''}
                  </h5>
                </div>
                <div className="d-flex justify-content-between">
                  <h5>贈品名</h5>
                  <p>
                    {/* {newCoup.hasOwnProperty('givi_coup_name')
                      ? handleGivi(mycart, newCoup)
                      : ''} */}
                    {newCoup.hasOwnProperty('givi_coup_name')
                      ? handleGivi(mycart, newCoup).givi_name
                      : ''}
                  </p>
                </div>
                <div className="d-flex justify-content-between">
                  <h5>贈品圖片</h5>
                  <div className="mr-4">
                    <img
                      width="30"
                      height="30"
                      src={
                        newCoup.hasOwnProperty('givi_coup_name')
                          ? 'http://localhost:5000/images/coup/' +
                            handleGivi(mycart, newCoup).givi_img
                          : noImg
                      }
                    />
                  </div>
                </div>
                <br />
                <button
                  className="check-btn btn btn-lg w-100"
                  onClick={() => {
                    checkOut()
                  }}
                >
                  前往結帳
                </button>
              </div>
            </div>
          </div>
        </div>
        <Rodal
          width="800"
          height="600"
          visible={rodalState.visible}
          onClose={event => hide(event)}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <table className="table table-chin">
                  <thead>
                    <tr>
                      <th scope="col">請選擇</th>
                      <th scope="col">優惠券名</th>
                      <th scope="col">優惠圖片</th>
                      <th scope="col">優惠碼</th>
                      <th scope="col">起始時間</th>
                      <th scope="col">結束時間</th>
                    </tr>
                  </thead>
                  <tbody>{coupTableData}</tbody>
                </table>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <h2>您的選擇:</h2>
                {(() => {
                  if (
                    couponChoose.order_coup_name == null &&
                    couponChoose.givi_coup_name == null &&
                    couponChoose.order_coup_code == null &&
                    couponChoose.givi_coup_code == null
                  ) {
                    return (
                      <div className="d-flex justify-content-around couponContent">
                        <h5>優惠名:</h5>
                        <h5>{couponChoose.goods_coup_name}</h5>
                        <h5>優惠碼:</h5>
                        <h5>{couponChoose.goods_coup_code}</h5>
                        <div>
                          <button
                            onClick={event => {
                              couponCheck()
                            }}
                            className="btn btn-primary chin_btn"
                          >
                            設定
                          </button>
                        </div>
                      </div>
                    )
                  } else if (
                    couponChoose.goods_coup_name == null &&
                    couponChoose.givi_coup_name == null &&
                    couponChoose.goods_coup_code == null &&
                    couponChoose.givi_coup_code == null
                  ) {
                    return (
                      <div className="d-flex justify-content-between couponContent">
                        <h5>優惠名:</h5>
                        <h5>{couponChoose.order_coup_name}</h5>
                        <h5>優惠碼:</h5>
                        <h5>{couponChoose.order_coup_code}</h5>
                        <div>
                          <button
                            onClick={event => {
                              couponCheck()
                            }}
                            className="btn btn-primary chin_btn"
                          >
                            設定
                          </button>
                        </div>
                      </div>
                    )
                  } else {
                    return (
                      <div className="d-flex justify-content-around couponContent">
                        <h5>優惠名:</h5>
                        <h5>{couponChoose.givi_coup_name}</h5>
                        <h5>優惠碼:</h5>
                        <h5>{couponChoose.givi_coup_code}</h5>
                        <div>
                          <button
                            onClick={event => {
                              couponCheck()
                              // cartcalculate()
                            }}
                            className="btn btn-primary chin_btn"
                          >
                            設定
                          </button>
                        </div>
                      </div>
                    )
                  }
                })()}
              </div>
            </div>
          </div>
        </Rodal>
      </div>
    </>
  )
}
const mapStateToProps = store => {
  return {
    userCouponData: store.memberReducer.userCouponData,
    // getNowCoupData : store.sellerReducer.getNowCoupData
  }
}

// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
  // return bindActionCreators({getUserCouponDetaiAsync,getNowCoupDataAsync}, dispatch)
  return bindActionCreators(
    { memberCheckOutAsync, getUserCouponDetaiAsync },
    dispatch
  )
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)
)

// export default connect()(ShoppingCart)
