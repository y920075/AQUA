import React from 'react'

function Store() {
  return (
    <>
      <hr />
      <div className="row d-flex justify-content-between mb-3">
        <div className="col-5">
          <img src="http://127.0.0.1:5000/images/homeImg/D0001.jpg" alt="" />
        </div>
        <div className="col-5 d-flex flex-column justify-content-center mr-3">
          <h3>戴靖選品</h3>
          <img src="http://127.0.0.1:5000/images/homeImg/D0002.png" alt="" />
        </div>
      </div>
      <p>
        戴靖選品為台灣唯一專營自由潛水之店家，我們嚴選來自歐洲、日本等第一線自由潛水商品，讓您自在探索海的美麗內涵
      </p>
    </>
  )
}

export default Store
