import React from 'react'

function ManageCoachContent(props) {
  return (
    <>
      <div className="row">
        {props.SellerCoachData
          ? props.SellerCoachData.result.map((value, index) => {
              return (
                <div className="col-3 coachCard-JY">
                  <div className="card">
                    <div className="coachImgBox">
                      <img
                        class="card-img-top"
                        src={
                          'http://127.0.0.1:5000/images/coachImg/' +
                          value.classCoachImg
                        }
                        alt=""
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">
                        {value.classCoachName + '教練'}
                      </h5>
                      <p className="card-text">
                        <ul>
                          <li>{value.classCoachLicense1}</li>
                          <li>{value.classCoachLicense2}</li>
                          <li>{value.classCoachLicense3}</li>
                        </ul>
                      </p>
                      <buuton className="btn btn-primary" data-id={value.id}>
                        <i className="fas fa-edit"></i>
                      </buuton>
                    </div>
                  </div>
                </div>
              )
            })
          : ''}
      </div>
    </>
  )
}

export default ManageCoachContent
