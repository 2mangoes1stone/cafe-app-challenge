// import React from 'react'
// import Product from './Product'

// export default function SelectProduct({
//   name,
// }) {
//   price
//   return (
//     <div>
//       {
//         <div>
//           <Product
//                 name={ name }
//                 price={ price }
//           />
//         </div>
//       }
//     </div>
//   )
// }


import React, { Component } from 'react'
import Product from './Product'
import SelectItem from './SelectItem'

class SelectProduct extends Component {
  constructor() {
    super()
    this.state = { quantity: 0 }
  }

  handleIncrement = () => {
    this.setState((prevState) => {
      return {
        quantity: ++prevState.quantity
      }
    })
  }


handleDecrement = () => {
    this.setState((prevState) => {
      return {
        quantity: --prevState.quantity
      }
    })
  }

  render () {
    const { quantity } = this.state
    return (
      <div>
      {
        <div>
          <Product
                name={ this.props.name }
                price={ this.props.price }
          />
          <SelectItem 
                quantity={ quantity }
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
          />
        </div>
      }
        
      </div>
    )
  }
}

export default SelectProduct