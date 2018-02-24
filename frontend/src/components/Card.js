import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import _ from 'lodash'
import BigCard from './BigCard'
import { getAllQuestionsByGameTitle } from '../redux/actions'

class Card extends Component {
  state = {}
  componentDidMount() {
    console.log(this.props)
    this.props.getAllQuestionsByGameTitle(this.props.match.params.tableName)
  }
  render() {
    console.log(this.props.match.params.tableName, this.props.match.params.qNum)
    if (this.props.questions.length > 0) {
      console.log(this.props.questions)
      const selectedQuestion = _.find(this.props.questions, { questionNumber: Number(this.props.match.params.qNum) })
      console.log(selectedQuestion)
      return (
        <div>
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
}

export default connect(({ questions }) => ({ questions }), { getAllQuestionsByGameTitle })(Card)
