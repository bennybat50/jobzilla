import { Link } from "react-router-dom"
import pic1 from "../assets/images/images/candidates/pic1.jpg"
import pic2 from "../assets/images/images/candidates/pic2.jpg"
import pic3 from "../assets/images/images/candidates/pic3.jpg"
import pic4 from "../assets/images/images/candidates/pic4.jpg"
import pic5 from "../assets/images/images/candidates/pic5.jpg"
// import logo_white from "../assets/images/images/logo-white.png"
import logo from "../assets/images/images/logo-dark.png"



export default function DashMessages() {
  return (
    <div>
      <div className="page-wraper">
        <header id="header-admin-wrap" className="header-admin-fixed">
          {/* <!-- Header Start --> */}
          <div id="header-admin">
            <div className="container">
              {/* <!-- Left Side Content --> */}
              <div className="header-left">
                <div className="nav-btn-wrap">
                  <a className="nav-btn-admin" id="sidebarCollapse">
                    <span className="fa fa-angle-left"></span>
                  </a>
                </div>
              </div>
              {/* <!-- Left Side Content End -->
                    
                    <!-- Right Side Content --> */}
              <div className="header-right">
                <ul className="header-widget-wrap">
                  {/* <!--Message--> */}
                  <li className="header-widget dashboard-message-dropdown">
                    <div className="dropdown">
                      <a
                        href="javascript:;"
                        className="dropdown-toggle jobzilla-admin-messange"
                        id="ID-MSG_dropdown"
                        data-bs-toggle="dropdown"
                      >
                        <i className="far fa-envelope"></i>
                        <span className="notification-animate">4</span>
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="ID-MSG_dropdown"
                      >
                        <div className="message-list dashboard-widget-scroll">
                          <ul>
                            <li className="clearfix">
                              <span className="msg-avtar">
                                <img src="images/user-avtar/pic1.jpg" alt="" />
                              </span>

                              <div className="msg-texting">
                                <strong>Alexa Johnson</strong>
                                <small className="msg-time">
                                  <span className="far fa-clock p-r-5"></span>12
                                  mins ago
                                </small>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur...
                                </p>
                              </div>
                            </li>
                            <li className="clearfix">
                              <span className="msg-avtar">
                                <img src="images/user-avtar/pic2.jpg" alt="" />
                              </span>

                              <div className="msg-texting">
                                <strong>Johan Smith</strong>
                                <small className="msg-time">
                                  <span className="far fa-clock p-r-5"></span>2
                                  hours ago
                                </small>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur...
                                </p>
                              </div>
                            </li>
                            <li className="clearfix">
                              <span className="msg-avtar">
                                <img src="images/user-avtar/pic3.jpg" alt="" />
                              </span>

                              <div className="msg-texting">
                                <strong>Bobby Brown</strong>
                                <small className="msg-time">
                                  <span className="far fa-clock p-r-5"></span>3
                                  hours ago
                                </small>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur...
                                </p>
                              </div>
                            </li>
                            <li className="clearfix">
                              <span className="msg-avtar">
                                <img src="images/user-avtar/pic4.jpg" alt="" />
                              </span>

                              <div className="msg-texting">
                                <strong>David Deo</strong>
                                <small className="msg-time">
                                  <span className="far fa-clock p-r-5"></span>4
                                  hours ago
                                </small>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur...
                                </p>
                              </div>
                            </li>
                          </ul>
                          <div className="message-view-all">
                            <a href="javascript:;">View All</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  {/* <!--Notification--> */}
                  <li className="header-widget dashboard-noti-dropdown">
                    <div className="dropdown">
                      <a
                        href="javascript:;"
                        className="dropdown-toggle jobzilla-admin-notification"
                        id="ID-NOTI_dropdown"
                        data-bs-toggle="dropdown"
                      >
                        <i className="far fa-bell"></i>
                        <span className="notification-animate">8</span>
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="ID-NOTI_dropdown"
                      >
                        <div className="dashboard-widgets-header">
                          You have 7 notifications
                        </div>
                        <div className="noti-list dashboard-widget-scroll">
                          <ul>
                            <li>
                              <a href="#">
                                <span className="noti-icon">
                                  <i className="far fa-bell"></i>
                                </span>
                                <span className="noti-texting">
                                  Devid applied for <b>Webdesigner.</b>{" "}
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="noti-icon">
                                  <i className="far fa-bell"></i>
                                </span>
                                <span className="noti-texting">
                                  Nikol sent you a message.{" "}
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="noti-icon">
                                  <i className="far fa-bell"></i>
                                </span>
                                <span className="noti-texting">
                                  lucy bookmarked your <b>SEO Expert</b> Job!{" "}
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="noti-icon">
                                  <i className="far fa-bell"></i>
                                </span>
                                <span className="noti-texting">
                                  Your job for <b>teacher</b> has been approved!{" "}
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="noti-icon">
                                  <i className="far fa-bell"></i>
                                </span>
                                <span className="noti-texting">
                                  Thor applied for <b>Team Leader</b>.{" "}
                                </span>
                              </a>
                            </li>
                          </ul>

                          <div className="noti-view-all">
                            <a href="javascript:;">View All</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  {/* <!--Account--> */}
                  <li className="header-widget">
                    <div className="dashboard-user-section">
                      <div className="listing-user">
                        <div className="dropdown">
                          <a
                            href="javascript:;"
                            className="dropdown-toggle"
                            id="ID-ACCOUNT_dropdown"
                            data-bs-toggle="dropdown"
                          >
                            <div className="user-name text-black">
                              <span>
                                <img src={pic1} alt="" />
                              </span>
                              Nikola Tesla
                            </div>
                          </a>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="ID-ACCOUNT_dropdown"
                          >
                            <ul>
                              <li>
                                <a href="dashboard.html">
                                  <i className="fa fa-home"></i>Dashboard
                                </a>
                              </li>
                              <li>
                                <a href="dash-messages.html">
                                  <i className="fa fa-envelope"></i> Messages
                                </a>
                              </li>
                              <li>
                                <a href="dash-my-profile.html">
                                  <i className="fa fa-user"></i> Profile
                                </a>
                              </li>
                              <li>
                                <a href="index.html">
                                  <i className="fa fa-share-square"></i> Logout
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              {/* <!-- Right Side Content End --> */}
            </div>
          </div>
          {/* <!-- Header End --> */}
        </header>

        {/* <!-- Sidebar Holder --> */}
        <nav id="sidebar-admin-wraper">
          <div className="page-logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>

          <div className="admin-nav scrollbar-macosx">
            <ul>
              <li className="active">
                <Link to="/dashboard">
                  <i className="fa fa-home"></i>
                  <span className="admin-nav-text">Dashboard</span>
                </Link>
              </li>

              <li>
                <Link to="/dash-company-profile">
                  <i className="fa fa-user-tie"></i>
                  <span className="admin-nav-text">Company Profile</span>
                </Link>
              </li>
              <li>
                <Link to="/dash-manage-job">
                  <i className="fa fa-suitcase"></i>
                  <span className="admin-nav-text">Manage Jobs</span>
                </Link>
              </li>
              <li>
                <Link to="/dash-post-job">
                  <i className="fa fa-suitcase"></i>
                  <span className="admin-nav-text">Jobs</span>
                </Link>
              </li>
              <li>
                <Link to="/dash-candidates">
                  <i className="fa fa-user-friends"></i>
                  <span className="admin-nav-text">Candidates</span>
                </Link>
              </li>

              <li>
                <Link to="/dash-package">
                  <i className="fa fa-money-bill-alt"></i>
                  <span className="admin-nav-text">Packages</span>
                </Link>
              </li>

              <li>
                <Link to="/dash-messages">
                  <i className="fa fa-envelope"></i>
                  <span className="admin-nav-text">Messages</span>
                </Link>
              </li>

              <li>
                <Link to="/dash-my-profile">
                  <i className="fa fa-user"></i>
                  <span className="admin-nav-text">My Profile</span>
                </Link>
              </li>

              <li>
                <Link to="/dash-change-password">
                  <i className="fa fa-fingerprint"></i>
                  <span className="admin-nav-text">Change Password</span>
                </Link>
              </li>

              <li>
                <Link to="/javascript:;"
                  data-bs-toggle="modal"
                  data-bs-target="#delete-dash-profile"
                >
                  <i className="fa fa-trash-alt"></i>
                  <span className="admin-nav-text">Delete Profile</span>
                </Link>
              </li>

              <li>
                <Link to="/javascript:;"
                  data-bs-toggle="modal"
                  data-bs-target="#logout-dash-profile"
                >
                  <i className="fa fa-share-square"></i>
                  <span className="admin-nav-text">Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* <!-- Page Content Holder --> */}
        <div id="content">
          <div className="content-admin-main">
            <div className="wt-admin-right-page-header clearfix">
              <h2>Messages</h2>
              <div className="breadcrumbs">
                <a href="#">Home</a>
                <a href="#">Dasboard</a>
                <span>Messages</span>
              </div>
            </div>

            <div className="wt-admin-dashboard-msg-2">
              {/* <!--Left Msg section--> */}
              <div className="wt-dashboard-msg-user-list">
                <div className="user-msg-list-btn-outer">
                  <button className="user-msg-list-btn-close">Close</button>
                  <button className="user-msg-list-btn-open">User Message</button>
                </div>
                {/* <!-- Search Section Start--> */}
                <div className="wt-dashboard-msg-search">
                  <div className="input-group">
                    <input
                      className="form-control"
                      placeholder="Search Messages"
                      type="text"
                    />
                    <button className="btn" type="button">
                      <i className="fa fa-search"></i>
                    </button>
                  </div>
                </div>
                {/* <!-- Search Section End-->
                        
                        <!-- Search Section End--> */}
                <div className="msg-find-list">
                  <select className="wt-select-box bs-select-hidden form-select form-select-lg mb-3">
                    <option>Recent Chats</option>
                    <option>Short by Time</option>
                    <option>Short by Unread</option>
                  </select>
                </div>
                {/* <!-- Search Section End-->
                        
                        <!-- user msg list start--> */}
                <div
                  id="msg-list-wrap"
                  className="wt-dashboard-msg-search-list scrollbar-macosx"
                >
                  <div className="wt-dashboard-msg-search-list-wrap">
                    <a href="javascript:;" className="msg-user-info clearfix">
                      <div className="msg-user-timing">2 hours ago</div>
                      <div className="msg-user-info-pic">
                        <img src={pic1} alt="" />
                      </div>
                      <div className="msg-user-info-text">
                        <div className="msg-user-name">Rustin Duza</div>
                        <div className="msg-user-discription">
                          All created by our Global
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="wt-dashboard-msg-search-list-wrap">
                    <a href="javascript:;" className="msg-user-info clearfix">
                      <div className="msg-user-timing">4 hours ago</div>
                      <div className="msg-user-info-pic">
                        <img src={pic2} alt="" />
                      </div>
                      <div className="msg-user-info-text">
                        <div className="msg-user-name">Peter Hawkins</div>
                        <div className="msg-user-discription">
                          All created by our Global
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="wt-dashboard-msg-search-list-wrap">
                    <a href="javascript:;" className="msg-user-info clearfix">
                      <div className="msg-user-timing">Fri</div>
                      <div className="msg-user-info-pic">
                        <img src={pic3} alt="" />
                      </div>
                      <div className="msg-user-info-text">
                        <div className="msg-user-name">Ralph Johnson</div>
                        <div className="msg-user-discription">
                          All created by our Global
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="wt-dashboard-msg-search-list-wrap">
                    <a href="javascript:;" className="msg-user-info clearfix">
                      <div className="msg-user-timing">Thu</div>
                      <div className="msg-user-info-pic">
                        <img src={pic4} alt="" />
                      </div>
                      <div className="msg-user-info-text">
                        <div className="msg-user-name">Randall Henderson</div>
                        <div className="msg-user-discription">
                          All created by our Global
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="wt-dashboard-msg-search-list-wrap">
                    <a href="javascript:;" className="msg-user-info clearfix">
                      <div className="msg-user-timing">16/07/2019</div>
                      <div className="msg-user-info-pic">
                        <img src={pic5} alt="" />
                      </div>
                      <div className="msg-user-info-text">
                        <div className="msg-user-name">Randall Warren</div>
                        <div className="msg-user-discription">
                          All created by our Global
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="wt-dashboard-msg-search-list-wrap">
                    <a href="javascript:;" className="msg-user-info clearfix">
                      <div className="msg-user-timing">16/07/2019</div>
                      <div className="msg-user-info-pic">
                        <img src={pic1} alt="" />
                      </div>
                      <div className="msg-user-info-text">
                        <div className="msg-user-name">Christina Fischer </div>
                        <div className="msg-user-discription">
                          All created by our Global
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="wt-dashboard-msg-search-list-wrap">
                    <a href="javascript:;" className="msg-user-info clearfix">
                      <div className="msg-user-timing">16/07/2019</div>
                      <div className="msg-user-info-pic">
                        <img src={pic2} alt="" />
                      </div>
                      <div className="msg-user-info-text">
                        <div className="msg-user-name">Wanda Willis</div>
                        <div className="msg-user-discription">
                          All created by our Global
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="wt-dashboard-msg-search-list-wrap">
                    <a href="javascript:;" className="msg-user-info clearfix">
                      <div className="msg-user-timing">16/07/2019</div>
                      <div className="msg-user-info-pic">
                        <img src={pic3} alt="" />
                      </div>
                      <div className="msg-user-info-text">
                        <div className="msg-user-name">Peter Hawkins</div>
                        <div className="msg-user-discription">
                          All created by our Global
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="wt-dashboard-msg-search-list-wrap">
                    <a href="javascript:;" className="msg-user-info clearfix">
                      <div className="msg-user-timing">16/07/2019</div>
                      <div className="msg-user-info-pic">
                        <img src={pic4} alt="" />
                      </div>
                      <div className="msg-user-info-text">
                        <div className="msg-user-name">Kathleen Moreno</div>
                        <div className="msg-user-discription">
                          All created by our Global
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="wt-dashboard-msg-search-list-wrap">
                    <a href="javascript:;" className="msg-user-info clearfix">
                      <div className="msg-user-timing">16/07/2019</div>
                      <div className="msg-user-info-pic">
                        <img src={pic5} alt="" />
                      </div>
                      <div className="msg-user-info-text">
                        <div className="msg-user-name">Wanda Montgomery </div>
                        <div className="msg-user-discription">
                          All created by our Global
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                {/* <!-- user msg list End--> */}
              </div>

              {/* <!--Right Msg section--> */}
              <div className="wt-dashboard-msg-box">
                <div className="single-msg-user-name-box">
                  <div className="single-msg-short-discription">
                    <h4 className="single-msg-user-name">Rustin Duza</h4>
                    Independent Web Designers and Developers.
                  </div>
                  <a href="#" className="message-action">
                    <i className="far fa-trash-alt"></i> Delete Conversation
                  </a>
                </div>
                <div
                  id="msg-chat-wrap"
                  className="single-user-msg-conversation scrollbar-macosx"
                >
                  <div className="single-user-comment-wrap">
                    <div className="row">
                      <div className="col-xl-9 col-lg-12">
                        <div className="single-user-comment-block clearfix">
                          <div className="single-user-com-pic">
                            <img src={pic2} alt="" />
                          </div>
                          <div className="single-user-com-text">
                            Breaking the endless cycle of meaningless text
                            message conversations starts with only talking to
                            someone who offers interesting topics opinions.
                          </div>
                          <div className="single-user-msg-time">12:13 PM</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="single-user-comment-wrap sigle-user-reply">
                    <div className="row justify-content-end">
                      <div className="col-xl-9 col-lg-12">
                        <div className="single-user-comment-block clearfix">
                          <div className="single-user-com-pic">
                            <img src={pic1} alt="" />
                          </div>
                          <div className="single-user-com-text">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour.
                          </div>
                          <div className="single-user-msg-time">12:37 PM</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="single-user-comment-wrap">
                    <div className="row">
                      <div className="col-xl-9 col-lg-12">
                        <div className="single-user-comment-block clearfix">
                          <div className="single-user-com-pic">
                            <img src={pic2} alt="" />
                          </div>
                          <div className="single-user-com-text">
                            Breaking the endless cycle of meaningless text
                            message conversations starts with only talking to
                            someone who offers interesting topics opinions.
                          </div>
                          <div className="single-user-msg-time">12:13 PM</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="single-user-comment-wrap sigle-user-reply">
                    <div className="row justify-content-end">
                      <div className="col-xl-9 col-lg-12">
                        <div className="single-user-comment-block clearfix">
                          <div className="single-user-com-pic">
                            <img src={pic1} alt="" />
                          </div>
                          <div className="single-user-com-text">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour.
                          </div>
                          <div className="single-user-msg-time">12:37 PM</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="single-user-comment-wrap">
                    <div className="row">
                      <div className="col-xl-9 col-lg-12">
                        <div className="single-user-comment-block clearfix">
                          <div className="single-user-com-pic">
                            <img src={pic2} alt="" />
                          </div>
                          <div className="single-user-com-text">
                            Breaking the endless cycle of meaningless text
                            message conversations starts with only talking to
                            someone who offers interesting topics opinions.
                          </div>
                          <div className="single-user-msg-time">12:13 PM</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="single-user-comment-wrap sigle-user-reply">
                    <div className="row justify-content-end">
                      <div className="col-xl-9 col-lg-12">
                        <div className="single-user-comment-block clearfix">
                          <div className="single-user-com-pic">
                            <img src={pic1} alt="" />
                          </div>
                          <div className="single-user-com-text">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour.
                          </div>
                          <div className="single-user-msg-time">12:37 PM</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-msg-reply-comment ">
                  <div className="input-group">
                    <textarea
                      className="form-control"
                      placeholder="Type a message here"
                    ></textarea>
                    <button className="btn" type="button">
                      <i className="fa fa-paper-plane"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!--Delete Profile Popup--> */}
        <div
          className="modal fade twm-model-popup"
          id="delete-dash-profile"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <h4 className="modal-title">Do you want to delete your profile?</h4>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="site-button"
                  data-bs-dismiss="modal"
                >
                  No
                </button>
                <button type="button" className="site-button outline-primary">
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <!--Logout Profile Popup--> */}
        <div
          className="modal fade twm-model-popup"
          id="logout-dash-profile"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <h4 className="modal-title">Do you want to Logout your profile?</h4>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="site-button"
                  data-bs-dismiss="modal"
                >
                  No
                </button>
                <button type="button" className="site-button outline-primary">
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 
<!-- JAVASCRIPT  FILES ========================================= --> 
<script  src="js/jquery-3.6.0.min.js"></script><!-- JQUERY.MIN JS -->
<script  src="js/popper.min.js"></script><!-- POPPER.MIN JS -->
<script  src="js/bootstrap.min.js"></script><!-- BOOTSTRAP.MIN JS -->
<script  src="js/magnific-popup.min.js"></script><!-- MAGNIFIC-POPUP JS -->
<script  src="js/waypoints.min.js"></script><!-- WAYPOINTS JS -->
<script  src="js/counterup.min.js"></script><!-- COUNTERUP JS -->
<script  src="js/waypoints-sticky.min.js"></script><!-- STICKY HEADER -->
<script  src="js/isotope.pkgd.min.js"></script><!-- MASONRY  -->
<script  src="js/imagesloaded.pkgd.min.js"></script><!-- MASONRY  -->
<script  src="js/owl.carousel.min.js"></script><!-- OWL  SLIDER  -->
<script  src="js/theia-sticky-sidebar.js"></script><!-- STICKY SIDEBAR  -->
<script  src="js/lc_lightbox.lite.js" ></script><!-- IMAGE POPUP -->
<script  src="js/bootstrap-select.min.js"></script><!-- Form js -->
<script  src="js/dropzone.js"></script><!-- IMAGE UPLOAD  -->
<script  src="js/jquery.scrollbar.js"></script><!-- scroller -->
<script  src="js/bootstrap-datepicker.js"></script><!-- scroller -->
<script  src="js/jquery.dataTables.min.js"></script><!-- Datatable -->
<script  src="js/dataTables.bootstrap5.min.js"></script><!-- Datatable -->
<script  src="js/chart.js"></script><!-- Chart -->
<script  src="js/bootstrap-slider.min.js"></script><!-- Price range slider -->
<script  src="js/swiper-bundle.min.js"></script><!-- Swiper JS -->
<script  src="js/custom.js"></script><!-- CUSTOM FUCTIONS  -->
<script  src="js/switcher.js"></script><!-- SHORTCODE FUCTIONS  -->

