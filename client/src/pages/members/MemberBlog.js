import React from 'react'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Sidebar from '../../components/member/Sidebar'
import Footer from '../../components/Footer'
import '../../style/HS.scss'

function MemberHomepage(){
    return<>
        <Header />
        <Banner BannerImgSrc="./images/member/coralreef.jpg" />
        <div className="container hshomepage">
            <div className="row">
                <div className="col-lg-3">
                    <Sidebar/>
                </div>
            </div>
        </div>
        <Footer/>
    </>
}

export default MemberHomepage