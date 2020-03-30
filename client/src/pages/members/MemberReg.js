import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'
import Swal from 'sweetalert2'
import Header from '../../components/Header'
import '../../style/HS.scss'

function MemberReg(props) {
    //Register function
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')
    // const [mobile, setMobile] = useState('')

    const [error, setError] = useState(false)

    const handleSubmit = () => {
        let error = false
        if (password1 !== password2) {
            error = true
            // alert('兩次密碼寫的不同')
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '兩次密碼不同!',
            })
        }

        async function sendRegisterDataToServer(userData, callback) {
            const fd = new FormData()
            fd.append('fullName', userData.name)
            fd.append('email', userData.email)
            fd.append('loginId', userData.username)
            fd.append('loginPwd', userData.password)
            // fd.append('mobileNumber', userData.number)



            const request = new Request('http://localhost:5000/members/register', {
                method: 'POST',
                body: fd,
                // headers: new Headers({
                //     Accept: 'application/json',
                //     'Content-Type': 'application/json',
                // }),
            })
            console.log(JSON.stringify(userData))
            const response = await fetch(request)
            const data = await response.json()
            console.log(data)
            callback()
        }
        return <>
            <div className="entirepage-hs">
                <Header />
                {/* <!-- register card --> */}
                <div className="container hsregister">

                    <div className="registercard-hs row d-flex align-items-center">
                        <div className="card col-md-6 mx-auto">
                            {/* <!-- Default form register --> */}
                            <form className="rgform text-center p-4" action="">

                                <p className="h4 mb-4">註冊</p>

                                {/* <!-- Full Name --> */}
                                <input type="text" name="name" id="" className="form-control mb-4" placeholder="Name" onChange={e => setName(e.target.value)} />

                                {/* <!-- E-mail --> */}
                                <input type="email" id="" className="form-control mb-4" placeholder="E-mail" onChange={e => setEmail(e.target.value)} />

                                {/* Login Id */}
                                <input type="text" name="username" id="" className="form-control mb-4" placeholder="Login ID" onChange={e => setUsername(e.target.value)} />

                                {/* <!-- Password --> */}
                                <input type="password" name="password1" id="" className="form-control" placeholder="Password"
                                    aria-describedby="defaultRegisterFormPasswordHelpBlock" onChange={e => setPassword1(e.target.value)} />
                                <small id="defaultRegisterFormPasswordHelpBlock" className="form-text text-muted mb-4">At least 8 characters and 1 digit </small>

                                {/* <!-- Re-enter password --> */}
                                <input type="password" name="password2" id="" className="form-control" placeholder="Re-Enter Password"
                                    aria-describedby="defaultRegisterFormPasswordHelpBlock" onChange={e => setPassword2(e.target.value)} />
                                <small id="" className="form-text text-muted mb-4">At least 8 characters and 1 digit</small>

                                {/* <!-- Phone number --> */}
                                {/* <input type="text" id="" className="form-control" placeholder="Phone number"
                            aria-describedby="defaultRegisterFormPhoneHelpBlock" onChange={e => setMobile(e.target.value)} /> */}

                                {/* <!-- Sign up button --> */}
                                <button className="btn btn-info my-4 btn-block" type="button" onClick={() => handleSubmit()}>立即註冊!</button>

                                {/* <!-- Social register --> */}
                                <p>其他登入方式:</p>

                                <a href="#" className="otherlogin mx-2" role="button"><i className="otherlogin fab fa-facebook-f light-blue-text"></i></a>
                                <a href="#" className="mx-2 otherlogin" role="button"><i className="otherlogin fab fa-twitter light-blue-text"></i></a>
                                <a href="#" className="mx-2 otherlogin" role="button"><i className="otherlogin fab fa-linkedin-in light-blue-text"></i></a>
                                <a href="#" className="mx-2 otherlogin" role="button"><i className="otherlogin fab fa-github light-blue-text"></i></a>
                                <a href="#" className="mx-2 otherlogin" role="button"><i className="otherlogin fab fa-google light-blue-text"></i></a>


                                <hr />

                                {/* <!-- Terms of service --> */}
                                <p>點擊
                            <em>立即註冊！</em> 即表示您同意我們的服務條款
                            <a className="agreementlink" href="" target="_blank">服務條款</a>
                                </p>
                            </form>
                            {/* <!-- Default form register --> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    }
}

export default MemberReg