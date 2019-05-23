import axios from 'axios'
import history from '../history'
import { SIGN_IN, SIGN_OUT, FETCH_STREAMS, FETCH_STREAM, CREATE_STREAM, EDIT_STREAM, DELETE_STREAM } from './types'

export const signIn = googleId => async dispatch => {
  const { data } = await axios.post('/auth', { googleId })
  dispatch({ type: SIGN_IN, payload: data[0].googleId })
}

export const signOut = () => ({
  type: SIGN_OUT
})

export const fetchStreams = () => async dispatch => {
  const { data } = await axios.get('/api/streams')
  dispatch({ type: FETCH_STREAMS, payload: data })
}

export const fetchStream = id => async dispatch => {
  const { data } = await axios.get(`/api/streams/${id}`)
  dispatch({ type: FETCH_STREAM, payload: data })
}

export const createStream = formValues => async (dispatch, getState) => {
  const googleId = getState().auth.userId
  const { data } = await axios.post('/api/streams', { ...formValues, googleId })
  dispatch({ type: CREATE_STREAM, payload: data })
  history.push('/')
}

export const editStream = (id, formValues) => async dispatch => {
  const { data } = await axios.patch(`/api/streams/${id}`, formValues)
  dispatch({ type: EDIT_STREAM, payload: data[1][0] })
  history.push('/')
}

export const deleteStream = id => async dispatch => {
  await axios.delete(`/api/streams/${id}`)
  dispatch({ type: DELETE_STREAM, payload: id })
  history.push('/')
}
