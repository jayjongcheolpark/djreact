import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Particles from 'react-particles-js'
import Main from './Main'
import Card from './Card'
import GameOver from './GameOver'
import './App.css'

const particleOptions = {
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
}

class App extends Component {
  state = {}
  render() {
    return (
      <BrowserRouter>
        <div>
          <Particles className="particles" params={particleOptions} />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/gameover" component={GameOver} />
            <Route exact path="/:tableName/:qNum" component={Card} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
