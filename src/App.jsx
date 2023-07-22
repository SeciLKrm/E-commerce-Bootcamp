import Header from "./components/Header";
import MainPage from "./pages/mainPage";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import { useEffect } from "react";
import useApi from "./hooks/useApi";
import { useDispatch, useSelector } from "react-redux";
import { setCategories } from "./redux/categorySlice";
import ProductList from "./pages/product/product-list";
import ProductDetail from "./pages/product/product-detail";
import CartPage from "./pages/cart-page";
import { setCarts } from "./redux/cartSlice";
function App() {
  const dispatch = useDispatch();
  const api = useApi();
  const cartState = useSelector((state) => state.cartState);
  // categories listesini getirir (t_shirts,dresses..)
  useEffect(() => {
    (async () => {
      const result = await api.get("shop/taxons", {
        params: {
          page: 1,
          itemsPerPage: 30,
        },
      });
      console.log("result", result.data);
      dispatch(setCategories(result.data));
    })();
  }, []);

  // delete işleminden sonra state teki değişiklikleri tekrar alabilmek için ayrı async fun yazdık
  (async () => {
    /*
      Durumlar şunlar:
      - LS da hic token yoksa olustur yada al
      - lS da var ama Redux ta null ise mevcut tokeni kullanarak cart bilgisini al
      */
    const localStorageCartToken = localStorage.getItem("cartToken");
    if (localStorageCartToken === null) {
      // create cartToken send a {}
      const cartResponse = await api.post("shop/orders", {});
      // save cartToken to LS
      localStorage.setItem("cartToken", cartResponse.data.tokenValue);
      // send data to redux store
      dispatch(setCarts(cartResponse.data));
    }
    // bu kısmın calışması için cartReducer içinde REMOVE_CART action type ta cart i null a çektik
    else if (localStorageCartToken && cartState.carts === null) {
      const cartResponse = await api.get(
        `/shop/orders/${localStorageCartToken}`
      );
      dispatch(setCarts(cartResponse.data));
    }
  })();

  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/auth">
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="/product">
            <Route path="list/:code" element={<ProductList />} />
            <Route path="detail/:code" element={<ProductDetail />} />
          </Route>
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
