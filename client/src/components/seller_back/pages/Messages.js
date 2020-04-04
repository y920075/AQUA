import React from 'react'

function Message() {
  return (
    <div>
      <div className="container">
        <h3 className="text-center">Messaging</h3>
        <div className="row messaging">
          <div className="col-sm-3">
            <div className="inbox_people">
              <div className="headind_srch">
                <div className="recent_heading">
                  <h4>Recent</h4>
                </div>
                <div className="srch_bar">
                  <div className="stylish-input-group">
                    <input
                      type="text"
                      className="search-bar"
                      placeholder="Search"
                    />
                    <span className="input-group-addon">
                      <button type="button">
                        {' '}
                        <i className="fa fa-search" aria-hidden="true"></i>{' '}
                      </button>
                    </span>{' '}
                  </div>
                </div>
              </div>
              <div className="inbox_chat mt-4">
                <div className="chat_list active_chat">
                  <div className="chat_people">
                    <div className="chat_img">
                      <img
                        className="img-fluid"
                        width="64"
                        height="64"
                        src="https://ptetutorials.com/images/user-profile.png"
                        alt="sunil"
                      />
                    </div>
                    <div className="chat_ib">
                      <h5>
                        Sunil Rajput <span className="chat_date">Dec 25</span>
                      </h5>
                      <p>
                        Test, which is a new approach to have all solutions
                        astrology under one roof.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="chat_list">
                  <div className="chat_people">
                    <div className="chat_img">
                      <img
                        className="img-fluid"
                        width="64"
                        height="64"
                        src="https://ptetutorials.com/images/user-profile.png"
                        alt="sunil"
                      />{' '}
                    </div>
                    <div className="chat_ib">
                      <h5>
                        Sunil Rajput <span className="chat_date">Dec 25</span>
                      </h5>
                      <p>
                        Test, which is a new approach to have all solutions
                        astrology under one roof.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="chat_list">
                  <div className="chat_people">
                    <div className="chat_img">
                      <img
                        className="img-fluid"
                        width="64"
                        height="64"
                        src="https://ptetutorials.com/images/user-profile.png"
                        alt="sunil"
                      />{' '}
                    </div>
                    <div className="chat_ib">
                      <h5>
                        Sunil Rajput <span className="chat_date">Dec 25</span>
                      </h5>
                      <p>
                        Test, which is a new approach to have all solutions
                        astrology under one roof.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="chat_list">
                  <div className="chat_people">
                    <div className="chat_img">
                      <img
                        className="img-fluid"
                        width="64"
                        height="64"
                        src="https://ptetutorials.com/images/user-profile.png"
                        alt="sunil"
                      />{' '}
                    </div>
                    <div className="chat_ib">
                      <h5>
                        Sunil Rajput <span className="chat_date">Dec 25</span>
                      </h5>
                      <p>
                        Test, which is a new approach to have all solutions
                        astrology under one roof.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="chat_list">
                  <div className="chat_people">
                    <div className="chat_img">
                      <img
                        className="img-fluid"
                        width="64"
                        height="64"
                        src="https://ptetutorials.com/images/user-profile.png"
                        alt="sunil"
                      />{' '}
                    </div>
                    <div className="chat_ib">
                      <h5>
                        Sunil Rajput <span className="chat_date">Dec 25</span>
                      </h5>
                      <p>
                        Test, which is a new approach to have all solutions
                        astrology under one roof.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="chat_list">
                  <div className="chat_people">
                    <div className="chat_img">
                      <img
                        className="img-fluid"
                        width="64"
                        height="64"
                        src="https://ptetutorials.com/images/user-profile.png"
                        alt="sunil"
                      />{' '}
                    </div>
                    <div className="chat_ib">
                      <h5>
                        Sunil Rajput <span className="chat_date">Dec 25</span>
                      </h5>
                      <p>
                        Test, which is a new approach to have all solutions
                        astrology under one roof.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="chat_list">
                  <div className="chat_people">
                    <div className="chat_img">
                      <img
                        className="img-fluid"
                        width="64"
                        height="64"
                        src="https://ptetutorials.com/images/user-profile.png"
                        alt="sunil"
                      />{' '}
                    </div>
                    <div className="chat_ib">
                      <h5>
                        Sunil Rajput <span className="chat_date">Dec 25</span>
                      </h5>
                      <p>
                        Test, which is a new approach to have all solutions
                        astrology under one roof.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-5 ml-4">
            <div className="mesgs mt-4">
              <div className="msg_history flex-column">
                <div className="incoming_msg justify-content-end">
                  <div className="incoming_msg_img">
                    {' '}
                    <img
                      className="img-fluid"
                      width="64"
                      height="64"
                      src="https://ptetutorials.com/images/user-profile.png"
                      alt="sunil"
                    />{' '}
                  </div>
                  <div className="received_msg">
                    <div className="received_withd_msg">
                      <p>Test which is a new approach to have all solutions</p>
                      <span className="time_date"> 11:01 AM | June 9</span>
                    </div>
                  </div>
                </div>
                <div className="outgoing_msg justify-content-start">
                  <div className="sent_msg">
                    <p>Test which is a new approach to have all solutions</p>
                    <span className="time_date"> 11:01 AM | June 9</span>{' '}
                  </div>
                </div>
                <div className="incoming_msg justify-content-end">
                  <div className="incoming_msg_img">
                    {' '}
                    <img
                      className="img-fluid"
                      width="64"
                      height="64"
                      src="https://ptetutorials.com/images/user-profile.png"
                      alt="sunil"
                    />{' '}
                  </div>
                  <div className="received_msg">
                    <div className="received_withd_msg">
                      <p>Test, which is a new approach to have</p>
                      <span className="time_date"> 11:01 AM | Yesterday</span>
                    </div>
                  </div>
                </div>
                <div className="outgoing_msg justify-content-start">
                  <div className="sent_msg">
                    <p>Apollo University, Delhi, India Test</p>
                    <span className="time_date"> 11:01 AM | Today</span>{' '}
                  </div>
                </div>
                <div className="incoming_msg justify-content-end">
                  <div className="incoming_msg_img">
                    {' '}
                    <img
                      className="img-fluid"
                      width="64"
                      height="64"
                      src="https://ptetutorials.com/images/user-profile.png"
                      alt="sunil"
                    />{' '}
                  </div>
                  <div className="received_msg">
                    <div className="received_withd_msg">
                      <p>
                        We work directly with our designers and suppliers, and
                        sell direct to you, which means quality, exclusive
                        products, at a price anyone can afford.
                      </p>
                      <span className="time_date"> 11:01 AM | Today</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="type_msg">
          <div className="input_msg_write">
            <input
              type="text"
              className="write_msg"
              placeholder="Type a message"
            />
            <button className="msg_send_btn" type="button">
              <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Message
