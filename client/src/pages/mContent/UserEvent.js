import React from 'react'

function UserEvent() {
    return (
        <div>
            <div className="event-select">
                <select className="eventselection-hs" id="">
                    <option selected>選擇排序...</option>
                    <option value="1">我的揪團</option>
                    <option value="2">參加的揪團</option>
                </select>
                <div className="eventhistory">
                    <div className="card mt-3">
                        <div className="card-header" style={{ background: "#c4cad1" }}>
                            活動編號：E000111
                            </div>
                        <div className="row">
                            <div className="col-sm-8">
                                <div className="card-body">
                                    <h5 className="card-title">XXX 揪團</h5>
                                    <p className="card-text">揪團人數：4 </p>
                                    <p className="card-text">揪團日期: 2020/04/01 </p>
                                    <p className="card-text">揪團地址：台北市106大安區和平東路二段106號11樓 (科技大樓)</p>
                                    <a href="#" className="btn btn-primary">詳細</a>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <img className="eventimg-hs" src="./images/member/dive.jpg" alt="" />
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
                                    <h5 className="card-title">XXX 揪團</h5>
                                    <p className="card-text">揪團人數：4 </p>
                                    <p className="card-text">揪團日期: 2020/04/01 </p>
                                    <p className="card-text">揪團地址：台北市106大安區和平東路二段106號11樓 (科技大樓)</p>
                                    <a href="#" className="btn btn-primary">詳細</a>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <img className="eventimg-hs" src="./images/member/dive.jpg" alt="" />
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
                                    <h5 className="card-title">XXX 揪團</h5>
                                    <p className="card-text">揪團人數：4 </p>
                                    <p className="card-text">揪團日期: 2020/04/01 </p>
                                    <p className="card-text">揪團地址：台北市106大安區和平東路二段106號11樓 (科技大樓)</p>
                                    <a href="#" className="btn btn-primary">詳細</a>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <img className="eventimg-hs" src="./images/member/dive.jpg" alt="" />
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
                                    <h5 className="card-title">XXX 揪團</h5>
                                    <p className="card-text">揪團人數：4 </p>
                                    <p className="card-text">揪團日期: 2020/04/01 </p>
                                    <p className="card-text">揪團地址：台北市106大安區和平東路二段106號11樓 (科技大樓)</p>
                                    <a href="#" className="btn btn-primary">詳細</a>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <img className="eventimg-hs" src="./images/member/dive.jpg" alt="" />
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
                    {/* <!-- end of pagination  --> */}
                </div>
            </div>
        </div>
    )
}

export default UserEvent
