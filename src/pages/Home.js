import { useContext, useEffect } from "react";
import { UserContext } from "../App";
import Banner from "../components/banner/Banner";
import SectionSeperator from "../components/section/SectionSeperator";
import MainCategory from "../layout/category/MainCategory";
import Footer from "../layout/footer/Footer";
import Header from "../layout/header/Header";
import ProductCarousel from "../layout/productCarousel/ProductCarousel";

const Home = ()=>{
    const { state, dispatch } = useContext(UserContext);

    return(
        <div className="home">
            <Header/>
            <Banner/>
            <p>{!state?"":state.name}</p>
            <SectionSeperator title="Latest Releases"/>
            <MainCategory/>
            <SectionSeperator title="Men" />
            <ProductCarousel sex="male"/>
            <SectionSeperator title="Women"/>
            <ProductCarousel sex="female"/>
            <SectionSeperator title="Best Selling"/>
            <ProductCarousel sex="female"/>
        </div>
    )
}
export default Home;