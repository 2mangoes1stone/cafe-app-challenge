import React from 'react'


export default function Product({
  name,
  price
}) {
  return (
    <div>
      {
        <div>
          <h3>{ name }<small>{' '}{ price }</small></h3>
        </div>
      }
    </div>
  )
}
