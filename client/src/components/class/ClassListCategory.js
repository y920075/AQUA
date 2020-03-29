import React from 'react'

/*
  傳入參數 props.classTypeData = 課程類型列表
  傳入方法 props.getClassData() = 向伺服器取得新資料
  2020-03-21
*/
function ClassListCategory(props) {
  //類別選單的點擊active事件
  function typeMenuActive(event) {
    document
      .querySelector('div.classCategoryList div')
      .classList.remove('rwdMenuShow')
    //找到所有代表等級的li元素
    let subMenuLiList = document.querySelectorAll('ul[class="subMenu"] li')
    subMenuLiList.forEach(value => {
      value.classList.remove('active') //移除active
    })
    //找到所有代表類型的a元素
    let levelTitleList = document.querySelectorAll(
      'ul[class="typeMenu"] li span'
    )
    levelTitleList.forEach(value => {
      value.classList.remove('active') //移除active
    })
    event.target.classList.add('active') //為被點擊的目標新增active
  }

  return (
    <>
      <div className="col-xl-3 col-sm-12 classCategoryList">
        <div>
          <h2>課程類型</h2>
          <ul className="typeMenu">
            <li>
              <span
                data-type=""
                className="levelTitle"
                onClick={event => {
                  typeMenuActive(event)
                  props.getClassData()
                }}
              >
                查看全部
              </span>
            </li>
            <li>
              <span
                data-type="AIDA 國際自由潛水證照班"
                className="levelTitle"
                onClick={event => {
                  typeMenuActive(event)
                  props.getClassData()
                }}
              >
                AIDA 國際自由潛水證照班
              </span>
              <ul className="subMenu">
                {props.classTypeData.map((value, index) => {
                  if (value.classTypeId === 'classTypeAIDA') {
                    return (
                      <li
                        key={index}
                        data-type={value.classTypeName}
                        data-level={value.classLevel}
                        onClick={event => {
                          typeMenuActive(event)
                          props.getClassData()
                        }}
                      >
                        {value.classLevel}
                      </li>
                    )
                  }
                })}
              </ul>
            </li>
            <li>
              <span
                data-type="SSI 國際潛水執照班"
                className="levelTitle"
                onClick={event => {
                  typeMenuActive(event)
                  props.getClassData()
                }}
              >
                SSI 國際潛水執照班
              </span>
              <ul className="subMenu">
                {props.classTypeData.map((value, index) => {
                  if (value.classTypeId === 'classTypeSSI') {
                    return (
                      <li
                        key={index}
                        data-type={value.classTypeName}
                        data-level={value.classLevel}
                        onClick={event => {
                          typeMenuActive(event)
                          props.getClassData()
                        }}
                      >
                        {value.classLevel}
                      </li>
                    )
                  }
                })}
              </ul>
            </li>
            <li>
              <span
                data-type="PADI 潛水員證照班"
                className="levelTitle"
                onClick={event => {
                  typeMenuActive(event)
                  props.getClassData()
                }}
              >
                PADI 潛水員證照班
              </span>
              <ul className="subMenu">
                {props.classTypeData.map((value, index) => {
                  if (value.classTypeId === 'calssTypePADI') {
                    return (
                      <li
                        key={index}
                        data-type={value.classTypeName}
                        data-level={value.classLevel}
                        onClick={event => {
                          typeMenuActive(event)
                          props.getClassData()
                        }}
                      >
                        {value.classLevel}
                      </li>
                    )
                  }
                })}
              </ul>
            </li>
            <li>
              <span
                data-type="普通班"
                className="levelTitle"
                onClick={event => {
                  typeMenuActive(event)
                  props.getClassData()
                }}
              >
                普通班
              </span>
              <ul className="subMenu">
                {props.classTypeData.map((value, index) => {
                  if (value.classTypeId === 'classType01') {
                    return (
                      <li
                        key={index}
                        data-type={value.classTypeName}
                        data-level={value.classLevel}
                        onClick={event => {
                          typeMenuActive(event)
                          props.getClassData()
                        }}
                      >
                        {value.classLevel}
                      </li>
                    )
                  }
                })}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default ClassListCategory
