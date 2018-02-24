import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Card extends Component {
  state = {}
  render() {
    console.log(this.props.match.params.tableName, this.props.match.params.qNum)
    return <div>Card</div>
  }
}

Card.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      tableName: PropTypes.tableName,
      qNum: PropTypes.string,
    }).isRequired,
  }).isRequired,
}

export default Card
