import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Tilt from 'react-tilt'
import PropTypes from 'prop-types'

import './SmallCard.css'

class SmallCard extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.changeHealth = this.changeHealth.bind(this)
  }

  changeHealth() {
    console.log(this.props.answer.effect)
    this.props.changeHealth(this.props.answer.effect)
  }

  render() {
    return (
      <div className="ma4 mt0">
        <Tilt
          className="Tilt br2 shadow-2 p-3 d-flex justify-content-center align-items-center"
          options={{ max: 55 }}
          style={{ minHeight: 150, minWidth: 150 }}
        >
          <Link
            style={{ textDecoration: 'none' }}
            to={`/${this.props.gameTitle}/${this.props.answer.next}`}
            onClick={this.changeHealth}
          >
            <h2 className="white" stype={{ overflowWrap: 'break-word' }}>
              {this.props.answer.text}
            </h2>
          </Link>
        </Tilt>
      </div>
    )
  }
}

SmallCard.propTypes = {
  gameTitle: PropTypes.string.isRequired,
  changeHealth: PropTypes.func.isRequired,
  answer: PropTypes.shape({
    text: PropTypes.string,
    next: PropTypes.number,
    animation: PropTypes.string,
    effect: PropTypes.number,
  }).isRequired,
}

export default SmallCard
