import React from 'react'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'

/*
  傳入參數 props.classData = 課程資料列表
  2020-03-21
*/
function ClassDataList(props) {
  return (
    <>
      {!props.classData ? (
        <h2>查無相關資料</h2>
      ) : (
        props.classData.map((value, index) => {
          return (
            <Fade bottom>
              <div
                className={index === 0 ? 'row classBox mt-0' : 'row classBox'}
                key={index}
              >
                <div className="col-xl-7 col-12 classImgBox">
                  <img
                    src={
                      'http://127.0.0.1:5000/images/classImg/' + value.classImg
                    }
                    alt=""
                  />
                </div>
                <div className="col-xl-5 col-12 classInfoContent">
                  <h2>{value.className}</h2>
                  <ul className="d-flex">
                    <li>
                      <img src="./images/classImg/icons/type.svg" alt="" />
                      {value.classType}
                    </li>
                    <li>
                      <img src="./images/classImg/icons/level.svg" alt="" />
                      {value.classLevel}
                    </li>
                  </ul>
                  <ul className="d-flex">
                    <li>
                      <img src="./images/classImg/icons/date.svg" alt="" />
                      {value.classStartDate}
                    </li>
                    <li>
                      <img src="./images/classImg/icons/local.svg" alt="" />
                      {value.classLocation}
                    </li>
                  </ul>
                  <p className="introduction">{value.classIntroduction}</p>
                  <h2 className="price">{'$' + value.classPrice}</h2>
                  <Link
                    className="btn-more btn btn-raised btn-warning"
                    to={`/Class/${value.classId}`}
                  >
                    了解詳情
                  </Link>
                </div>
              </div>
            </Fade>
          )
        })
      )}
    </>
  )
}

export default ClassDataList
