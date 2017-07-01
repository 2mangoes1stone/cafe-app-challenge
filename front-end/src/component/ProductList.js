import React from 'react'
import SelectProduct from './SelectProduct'

export default function ProductList({
    items
}) {
  return (
    <div>
    {
      items.map((item) => (
        <SelectProduct 
          key={ item._id }
          { ...item }
        />
      ))
    }
    </div>
  )
}