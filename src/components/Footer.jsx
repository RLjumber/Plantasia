import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer_main">
      <div className="left_list_div">
        <ul className="list">
          <li>
            <a href="https://github.com/RLjumber">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ronald-jumber/">LinkedIn</a>
          </li>
          <li>
            <a href="mailto:ronaldjumber@gmail.com">Email</a>
          </li>
        </ul>
      </div>
      <div className="right_list_div">
        <ul className="list">
          <li>Last updated: {currentYear}</li>
          <li>
            Built with <a href="https://reactjs.org/">React</a> and pure CSS
          </li>
          <li>
            Designed by{" "}
            <a href="https://dribbble.com/RLJumber">RLJumber</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
