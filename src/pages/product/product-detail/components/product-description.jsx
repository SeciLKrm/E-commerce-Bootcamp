const ProductDescription = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="box-head scroll-nav">
              <div className="head-title">
                {" "}
                <a className="page-scroll active" href="#product">
                  Product Details
                </a>
                <a className="page-scroll" href="#rating">
                  Ratings & Reviews
                </a>
                <a className="page-scroll" href="#review">
                  Add Your Reviews
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* highlights */}
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="box" id="product">
              <div className="box-body">
                <div className="highlights">
                  <h4 className="product-small-title">Highlights</h4>
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                      <ul className="arrow">
                        <li>12.2 MP Rear | 8 MP Front Camera </li>
                        <li>4GB RAM </li>
                        <li>2700 mAh battery</li>
                      </ul>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                      <ul className="arrow">
                        <li>Android 8.0 </li>
                        <li>Qualcomm Snapdragon 835</li>
                        <li>Fingerprint Sensor</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="highlights">
                  <h4 className="product-small-title">Specification</h4>
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <h4>General</h4>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 mb30">
                      <ul>
                        <li>Brand</li>
                        <li>Model Number </li>
                        <li>Body Material</li>
                        <li>Sim Size</li>
                      </ul>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 mb30">
                      <ul>
                        <li style={{ color: "#1c1e1e" }}>Google Pixel </li>
                        <li style={{ color: "#1c1e1e" }}>Google XYZ</li>
                        <li style={{ color: "#1c1e1e" }}>
                          Metal and Polycarbonate
                        </li>
                        <li style={{ color: "#1c1e1e" }}>Micro</li>
                      </ul>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <h4>Display</h4>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                      <ul>
                        <li>Screen Size </li>
                        <li>Display Resolution </li>
                        <li>Pixel Density</li>
                        <li>Screen Protection </li>
                      </ul>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                      <ul>
                        <li style={{ color: "#1c1e1e" }}>5 inch </li>
                        <li style={{ color: "#1c1e1e" }}>1280 X 720 Pixels</li>
                        <li style={{ color: "#1c1e1e" }}>294 PPI</li>
                        <li style={{ color: "#1c1e1e" }}>Gorilla Glass 4</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
