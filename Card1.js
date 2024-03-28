import React, { useState } from 'react';
import './card1.css';

const list = [
    {
        title:"Maison à vendre à Casablanca",
        img:"andrea-davis-hZnEeno-IPo-unsplash.jpg",
        desc:"Ain diab casa blanca",
        prix:"10000.550 DH",
        surface:"2300 M²"
    },
    {
        title:"Maison à vendre à Casablanca",
        img:"lotus-design-n-print-rk_t-yyJak0-unsplash.jpg",
        desc:"Ain diab casa blanca",
        prix:"10000.550 DH",
        surface:"2300 M²"
    },
    {
        title:"Maison à vendre à Casablanca",
        img:"lotus-design-n-print-rk_t-yyJak0-unsplash.jpg",
        desc:"Ain diab casa blanca",
        prix:"10000.550 DH",
        surface:"2300 M²"
    },
    {
        title:"Maison à vendre à Casablanca",
        img:"lotus-design-n-print-rk_t-yyJak0-unsplash.jpg",
        desc:"Ain diab casa blanca",
        prix:"10000.550 DH",
        surface:"2300 M²"
    },
    {
        title:"Maison à vendre à Casablanca",
        img:"lotus-design-n-print-rk_t-yyJak0-unsplash.jpg",
        desc:"Ain diab casa blanca",
        prix:"10000.550 DH",
        surface:"2300 M²"
    },
    {
        title:"Maison à vendre à Casablanca",
        img:"lotus-design-n-print-rk_t-yyJak0-unsplash.jpg",
        desc:"Ain diab casa blanca",
        prix:"10000.550 DH",
        surface:"2300 M²"
    },
    {
        title:"Maison à vendre à Casablanca",
        img:"lotus-design-n-print-rk_t-yyJak0-unsplash.jpg",
        desc:"Ain diab casa blanca",
        prix:"10000.550 DH",
        surface:"2300 M²"
    },
];

export default function Card1() {
    const [displayedCards, setDisplayedCards] = useState(3);
    const [hideImage, setHideImage] = useState(false);
  
    const loadMoreCards = () => {
      // Mettre à jour l'état pour afficher toutes les cartes et masquer l'image
      setDisplayedCards(list.length);
      setHideImage(true);
    };
  
    return (
      <div>
        <h1>Populaire résistance</h1>
        <div className="container">
          <div className="row">
            {list.slice(0, displayedCards).map((item, index) => {
              return (
                <div className="col-4" key={index}>
                  <div className="card">
                    <img src={item.img} alt={item.title} />
                    <span>
                      <h5>{item.title}</h5>
                      <p>{item.desc}</p>
                      <p>{item.prix}</p>
                      <p>{item.surface}</p>
                    </span>
                    <button>voire plus</button>
                    <button className="bt">
                      <img className="im" src="etoile.png" alt="" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {hideImage || (displayedCards < list.length && (
          <div>
            <p className="h"></p>
          </div>
        ))}
        {!hideImage && (
          <img
            className="im2"
            src="fleche-droite.png"
            alt=""
            onClick={loadMoreCards}
          />
        )}
      </div>
    );
  }