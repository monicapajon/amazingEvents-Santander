import "./Header.css";
import { links } from "../Links";
import icon from "../../../assets/icono.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { myCart } from "../../../Redux/Reducers/Cart";
import { useSelector } from "react-redux";

const Header = () => {
  const thisCart = useSelector(myCart);
  const [background, setBackground] = useState("");
  const [showMenu, setShowMenu] = useState("");
  const changeColorHeader = () => {
    if (document.documentElement.scrollTop > 0) {
      setBackground('notInTop');
    } else {
      setBackground('');
    }
  };
  const showAndHidden = () => {
    setShowMenu(showMenu === '' ? 'show' : '');
  };
  useEffect(() => {
    window.addEventListener('scroll', changeColorHeader);
  });
  console.log(showMenu);
  return (
    <header data-testid="header" className={`${background}`}>
      <div className={`headerContainer `}>
        <div className="logo">
          <img src={icon} width={50} height={50} />
        </div>{' '}
        <div className="menu-icon">
          <svg
            role="responsive"
            id="resp"
            version="1.1"
            width="40px"
            viewBox="0 0 256 256"
            onClick={showAndHidden}>
            <metadata>
              Svg Vector Icons : http://www.onlinewebfonts.com/icon
            </metadata>
            <g>
              <g>
                <path fill="#ffffff" d="M10,222.4h236v30H10V222.4L10,222.4z" />
                <path fill="#ffffff" d="M10,121.3h236v30H10V121.3L10,121.3z" />
                <path fill="#ffffff" d="M10,20.1h236v30H10V20.1L10,20.1z" />
              </g>
            </g>
          </svg>
        </div>
        <div data-testid="headerLinks" className={`headerLinks ${showMenu}`}>
          <nav>
            <ul>
              {" "}
              <li className="cartIcon">
                <Link to="/my-cart">
                  <svg version="1.1" viewBox="0 0 122 107" width="30px">
                    <g>
                      <path
                        fill="#ffffff"
                        d="M3.9,7.9C1.8,7.9,0,6.1,0,3.9C0,1.8,1.8,0,3.9,0h10.2c0.1,0,0.3,0,0.4,0c3.6,0.1,6.8,0.8,9.5,2.5c3,1.9,5.2,4.8,6.4,9.1 c0,0.1,0,0.2,0.1,0.3l1,4H119c2.2,0,3.9,1.8,3.9,3.9c0,0.4-0.1,0.8-0.2,1.2l-10.2,41.1c-0.4,1.8-2,3-3.8,3v0H44.7 c1.4,5.2,2.8,8,4.7,9.3c2.3,1.5,6.3,1.6,13,1.5h0.1v0h45.2c2.2,0,3.9,1.8,3.9,3.9c0,2.2-1.8,3.9-3.9,3.9H62.5v0 c-8.3,0.1-13.4-0.1-17.5-2.8c-4.2-2.8-6.4-7.6-8.6-16.3l0,0L23,13.9c0-0.1,0-0.1-0.1-0.2c-0.6-2.2-1.6-3.7-3-4.5 c-1.4-0.9-3.3-1.3-5.5-1.3c-0.1,0-0.2,0-0.3,0H3.9L3.9,7.9z M96,88.3c5.3,0,9.6,4.3,9.6,9.6c0,5.3-4.3,9.6-9.6,9.6 c-5.3,0-9.6-4.3-9.6-9.6C86.4,92.6,90.7,88.3,96,88.3L96,88.3z M53.9,88.3c5.3,0,9.6,4.3,9.6,9.6c0,5.3-4.3,9.6-9.6,9.6 c-5.3,0-9.6-4.3-9.6-9.6C44.3,92.6,48.6,88.3,53.9,88.3L53.9,88.3z M33.7,23.7l8.9,33.5h63.1l8.3-33.5H33.7L33.7,23.7z"
                      />
                    </g>
                  </svg>
                </Link>
                <div className="len-cart">
                  {thisCart.length > 0 ? thisCart.length : ""}
                </div>
              </li>
              {links.map((l, index) => (
                <li key={index}>
                  <a href={l.href}>{l.name}</a>
                
                </li>

              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
