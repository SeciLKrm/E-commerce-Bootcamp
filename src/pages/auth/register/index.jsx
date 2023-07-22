const RegisterPage = () => {
  return (
    <>
      <div className="content">
        <div className="container">
          <div className="box sing-form">
            <div className="row">
              <div className="col-lg-offset-1 col-lg-5 col-md-offset-1 col-md-5 col-sm-12 col-xs-12 ">
                {/* form */}
                <div className="box-body">
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12 mb20">
                      <h3 className="mb10">Create Your Account</h3>
                      <p>Please fill all Resgister form Fields Below. </p>
                    </div>
                    <form>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                          <label
                            className="control-label sr-only"
                            htmlFor="name"></label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Name"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                          <label
                            className="control-label sr-only"
                            htmlFor="phone"
                          />
                          <input
                            id="phone"
                            name="phone"
                            type="text"
                            className="form-control"
                            placeholder=" Number"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                          <label
                            className="control-label sr-only"
                            htmlFor="email"
                          />
                          <input
                            id="email"
                            name="emaol"
                            type="text"
                            className="form-control"
                            placeholder="Enter your email id"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                          <label
                            className="control-label  sr-only"
                            htmlFor="password"
                          />
                          <input
                            id="password"
                            name="password"
                            type="password"
                            className="form-control"
                            placeholder="create your password"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                        <button className="btn btn-primary btn-block mb10">
                          Register
                        </button>
                        <div>
                          <p>
                            Have an Acount? <a href="#">Login</a>
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/* /.form */}
                </div>
              </div>
              {/* features */}
              <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 ">
                <div className="box-body">
                  <div className="feature-left">
                    <div className="feature-icon">
                      <img src="images/feature_icon_1.png" alt="" />
                    </div>
                    <div className="feature-content">
                      <h4>Loyalty Points</h4>
                      <p>
                        Aenean lacinia dictum risvitae pulvinar disamer
                        seronorem ipusm dolor sit manert.
                      </p>
                    </div>
                  </div>
                  <div className="feature-left">
                    <div className="feature-icon">
                      <img src="images/feature_icon_2.png" alt="" />
                    </div>
                    <div className="feature-content">
                      <h4>Instant Checkout</h4>
                      <p>
                        Aenean lacinia dictum risvitae pulvinar disamer
                        seronorem ipusm dolor sit manert.
                      </p>
                    </div>
                  </div>
                  <div className="feature-left">
                    <div className="feature-icon">
                      <img src="images/feature_icon_3.png" alt="" />
                    </div>
                    <div className="feature-content">
                      <h4>Exculsive Offers</h4>
                      <p>
                        Aenean lacinia dictum risvitae pulvinar disamer
                        seronorem ipusm dolor sit manert.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* /.features */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
