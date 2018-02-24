import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import _ from 'lodash'

const Story = ({ styleNum, image, gameTitle, description }) => (
  <article className={styleNum}>
    <span className="image">
      <img src={`images/${image}`} alt="" />
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
  styleNum: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  gameTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Story
