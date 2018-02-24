import React from 'react'
import PropTypes from 'prop-types'
import { Rectangle, Circle, Ellipse, Line, Polyline, CornerBox, Triangle } from 'react-shapes'
import 'tachyons'

import './BigCard.css'
import SmallCard from './SmallCard'

const BigCard = ({ gameTitle, question }) => {
  const renderCards = () =>
    question.answers.map(answer => <SmallCard key={answer.text} gameTitle={gameTitle} answer={answer} />)
  return (
    <div className="w-100 w-50-m w-25-l mw6 center">
      <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0 center tc">
            <legend className="f1 fw6 ph0 mh0">{question.questionString}</legend>
            <div className="center">
              <div className="form shadow-5">{renderCards()}</div>
            </div>
          </fieldset>
        </div>
      </main>
    </div>
  )
}

BigCard.propTypes = {
  gameTitle: PropTypes.string.isRequired,
  question: PropTypes.shape({
    answers: PropTypes.array,
  }).isRequired,
}

export default BigCard
