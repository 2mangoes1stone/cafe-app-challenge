import React, { Component } from 'react';
import coffee from './coffee.gif'
import './App.css';
import ProductList from './component/ProductList'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {
  state = {
    products: null,
    error: null,
  }

  render() {
    
    const { products, error } = this.state
    
    return (
      <Router>
        <main>
          <div className="App">
            <div className="App-header">
              <img src={ coffee } className="App-logo" alt="logo" />
              <h2>Welcome to LOOONG and Strong</h2>
            </div>

            <nav>
              <Link to={'/'} >Home </Link>
              <Link to={'/products'} >Products </Link>
              <Link to={'/orders'} >Orders</Link>
            </nav>

            <div>
              {
                !!products ? (
                  <ProductList items={ products } />
                ) : (
                  'Loading movies…'
                )
              }
            </div>
          </div>
        </main>
      </Router>
    );
  }
  componentDidMount() {
    fetch('https://cafe-app-again.now.sh/api/products')
      .then(res => res.json())
      .then(products => {
        this.setState({ products })
      })
      .catch(error => {
        this.setState({ error })
      })
  }
}

export default App;