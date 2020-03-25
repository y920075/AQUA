import React from 'react'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Sidebar from '../../components/member/Sidebar'
import Footer from '../../components/Footer'
import '../../style/HS.scss'


function MemberClass() {
    return <>
        <Header />
        <Banner BannerImgSrc="./images/member/coralreef.jpg" />
        {/* <!-- Orger Content --> */}
        <div className="container hsclass">
            <div className="row">
                <div className="col-lg-3">
                    <Sidebar />
                </div>
                <div className="col-lg-9">
                    
                </div>
            </div>
        </div>
        <Footer />
    </>
}

export default MemberClass