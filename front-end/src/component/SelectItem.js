import React from 'react'

export default function SelectItem({
  onIncrement,
  onDecrement,
  quantity
}) {
  return (
    <div>
      {
        <div>
          <button onClick={onIncrement} > + </button>
            { ' ' + quantity + ' ' }
          <button onClick={onDecrement} > - </button>
        </div>
      }
    </div>
  )
}
