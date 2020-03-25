import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import '../../style/HS.scss'

function MemberSellerLogin() {
    //set background img
    useEffect(() => {
        require('../../style/bg.css')
    }, []);
    return <>
        <Header />

        {/* insert background image here */}
        <div className="backgroundImg"></div>

        {/* <!-- sign-in content --> */}
        <div className="container hslogin">
            <div className=" signincard-hs row d-flex align-items-center">
                <div className="card col-md-6 mx-auto">
                    {/* <!-- Default form login --> */}
                    <form className="text-center p-5" action="#!">
                        <p className="h4 mb-4">賣家登入</p>
                        {/* <!-- Email --> */}
                        <input type="email" id="defaultLoginFormEmail" className="form-control mb-4" placeholder="E-mail" />

                        {/* <!-- Password --> */}
                        <input type="password" id="defaultLoginFormPassword" className="form-control mb-4" placeholder="Password" />
                        <div className="d-flex justify-content-around">
                            <div>
                                {/* <!-- Remember me --> */}
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="defaultLoginFormRemember" />
                                    <label className="custom-control-label" for="defaultLoginFormRemember">記住我</label>
                                </div>
                            </div>

                            {/* <!-- Forgot password --> */}
                            <div>
                                <a href="">忘記密碼?</a>
                            </div>
                        </div>

                        {/* <!-- Sign in button --> */}
                        <button className="loginbutton btn btn-info btn-block my-4" type="submit">登入</button>

                        {/* <!-- Register --> */}
                        <p>還不是會員？
                            <Link to="/memberregister">註冊</Link>
                        </p>

                        {/* <!-- Social login --> */}
                        <p>其他登入方式：</p>

                        <a href="#" className="mx-2" role="button"><i className="fab fa-facebook-f light-blue-text"></i></a>
                        <a href="#" className="mx-2" role="button"><i className="fab fa-twitter light-blue-text"></i></a>
                        <a href="#" className="mx-2" role="button"><i className="fab fa-linkedin-in light-blue-text"></i></a>
                        <a href="#" className="mx-2" role="button"><i className="fab fa-github light-blue-text"></i></a>
                        <a href="#" className="mx-2" role="button"><i className="fab fa-google light-blue-text"></i></a>

                        {/* Seller Login */}
                        <p className="sellerlogin">會員登入？
                            <Link to="/memberlogin">登入</Link>
                        </p>
                        
                    </form>
                    {/* <!-- Default form login --> */}
                </div>
            </div>
        </div>


    </>
}

export default MemberSellerLogin