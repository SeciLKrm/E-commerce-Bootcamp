import { useEffect, useState } from "react";
import useApi from "../../../hooks/useApi";
import { useParams } from "react-router-dom";
import ProductBlock from "../../../components/product-block";

const ProductList = () => {
  const api = useApi();
  const params = useParams();
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  console.log(products);
  useEffect(() => {
    // categories'teki ürünleri getirir
    (async () => {
      const productsResp = await api.get("shop/products", {
        params: {
          "productTaxons.taxon.code": params.code,
          "order[price]": "asc",
          "order[createdAt]": "asc",
          page,
          itemsPerPage,
        },
      });
      console.log("productsResp", productsResp.data);
      setProducts(productsResp.data);
    })();
  }, [params.code]);

  return (
    <>
      {/* product-list */}
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
              {/* sidenav-section */}
              <div id="cssmenu">
                <ul>
                  <li className="has-sub">
                    <a href="#">CATEGORY</a>
                    <ul>
                      <li>
                        <a href="#">Smart Phones</a>
                      </li>
                      <li>
                        <a href="#">Cell Phones</a>
                      </li>
                      <li className="last">
                        <a href="#">Android Phones</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              {/* /.sidenav-section */}
            </div>
            <div className="col-lg-9 col-md-9 col-sm-8 col-xs-12">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb10 alignright">
                  <form>
                    <div className="select-option form-group">
                      <select name="select" className="form-control">
                        <option value="">Select</option>
                        <option value="">Best Match</option>
                        <option value="">Low Price</option>
                        <option value="">High Price</option>
                      </select>
                    </div>
                  </form>
                </div>
              </div>
              <div className="row">
                {products.map((product) => (
                  <ProductBlock key={product.id} product={product} />
                ))}
              </div>
              <div className="row">
                {/* pagination start */}
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="st-pagination">
                    <ul className="pagination">
                      <li>
                        <a href="#" aria-label="previous">
                          <span aria-hidden="true">Previous</span>
                        </a>
                      </li>
                      <li className="active">
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a href="#" aria-label="Next">
                          <span aria-hidden="true">Next</span>
                        </a>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
                {/* pagination close */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
