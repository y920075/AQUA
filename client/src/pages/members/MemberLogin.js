import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userLoginAsync } from '../../actions/member/memberActions'
import { withRouter, Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import Header from '../../components/Header'
// import Background from '../members/Background'
import '../../style/HS.scss'



function MemberLogin(props) {
    // //set background img
    // useEffect(() => {
    //     require('../../style/bg.css')
    // }, []);

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const [errorMessages, setErrorMessages] = useState([])

    const handleSubmit = () => {
        let error = false
        let errorMessages = []

        if (!username) {
            error = true
            errorMessages.push('帳號沒填')
        }

        if (!password) {
            error = true
            errorMessages.push('密碼沒填')
        }

        if (error) {
            setError(error)
            setErrorMessages(errorMessages)
            return
        }

        const userData = { username, password }
        props.userLoginAsync(userData, () => alert('成功登入'))
    }


    return <>
        <div className="entirepage-hs">
            <Header />
            {/* <Background /> */}

            {/* <!-- sign-in content --> */}
            <div className="container hslogin">
                <div className=" signincard-hs row d-flex align-items-center">
                    <div className="card col-md-6 mx-auto">
                        {/* <!-- Default form login --> */}
                        <form className="text-center p-4" action="#!">
                            <p className="h4 mb-4">會員登入</p>
                            {/* <!-- Username --> */}
                            <input onChange={e => setUsername(e.target.value)} type="text" id="" className="form-control mb-4" placeholder="Username" />

                            {/* <!-- Password --> */}
                            <input onChange={e => setPassword(e.target.value)} type="password" id="" className="form-control mb-4" placeholder="Password" />

                            {/* <!-- Remember me --> */}
                            <div className="d-flex justify-content-around">
                                <div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="defaultLoginFormRemember" />
                                        <label className="custom-control-label">記住我</label>
                                    </div>
                                </div>

                                {/* <!-- Forgot password --> */}
                                <div>
                                    <a href="">忘記密碼?</a>
                                </div>
                            </div>

                            {/* <!-- Sign in button --> */}
                            {/* <Link to="memberhomepage"> */}
                            <button onClick={() => handleSubmit()} className="loginbutton btn btn-info btn-block my-4" type="button">登入</button>
                            {/* </Link> */}


                            {/* <!-- Register --> */}
                            <p>還不是會員？
                            <Link to="/memberregister">註冊</Link>
                            </p>

                            {/* <!-- Social login --> */}
                            <p>其他登入方式：</p>

                            <a href="#" className="mx-2 otherlogin" role="button"><i className="otherlogin fab fa-facebook-f light-blue-text"></i></a>
                            <a href="#" className="mx-2 otherlogin" role="button"><i className="otherlogin fab fa-twitter light-blue-text"></i></a>
                            <a href="#" className="mx-2 otherlogin" role="button"><i className="otherlogin fab fa-linkedin-in light-blue-text"></i></a>
                            <a href="#" className="mx-2 otherlogin" role="button"><i className="otherlogin fab fa-github light-blue-text"></i></a>
                            <a href="#" className="mx-2 otherlogin" role="button"><i className="otherlogin fab fa-google light-blue-text"></i></a>

                            {/* Seller Login */}
                            <p className="sellerlogin">賣家登入？
                            <Link to="/membersellerlogin">登入</Link>
                            </p>

                        </form>
                        {/* <!-- Default form login --> */}
                    </div>
                </div>
            </div>
        </div>
    </>
}

// 取得Redux中isAuth的值
const mapStateToProps = store => {
    return { isAuth: store.memberReducer.user.isAuth }
}

// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
    return bindActionCreators({ userLoginAsync }, dispatch)
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(MemberLogin)
)