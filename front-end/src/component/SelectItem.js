import React from 'react'

function handleClickIncrement(event, onIncrement) {
  event.preventDefault()
  const upClick = event.target
    onIncrement({ upClick })
}

function handleClickDecrement(event, onDecrement) {
  event.preventDefault()
  const downClick = event.target
    onDecrement({ downClick })
}

export default function SelectItem({
  onIncrement,
  onDecrement,
  quantity
}) {
  return (
    <div>
      {
        <div>
          <button onClick={ (event) => handleClickIncrement(event, onIncrement) } > + </button>
            { ' ' + quantity + ' ' }
          <button onClick={ (event) => handleClickDecrement(event, onDecrement) } > - </button>
        </div>
      }
    </div>
  )
}
