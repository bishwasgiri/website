import Nav from "./Nav";
import Banner from "./Banner";
import Content from "./Content";
import Footer from "./Footer";

function Home(props){
    const handclick = props.handleclick;
    const val = props.product;
    return(
        <div className="container">
            <Nav/>
            <Banner/>
            <Content  content = {val} handleClick = {handclick}/>
            <Footer/>
        </div>
    )
}

export default Home;