import React from 'react'
import { IProduct } from '../App' 


interface productProps{
    product:IProduct;
    handleAddtoCartClick(id:number):void;
}
const Product = ({product,handleAddtoCartClick}:productProps) => {
  return (
    <div>
       <div>{product.title}</div> 
       <button onClick={()=>handleAddtoCartClick(product.id)}>Add to cart</button>
        </div>
  )
}

export default Product;