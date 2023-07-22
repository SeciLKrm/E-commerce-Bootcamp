import { useDispatch, useSelector } from "react-redux";
import useApi from "../../../../hooks/useApi";
import { setCarts } from "../../../../redux/cartSlice";
import { useState } from "react";
import { SplideSlide, Splide } from "@splidejs/react-splide";
import { combineBaseUrl } from "../../../../utils";

const ProductBasicInfo = ({ productDetail, variants }) => {
  const cartState = useSelector((state) => state.cartState);
  const dispatch = useDispatch();
  const api = useApi();
  console.log("cartState", cartState);

  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  // baskete ürün ekleme
  const handleAddButtonClick = () => {
    //add product to basket
    (async () => {
      const cartResp = await api.post(
        `shop/orders/${cartState.carts?.tokenValue}/items`,
        { productVariant: variants[selectedVariantIndex].code, quantity }
      );
      console.log("cartResp", cartResp);
      dispatch(setCarts(cartResp.data));
    })();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="box">
            {/* product-description */}
            <div className="box-body">
              <div className="row">
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                  <Splide aria-label="Product Images">
                    {productDetail.images.map((image, index) => (
                      <SplideSlide key={index}>
                        <img src={combineBaseUrl(image.path)} />
                      </SplideSlide>
                    ))}
                  </Splide>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <div className="product-single">
                    <h2>{productDetail.name} </h2>
                    <div className="product-rating">
                      <span>
                        <i className="fa fa-star"></i>
                      </span>
                      <span>
                        <i className="fa fa-star"></i>
                      </span>
                      <span>
                        <i className="fa fa-star"></i>
                      </span>
                      <span>
                        <i className="fa fa-star"></i>
                      </span>
                      <span>
                        <i className="fa fa-star-o"></i>
                      </span>
                      <span className="text-secondary">
                        &nbsp;(4.8 Review Stars)
                      </span>
                    </div>
                    <p className="product-price" style={{ fontSize: "38px" }}>
                      $ {variants[selectedVariantIndex].price}
                      <strike>
                        ${variants[selectedVariantIndex].originalPrice}
                      </strike>
                    </p>
                    <p>{productDetail.shortDescription}</p>
                    <div className="product-quantity">
                      <h5>Quantity</h5>
                      <div className="quantity mb20">
                        <input
                          onChange={(e) =>
                            setQuantity(parseInt(e.target.value))
                          }
                          type="number"
                          className="input-text qty text"
                          step="1"
                          min="1"
                          max="10"
                          name="quantity"
                          value={quantity}
                          title="Qty"
                          size="4"
                          pattern="[0-9]*"
                        />
                      </div>
                    </div>
                    {variants.length > 1 && (
                      <div className="col-md-4">
                        <h5>Variants</h5>
                        <div className="quantity mb20">
                          <select
                            className="input-text qty text"
                            onChange={(e) => {
                              setSelectedVariantIndex(parseInt(e.target.value));
                            }}>
                            {/* faklı size'lar için */}
                            {variants.map((variant, index) => {
                              return (
                                <option key={index} value={index}>
                                  {variant.name}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                      </div>
                    )}

                    <button
                      type="submit"
                      className="btn btn-default"
                      onClick={handleAddButtonClick}>
                      <i className="fa fa-shopping-cart"></i>&nbsp;Add to cart
                    </button>
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

export default ProductBasicInfo;
