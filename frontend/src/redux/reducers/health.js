import { CHANGE_HEALTH, RETRY_GAME } from '../constants'

const initialState = {
  data: { label: 'Health', value: 100, barColor: 'red' },
  redirect: false,
}

const healthReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_HEALTH: {
      let hp = 0
      let { redirect } = state
      const total = action.amount + state.data.value
      if (total <= 0) {
        hp = 0
        redirect = true
      } else if (total >= 100) {
        hp = 100
      } else {
        hp = total
      }
      return { ...state, redirect, data: { ...state.data, value: hp } }
    }
    case RETRY_GAME: {
      return { ...initialState }
    }
    default:
      return state
  }
}

export default healthReducer
