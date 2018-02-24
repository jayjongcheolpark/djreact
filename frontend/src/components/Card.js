import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import Bars from 'react-bars'
import _ from 'lodash'
import BigCard from './BigCard'
import { getAllQuestionsByGameTitle, retryGame } from '../redux/actions'

import './Bar.css'

class Card extends Component {
  componentDidMount() {
    console.log(this.props)
    this.props.getAllQuestionsByGameTitle(this.props.match.params.tableName)
  }

  render() {
    if (this.props.health.redirect) {
      this.props.retryGame()
      return <Redirect to="/gameover" />
    }
    console.log(this.props.match.params.tableName, this.props.match.params.qNum)
    if (this.props.questions.length > 0) {
      console.log(this.props.questions)
      const selectedQuestion = _.find(this.props.questions, { questionNumber: Number(this.props.match.params.qNum) })
      console.log(selectedQuestion)
      return (
        <div>
          <div className="bar-label bar-suffix bar-contain bar-expand">
            <Bars data={[this.props.health.data]} makeUppercase />
          </div>
          <BigCard gameTitle={this.props.match.params.tableName} question={selectedQuestion} />
        </div>
      )
    }
    return <div />
  }
}

Card.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      tableName: PropTypes.string,
      qNum: PropTypes.string,
    }).isRequired,
  }).isRequired,
  getAllQuestionsByGameTitle: PropTypes.func.isRequired,
  questions: PropTypes.array.isRequired,
  health: PropTypes.object.isRequired,
  retryGame: PropTypes.func.isRequired,
}

export default connect(({ questions, health }) => ({ questions, health }), {
  getAllQuestionsByGameTitle,
  retryGame,
})(Card)
