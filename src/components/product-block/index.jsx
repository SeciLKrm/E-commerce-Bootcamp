import { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import { Link } from "react-router-dom";

const ProductBlock = (props) => {
  const api = useApi();

  const [productDetail, setProductDetail] = useState(null);
  useEffect(() => {
    (async () => {
      const variantCode = props.product.defaultVariant.split("/").reverse()[0];
      const productDetailResponse = await api.get(
        "shop/product-variants/" + variantCode
      );
      setProductDetail(productDetailResponse?.data);
      console.log("productDetailResp", productDetailResponse.data);
    })();
  }, []);

  return (
    <div
      key="props.product.id"
      className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb30">
      <div className="product-block">
        <div className="product-img ">
          <img
            src={"https://ecommerce.udemig.dev" + props.product?.images[0].path}
            alt=""
          />
        </div>
        <div className="product-content">
          <h5>
            <a href="#" className="product-title">
              {props.product?.name}
            </a>
          </h5>
          <div className="product-meta">
            <a href="#" className="product-price">
              ${productDetail?.price}
            </a>

            {props.product?.discountedPrice ? (
              <a href="#" className="discounted-price">
                $ {productDetail?.originalPrice}
              </a>
            ) : null}
          </div>
          <div className="shopping-btn">
            <Link
              to={`/product/detail/${props.product.code}`}
              className="product-btn btn-like">
              <i className="fa fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBlock;
