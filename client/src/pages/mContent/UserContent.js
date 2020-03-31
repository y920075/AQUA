import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getuserDetailDataAsync, updateuserDetailDataAsync } from '../../actions/member/memberActions'
import Cookie from 'js-cookie'
import Swal from 'sweetalert2'


function UserContent(props) {
    // console.log(props.user.result)
    const userInfo = props.user.result;
    // console.log(userInfo)

    useEffect(() => {
        props.getuserDetailDataAsync()
    }, [])
    // console.log(props)

    // live update image
    const [avatarFile, setAvatarFile] = useState('');
    const [avatarDataFiles, setAvatarDataFiles] = useState('');
    const handleChange = (event) => {
        console.log(event.target.files)
        setAvatarFile(URL.createObjectURL(event.target.files[0]))
        console.log(event.target.files[0])
        setAvatarDataFiles(event.target.files[0])
    }

    // update user info 
    const [response, setResponse] = useState(false)
    const [memberId, setMemberId] = useState(props.match.params.memberId)
    const [fullName, setFullName] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')

    const handleUpdate = async () => {
        const memData = {
            fullName,
            mobileNumber,
            email,
            address
        }
        const member_fd = new FormData()
        member_fd.append('fullName', memData.fullName)
        member_fd.append('mobileNumber', memData.mobileNumber)
        member_fd.append('email', memData.email)
        member_fd.append('address', memData.address)

        const request = new Request(
            `http://127.0.0.1:5000/members/`,
            {
                method: 'POST',
                body: member_fd,
                credentials: 'include',
                headers: new Headers({
                    'access-token': Cookie.get('token'),
                }),
            })
        const response = await fetch(request)
        const data = await response.json()
        console.log(data)
        Swal.fire(
            '好棒棒!',
            '更新成功!',
            'success',
        )
    }

    return (
        <div>
            <div className="card infocard-hs">
                {/* <!-- Material form group --> */}
                <div className="pagehead d-flex justify-content-center">
                    <h3 className="pagetitle-hs">個人資料</h3>
                </div>
                <hr className="hrline-hs" />

                {/* <!-- Avatar Image --> */}
                <div className=" avatar-hs d-flex justify-content-center mt-5">
                    <input className="inputavatar" type="file" onChange={(event) => handleChange(event)} />
                    <img className="blah" src={avatarFile} width="100" height="100" />
                    {/* <img className="rounded-circle avatar mb-5" src="./images/member/nemo.jpg" alt="" /> */}
                </div>
                {/* start of member form */}
                <form>
                    {/* <!-- Material input --> */}
                    <div className="input-hs md-form form-group mt-5 col-lg-12">
                        <label for="formGroupExampleInputMD">會員編號：</label>
                        <input defaultValue={userInfo ? (userInfo[0].memberId) : ('')} type="text" className="form-control" disabled />
                    </div>
                    <div className="input-hs md-form form-group mt-5 col-lg-12">
                        <label for="formGroupExampleInputMD">姓名：</label>
                        <input onChange={e => { setFullName(e.target.value) }} defaultValue={userInfo ? (userInfo[0].fullName) : ('')} type="text" className="form-control" name="fullName" />
                    </div>
                    <div className="input-hs md-form form-group mt-5 col-lg-12">
                        <label for="formGroupExampleInputMD">電話：</label>
                        <input onChange={e => { setMobileNumber(e.target.value) }} defaultValue={userInfo ? (userInfo[0].mobileNumber) : ('')} type="text" className="form-control" name="mobileNumber" />
                    </div>
                    <div className="input-hs md-form form-group mt-5 col-lg-12">
                        <label for="formGroupExampleInputMD">電子郵件：</label>
                        <input onChange={e => { setEmail(e.target.value) }} defaultValue={userInfo ? (userInfo[0].email) : ('')} type="email" className="form-control" name="email" />
                    </div>
                    <div className="input-hs md-form form-group mt-5 col-lg-12">
                        <label for="formGroupExampleInputMD">地址：</label>
                        <input onChange={e => { setAddress(e.target.value) }} defaultValue={userInfo ? (userInfo[0].address) : ('')} type="text" className="form-control" name="address" />
                    </div>
                    <div className="input-hs md-form form-group mt-5 col-lg-12">
                        <label for="formGroupExampleInputMD">加入日期：</label>
                        <input defaultValue={userInfo ? (userInfo[0].JoinDate) : ('')} type="text" className="form-control" disabled />
                    </div>
                    <button
                        onClick={e => {
                            handleUpdate()
                        }}
                        type="button" className="btn btn-primary col-lg-12">
                        更新
                    </button>
                </form>
            </div>
        </div>
    )
}

// 取得Redux中store的值
const mapStateToProps = store => {
    return {
        user: store.memberReducer.user,
        changeData: store.memberReducer.changeData,
    }
}

// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
    return bindActionCreators({ getuserDetailDataAsync, updateuserDetailDataAsync }, dispatch)
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(UserContent)
)
