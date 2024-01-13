import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './Component/Product';

export interface IProduct{
  id:number;
  title:string;
  price:number;
}


function handleAddtoCart(id:number){
console.log("click",id);
}


function App() {
  const [products, setproducts] = useState<IProduct[]>([
    {id:1,
    title:'Iphone',
    price:300},
    {id:2,
      title:'Macbook',
      price:400}
  ]);
  return (<>
    {
      products.map((product)=>(
      <Product product={product} key={product.id} handleAddtoCartClick={handleAddtoCart}/>))
    }</>
  );
}

export default App;
