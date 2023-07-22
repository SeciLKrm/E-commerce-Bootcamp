import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useApi from "../../hooks/useApi";
import { removeCarts, setCarts } from "../../redux/cartSlice";

export default function CartPage() {
  const cartState = useSelector((state) => state.cartState);
  const [inputValue, setInputValue] = useState(null);
  const api = useApi();
  const dispatch = useDispatch();
  const handleInputChangeValue = async (item) => {
    const quantity = parseInt(inputValue);
    console.log(cartState.cart?.tokenValue);
    try {
      const cartResponse = await api.patch(
        `shop/orders/${cartState.carts?.tokenValue}/items/${item.id}`,
        {
          quantity,
        },
        {
          headers: { "Content-Type": "application/merge-patch+json" },
        }
      );
      console.log("cartResponse", cartResponse);
      dispatch(setCarts(cartResponse.data));
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      {/* page-header */}
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>Product List</li>
                  <li>Product Single</li>
                  <li>Cart</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /.page-header*/}
      {/* cart-section */}
      <div className="space-medium">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
              <div className="box">
                <div className="box-head">
                  <h3 className="head-title">My Cart (02)</h3>
                </div>
                {/* cart-table-section */}
                <div className="box-body">
                  <div className="table-responsive">
                    <div className="cart">
                      <table className="table table-bordered ">
                        <thead>
                          <tr>
                            <th>
                              <span>Item</span>
                            </th>
                            <th>
                              <span>Price</span>
                            </th>
                            <th>
                              <span>Quantity</span>
                            </th>
                            <th>
                              <span>Total</span>
                            </th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {cartState.carts?.items?.map((item, index) => (
                            <tr key={item.id}>
                              <td>
                                <a href="#">
                                  <img src="images/cart_product_1.png" alt="" />
                                </a>
                                <span>
                                  <a href="#">{item.productName}</a>
                                </span>
                              </td>
                              <td>{item.unitPrice} </td>
                              <td>
                                <div className="product-quantity">
                                  <div className="quantity">
                                    <input
                                      onChange={(e) => {
                                        setInputValue(e.target.value);
                                        handleInputChangeValue(item);
                                      }}
                                      type="number"
                                      className="input-text qty text"
                                      step="1"
                                      min="1"
                                      max="6"
                                      name="quantity"
                                      value="1"
                                      title="Qty"
                                      size={4}
                                      pattern="[0-9]*"
                                    />
                                  </div>
                                </div>
                              </td>
                              <td>{item.total} </td>

                              <th scope="row">
                                <a
                                  href="#"
                                  onClick={async () => {
                                    if (
                                      confirm(
                                        "Simek İstediğinizden Emin Misiniz?"
                                      )
                                    ) {
                                      await api.delete(
                                        `shop/orders/${cartState.carts?.tokenValue}/items/${item.id}`
                                      );
                                    }
                                    dispatch(removeCarts());
                                  }}
                                  className="btn-close">
                                  <i className="fa fa-times-circle-o" />
                                </a>
                              </th>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    {/* /.cart-table-section */}
                  </div>
                </div>
              </div>

              <a href="#" className="btn-link">
                <i className="fa fa-angle-left" /> back to shopping
              </a>
            </div>
            {/* cart-total */}
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="box mb30">
                <div className="box-head">
                  <h3 className="head-title">Price Details</h3>
                </div>
                <div className="box-body">
                  <div className=" table-responsive">
                    <div className="pay-amount ">
                      <table className="table mb20">
                        <tbody>
                          <tr>
                            <th>
                              <span>Price (2 items)</span>
                            </th>
                            <td>
                              {cartState.carts?.currencyCode}&nbsp
                              {cartState.carts?.itemsTotal}{" "}
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <span>Delivery Charges</span>
                            </th>
                            <td>
                              <strong className="text-green">
                                {cartState.carts?.currencyCode}&nbsp
                                {cartState.carts?.shippingTotal}
                              </strong>
                            </td>
                          </tr>
                        </tbody>
                        <tbody>
                          <tr>
                            <th>
                              <span
                                className="mb0"
                                style={{ fontWeight: "700" }}>
                                Amount Payable
                              </span>
                            </th>
                            <td style={{ fontWeight: "700", color: "#1c1e1e" }}>
                              {cartState.carts?.currencyCode}&nbsp
                              {cartState.carts?.total}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <button className="btn btn-primary btn-block">
                      Proceed To Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
