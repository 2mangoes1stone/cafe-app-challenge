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

class componentName extends Component {
  constructor() {
    super()
    this.state = { quantity: 0 }
  }

  handleIncrement = ({quantity}) => {
    this.setState((prevState) => {
      prevState.number += 1
    })
  }

  handleDecrement = ({quantity}) => {
    this.setState((prevState) => {
      prevState.number -= 1
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
                quantity={quantity}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
          />
        </div>
      }
        
      </div>
    )
  }
}

export default componentName