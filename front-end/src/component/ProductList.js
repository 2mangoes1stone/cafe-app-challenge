import React from 'react'
import Product from './Product'

export default function ProductList({
    items
}) {
  return (
    <div>
    {
      items.map((item) => (
        <Product 
          key={ item._id }
          { ...item }
        />
      ))
    }
    </div>
  )
}