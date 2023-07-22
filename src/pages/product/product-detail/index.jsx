import { useEffect, useState } from "react";
import useApi from "../../../hooks/useApi";
import ProductBasicInfo from "./components/product-basic-info";
import { useParams } from "react-router-dom";
import ProductDescription from "./components/product-description";
import ProductReview from "./components/product-review";

const ProductDetail = () => {
  const params = useParams();
  const api = useApi();
  const [loading, setLoading] = useState(true);
  const [productDetail, setProductDetail] = useState(null);
  const [variants, setVariants] = useState([]);
  useEffect(() => {
    setLoading(true);
    (async () => {
      const productDetailResp = await api.get(`shop/products/${params.code}`);

      const promises = productDetailResp.data.variants.map(
        (variantItemString) => {
          const variantCode = variantItemString.split("/").reverse()[0];
          return api.get(`shop/product-variants/${variantCode}`);
        }
      );
      const variantResp = await Promise.all(promises);
      console.log(variantResp);
      setProductDetail(productDetailResp.data);
      // console.log(productDetailResp);
      setVariants(variantResp.map((item) => item.data));
      setLoading(false);
    })();
  }, [params.code]);

  console.log(" variants", variants);
  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <h2> Loading </h2>
      </div>
    );
  }
  return (
    <div className="content">
      <ProductBasicInfo productDetail={productDetail} variants={variants} />
      <ProductDescription productDetail={productDetail} variants={variants} />
      <ProductReview productDetail={productDetail} variants={variants} />
    </div>
  );
};

export default ProductDetail;
