import React from 'react'
import Nav from './Nav'
export default function Home() {
    return (
        <div>
           <Nav/>
           <div>
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
        {/*---- Include the above in your HEAD tag --------*/}
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-T8Gy5hrqNKT+hzMclPo118YTQO6cYprQmhrYwIiQ/3axmI1hQomh7Ud2hPOy8SP1" crossOrigin="anonymous" />
        <div className="top ">
          <div className="container">
            <div className="row">
            </div>
          </div>
        </div>
        <div className="topc ">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
              </div>
            </div>
          </div>
        </div>
        <div className="top-head pt-1 border">
          <div className="container">
            <div className="row ">
              <div className="col-md-12 text-right">
                <ul className="list-inline ">
                  <a href="#"><li className="list-inline-item"><small><i className="fa fa-mobile fa-2x" /> Download Mobile App</small></li></a>
                  <a href="#"><li className="list-inline-item"><small> Check On Road Price</small></li></a>
                  <a href="#"><li className="list-inline-item"><small> Feedback</small></li></a>
                  <a href="#"><li className="list-inline-item"><small> Ask a Question</small></li></a>
                  <a href="#"><li className="list-inline-item"><small><i className="fa fa-user" />  My Account</small></li></a>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-sm  bg-light border ">
          <div className="container">
            {/* Brand */}
            <a className="navbar-brand" href="#">
              <img src="http://velikorodnov.com/html/autotrader/images/logo.png" alt="Logo" style={{width: '120px'}} />
            </a>
            {/* Toggler/collapsibe Button */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
              <span className="navbar-toggler-icon" />
            </button>
            {/* Navbar links */}
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                    New
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Find New Cars</a>
                    <a className="dropdown-item" href="#">Latest Cars</a>
                    <a className="dropdown-item" href="#">Popular Cars</a>
                    <a className="dropdown-item" href="#">Upcoming Cars</a>
                    <a className="dropdown-item" href="#">Offers &amp; Discounts</a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                    Used
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Find Used Cars</a>
                    <a className="dropdown-item" href="#">Find by Brand</a>
                    <a className="dropdown-item" href="#">Find by Location</a>
                    <a className="dropdown-item" href="#">Upcoming Cars</a>
                    <a className="dropdown-item" href="#">Offers &amp; Discounts</a>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Sell</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Compare</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                    News &amp; Reviews
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Car News</a>
                    <a className="dropdown-item" href="#">Car Reviews</a>
                    <a className="dropdown-item" href="#">Car Videos</a>
                    <a className="dropdown-item" href="#">Write Review</a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                    More
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Car Loan</a>
                    <a className="dropdown-item" href="#">EMI Calculator</a>
                    <a className="dropdown-item" href="#">Car Insurance</a>
                    <a className="dropdown-item" href="#">Ask Question</a>
                  </div>
                </li>
                <form className="form-inline" action="#">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search Cars" />
                  <button className="btn btn-success" type="submit"><i className="fa fa-search" /> Search</button>
                </form>
              </ul>
            </div>
          </div>
        </nav>
        <div className="banner slider">
          <div id="demo" className="carousel slide" data-ride="carousel" data-interval="false">
            {/* Indicators */}
            <ul className="carousel-indicators">
              <li data-target="#demo" data-slide-to={0} className="active" />
              <li data-target="#demo" data-slide-to={1} />
              <li data-target="#demo" data-slide-to={2} />
            </ul>
            {/* The slideshow */}
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://images.cardekho.com/images/featuredcarimages/Honda-WR-V-19/wrv-0.jpg" alt="Los Angeles" />
                <div className="carousel-caption">
                  <div className="col-md-7">
                    <h1 className="pb-2"><strong>The WordPress Theme for Growth Hackers </strong> </h1>
                    <h4>The right look and feel to promote any product, service or online course.</h4>
                    <button type="button" className="btn btn-success mt-4">Buy Growthpress</button>
                    <button type="button" className="btn btn-dark mt-4">Get More Details</button>
                  </div>
                </div>   
              </div>
              <div className="carousel-item">
                <img src="https://images.cardekho.com/images/featuredcarimages/Maruti-Swift-17/Swift-new-0.jpg" alt="Chicago" />
                <div className="carousel-caption">
                  <div className="col-md-7">
                    <h1 className="pb-2"><strong>The WordPress Theme for Growth Hackers </strong> </h1>
                    <h4>The right look and feel to promote any product, service or online course.</h4>
                    <button type="button" className="btn btn-success mt-4">Buy Growthpress</button>
                    <button type="button" className="btn btn-dark mt-4">Get More Details</button>
                  </div>
                </div>   
              </div>
              <div className="carousel-item">
                <img src="https://images.cardekho.com/images/featuredcarimages/Honda-WR-V-19/wrv-0.jpg" alt="New York" />
                <div className="carousel-caption">
                  <div className="col-md-7">
                    <h1 className="pb-2"><strong>The WordPress Theme for Growth Hackers </strong> </h1>
                    <h4>The right look and feel to promote any product, service or online course.</h4>
                    <button type="button" className="btn btn-success mt-4">Buy Growthpress</button>
                    <button type="button" className="btn btn-dark mt-4">Get More Details</button>
                  </div>
                </div>  
              </div>
            </div>
            {/* Left and right controls */}
            <a className="carousel-control-prev" href="#demo" data-slide="prev">
              <span className="carousel-control-prev-icon" />
            </a>
            <a className="carousel-control-next" href="#demo" data-slide="next">
              <span className="carousel-control-next-icon" />
            </a>
          </div>
        </div>
        <div className="upcoming py-5">
          <div className="container">
            <div className="row pb-4 text-center">
              <div className="col-md-12">
                <h2>Upcoming &amp; Latest cars</h2>
                <p> Pre-booked lessons, on-call lessons are Not refundable unless cancelled more than 24 hours.</p>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-md-3 box border py-4">
                <div className="box-carimage">
                  <img src="https://img0.gaadicdn.com/images/car-images/265x110/Mahindra/Mahindra-XUV500-2018/6334/047.jpg" alt="" />
                </div>
                <div className="box-cartitle">
                  <h4> Mahindra XUV500 2018</h4>
                </div>
                <div className="box-carprice">
                  <h6><i className="fa fa-inr" />14.0 Lac*</h6>
                </div>
                <div className="box-date pb-3">
                  <small>Launch Date: 15 Apr 2018 </small>
                </div>
                <button type="button" className="btn btn-outline-danger">Check Price</button>
              </div>
              <div className="col-md-3 box border py-4">
                <div className="box-carimage">
                  <img src="https://img0.gaadicdn.com/images/car-images/265x110/Tata/Tata-Nexon/047.jpg" alt="" />
                </div>
                <div className="box-cartitle">
                  <h4> Mahindra XUV500 2018</h4>
                </div>
                <div className="box-carprice">
                  <h6><i className="fa fa-inr" />14.0 Lac*</h6>
                </div>
                <div className="box-date pb-3">
                  <small>Launch Date: 15 Apr 2018 </small>
                </div>
                <button type="button" className="btn btn-outline-danger">Check Price</button>
              </div>
              <div className="col-md-3 box border py-4">
                <div className="box-carimage">
                  <img src="https://img0.gaadicdn.com/images/car-images/265x110/Mahindra/Mahindra-XUV500-2018/6334/047.jpg" alt="" />
                </div>
                <div className="box-cartitle">
                  <h4> Mahindra XUV500 2018</h4>
                </div>
                <div className="box-carprice">
                  <h6><i className="fa fa-inr" />14.0 Lac*</h6>
                </div>
                <div className="box-date pb-3">
                  <small>Launch Date: 15 Apr 2018 </small>
                </div>
                <button type="button" className="btn btn-outline-danger">Check Price</button>
              </div>
              <div className="col-md-3 box border py-4">
                <div className="box-carimage">
                  <img src="https://img0.gaadicdn.com/images/car-images/265x110/Mahindra/Mahindra-XUV500-2018/6334/047.jpg" alt="" />
                </div>
                <div className="box-cartitle">
                  <h4> Mahindra XUV500 2018</h4>
                </div>
                <div className="box-carprice">
                  <h6><i className="fa fa-inr" />14.0 Lac*</h6>
                </div>
                <div className="box-date pb-3">
                  <small>Launch Date: 15 Apr 2018 </small>
                </div>
                <button type="button" className="btn btn-outline-danger">Check Price</button>
              </div>
            </div>
            <div className="row text-center pt-4">
              <div className="col-md-12">
                <button type="button" className="btn btn-danger">View All Upcoming Cars</button>
              </div>
            </div>
          </div>
        </div>
        <div className="popular py-5">
          <div className="container">
            <div className="row pb-4 text-center">
              <div className="col-md-12">
                <h2>Popular car in India</h2>
                <p> Pre-booked lessons, on-call lessons are Not refundable unless cancelled more than 24 hours.</p>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-md-3 box border py-4">
                <div className="box-carimage">
                  <img src="https://img0.gaadicdn.com/images/car-images/265x110/Mahindra/Mahindra-XUV500-2018/6334/047.jpg" alt="" />
                </div>
                <div className="box-cartitle">
                  <h4> Mahindra XUV500 2018</h4>
                </div>
                <div className="box-carprice">
                  <h6><i className="fa fa-inr" />14.0 Lac*</h6>
                </div>
                <div className="box-date pb-3">
                  <small>Launch Date: 15 Apr 2018 </small>
                </div>
                <button type="button" className="btn btn-outline-danger">Check Price</button>
              </div>
              <div className="col-md-3 box border py-4">
                <div className="box-carimage">
                  <img src="https://img0.gaadicdn.com/images/car-images/265x110/Tata/Tata-Nexon/047.jpg" alt="" />
                </div>
                <div className="box-cartitle">
                  <h4> Mahindra XUV500 2018</h4>
                </div>
                <div className="box-carprice">
                  <h6><i className="fa fa-inr" />14.0 Lac*</h6>
                </div>
                <div className="box-date pb-3">
                  <small>Launch Date: 15 Apr 2018 </small>
                </div>
                <button type="button" className="btn btn-outline-danger">Check Price</button>
              </div>
              <div className="col-md-3 box border py-4">
                <div className="box-carimage">
                  <img src="https://img0.gaadicdn.com/images/car-images/265x110/Mahindra/Mahindra-XUV500-2018/6334/047.jpg" alt="" />
                </div>
                <div className="box-cartitle">
                  <h4> Mahindra XUV500 2018</h4>
                </div>
                <div className="box-carprice">
                  <h6><i className="fa fa-inr" />14.0 Lac*</h6>
                </div>
                <div className="box-date pb-3">
                  <small>Launch Date: 15 Apr 2018 </small>
                </div>
                <button type="button" className="btn btn-outline-danger">Check Price</button>
              </div>
              <div className="col-md-3 box border py-4">
                <div className="box-carimage">
                  <img src="https://img0.gaadicdn.com/images/car-images/265x110/Mahindra/Mahindra-XUV500-2018/6334/047.jpg" alt="" />
                </div>
                <div className="box-cartitle">
                  <h4> Mahindra XUV500 2018</h4>
                </div>
                <div className="box-carprice">
                  <h6><i className="fa fa-inr" />14.0 Lac*</h6>
                </div>
                <div className="box-date pb-3">
                  <small>Launch Date: 15 Apr 2018 </small>
                </div>
                <button type="button" className="btn btn-outline-danger">Check Price</button>
              </div>
            </div>
            <div className="row text-center pt-4">
              <div className="col-md-12">
                <button type="button" className="btn btn-danger">View All Upcoming Cars</button>
              </div>
            </div>
          </div>
        </div>
        <div className="help py-5 bg-secondary twhite">
          <div className="container py-5">
            <div className="row text-center">
              <div className="col-md-12">
                <i className="fa fa-headphones fa-3x" />
                <h3>How can we help you?</h3>
                <p>Fusce imper diet odio sit amet erat conse quat, eget eleme nmper diet odio sit amet erat atege tpurc surus lorem iandit vehi culas.</p>
                <button type="button" className="btn btn-danger">Ask the Question</button>
              </div>
            </div>
          </div>
        </div>
        <div className="location py-5">
          <div className="container">
            <div className="row pb-4 text-center">
              <div className="col-md-12">
                <h2>Find Used Cars in </h2>
                <p> Pre-booked lessons, on-call lessons are Not refundable unless cancelled more than 24 hours.</p>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-md-2 box border py-4">
                <button type="button" className="btn btn-light"><i className="fa fa-map-marker fa-1x " /> New Delhi</button>
              </div>
              <div className="col-md-2 box border py-4">
                <button type="button" className="btn btn-light"><i className="fa fa-map-marker fa-1x " /> Banglore</button>
              </div>
              <div className="col-md-2 box border py-4">
                <button type="button" className="btn btn-light"><i className="fa fa-map-marker fa-1x " /> Jaipur</button>
              </div>
              <div className="col-md-2 box border py-4">
                <button type="button" className="btn btn-light"><i className="fa fa-map-marker fa-1x " /> Chennai</button>
              </div>
              <div className="col-md-2 box border py-4">
                <button type="button" className="btn btn-light"><i className="fa fa-map-marker fa-1x " /> Mumbai</button>
              </div>
              <div className="col-md-2 box border py-4">
                <button type="button" className="btn btn-light"><i className="fa fa-map-marker fa-1x " /> Banglore</button>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-md-2 box border py-4">
                <button type="button" className="btn btn-light"><i className="fa fa-map-marker fa-1x " /> New Delhi</button>
              </div>
              <div className="col-md-2 box border py-4">
                <button type="button" className="btn btn-light"><i className="fa fa-map-marker fa-1x " /> Banglore</button>
              </div>
              <div className="col-md-2 box border py-4">
                <button type="button" className="btn btn-light"><i className="fa fa-map-marker fa-1x " /> Jaipur</button>
              </div>
              <div className="col-md-2 box border py-4">
                <button type="button" className="btn btn-light"><i className="fa fa-map-marker fa-1x " /> Chennai</button>
              </div>
              <div className="col-md-2 box border py-4">
                <button type="button" className="btn btn-light"><i className="fa fa-map-marker fa-1x " /> Mumbai</button>
              </div>
              <div className="col-md-2 box border py-4">
                <button type="button" className="btn btn-light"><i className="fa fa-map-marker fa-1x " /> Banglore</button>
              </div>
            </div>
            <div className="row text-center pt-4">
              <div className="col-md-12">
                <button type="button" className="btn btn-danger">View All Upcoming Cars</button>
              </div>
            </div>
          </div>
        </div>
        <div className="brand-search py-5">
          <div className="container">
            <div className="row pb-4 text-center">
              <div className="col-md-12">
                <h2>Search car by Brand</h2>
                <p> Pre-booked lessons, on-call lessons are Not refundable unless cancelled more than 24 hours.</p>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-md-2 box border py-4">
                <div className="box-carimage">
                  <img src="https://img0.gaadicdn.com/images/car-images/265x110/Mahindra/Mahindra-XUV500-2018/6334/047.jpg" alt="" />
                </div>
                <div className="box-cartitle">
                  <a href="#"><h6> Mahindra </h6></a>
                </div>
              </div>
              <div className="col-md-2 box border py-4">
                <div className="box-carimage">
                  <img src="https://img0.gaadicdn.com/images/car-images/265x110/Mahindra/Mahindra-XUV500-2018/6334/047.jpg" alt="" />
                </div>
                <div className="box-cartitle">
                  <a href="#"><h6> Mahindra </h6></a>
                </div>
              </div>
              <div className="col-md-2 box border py-4">
                <div className="box-carimage">
                  <img src="https://img0.gaadicdn.com/images/car-images/265x110/Mahindra/Mahindra-XUV500-2018/6334/047.jpg" alt="" />
                </div>
                <div className="box-cartitle">
                  <a href="#"><h6> Mahindra </h6></a>
                </div>
              </div>
              <div className="col-md-2 box border py-4">
                <div className="box-carimage">
                  <img src="https://img0.gaadicdn.com/images/car-images/265x110/Mahindra/Mahindra-XUV500-2018/6334/047.jpg" alt="" />
                </div>
                <div className="box-cartitle">
                  <a href="#"><h6> Mahindra </h6></a>
                </div>
              </div>
              <div className="col-md-2 box border py-4">
                <div className="box-carimage">
                  <img src="https://img0.gaadicdn.com/images/car-images/265x110/Mahindra/Mahindra-XUV500-2018/6334/047.jpg" alt="" />
                </div>
                <div className="box-cartitle">
                  <a href="#"><h6> Mahindra </h6></a>
                </div>
              </div>
              <div className="col-md-2 box border py-4">
                <div className="box-carimage">
                  <img src="https://img0.gaadicdn.com/images/car-images/265x110/Mahindra/Mahindra-XUV500-2018/6334/047.jpg" alt="" />
                </div>
                <div className="box-cartitle">
                  <a href="#"><h6> Mahindra </h6></a>
                </div>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-md-2 box border py-4">
                <div className="box-carimage">
                  <img src="https://img0.gaadicdn.com/images/car-images/265x110/Mahindra/Mahindra-XUV500-2018/6334/047.jpg" alt="" />
                </div>
                <div className="box-cartitle">
                  <a href="#"><h6> Mahindra </h6></a>
                </div>
              </div>
              <div className="col-md-2 box border py-4">
                <div className="box-carimage">
                  <img src="https://img0.gaadicdn.com/images/car-images/265x110/Mahindra/Mahindra-XUV500-2018/6334/047.jpg" alt="" />
                </div>
                <div className="box-cartitle">
                  <a href="#"><h6> Mahindra </h6></a>
                </div>
              </div>
              <div className="col-md-2 box border py-4">
                <div className="box-carimage">
                  <img src="https://img0.gaadicdn.com/images/car-images/265x110/Mahindra/Mahindra-XUV500-2018/6334/047.jpg" alt="" />
                </div>
                <div className="box-cartitle">
                  <a href="#"><h6> Mahindra </h6></a>
                </div>
              </div>
              <div className="col-md-2 box border py-4">
                <div className="box-carimage">
                  <img src="https://img0.gaadicdn.com/images/car-images/265x110/Mahindra/Mahindra-XUV500-2018/6334/047.jpg" alt="" />
                </div>
                <div className="box-cartitle">
                  <a href="#"><h6> Mahindra </h6></a>
                </div>
              </div>
              <div className="col-md-2 box border py-4">
                <div className="box-carimage">
                  <img src="https://img0.gaadicdn.com/images/car-images/265x110/Mahindra/Mahindra-XUV500-2018/6334/047.jpg" alt="" />
                </div>
                <div className="box-cartitle">
                  <a href="#"><h6> Mahindra </h6></a>
                </div>
              </div>
              <div className="col-md-2 box border py-4">
                <div className="box-carimage">
                  <img src="https://img0.gaadicdn.com/images/car-images/265x110/Mahindra/Mahindra-XUV500-2018/6334/047.jpg" alt="" />
                </div>
                <div className="box-cartitle">
                  <a href="#"><h6> Mahindra </h6></a>
                </div>
              </div>
            </div>
            <div className="row text-center pt-4">
              <div className="col-md-12">
                <button type="button" className="btn btn-danger">View All Upcoming Cars</button>
              </div>
            </div>
          </div>
        </div>
        <div className="offer my-5">
          <div className="container">
            <div className="row">
              <div className="col-md-4 py-3 border">
                <div className="row">
                  <div className="col-md-3 mt-2">
                    <img src="http://klbtheme.com/froday/wp-content/uploads/2018/02/tablet.png" />
                  </div>
                  <div className="col-md-9">
                    <h5>Deals &amp; Coupons</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure aspernatur</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 py-3 border">
                <div className="row">
                  <div className="col-md-3 mt-2">
                    <img src="http://klbtheme.com/froday/wp-content/uploads/2018/02/online-shop-6.png" />
                  </div>
                  <div className="col-md-9">
                    <h5>Find Best Offers</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure aspernatur</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 py-3 border">
                <div className="row">
                  <div className="col-md-3 mt-2">
                    <img src="http://klbtheme.com/froday/wp-content/uploads/2018/02/money.png" />
                  </div>
                  <div className="col-md-9">
                    <h5>Save Money</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure aspernatur</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cta-sektion  border py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-9 col-sm-9 col-xs-12">
                <h3><span className="glyphicon glyphicon-cog " /> <b>Car for sale?</b> Explore Cars like a pro.</h3>
              </div>
              <div className="col-md-3 col-sm-3 col-xs-12 ">
                <button type="button" className="btn bg-danger twhite">Start Right Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="footer  py-5  ">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-3 footer-one">
                <img src="http://velikorodnov.com/html/autotrader/images/logo.png" alt="Logo" style={{width: '120px'}} />
                <p className="pt-4">Cras sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                <div className="social-icons"> 
                  <a href="https://www.facebook.com/"><i id="social-fb" className="fa fa-facebook-square fa-3x social" /></a>
                  <a href="https://twitter.com/"><i id="social-tw" className="fa fa-twitter-square fa-3x social" /></a>
                  <a href="https://plus.google.com/"><i id="social-gp" className="fa fa-google-plus-square fa-3x social" /></a>
                  <a href="mailto:bootsnipp@gmail.com"><i id="social-em" className="fa fa-envelope-square fa-3x social" /></a>
                </div>	
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3 footer-two">
                <h5>Information </h5>
                <ul className="list-unstyled">
                  <li><a href="maintenance.html">Maintenance Tips</a></li>
                  <li><a href="contact.html">Locations</a></li>
                  <li><a href="about.html">Testimonials</a></li>
                  <li><a href="about.html">Careers</a></li>
                  <li><a href="about.html">Partners</a></li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3 footer-three">
                <h5>Helpful Links </h5>
                <ul className="list-unstyled">
                  <li><a href="maintenance.html">Maintenance Tips</a></li>
                  <li><a href="contact.html">Locations</a></li>
                  <li><a href="about.html">Testimonials</a></li>
                  <li><a href="about.html">Careers</a></li>
                  <li><a href="about.html">Partners</a></li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3 footer-four">
                <h5>Helpful Links </h5>
                <ul className="list-unstyled">
                  <li><a href="maintenance.html">Maintenance Tips</a></li>
                  <li><a href="contact.html">Locations</a></li>
                  <li><a href="about.html">Testimonials</a></li>
                  <li><a href="about.html">Careers</a></li>
                  <li><a href="about.html">Partners</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright bglight1 border pt-2">
          <div className="container">
            <div className="row justify-content-md-center">
              <p> © 2018 xyz Software Pvt. Ltd. </p>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}
