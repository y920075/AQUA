import React from 'react'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Sidebar from '../../components/member/Sidebar'
import Footer from '../../components/Footer'
import '../../style/HS.scss'

function MemberOrder() {
  return (
    <>
      <Header />
      <Banner BannerImgSrc="./images/member/coralreef.jpg" />
      {/* <!-- Order Content --> */}
      <div className="container hsorder">
        <div className="row">
          <div className="col-lg-3">
            <Sidebar />
          </div>
          <div className="col-lg-9">
            <div className="order-select">
              <select className="orderselection-hs" id="">
                <option selected>選擇排序...</option>
                <option value="1">依日期排序</option>
              </select>
            </div>
            <br />

            <div className="order-history">
              <div className="card mt-3">
                <div className="card-header" style={{ background: '#c4cad1' }}>
                  訂單編號：O000111
                </div>
                <div className="row">
                  <div className="col-sm-8">
                    <div className="card-body">
                      <h5 className="card-title">XXX 潛水衣</h5>
                      <p className="card-text">數量：1 </p>
                      <p className="card-text">
                        送貨地址：台北市106大安區和平東路二段106號11樓
                        (科技大樓)
                      </p>
                      <p className="card-text">訂購日期: 2020/04/01 </p>
                      <a href="#" className="btn btn-primary">
                        詳細
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <img
                      className="orderimg-hs"
                      src="./images/member/suit.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="card mt-3">
                <div className="card-header" style={{ background: '#c4cad1' }}>
                  訂單編號：O000111
                </div>
                <div className="row">
                  <div className="col-sm-8">
                    <div className="card-body">
                      <h5 className="card-title">XXX 潛水衣</h5>
                      <p className="card-text">數量：1 </p>
                      <p className="card-text">
                        送貨地址：台北市106大安區和平東路二段106號11樓
                        (科技大樓)
                      </p>
                      <p className="card-text">訂購日期: 2020/04/01 </p>
                      <a href="#" className="btn btn-primary">
                        詳細
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <img
                      className="orderimg-hs"
                      src="./images/member/suit.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="card mt-3">
                <div className="card-header" style={{ background: '#c4cad1' }}>
                  訂單編號：O000111
                </div>
                <div className="row">
                  <div className="col-sm-8">
                    <div className="card-body">
                      <h5 className="card-title">XXX 潛水衣</h5>
                      <p className="card-text">數量：1 </p>
                      <p className="card-text">
                        送貨地址：台北市106大安區和平東路二段106號11樓
                        (科技大樓)
                      </p>
                      <p className="card-text">訂購日期: 2020/04/01 </p>
                      <a href="#" className="btn btn-primary">
                        詳細
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <img
                      className="orderimg-hs"
                      src="./images/member/suit.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="card mt-3">
                <div className="card-header" style={{ background: '#c4cad1' }}>
                  訂單編號：O000111
                </div>
                <div className="row">
                  <div className="col-sm-8">
                    <div className="card-body">
                      <h5 className="card-title">XXX 潛水衣</h5>
                      <p className="card-text">數量：1 </p>
                      <p className="card-text">
                        送貨地址：台北市106大安區和平東路二段106號11樓
                        (科技大樓)
                      </p>
                      <p className="card-text">訂購日期: 2020/04/01 </p>
                      <a href="#" className="btn btn-primary">
                        詳細
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <img
                      className="orderimg-hs"
                      src="./images/member/suit.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- pagination --> */}
            <div className="pagination mt-5 mb-5 d-flex justify-content-center">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            {/* <!-- end of pagination --> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default MemberOrder
