import Banner from "../components/banner/Banner";
import SectionSeperator from "../components/section/SectionSeperator";
import MainCategory from "../layout/category/MainCategory";
import Footer from "../layout/footer/Footer";
import Header from "../layout/header/Header";
import ProductCarousel from "../layout/productCarousel/ProductCarousel";

const Home = ()=>{
    return(
        <div className="home">
            <Header/>
            <Banner/>
            <SectionSeperator/>
            <MainCategory/>
            <SectionSeperator/>
            <ProductCarousel/>
            <SectionSeperator/>
            <ProductCarousel/>
            <Footer/>
        </div>
       
    )
}

export default Home;