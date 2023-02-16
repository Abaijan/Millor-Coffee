import React, { useEffect, useState } from "react";
import "../Header/Header.scss";
import millerLogo from "../../assets/millerLofo.svg";
import searchlogo from "../../assets/search.svg";
import basketlogo from "../../assets/basket.svg";
import userlogo from "../../assets/user.svg";
import { Link } from "react-router-dom";
import arrow from "../../assets/arrow.svg";

const Header = () => {
  const [show, setShow] = useState(false);
  const [text, setText] = useState('')
  const [title, setTitle] = useState('Каталог товаров')
  const [display, setDisplay] = useState('block')
  const handleInput = () => {
      setDisplay('none')
  }
  const handleshow = () => {
    setShow(!show)
  }
  const handleopen = (catalog) => {
    setShow(!show);
    setTitle(catalog)
  }
  useEffect(()=>{
    document.body.children[1].childNodes[3].addEventListener('click', ()=>setDisplay('block'))
  }, [])
  return (
    <>
      <div className="white"></div>
      <div className="header">
        <div className="container">
          <div className="header__inner">
            <div className="header__left">
              <Link to="/">
                <img
                  src={millerLogo}
                  onClick={()=>setTitle('Каталог Товаров')}
                  width="179px"
                  height="80px"
                  alt="header logo"
                />
              </Link>
            </div>
            <div className="header__center">
              <ul className={`header__list ${display}`}>
                <div className="accordion">
                  <li className="header__item1">
                    <div
                      className="header-accordion-title"
                      onClick={handleshow}
                      >
                      {title}
                    </div>
                    <div className="si">
                      <img
                        onClick={handleshow}
                        src={arrow}
                        className={show ? "arrowdown" : "arrowup"}
                        height="10px"
                        alt=""
                      />
                    </div>
                  </li>
                  {show && (
                    <div className="header-accordion">
                      <Link to="/coffee">
                        <span onClick={(e)=>handleopen(e.target.innerText)}>
                          Свежеобжаренный кофе
                        </span>
                      </Link>
                      <br />
                      <Link to="/tea">
                        <span onClick={(e)=>handleopen(e.target.innerText)}>
                          Чай и кофейные напитки
                        </span>
                      </Link>
                      <br />
                      <Link to="/wending">
                        <span onClick={(e)=>handleopen(e.target.innerText)}>
                          Продукция для вендинга
                        </span>
                      </Link>
                      <br />
                      <Link to="/healthy">
                        <span onClick={(e)=>handleopen(e.target.innerText)}>
                          Здоровое питание
                        </span>
                      </Link>
                    </div>
                  )}
                </div>
                <li className="header__item2">
                  <Link to="/blog">Блог</Link>
                </li>
                <li className="header__item">
                  <Link to="/contacts">Контакты</Link>
                </li>
              </ul>
            </div>
              <div className={`header__input-block ${display}`}>
                <input value={text} onChange={e => setText(e.target.value)} type="search" placeholder="Поиск по товарам" className={`header__input ${display}`} />
              </div>
            <div className="header__right">
              <a href="#">
                <img
                  onClick={handleInput}
                  className={`header-search ${display}`}
                  src={searchlogo}
                  alt="header search"
                />
              </a>
              <a href="#">
                <img
                  className="header-basket"
                  src={basketlogo}
                  alt="header basket"
                />
              </a>
              <a href="#">
                <img className="header-user" src={userlogo} alt="header user" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="white"></div>
    </>
  );
};

export default Header;
