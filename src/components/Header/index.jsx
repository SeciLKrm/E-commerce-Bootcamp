import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  const authState = useSelector((state) => state.authState);
  const categoryState = useSelector((state) => state.categoryState);
  const cartState = useSelector((state) => state.cartState);
  return (
    <>
      <div className="top-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-7 col-sm-6 hidden-xs">
              <p className="top-text">Flexible Delivery, Fast Delivery.</p>
            </div>
            <div className="col-lg-4 col-md-5 col-sm-6 col-xs-12">
              <ul>
                <li>+180-123-4567</li>
                <li>info@demo.com</li>
                <li>
                  <a href="#">Help</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="header-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-8">
              <div className="logo">
                <Link to="/">
                  <img src="assets/images/logo.png" alt="" />
                </Link>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="search-bg">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Here"
                />
                <button type="Submit">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
              <div className="account-section">
                <ul>
                  {authState.user ? (
                    <>
                      <li>
                        <Link to="user" className="title hidden-xs">
                          My Account
                        </Link>
                      </li>
                      <li className="hidden-xs">|</li>
                      <li>
                        <Link to="#" className="title hidden-xs">
                          Logout
                        </Link>
                      </li>
                    </>
                  ) : (
                    <li>
                      <li className="hidden-xs">|</li>
                      <Link to="auth/login" className="title hidden-xs">
                        Login
                      </Link>
                    </li>
                  )}

                  <li className="hidden-xs">|</li>
                  <li>
                    <a href="auth/register" className="title hidden-xs">
                      Register
                    </a>
                  </li>
                  <li>
                    <Link to="/cart" className="title">
                      <i className="fa fa-shopping-cart"></i>
                      <sup className="cart-quantity">
                        {cartState.carts?.items.reduce(
                          (total, item) => total + item.quantity,
                          0
                        )}
                      </sup>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="navigation">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div id="navigation">
                  <ul>
                    <li className="active">
                      <Link to="/">Home </Link>
                    </li>
                    <li className="active">
                      <Link to="/">Categories</Link>
                      <ul>
                        {categoryState.categories?.map((category, index) => (
                          <li key={index}>
                            <Link to={`/product/list/${category.code}`}>
                              {category?.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li>
                      <Link to={"/about"}>About</Link>
                    </li>
                    <li className="has-sub">
                      <Link to="/">Pages</Link>
                      <ul>
                        <li>
                          <a href="checkout.html">Checkout Form</a>
                        </li>
                        <li>
                          <a href="cart.html">Cart</a>{" "}
                        </li>
                        <li>
                          <Link to="/auth/login">Login</Link>{" "}
                        </li>
                        <li>
                          <Link to="/auth/signup">Signup</Link>
                        </li>
                        <li>
                          <Link to="error404">404-page</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact-us.html">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* /.navigations*/}
            </div>
          </div>
        </div>
      </div>
      {/* /. header-section*/}
    </>
  );
}
