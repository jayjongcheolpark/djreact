import React from 'react'
import Tilt from 'react-tilt'
import PropTypes from 'prop-types'
import './SmallCard.css'

const SmallCard = ({ answer }) => (
  <div className="ma4 mt0">
    <Tilt className="Tilt br2 shadow-2" options={{ max: 55 }} style={{ height: 150, width: 150 }}>
      <div className="Tilt-inner pa3">
        <h2>{answer.text} </h2>
      </div>
    </Tilt>
  </div>
)

SmallCard.propTypes = {
  answer: PropTypes.shape({
    text: PropTypes.string,
    next: PropTypes.number,
    animation: PropTypes.string,
    effect: PropTypes.number,
  }).isRequired,
}

export default SmallCard
