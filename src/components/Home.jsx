import Plants from "./Plants"
import Welcome from "./Welcome";
import "./Home.css";
import Footer from "./Footer";

const Home = () => {
    return (
        <div className="home">
            <Welcome />
            <Plants />
            <Footer />
        </div>
    )
};


export default Home;