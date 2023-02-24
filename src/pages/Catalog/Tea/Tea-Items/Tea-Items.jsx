import React, { useEffect } from 'react'
import rating from '../../../../assets/Catalog/Coffee/Filters/rating.svg'
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TeaItems = ({type}) => {
  const [cards, setCards] = useState([])
  useEffect(()=>{
    axios
    .get('http://localhost:3333/coffe-drinks')
    .then(resp => {
      setCards(resp.data[type])
    })
  }, [type])
  return (
    <> 
      <div className="coffee__cards">
        <div className="container">
          <div className="coffee__cards-inner">
            <h4 className='cortirovka'>Сортировка</h4>
            <div className="coffee__cards-inner-row">
              {
                cards.map(item => (
                  <div key={item.id} className="coffee__cards-inner-row-card">
                  <div className="tea__cards-inner-row-card-top">
                    <div className="tea__cards-inner-row-card-top-right">
                      <div className="tea__cards-inner-row-card-center-right-rating">
                        <div className="rating" style={{backgroundImage: `url(${rating})`, height: '12px', width: `${(Math.floor(item.rating[0]) + item.rating[2])}px`, backgroundSize: '50px', backgroundRepeat: 'no-repeat', position: 'relative'}}></div>
                        <h4>{item.rating}</h4>
                      </div>
                      <select>
                        <option value="100g">100г</option>
                        <option value="300g">300г</option>
                        <option value="500g">500г</option>
                        <option value="1000g">1000г</option>
                      </select>
                    </div>
                  </div>
                  <div className="coffee__cards-inner-row-card-center">
                    <Link to=''>
                      <img src={item.image} height='221px' alt="" />
                    </Link>
                    {/* {item.category.map(cy => <p key={cy.length}>{cy === 'Скидки' ? <><div className="discount">%</div></> : null}</p>)} */}
                  </div>
                  <div className="coffee__cards-inner-row-card-bottom">
                    <h4>{item.title}</h4>
                    <p>{item.subtitle}</p>
                    <Link to='' className="treedots">Больше</Link><>...</>
                    <div className="coffee__cards-inner-row-card-bottom-bottom">
                      <h3>{item.price}</h3>
                      <button>В корзину</button>
                    </div>
                  </div>
                </div>
                ))
              }
            </div>
          </div> 
        </div>
      </div>
    </>
  );
}

export default TeaItems