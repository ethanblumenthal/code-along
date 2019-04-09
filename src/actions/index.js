import streams from '../apis/streams'
import history from '../history'
import { SIGN_IN, SIGN_OUT, FETCH_STREAMS, FETCH_STREAM, CREATE_STREAM, EDIT_STREAM, DELETE_STREAM } from './types'

export const signIn = userId => ({
  type: SIGN_IN,
  payload: userId
})

export const signOut = () => ({
  type: SIGN_OUT
})

export const fetchStreams = () => async dispatch => {
  const { data } = await streams.get('/streams')
  dispatch({ type: FETCH_STREAMS, payload: data })
}

export const fetchStream = id => async dispatch => {
  const { data } = await streams.get(`/streams/${id}`)
  dispatch({ type: FETCH_STREAM, payload: data })
}

export const createStream = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth
  const { data } = streams.post('/streams', { ...formValues, userId })
  dispatch({ type: CREATE_STREAM, payload: data })
  history.push('/')
}

export const editStream = (id, formValues) => async dispatch => {
  const { data } = streams.patch(`/streams/${id}`, formValues)
  dispatch({ type: EDIT_STREAM, payload: data })
  history.push('/')
}

export const deleteStream = id => async dispatch => {
  streams.delete(`/streams/${id}`)
  dispatch({ type: DELETE_STREAM, payload: id })
  history.push('/')
}
