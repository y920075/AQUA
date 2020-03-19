import React from 'react'

function ClassDetailDataContent(props) {
  return (
    <>
      {props.classData.length <= 0 ? (
        <h1>查無此筆課程資料</h1>
      ) : (
        <>
          <h1>{props.classData.className}</h1>
          <div className="row d-flex classDataBox">
            <div className="col-xl-5 classImgBox">
              <img
                src={`http://127.0.0.1:5000/images/classImg/${props.classData.classImg}`}
                alt=""
              />
            </div>
            <div className="col-xl-4 classInfoBox">
              <ul className="d-flex">
                <li>
                  <img src="/images/classImg/icons/detail/type.svg" alt="" />
                  {props.classData.classType}
                </li>
                <li>
                  <img src="/images/classImg/icons/detail/level.svg" alt="" />
                  {props.classData.classLevel}
                </li>
              </ul>
              <ul>
                <li>
                  <img src="/images/classImg/icons/detail/date.svg" alt="" />
                  {'開訓日期：' + props.classData.classStartDate}
                </li>
                <li>
                  <img src="/images/classImg/icons/detail/date.svg" alt="" />
                  {'結訓日期：' + props.classData.classEndDate}
                </li>
              </ul>
              <p>
                <img src="/images/classImg/icons/detail/local.svg" alt="" />
                {'開課地點：' + props.classData.classFullLocation}
              </p>
              <ul className="d-flex">
                <li>{'人數上限：' + props.classData.classMAXpeople}</li>
                <li>{'目前人數：' + props.classData.classNOWpeople}</li>
              </ul>
              <h1 className="classPrice">{'$' + props.classData.classPrice}</h1>
              <button className="btn-join btn btn-raised btn-warning">
                馬上報名
              </button>
            </div>
          </div>
          <div className="row shopNameBox">
            <div className="col-xl-5">
              <p className="shopName">
                <img src="/images/classImg/icons/shop.svg" alt="" />
                {'本課程由 ' + props.classData.seller_shop + ' 工作室提供'}
              </p>
            </div>
          </div>
          <h2 className="coachTitle">師資陣容</h2>
          <div className="row d-flex coachList">
            {props.classCoachData
              ? props.classCoachData.map(value => {
                  return (
                    <div className=" coachInfo">
                      <div className="avatarBox">
                        <img
                          src={
                            'http://127.0.0.1:5000/images/coachImg/' +
                            value.classCoachImg
                          }
                          alt=""
                        />
                      </div>
                      <div className="coachName">
                        <p>{value.classCoachName}</p>
                        <p>教練</p>
                      </div>
                      <div className="coachEducation">
                        <p>
                          <img
                            src="/images/classImg/icons/detail/coachEducation.svg"
                            alt=""
                          />
                          {value.classCoachLicense1}
                        </p>
                        <p>
                          <img
                            src="/images/classImg/icons/detail/coachEducation.svg"
                            alt=""
                          />
                          {value.classCoachLicense2}
                        </p>
                        <p>
                          <img
                            src="/images/classImg/icons/detail/coachEducation.svg"
                            alt=""
                          />
                          {value.classCoachLicense3}
                        </p>
                      </div>
                    </div>
                  )
                })
              : ''}
          </div>
          <h2 className="coachTitle">課程說明</h2>
          <div className="classDesc">
            <pre>{props.classData.classDesc}</pre>
          </div>
        </>
      )}
    </>
  )
}

export default ClassDetailDataContent
