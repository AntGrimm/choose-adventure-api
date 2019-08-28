import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Header from './components/Header'
import MealPage from './components/MealPage'
import RecipesByCategory from './components/RecipesByCategory'

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
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
