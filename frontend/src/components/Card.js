import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BigCard from './BigCard'

const questions = [
  {
    questionNumber: 1,
    questionString: 'Which Way?',
    answers: [
      { text: 'North', next: 2, animation: 'fadeout', effect: -20 },
      { text: 'East', next: 3, animation: 'fadeout', effect: -20 },
      { text: 'South', next: 4, animation: 'fadeout', effect: -20 },
      { text: 'West', next: 5, animation: 'fadeout', effect: -20 },
    ],
  },
]

class Card extends Component {
  state = {}
  render() {
    console.log(this.props.match.params.tableName, this.props.match.params.qNum)
    return (
      <div>
        <BigCard gameTitle={this.props.match.params.tableName} question={questions[0]} />
      </div>
    )
  }
}

Card.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      tableName: PropTypes.string,
      qNum: PropTypes.string,
    }).isRequired,
  }).isRequired,
}

export default Card