<!-- STYLE SWITCHER  ======= --> 
<div className="styleswitcher">

    <div className="switcher-btn-bx">
        <a className="switch-btn">
            <span className="fa fa-cog fa-spin"></span>
        </a>
    </div>
    
    <div className="styleswitcher-inner">
    
        <h6 className="switcher-title">Color Skin</h6>
        <ul className="color-skins">
            <li><a className="theme-skin skin-1" href="dash-messagesa39b.html?theme=css/skin/skin-1"></a></li>
            <li><a className="theme-skin skin-2" href="dash-messages61e7.html?theme=css/skin/skin-2"></a></li>
            <li><a className="theme-skin skin-3" href="dash-messagescce5.html?theme=css/skin/skin-3"></a></li>
            <li><a className="theme-skin skin-4" href="dash-messages13f7.html?theme=css/skin/skin-4"></a></li>
            <li><a className="theme-skin skin-5" href="dash-messages19a6.html?theme=css/skin/skin-5"></a></li>
            <li><a className="theme-skin skin-6" href="dash-messagesfe5c.html?theme=css/skin/skin-6"></a></li>
            <li><a className="theme-skin skin-7" href="dash-messagesab47.html?theme=css/skin/skin-7"></a></li>
            <li><a className="theme-skin skin-8" href="dash-messages5f8d.html?theme=css/skin/skin-8"></a></li>
            <li><a className="theme-skin skin-9" href="dash-messages5663.html?theme=css/skin/skin-9"></a></li>
            <li><a className="theme-skin skin-10" href="dash-messages28ac.html?theme=css/skin/skin-10"></a></li>
            
        </ul>           
        
    </div>    
</div>
<!-- STYLE SWITCHER END ==== --> */}
    </div>
  );
}