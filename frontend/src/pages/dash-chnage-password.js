import { Link } from "react-router-dom"
import pic5 from "../assets/images/images/candidates/pic5.jpg"
import logo from "../assets/images/images/logo-dark.png"
import logo_white from "../assets/images/images/logo-white.png"

export default function DashChangePassword(){
    return(
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
                                        <Link to="javascript:;" className="dropdown-toggle jobzilla-admin-messange" id="ID-MSG_dropdown" data-bs-toggle="dropdown">
                                            <i className="far fa-envelope"></i>
                                            <span className="notification-animate">4</span>
                                        </Link>
                                        <div className="dropdown-menu" aria-labelledby="ID-MSG_dropdown">
                                            <div className="message-list dashboard-widget-scroll">
                                                <ul>
                                                    <li className="clearfix">
                                                        <span className="msg-avtar">
                                                            <img src="images/user-avtar/pic1.jpg" alt=""/>
                                                        </span>
                                            
                                                        <div className="msg-texting">
                                                            <strong>Alexa Johnson</strong> 
                                                            <small className="msg-time">
                                                                <span className="far fa-clock p-r-5"></span>12 mins ago
                                                            </small>
                                                            <p>Lorem ipsum dolor sit amet, consectetur...</p>
                                                        </div>
                                                    </li>
                                                    <li className="clearfix">
                                                        <span className="msg-avtar">
                                                            <img src="images/user-avtar/pic2.jpg" alt=""/>
                                                        </span>
                                            
                                                        <div className="msg-texting">
                                                            <strong>Johan Smith</strong> 
                                                            <small className="msg-time">
                                                                <span className="far fa-clock p-r-5"></span>2 hours ago
                                                            </small>
                                                            <p>Lorem ipsum dolor sit amet, consectetur...</p>
                                                        </div>
                                                    </li>
                                                    <li className="clearfix">
                                                        <span className="msg-avtar">
                                                            <img src="images/user-avtar/pic3.jpg" alt=""/>
                                                        </span>
                                            
                                                        <div className="msg-texting">
                                                            <strong>Bobby Brown</strong> 
                                                            <small className="msg-time">
                                                                <span className="far fa-clock p-r-5"></span>3 hours ago
                                                            </small>
                                                            <p>Lorem ipsum dolor sit amet, consectetur...</p>
                                                        </div>
                                                    </li>
                                                    <li className="clearfix">
                                                        <span className="msg-avtar">
                                                            <img src="images/user-avtar/pic4.jpg" alt=""/>
                                                        </span>
                                            
                                                        <div className="msg-texting">
                                                            <strong>David Deo</strong> 
                                                            <small className="msg-time">
                                                                <span className="far fa-clock p-r-5"></span>4 hours ago
                                                            </small>
                                                            <p>Lorem ipsum dolor sit amet, consectetur...</p>
                                                        </div>
                                                    </li>                                                                              
                                                </ul>
                                                <div className="message-view-all">
                                                    <Link to="javascript:;">View All</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
    
                                </li>
    
                                {/* <!--Notification--> */}
                                <li className="header-widget dashboard-noti-dropdown">
    
                                    <div className="dropdown">
                                        <Link to="javascript:;" className="dropdown-toggle jobzilla-admin-notification" id="ID-NOTI_dropdown" data-bs-toggle="dropdown">
                                            <i className="far fa-bell"></i>
                                            <span className="notification-animate">8</span>
                                        </Link>
                                        <div className="dropdown-menu" aria-labelledby="ID-NOTI_dropdown">
                                            <div className="dashboard-widgets-header">You have 7 notifications</div>
                                            <div className="noti-list dashboard-widget-scroll">
                                                <ul>
                                                        
                                                    <li>
                                                        <Link to="#">
                                                            <span className="noti-icon"><i className="far fa-bell"></i></span>
                                                            <span className="noti-texting">Devid applied for <b>Webdesigner.</b> </span> 
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">
                                                            <span className="noti-icon"><i className="far fa-bell"></i></span>
                                                            <span className="noti-texting">Nikol sent you a message. </span> 
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">
                                                            <span className="noti-icon"><i className="far fa-bell"></i></span>
                                                            <span className="noti-texting">lucy bookmarked your <b>SEO Expert</b> Job! </span> 
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">
                                                            <span className="noti-icon"><i className="far fa-bell"></i></span>
                                                            <span className="noti-texting">Your job for <b>teacher</b> has been approved! </span> 
                                                        </Link>
                                                    </li> 
                                                    <li>
                                                        <Link to="#">
                                                            <span className="noti-icon"><i className="far fa-bell"></i></span>
                                                            <span className="noti-texting">Thor applied for <b>Team Leader</b>. </span> 
                                                        </Link>
                                                    </li>
                                                                                                                                                                                                                                                                    
                                                </ul>
    
                                                <div className="noti-view-all">
                                                        <Link to="javascript:;">View All</Link>
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
                                                <Link to="javascript:;" className="dropdown-toggle" id="ID-ACCOUNT_dropdown" data-bs-toggle="dropdown">
                                                    <div className="user-name text-black">
                                                        <span>
                                                            <img src={pic5} alt=""/>
                                                        </span>Nikola Tesla
                                                    </div> 
                                                </Link>
                                                <div className="dropdown-menu" aria-labelledby="ID-ACCOUNT_dropdown">
                                                      
                                                    <ul>
                                                        <li><Link to="dashboard.html"><i className="fa fa-home"></i>Dashboard</Link></li>
                                                        <li><Link to="dash-messages.html"><i className="fa fa-envelope"></i> Messages</Link></li>
                                                        <li><Link to="dash-my-profile.html"><i className="fa fa-user"></i> Profile</Link></li>
                                                        <li><Link to="index.html"><i className="fa fa-share-square"></i> Logout</Link></li>
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
                        <h2>Change Password!</h2>
                        <div className="breadcrumbs">
                            <Link to="#">Home</Link> <Link to="#">Dasboard</Link><span>Change Password</span></div>
                    </div>
    
                    {/* <!--Change Pawssword--> */}
                   
                    <div className="panel panel-default">
                        <div className="panel-heading wt-panel-heading p-a20">
                            <h4 className="panel-tittle m-a0">Change Password</h4>
                        </div>
                        <div className="panel-body wt-panel-body p-a20 ">
                            <form>
                                <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label>Old Password</label>
                                                <div className="ls-inputicon-box"> 
                                                    <input className="form-control wt-form-control" name="company_name" type="password" placeholder=""/>
                                                    <i className="fs-input-icon fas fa-asterisk "></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label>New Password</label>
                                                <div className="ls-inputicon-box"> 
                                                    <input className="form-control wt-form-control" name="company_name" type="password" placeholder=""/>
                                                    <i className="fs-input-icon fas fa-asterisk"></i>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <label>Confirm New Password</label>
                                                <div className="ls-inputicon-box"> 
                                                    <input className="form-control wt-form-control" name="company_name" type="password" placeholder=""/>
                                                    <i className="fs-input-icon fas fa-asterisk"></i>
                                                </div>
                                            </div>
                                        </div>
                                                        
                                        <div className="col-xl-12 col-lg-12 col-md-12">                                  
                                            <div className="text-left">
                                                <button type="submit" className="site-button">Save Changes</button>
                                            </div>
                                        </div>                                         
                                    
                                </div>
                            </form>              
                        </div>
                    </div>
    
                                                         
                </div>
    
            </div>
    
            {/* <!--Delete Profile Popup-->/ */}
            <div className="modal fade twm-model-popup" id="delete-dash-profile" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
                <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <h4 className="modal-title">Do you want to delete your profile?</h4>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="site-button" data-bs-dismiss="modal">No</button>
                        <button type="button" className="site-button outline-primary">Yes</button>
                    </div>
                </div>
                </div>
            </div>
    
    
            {/* <!--Logout Profile Popup--> */}
            <div className="modal fade twm-model-popup" id="logout-dash-profile" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
                <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <h4 className="modal-title">Do you want to Logout your profile?</h4>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="site-button" data-bs-dismiss="modal">No</button>
                        <button type="button" className="site-button outline-primary">Yes</button>
                    </div>
                </div>
                </div>
            </div>
    
        </div>
    
    
    
    {/* <!-- STYLE SWITCHER  ======= --> 
    <div className="styleswitcher">
    
        <div className="switcher-btn-bx">
            <a className="switch-btn">
                <span className="fa fa-cog fa-spin"></span>
            </a>
        </div>
        
        <div className="styleswitcher-inner">
        
            <h6 className="switcher-title">Color Skin</h6>
            <ul className="color-skins">
                <li><a className="theme-skin skin-1Link to="dash-change-passworda39b.html?theme=css/skin/skin-1"></a></li>
                <li><a className="theme-skin skin-2Link to="dash-change-password61e7.html?theme=css/skin/skin-2"></a></li>
                <li><a className="theme-skin skin-3Link to="dash-change-passwordcce5.html?theme=css/skin/skin-3"></a></li>
                <li><a className="theme-skin skin-4Link to="dash-change-password13f7.html?theme=css/skin/skin-4"></a></li>
                <li><a className="theme-skin skin-5Link to="dash-change-password19a6.html?theme=css/skin/skin-5"></a></li>
                <li><a className="theme-skin skin-6Link to="dash-change-passwordfe5c.html?theme=css/skin/skin-6"></a></li>
                <li><a className="theme-skin skin-7Link to="dash-change-passwordab47.html?theme=css/skin/skin-7"></a></li>
                <li><a className="theme-skin skin-8Link to="dash-change-password5f8d.html?theme=css/skin/skin-8"></a></li>
                <li><a className="theme-skin skin-9Link to="dash-change-password5663.html?theme=css/skin/skin-9"></a></li>
                <li><a className="theme-skin skin-10Link to="dash-change-password28ac.html?theme=css/skin/skin-10"></a></li>
                
            </ul>           
            
        </div>    
    </div> */}
    {/* <!-- STYLE SWITCHER END ==== --> */}
    
    </div>  
    )
}