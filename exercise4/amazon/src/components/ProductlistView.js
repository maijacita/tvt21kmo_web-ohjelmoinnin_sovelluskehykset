import React from 'react'
import Productlist from './Productlist'

export default function ProductlistView(props) {
 return (
    <div className ="productContainer">
    {props.productlist.map(p => <Productlist img={p.img} name={p.name} description={p.description} price={p.price} rating={p.rating}/>) }
</div>
 )   
}