import "../../styles/scss/Header.scss";
import logo from "../../assets/Header/logo.svg";
import { Link } from "react-router-dom";

const HeaderLanding = () => {
  return (
    <header className="header  ">
      <div className="header-container ">
        <Link to={"/inicio"}>
          <figure className="header__image-container">
            <img src={logo} className="header__image"></img>
          </figure>
        </Link>
        <Link to="/login" className="header__button">
          Iniciar Sesion
        </Link>
      </div>
    </header>
  );
};

export default HeaderLanding;
