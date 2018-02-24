import React, { Component } from 'react'
import Story from './Story'

const stories = [
  {
    styleNum: 'style1',
    gameTitle: 'crime',
    description: 'Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.',
  },
  {
    styleNum: 'style2',
    gameTitle: 'crime',
    description: 'Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.',
  },
  {
    styleNum: 'style3',
    gameTitle: 'crime',
    description: 'Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.',
  },
  {
    styleNum: 'style4',
    gameTitle: 'crime',
    description: 'Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.',
  },
  {
    styleNum: 'style5',
    gameTitle: 'crime',
    description: 'Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.',
  },
  {
    styleNum: 'style6',
    gameTitle: 'crime',
    description: 'Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.',
  },
]

class Main extends Component {
  state = {}

  renderStories = () =>
    stories.map((story, idx) => (
      <Story key={story.styleNum} num={idx % 6 + 1} gameTitle={story.gameTitle} description={story.description} />
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

export default Main
