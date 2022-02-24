import Searchbar from './components/Searchbar'
import React from "react";
import { useState } from "react";
import './App.css';
import toaster from './toaster.jpeg'
import vedenkeitin from './vedenkeitin.jpg'
import paristo from './paristo.jpg.crdownload'
import valaisin from './valaisin.jpg'
import langatonhiiri from './langatonhiiri.jpg'
import rengas from './rengas.jfif'
import puhelin from './puhelin.jpg'
import kahvinkeitin from './kahvinkeitin.jpg'
import vatkain from './vatkain.jpg'
import barbara from './barbara.jpg'
import five from './five.png'
import four from './four.jpg'
import one from './one.png'
import ProductlistView from './components/ProductlistView';
import EditorView from './components/EditorView';

function App() {

    const [editorModeOn, seteditorModeOn] = useState(false);
    const [ productlist, setproductlist ] = useState([
        {img: toaster ,name: 'Leivänpaahdin',description: "Markkinoiden hirvein paahdin",price: 2, rating: one},
        {img: vedenkeitin ,name: 'Vedenkeitin',description: "Esteettinen keitin",price: 12, rating: four},
        {img: paristo ,name: 'Patteri',description: "Tämä on paristo",price: 99.99, rating: five},
        {img: valaisin ,name: 'Valaisin',description: "Kattolamppu",price: 1000.69, rating: one},
        {img: langatonhiiri ,name: 'Pelihiiri',description: "Joka pojan pelihiiri",price: 55, rating: five},
        {img: rengas ,name: 'Talvirengas',description: "Kitkattomat talvirenkaat",price: 600, rating:five}, 
        {img: puhelin ,name: 'Vanhuspuhelin',description: "Mummojen lemppari, ei toimi ig",price: 69.69, rating: one},
        {img: kahvinkeitin ,name: 'Kahvinkeitin',description: "Peruskeitin",price: 10.60, rating: four},
        {img: vatkain ,name: 'Sähkövatkain',description: "Kun käsi ei riitä",price: 100, rating: five },
        {img: barbara ,name: 'Tomi',description: "Tomi tekee sun läksyt",price: 42068, rating: one }   
    ]);

   
  return (
    <div className="App"> 
    <button onClick={ () => seteditorModeOn(!editorModeOn) }>Admin mode</button>
      <Searchbar/>
      {editorModeOn == true ? <EditorView /> : <ProductlistView productlist={productlist} />}

    </div>
  );
}

export default App;