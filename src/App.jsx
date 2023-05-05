
import "./App.scss";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart/Cart";
import CategorySearch from "./pages/CategorySearch";
import Detail from "./pages/Detail/Detail";
import SearchResult from "./pages/SearchResult";
import { getToastState } from "./store/Toast";
import { useSelector } from "react-redux";
import Toast from './components/Toast/Toast'
function App() {
  const {active,text}=useSelector(getToastState)
  return (
    <>
      <Header />
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/detail/:id" element={<Detail/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/categories/:category" element={<CategorySearch/>}></Route>
          <Route path="/search/:key" element={<SearchResult/>}></Route>
        </Routes>
      </div>
      {active ? <Toast text={text}/> : null}
    </>
  );
}

export default App;
