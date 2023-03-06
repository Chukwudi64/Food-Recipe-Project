import React from 'react'
import img from '../img/food.webp'
import './Card.css'
import {useCart} from "react-use-cart"

function Card(props) {
    const {Ingredient,Ingredientlist,Title,price} = props.recipes //destructuring
    const {addItem} = useCart();

  return (
    <div>
        <div class="card">
  <img src={img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{Title}</h5>
    <p class="card-text">{Ingredient}</p>
    <p class="card-text">{Ingredientlist}</p>
    <p class="card-text">{price}</p> 
     <a href="#" class="btn btn-primary" onClick={() => addItem(props.recipes)}>Add To Cart</a>
  </div>
</div>
    </div>
  )
}

export default Card