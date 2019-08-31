import React from "react";
import search_icon from "../../assets/images/search-icon.svg";
import shopping_cart_icon from "../../assets/images/shopping-cart-icon.svg";
import menu_icon from "../../assets/images/menu-icon.svg";

import classnames from "classnames";

import MobileSidebar from "./mobile-sidebar";

const Header = props => {
  return (
    <header className="header">
      <div className="top-header">
        <div className="top-header__logo">LOGO</div>
        <div className="top-header__search">
          <form className="top-header__search--form">
            <input
              type="text"
              name=""
              id=""
              className="top-header__search--input"
              placeholder="Search for products, brands and categories"
            />
            <button className="top-header__search--btn">
              <img
                src={search_icon}
                alt="search icon"
                className="top-header__search--icon"
              />
            </button>
          </form>
        </div>
        <div className="top-header__navbar">
          <nav className="top-header__nav">
            <ul>
              <li>
                <a href="#">Login</a>
              </li>
              <li>
                <a href="#">Register</a>
              </li>
            </ul>
          </nav>
          <div className="top-header__cart">
            <img
              src={shopping_cart_icon}
              alt="cart image"
              className="top-header__cart--img"
            />
            <div className="top-header__cart--count">5</div>
          </div>
        </div>
      </div>
      <div className="main-header">
        <div className="main-header__menu">
          <img
            src={menu_icon}
            alt="menu icon"
            className="main-header__menu-icon"
            onClick={() => props.toggleSideBar()}
          />
          <p>MENU</p>
        </div>
        <div className="main-header__toggler">o</div>
        <nav className="main-header__nav">
          <ul className="mainMenu">
            <li className="mainMenu-item">
              <a href="#" className="mainMenu-link">
                Men
              </a>
              <ul className="subMenu">
                <li className="subMenu-item">
                  <a href="#" className="subMenu-link">
                    Men Shoes
                  </a>
                  <ul className="subMenu__miniMenu">
                    <li className="subMenu__miniMenu-item">
                      <a href="#" className="subMenu__miniMenu-link">
                        lorem
                      </a>
                    </li>
                    <li className="subMenu__miniMenu-item">
                      <a href="#" className="subMenu__miniMenu-link">
                        lorem ipsum
                      </a>
                    </li>
                    <li className="subMenu__miniMenu-item">
                      <a href="#" className="subMenu__miniMenu-link">
                        lorem bitter
                      </a>
                    </li>
                    <li className="subMenu__miniMenu-item">
                      <a href="#" className="subMenu__miniMenu-link">
                        bitter lorem
                      </a>
                    </li>
                    <li className="subMenu__miniMenu-item">
                      <a href="#" className="subMenu__miniMenu-link">
                        ipsum
                      </a>
                    </li>
                    <li className="subMenu__miniMenu-item">
                      <a href="#" className="subMenu__miniMenu-link">
                        ipsum lorem
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="subMenu-item">
                  <a href="#" className="subMenu-link">
                    Men Loafers
                  </a>
                  <ul className="subMenu__miniMenu">
                    <li className="subMenu__miniMenu-item">
                      <a href="#" className="subMenu__miniMenu-link">
                        lorem
                      </a>
                    </li>
                    <li className="subMenu__miniMenu-item">
                      <a href="#" className="subMenu__miniMenu-link">
                        lorem ipsum
                      </a>
                    </li>
                    <li className="subMenu__miniMenu-item">
                      <a href="#" className="subMenu__miniMenu-link">
                        lorem bitter
                      </a>
                    </li>
                    <li className="subMenu__miniMenu-item">
                      <a href="#" className="subMenu__miniMenu-link">
                        bitter lorem
                      </a>
                    </li>
                    <li className="subMenu__miniMenu-item">
                      <a href="#" className="subMenu__miniMenu-link">
                        ipsum
                      </a>
                    </li>
                    <li className="subMenu__miniMenu-item">
                      <a href="#" className="subMenu__miniMenu-link">
                        ipsum lorem
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="subMenu-item">
                  <a href="#" className="subMenu-link">
                    Men Sneakers
                  </a>
                  <ul className="subMenu__miniMenu">
                    <li className="subMenu__miniMenu-item">
                      <a href="#" className="subMenu__miniMenu-link">
                        lorem
                      </a>
                    </li>
                    <li className="subMenu__miniMenu-item">
                      <a href="#" className="subMenu__miniMenu-link">
                        lorem ipsum
                      </a>
                    </li>
                    <li className="subMenu__miniMenu-item">
                      <a href="#" className="subMenu__miniMenu-link">
                        lorem bitter
                      </a>
                    </li>
                    <li className="subMenu__miniMenu-item">
                      <a href="#" className="subMenu__miniMenu-link">
                        bitter lorem
                      </a>
                    </li>
                    <li className="subMenu__miniMenu-item">
                      <a href="#" className="subMenu__miniMenu-link">
                        ipsum
                      </a>
                    </li>
                    <li className="subMenu__miniMenu-item">
                      <a href="#" className="subMenu__miniMenu-link">
                        ipsum lorem
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="subMenu-item">
                  <a href="#" className="subMenu-link">
                    Men Boots
                  </a>
                  <ul className="subMenu__miniMenu">
                    <li className="subMenu__miniMenu-item">
                      <a href="#" className="subMenu__miniMenu-link">
                        lorem
                      </a>
                    </li>
                    <li className="subMenu__miniMenu-item">
                      <a href="#" className="subMenu__miniMenu-link">
                        lorem ipsum
                      </a>
                    </li>
                    <li className="subMenu__miniMenu-item">
                      <a href="#" className="subMenu__miniMenu-link">
                        lorem bitter
                      </a>
                    </li>
                    <li className="subMenu__miniMenu-item">
                      <a href="#" className="subMenu__miniMenu-link">
                        bitter lorem
                      </a>
                    </li>
                    <li className="subMenu__miniMenu-item">
                      <a href="#" className="subMenu__miniMenu-link">
                        ipsum
                      </a>
                    </li>
                    <li className="subMenu__miniMenu-item">
                      <a href="#" className="subMenu__miniMenu-link">
                        ipsum lorem
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="mainMenu-item">
              <a href="#" className="mainMenu-link">
                Women
              </a>
              <ul className="subMenu">
                <li className="subMenu-image"></li>
                <li className="subMenu-item">
                  <a href="#" className="subMenu-link">
                    Women Shoes
                  </a>
                  <ul className="subMenu__miniMenu">
                    <li className="subMenu__miniMenu-item">
                      <a href="#" className="subMenu__miniMenu-link">
                        lorem
                      </a>
                    </li>
                    <li className="subMenu__miniMenu-item">
                      <a href="#" className="subMenu__miniMenu-link">
                        lorem ipsum
                      </a>
                    </li>
                    <li className="subMenu__miniMenu-item">
                      <a href="#" className="subMenu__miniMenu-link">
                        lorem bitter
                      </a>
                    </li>
                    <li className="subMenu__miniMenu-item">
                      <a href="#" className="subMenu__miniMenu-link">
                        bitter lorem
                      </a>
                    </li>
                    <li className="subMenu__miniMenu-item">
                      <a href="#" className="subMenu__miniMenu-link">
                        ipsum
                      </a>
                    </li>
                    <li className="subMenu__miniMenu-item">
                      <a href="#" className="subMenu__miniMenu-link">
                        ipsum lorem
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="subMenu-item">
                  <a href="#" className="subMenu-link">
                    Women Loafers
                  </a>
                  <ul className="subMenu__miniMenu">
                    <li className="subMenu__miniMenu-item">
                      <a href="#" className="subMenu__miniMenu-link">
                        lorem
                      </a>
                    </li>
                    <li className="subMenu__miniMenu-item">
                      <a href="#" className="subMenu__miniMenu-link">
                        lorem ipsum
                      </a>
                    </li>
                    <li className="subMenu__miniMenu-item">
                      <a href="#" className="subMenu__miniMenu-link">
                        lorem bitter
                      </a>
                    </li>
                    <li className="subMenu__miniMenu-item">
                      <a href="#" className="subMenu__miniMenu-link">
                        bitter lorem
                      </a>
                    </li>
                    <li className="subMenu__miniMenu-item">
                      <a href="#" className="subMenu__miniMenu-link">
                        ipsum
                      </a>
                    </li>
                    <li className="subMenu__miniMenu-item">
                      <a href="#" className="subMenu__miniMenu-link">
                        ipsum lorem
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="subMenu-item">
                  <a href="#" className="subMenu-link">
                    Women Sneakers
                  </a>
                  <ul className="subMenu__miniMenu">
                    <li className="subMenu__miniMenu-item">
                      <a href="#" className="subMenu__miniMenu-link">
                        lorem
                      </a>
                    </li>
                    <li className="subMenu__miniMenu-item">
                      <a href="#" className="subMenu__miniMenu-link">
                        lorem ipsum
                      </a>
                    </li>
                    <li className="subMenu__miniMenu-item">
                      <a href="#" className="subMenu__miniMenu-link">
                        lorem bitter
                      </a>
                    </li>
                    <li className="subMenu__miniMenu-item">
                      <a href="#" className="subMenu__miniMenu-link">
                        bitter lorem
                      </a>
                    </li>
                    <li className="subMenu__miniMenu-item">
                      <a href="#" className="subMenu__miniMenu-link">
                        ipsum
                      </a>
                    </li>
                    <li className="subMenu__miniMenu-item">
                      <a href="#" className="subMenu__miniMenu-link">
                        ipsum lorem
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="subMenu-item">
                  <a href="#" className="subMenu-link">
                    Women Boots
                  </a>
                  <ul className="subMenu__miniMenu">
                    <li className="subMenu__miniMenu-item">
                      <a href="#" className="subMenu__miniMenu-link">
                        lorem
                      </a>
                    </li>
                    <li className="subMenu__miniMenu-item">
                      <a href="#" className="subMenu__miniMenu-link">
                        lorem ipsum
                      </a>
                    </li>
                    <li className="subMenu__miniMenu-item">
                      <a href="#" className="subMenu__miniMenu-link">
                        lorem bitter
                      </a>
                    </li>
                    <li className="subMenu__miniMenu-item">
                      <a href="#" className="subMenu__miniMenu-link">
                        bitter lorem
                      </a>
                    </li>
                    <li className="subMenu__miniMenu-item">
                      <a href="#" className="subMenu__miniMenu-link">
                        ipsum
                      </a>
                    </li>
                    <li className="subMenu__miniMenu-item">
                      <a href="#" className="subMenu__miniMenu-link">
                        ipsum lorem
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="mainMenu-item">
              <a href="#" className="mainMenu-link">
                Kids
              </a>
            </li>
            <li className="mainMenu-item">
              <a href="#" className="mainMenu-link">
                Brands
              </a>
            </li>
            <li className="mainMenu-item">
              <a href="#" className="mainMenu-link">
                Categories
              </a>
            </li>
            <li className="mainMenu-item">
              <a href="#" className="mainMenu-link">
                Latest Deals
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div
        className={classnames(
          "mainSideBar",
          { "mainSideBar-shown": props.sideBarShown },
          { "mainSideBar-close": !props.sideBarShown }
        )}
      >
        <ul className="mainSideBar-menu">
          <div className="mainSideBar-logo">
            <h2>LOGO</h2>
          </div>
          <div
            className="mainSideBar-cancel"
            onClick={() => props.toggleSideBar()}
          ></div>
          <li className="mainSideBar-item">
            <a
              href="#"
              className="mainSideBar-link subMenu-hasChild"
              data-toggle="collapse"
              href="#mensCategories"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Mens Categories
            </a>
            <ul className="subSideBar-menu collapse" id="mensCategories">
              <li className="subSideBar-item">
                <a
                  href="#"
                  className="subSideBar-link subMenu-hasChild"
                  data-toggle="collapse"
                  href="#mensSneakers"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseInner"
                >
                  Mens Sneakers
                </a>
                <ul className="miniSideBar-menu" id="mensSneakers">
                  <li className="miniSideBar-item">
                    <div className="miniSideBar-link">type A</div>
                  </li>
                  <li className="miniSideBar-item">
                    <div className="miniSideBar-link">type B</div>
                  </li>
                  <li className="miniSideBar-item">
                    <div className="miniSideBar-link">type C</div>
                  </li>
                </ul>
              </li>
              <li className="subSideBar-item">
                <a href="#" className="subSideBar-link">
                  Mens Sneakers
                </a>
              </li>
              <li className="subSideBar-item">
                <a href="#" className="subSideBar-link">
                  Mens Sneakers
                </a>
              </li>
            </ul>
          </li>
          <li className="mainSideBar-item">
            <a href="#" className="mainSideBar-link">
              Womens Categories
            </a>
          </li>
          <li className="mainSideBar-item">
            <a href="#" className="mainSideBar-link">
              Kids Categories
            </a>
          </li>
          <li className="mainSideBar-item">
            <a href="#" className="mainSideBar-link">
              All Brands
            </a>
          </li>
          <li className="mainSideBar-item">
            <a href="#" className="mainSideBar-link">
              Other Categories
            </a>
          </li>
          <li className="mainSideBar-item">
            <a href="#" className="mainSideBar-link">
              Latest Deals
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
