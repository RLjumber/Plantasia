import "./Welcome.css";

const source = "https://perenual.com/";

const Welcome = () => {
    return (
        <div className="welcome_main">
            <div className="main_title">
                <h1>Welcome to your personal plant index!</h1>
                <h4>All information regarding the plants on this page fetched from {source}</h4>
            </div>
            <div className="extra_info">
                <h2>Browse through over 6000 plants, click one for more information!</h2>
                <h4>This is strictly a plant index, plants are not for sale, to buy please visit {source}</h4>
            </div>
        </div>
        )
};

export default Welcome;