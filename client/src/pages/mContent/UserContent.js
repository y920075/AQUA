import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getuserDetailDataAsync } from '../../actions/member/memberActions'


function UserContent(props) {
    console.log(props.user.result)
    const userInfo = props.user.result;

    useEffect(() => {
        props.getuserDetailDataAsync()
    }, [])
    console.log(props)
    // live update image
    const [avatarFile, setAvatarFile] = useState('');
    const [avatarDataFiles, setAvatarDataFiles] = useState('');
    const handleChange = (event) => {
        console.log(event.target.files)
        setAvatarFile(URL.createObjectURL(event.target.files[0]))
        console.log(event.target.files[0])
        setAvatarDataFiles(event.target.files[0])
    }

    const handleUpdate = (event) =>{
        
    }

    // {
    //     props.my_member.result ? (props.my_member.result.map((value, index) => {
    //         if (value.id == props.match.params.memberId)
    //             return ()
    //     })) : ''
    // }

    

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
                        <input defaultValue={userInfo ? (userInfo[0].memberId) :('')} type="text" className="form-control" id="" placeholder=""
                            disabled />
                    </div>
                    <div className="input-hs md-form form-group mt-5 col-lg-12">
                        <label for="formGroupExampleInputMD">姓名：</label>
                        <input defaultValue={userInfo ? (userInfo[0].fullName) :('')} type="text" className="form-control" id="formGroupExampleInputMD" placeholder="" />
                    </div>
                    <div className="input-hs md-form form-group mt-5 col-lg-12">
                        <label for="formGroupExampleInputMD">電話：</label>
                        <input defaultValue={userInfo ? (userInfo[0].mobileNumber) :('')} type="text" className="form-control" id="formGroupExampleInputMD" placeholder="" />
                    </div>
                    <div className="input-hs md-form form-group mt-5 col-lg-12">
                        <label for="formGroupExampleInputMD">電子郵件：</label>
                        <input defaultValue={userInfo ? (userInfo[0].email) :('')} type="email" className="form-control" id="formGroupExampleInputMD" placeholder="" />
                    </div>
                    <div className="input-hs md-form form-group mt-5 col-lg-12">
                        <label for="formGroupExampleInputMD">地址：</label>
                        <input defaultValue={userInfo ? (userInfo[0].address) :('')} type="text" className="form-control" id="formGroupExampleInputMD" placeholder="" />
                    </div>
                    <div className="input-hs md-form form-group mt-5 col-lg-12">
                        <label for="formGroupExampleInputMD">加入日期：</label>
                        <input defaultValue={userInfo ? (userInfo[0].JoinDate) :('')} type="text" className="form-control" id="formGroupExampleInputMD"
                            placeholder="2020/04/01" disabled />
                    </div>
                    <button type="button" className="btn btn-primary col-lg-12">更新</button>
                </form>
            </div>
        </div>
    )
}

// 取得Redux中store的值
const mapStateToProps = store => {
    return {
        user: store.memberReducer.user,
    }
}

// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
    return bindActionCreators({ getuserDetailDataAsync }, dispatch)
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(UserContent)
)
