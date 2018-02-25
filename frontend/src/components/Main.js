import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Story from './Story'
import { getAllGameTitles } from '../redux/actions'

let gameArray = [
  {
    title: 'crime',
    description: 'Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.',
  },
  {
    title: 'life',
    description: 'Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.',
  },
  {
    title: 'nature',
    description: 'Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.',
  },
]
class Main extends Component {
  constructor() {
    super()
    this.fetchData()
  }
  state = {}

  componentDidMount() {
    this.props.getAllGameTitles()
  }

  fetchData() {
    fetch('https://stories-api-prod.herokuapp.com/api/stories/')
      .then(response => response.json())
      .then(data => {
        gameArray = data
        console.log('hi')
        this.forceUpdate()
      })
      .catch(res => this.fetchData())
  }

  renderStories = () => {
    // gameArray.map((story, idx) => {
    //   console.log('hi')
    //   return <Story key={story.title} num={idx % 3 + 1} gameTitle={story.title} description={story.description} />
    // })
  }

  render() {
    console.log('render')
    return (
      <div id="wrapper">
        <div id="main">
          <div className="inner">
            <header className="d-flex justify-content-center">
              <h1 className="white">Text based game</h1>
            </header>
            <section className="tiles">
              <Story
                key={gameArray[0].title}
                num={0 % 3 + 1}
                gameTitle={gameArray[0].title}
                description={gameArray[0].description}
              />
              <Story
                key={gameArray[1].title}
                num={1 % 3 + 1}
                gameTitle={gameArray[1].title}
                description={gameArray[1].description}
              />
              <Story
                key={gameArray[2].title}
                num={2 % 3 + 1}
                gameTitle={gameArray[2].title}
                description={gameArray[2].description}
              />
            </section>
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
}

export default connect(({ games }) => ({ games }), { getAllGameTitles })(Main)
