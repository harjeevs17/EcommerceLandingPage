import { useContext, useEffect, useState } from "react";
import { getAllProducts } from "../api/api";
import { UserContext } from "../App";
import Banner from "../components/banner/Banner";
import SectionSeperator from "../components/section/SectionSeperator";
import MainCategory from "../layout/category/MainCategory";
import Footer from "../layout/footer/Footer";
import Header from "../layout/header/Header";
import ProductCarousel from "../layout/productCarousel/ProductCarousel";

const Home = ()=>{
    const { state, dispatch } = useContext(UserContext);
    const [data,setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
          await getAllProducts(setData);
        }
        fetchData();
      }, [setData]);
    return(
        <div className="home">
            <Header/>
            <Banner/>
            <p>{!state?"":state.name}</p>
            <SectionSeperator title="Latest Releases"/>
            <MainCategory/>
            <SectionSeperator title="Men" />
            {data.length>0?<ProductCarousel data={data} sex="male"/>:""}
            
            
        </div>
    )
}
export default Home;

/*<SectionSeperator title="Women"/>
            <ProductCarousel sex="female"/>
            <SectionSeperator title="Best Selling"/>
            <ProductCarousel sex="female"/> */