import React from 'react'
import { Link } from 'react-router-dom'
import Tilt from 'react-tilt'
import PropTypes from 'prop-types'
import './SmallCard.css'

const SmallCard = ({ gameTitle, answer }) => {
  console.log(answer)
  return (
    <div className="ma4 mt0">
      <Tilt className="Tilt br2 shadow-2" options={{ max: 55 }} style={{ height: 150, width: 150 }}>
        <div className="Tilt-inner pa3">
          <Link to={`/${gameTitle}/${answer.next}`}>
            <h2>{answer.text}</h2>
          </Link>
        </div>
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
