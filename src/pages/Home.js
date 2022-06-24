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
            <SectionSeperator title="Latest Releases"/>
            <MainCategory/>
            <SectionSeperator title="Men" />
            <ProductCarousel sex="male"/>
            <SectionSeperator title="Women"/>
            <ProductCarousel sex="female"/>
            <SectionSeperator title="Best Selling"/>
            <ProductCarousel sex="female"/>
            <Footer/>
        </div>
       
    )
}

export default Home;