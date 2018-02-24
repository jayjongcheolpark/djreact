import React from 'react'
import PropTypes from 'prop-types'
import 'tachyons'

import './BigCard.css'
import SmallCard from './SmallCard'

const BigCard = ({ gameTitle, question }) => {
  const renderCards = () =>
    question.answers.map(answer => <SmallCard key={answer.text} gameTitle={gameTitle} answer={answer} />)
  return (
    <div className="w-100 center">
      <main className="w-100">
        <div className="">
          <fieldset id="sign_up" className="text-center center">
            <legend
              style={{ color: 'lightgray', textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black' }}
              className="f1 fw6 ph0 mh0"
            >
              {question.questionString}
            </legend>
            <div className="center mt-5">
              <div className="form shadow-5 d-flex justify-content-center flex-wrap flex-row">{renderCards()}</div>
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
