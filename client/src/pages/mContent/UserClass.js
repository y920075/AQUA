import React from 'react'

function UserClass() {
    return (
        <div>
            <div className="order-select">
                <select className="classselection-hs" id="">
                    <option selected>選擇排序...</option>
                    <option value="1">依日期排序</option>
                </select>
            </div>
            <br />
            <div className="order-history">
                <div className="card mt-3">
                    <div className="card-header" style={{ background: "#c4cad1" }}>
                        活動編號：E000111
                        </div>
                    <div className="row">
                        <div className="col-sm-8">
                            <div className="card-body">
                                <h5 className="card-title">XXX 潛水班</h5>
                                <p className="card-text">上課人數：4 </p>
                                <p className="card-text">課程類型：休閒濳水 </p>
                                <p className="card-text">上課日期: 2020/04/01 </p>
                                <p className="card-text">課程地址：台北市106大安區和平東路二段106號11樓 (科技大樓)</p>
                                <a href="#" className="btn btn-primary">詳細</a>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <img className="classimg-hs" src="./images/member/dive.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="card mt-3">
                    <div className="card-header" style={{ background: "#c4cad1" }}>
                        活動編號：E000111
                        </div>
                    <div className="row">
                        <div className="col-sm-8">
                            <div className="card-body">
                                <h5 className="card-title">XXX 潛水班</h5>
                                <p className="card-text">上課人數：4 </p>
                                <p className="card-text">課程類型：休閒濳水 </p>
                                <p className="card-text">上課日期: 2020/04/01 </p>
                                <p className="card-text">課程地址：台北市106大安區和平東路二段106號11樓 (科技大樓)</p>
                                <a href="#" className="btn btn-primary">詳細</a>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <img className="classimg-hs" src="./images/member/dive.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="card mt-3">
                    <div className="card-header" style={{ background: "#c4cad1" }}>
                        活動編號：E000111
                        </div>
                    <div className="row">
                        <div className="col-sm-8">
                            <div className="card-body">
                                <h5 className="card-title">XXX 潛水班</h5>
                                <p className="card-text">上課人數：4 </p>
                                <p className="card-text">課程類型：休閒濳水 </p>
                                <p className="card-text">上課日期: 2020/04/01 </p>
                                <p className="card-text">課程地址：台北市106大安區和平東路二段106號11樓 (科技大樓)</p>
                                <a href="#" className="btn btn-primary">詳細</a>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <img className="classimg-hs" src="./images/member/dive.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="card mt-3">
                    <div className="card-header" style={{ background: "#c4cad1" }}>
                        活動編號：E000111
                        </div>
                    <div className="row">
                        <div className="col-sm-8">
                            <div className="card-body">
                                <h5 className="card-title">XXX 潛水班</h5>
                                <p className="card-text">上課人數：4 </p>
                                <p className="card-text">課程類型：休閒濳水 </p>
                                <p className="card-text">上課日期: 2020/04/01 </p>
                                <p className="card-text">課程地址：台北市106大安區和平東路二段106號11樓 (科技大樓)</p>
                                <a href="#" className="btn btn-primary">詳細</a>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <img className="classimg-hs" src="./images/member/dive.jpg" alt="" />
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
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
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
    )
}

export default UserClass
