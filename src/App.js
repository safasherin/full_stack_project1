import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Instafeed from "./components/Instafeed/Instafeed";
import Navbar from "./components/Navbar/Navbar";
import ProductList from "./components/ProductList/ProductList";
import Products from "./components/Products/Products";
import Pros from "./components/Pros/Pros";
import Testimonials from "./components/Testimonials/Testimonials";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";


function App() {

  // console.log(process.env.REACT_APP_ENDPOINT)
  return (
    <div className="app" style={{ margin: "0px", padding: "0px" }}>
      <Navbar />
      <Header />
      <ProductList />
      <Products />
      <Pros />
      <Testimonials />
      <Instafeed />
      <Footer />
    </div>
  );
}

export default App;
