import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Story from './Story'
import { getAllGameTitles } from '../redux/actions'

class Main extends Component {
  state = {}

  componentDidMount() {
    this.props.getAllGameTitles()
    fetch('https://stories-api-prod.herokuapp.com/api/stories/')
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
  }

  renderStories = () =>
    this.props.games.map((story, idx) => (
      <Story key={story.gameTitle} num={idx % 6 + 1} gameTitle={story.gameTitle} description={story.description} />
    ))

  render() {
    return (
      <div id="wrapper">
        <div id="main">
          <div className="inner">
            <header className="d-flex justify-content-center">
              <h1>Text based game</h1>
            </header>
            <section className="tiles">{this.renderStories()}</section>
          </div>
        </div>
        <footer id="footer" className="d-flex justify-content-center">
          <div className="copyright">
            <div>&copy; Hack The Velley. All rights reserved</div>
          </div>
        </footer>
      </div>
    )
  }
}

Main.propTypes = {
  getAllGameTitles: PropTypes.func.isRequired,
  games: PropTypes.array.isRequired,
}

export default connect(({ games }) => ({ games }), { getAllGameTitles })(Main)
