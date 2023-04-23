import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <ul className="header_content">
                <Link to="/" id="Plantasia">Plantasia</Link>
                <li>A Plant Index</li>
            </ul>

        </div>
    )
}

export default Header;