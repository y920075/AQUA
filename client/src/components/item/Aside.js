import React, { useState } from 'react'

function Aside(props) {
  // console.log('asideprops', props.cateData[0].typeData)
  function asideClick(event) {
    // console.log(event.target.classList.value)
    //找到所有代表li元素
    let type_li = document.querySelectorAll('li.type-li')
    let brand_li = document.querySelectorAll('li.brand-li')
    let price_li = document.querySelectorAll('li.price-li')

    console.log('觸發act')
    switch (event.target.classList.value) {
      case 'type-li':
        type_li.forEach(value => {
          value.classList.remove('active') //移除active
        })

        break
      case 'brand-li':
        brand_li.forEach(value => {
          value.classList.remove('active') //移除active
        })

        break
      case 'price-li':
        price_li.forEach(value => {
          value.classList.remove('active') //移除active
        })

        break

      default:
        break
    }

    event.target.classList.add('active') //為被點擊的目標新增active
    event.stopPropagation()
  }
  function toggleClick(event) {
    // console.log(event.target.childNodes[1].classList.value == 'type-ul')
    console.log('觸發tog')
    const type_ul = event.target.childNodes[1]

    if (type_ul.classList.value == 'type-ul') {
      type_ul.classList.add('h-100')
    } else {
      type_ul.classList.remove('h-100')
    }

    // let type_ul = document.querySelectorAll('ul.type-ul')
    // type_ul.forEach(value => {
    //   value.classList.add('h-100')
    // })
    // event.target.childNodes[1].classList.add('h-100')
  }

  return (
    <div className="aside-wrapper">
      <div className="aside-wrapper-title">
        <h2>商品分類</h2>
      </div>
      <ul className="cate-ul">
        <li
          className="type-li active"
          data-type="t000"
          onClick={event => {
            asideClick(event)
            props.getDataFromServer()
          }}
        >
          全部商品
        </li>
        {props.cateData.map((value, index) => {
          return (
            <li
              className="cate-li"
              key={index}
              data-cate={value.itemCategoryId}
              onClick={event => {
                toggleClick(event)
                // asideClick(event)
                // const brand = event.target.dataset.brand
                // props.getDataFromServer(brand)
              }}
            >
              {value.itemCategory}
              <ul className="type-ul">
                {props.cateData[index].typeData
                  ? props.cateData[index].typeData.map((val, idx) => {
                      return (
                        <li
                          className="type-li"
                          key={idx}
                          data-type={val.itemTypeId}
                          onClick={event => {
                            asideClick(event)
                            props.getDataFromServer()
                          }}
                        >
                          {val.itemType}
                        </li>
                      )
                    })
                  : ''}
              </ul>
            </li>
          )
        })}
      </ul>
      <div className="aside-wrapper-title">
        <h2>品牌分類</h2>
      </div>
      <ul className="brand-ul">
        <li
          className="brand-li active"
          data-brand="all"
          onClick={event => {
            asideClick(event)
            props.getDataFromServer()
          }}
        >
          所有品牌
        </li>
        {props.asideData.map((value, index) => {
          return (
            <li
              className="brand-li"
              key={index}
              data-brand={value.itemBrandId}
              onClick={event => {
                asideClick(event)
                props.getDataFromServer()
                // const brand = event.target.dataset.brand
                // props.getDataFromServer(brand)
              }}
            >
              {value.itemBrandId}
            </li>
          )
        })}
      </ul>
      <div className="aside-wrapper-title">
        <h2>金額</h2>
      </div>
      <ul className="price-ul">
        <li
          className="price-li"
          data-price="0,499"
          onClick={event => {
            asideClick(event)
            props.getDataFromServer()
          }}
        >
          NT$500以下
        </li>
        <li
          className="price-li"
          data-price="500,1999"
          onClick={event => {
            asideClick(event)
            props.getDataFromServer()
          }}
        >
          NT$500 - 2000
        </li>
        <li
          className="price-li"
          data-price="2000,4999"
          onClick={event => {
            asideClick(event)
            props.getDataFromServer()
          }}
        >
          NT$2000 - 5000
        </li>
        <li
          className="price-li"
          data-price="5000,8999"
          onClick={event => {
            asideClick(event)
            props.getDataFromServer()
          }}
        >
          NT$5000 - 9000
        </li>
        <li
          className="price-li"
          data-price="9000,12999"
          onClick={event => {
            asideClick(event)
            props.getDataFromServer()
          }}
        >
          NT$9000 - 13000
        </li>
        <li
          className="price-li"
          data-price="13000,50000"
          onClick={event => {
            asideClick(event)
            props.getDataFromServer()
          }}
        >
          NT$13000以上
        </li>
      </ul>
    </div>
  )
}

export default Aside
