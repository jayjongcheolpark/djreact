import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import _ from 'lodash'

const Story = ({ num, gameTitle, description }) => (
  <article className={`style${num}`}>
    <span className="image">
      <img src={`images/pic0${num}.jpg`} alt="" />
    </span>
    <Link to={`/${gameTitle}/1`}>
      <h2>{_.capitalize(gameTitle)}</h2>
      <div className="content">
        <p>{description}</p>
      </div>
    </Link>
  </article>
)

Story.propTypes = {
  num: PropTypes.number.isRequired,
  gameTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Story
