import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Tilt from 'react-tilt'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { changeHealth } from '../redux/actions'
import './SmallCard.css'

class SmallCard extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.changeHealth = this.changeHealth.bind(this)
    this.changeImageEffect = this.changeImageEffect.bind(this)
  }

  changeHealth() {
    this.props.changeHealth(this.props.answer.effect)
  }

  changeImageEffect() {
    console.log(this.props.answer.animation)
    this.props.changeImageEffect(this.props.answer.animation)
  }

  funcCombo = () => {
    this.changeHealth()
    this.changeImageEffect()
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
            onClick={this.funcCombo}
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
  changeImageEffect: PropTypes.func.isRequired,
  answer: PropTypes.shape({
    text: PropTypes.string,
    next: PropTypes.number,
    animation: PropTypes.string,
    effect: PropTypes.number,
  }).isRequired,
}

export default connect(null, { changeHealth })(SmallCard)
