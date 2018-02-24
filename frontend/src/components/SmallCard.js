import React from 'react'
import { Link } from 'react-router-dom'
import Tilt from 'react-tilt'
import PropTypes from 'prop-types'
import './SmallCard.css'

const SmallCard = ({ gameTitle, answer }) => {
  console.log(answer)
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2 d-flex justify-content-center align-items-center"
        options={{ max: 55 }}
        style={{ height: 150, width: 150 }}
      >
        <Link style={{ textDecoration: 'none' }} to={`/${gameTitle}/${answer.next}`}>
          <h2>{answer.text}</h2>
        </Link>
      </Tilt>
    </div>
  )
}

SmallCard.propTypes = {
  gameTitle: PropTypes.string.isRequired,
  answer: PropTypes.shape({
    text: PropTypes.string,
    next: PropTypes.number,
    animation: PropTypes.string,
    effect: PropTypes.number,
  }).isRequired,
}

export default SmallCard
