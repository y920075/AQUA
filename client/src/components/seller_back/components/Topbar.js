import React from 'react'

import './Topbar.scss'


function Topbar() {
    return (
        <div className="col-xl-10 col-lg-9 col-md-8 ml-auto bg-aqua-2 fixed-top py-2 top-navbar">
        <div className="row align-items-center">
          <div className="col-md-4">
            <h4 className="text-light text-uppercase mb-0">賣家中心</h4>
          </div>
          <div className="col-md-5">
            <form>
              <div className="input-group">
                <input type="text" className="form-control search-input" placeholder="Search..."/>
                <button type="button" className="btn btn-white search-button"><i className="fas fa-search text-danger"></i></button>
              </div>
            </form>
          </div>
          <div className="col-md-3">
            <ul className="navbar-nav">
              <li className="nav-item icon-parent"><span className="nav-link icon-bullet"><i className="fas fa-comments text-muted fa-lg"></i></span></li>
              <li className="nav-item icon-parent"><span className="nav-link icon-bullet"><i className="fas fa-bell text-muted fa-lg"></i></span></li>
              <li className="nav-item ml-md-auto"><span className="nav-link" data-toggle="modal" data-target="#sign-out"><i className="fas fa-sign-out-alt text-danger fa-lg"></i></span></li>
            </ul>
          </div>
        </div>
      </div>
    )
}

export default Topbar
