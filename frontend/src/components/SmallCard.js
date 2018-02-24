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
        className="Tilt br2 shadow-2 p-3 d-flex justify-content-center align-items-center"
        options={{ max: 55 }}
        style={{ minHeight: 150, minWidth: 150 }}
      >
        <Link style={{ textDecoration: 'none' }} to={`/${gameTitle}/${answer.next}`}>
          <h2 className="white" stype={{ overflowWrap: 'break-word' }}>
            {answer.text} asfjas sahf9uhsauh hasf9hsahf saha9sfash asfiuahsf safihfsa asfihsafhsa0 sa0 a0hs0h0ha 0hsa
          </h2>
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
