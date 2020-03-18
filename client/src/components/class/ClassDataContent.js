import React from 'react'

function ClassDataContent(props) {
  // console.log(props)
  return (
    <>
      {props.classDetailData.status === 404 ? (
        <h1>查無此筆課程資料</h1>
      ) : (
        <>
          <h1>{props.classDetailData.classData.className}</h1>
          <div className="row d-flex classDataBox">
            <div className="col-xl-5 classImgBox">
              <img
                src={`http://127.0.0.1:5000/images/classImg/${props.classDetailData.classData.classImg}`}
                alt=""
              />
            </div>
            <div className="col-xl-4 classInfoBox">
              <ul className="d-flex">
                <li>
                  <img src="/images/classImg/icons/detail/type.svg" alt="" />
                  {props.classDetailData.classData.classType}
                </li>
                <li>
                  <img src="/images/classImg/icons/detail/level.svg" alt="" />
                  {props.classDetailData.classData.classLevel}
                </li>
              </ul>
              <ul>
                <li>
                  <img src="/images/classImg/icons/detail/date.svg" alt="" />
                  {'開訓日期：' +
                    props.classDetailData.classData.classStartDate}
                </li>
                <li>
                  <img src="/images/classImg/icons/detail/date.svg" alt="" />
                  {'結訓日期：' + props.classDetailData.classData.classEndDate}
                </li>
              </ul>
              <p>
                <img src="/images/classImg/icons/detail/local.svg" alt="" />
                {'開課地點：' +
                  props.classDetailData.classData.classFullLocation}
              </p>
              <ul className="d-flex">
                <li>
                  {'人數上限：' +
                    props.classDetailData.classData.classMAXpeople}
                </li>
                <li>
                  {'目前人數：' +
                    props.classDetailData.classData.classNOWpeople}
                </li>
              </ul>
              <h1 className="classPrice">
                {'$' + props.classDetailData.classData.classPrice}
              </h1>
              <button className="btn-join btn btn-raised btn-warning">
                馬上報名
              </button>
            </div>
          </div>
          <div className="row shopNameBox">
            <div className="col-xl-5">
              <p className="shopName">
                <img src="/images/classImg/icons/shop.svg" alt="" />
                {'本課程由 ' +
                  props.classDetailData.classData.seller_shop +
                  ' 工作室提供'}
              </p>
            </div>
          </div>
          <h2 className="coachTitle">師資陣容</h2>
          <div className="row d-flex coachList">
            {props.classDetailData.classCoachData
              ? props.classDetailData.classCoachData.map(value => {
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
            <pre>{props.classDetailData.classData.classDesc}</pre>
          </div>
        </>
      )}
    </>
  )
}

export default ClassDataContent
