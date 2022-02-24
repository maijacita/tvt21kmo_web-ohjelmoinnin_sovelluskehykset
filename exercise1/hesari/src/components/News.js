import React from 'react';
import logo from './canesten500mg.png';

export default function News() {
  return (
            <div className="News-Container">
              <div className="News-item"> 
                  <h2>Tämän päivän uutiset</h2>          
                    <img src={logo} />
                    <li>Helsinki sekaisin!</li>
                  <p className="Title">Convoy Finland konkurssiin - Parkkisakot hiersivät, joutuivat tyytyä hoitovoiteisiin</p>
                <div>Klikkaa täältä lukeaksesi koko artikkelin</div>                          
              </div>
            </div>
);}
