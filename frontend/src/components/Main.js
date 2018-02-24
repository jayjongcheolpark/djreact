import React, { Component } from 'react'
import Story from './Story'

const stories = [
  {
    styleNum: 'style1',
    image: 'pic01.jpg',
    gameTitle: 'crime',
    description: 'Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.',
  },
  {
    styleNum: 'style2',
    image: 'pic02.jpg',
    gameTitle: 'crime',
    description: 'Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.',
  },
  {
    styleNum: 'style3',
    image: 'pic03.jpg',
    gameTitle: 'crime',
    description: 'Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.',
  },
  {
    styleNum: 'style4',
    image: 'pic04.jpg',
    gameTitle: 'crime',
    description: 'Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.',
  },
  {
    styleNum: 'style5',
    image: 'pic05.jpg',
    gameTitle: 'crime',
    description: 'Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.',
  },
  {
    styleNum: 'style6',
    image: 'pic06.jpg',
    gameTitle: 'crime',
    description: 'Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.',
  },
]

class Main extends Component {
  state = {}

  renderStories = () =>
    stories.map(story => (
      <Story
        key={story.styleNum}
        styleNum={story.styleNum}
        image={story.image}
        gameTitle={story.gameTitle}
        description={story.description}
      />
    ))

  render() {
    return (
      <div id="wrapper">
        <div id="main">
          <div className="inner">
            <header>
              <h1>Text based game</h1>
            </header>
            <section className="tiles">{this.renderStories()}</section>
          </div>
        </div>
      </div>
    )
  }
}

export default Main
