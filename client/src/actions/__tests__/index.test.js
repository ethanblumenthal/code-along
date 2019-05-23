import { createStream } from 'actions'
import { CREATE_STREAM } from 'actions/types'

describe('createStream', () => {
  it('has the correct type', () => {
    const action = createStream()
    expect(action.type).toEqual(CREATE_STREAM)
  })

  it('has the correct payload', () => {
    const action = createStream({ title: 'My Stream', description: 'This is a test', googleId: '123456789' })
    expect(action.payload).toEqual({ title: 'My Stream', description: 'This is a test', googleId: '123456789' })
  })
})