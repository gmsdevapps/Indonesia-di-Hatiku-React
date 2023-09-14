import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import NotFound from './views/not-found'
import Home from './views/home'
import Prototype from './views/prototype'
import Jakarta from './views/jakarta'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={NotFound} path="**" />
        <Route component={Home} exact path="/" />
        <Route component={Prototype} exact path="/prototype" />
        <Route component={Jakarta} exact path="/jakarta" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
