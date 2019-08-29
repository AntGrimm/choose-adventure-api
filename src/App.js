import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import MealPage from './components/MealPage'
import RecipesByCategory from './components/RecipesByCategory'
import Meals from './components/Meals'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={MealPage}></Route>
            <Route
              exact
              path="/:category"
              component={RecipesByCategory}
            ></Route>
            <Route exact path="/:category/:meals" component={Meals}></Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
