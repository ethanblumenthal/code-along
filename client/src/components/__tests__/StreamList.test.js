import React from 'react'
import { mount } from 'enzyme'
import StreamList from 'components/streams/StreamList'
import App from 'components/App'

let wrapped
beforeEach(() => {
  const initialState = {
    streams: [
      { title: 'Stream 1', description: 'This is a test', googleId: '123456789' },
      { title: 'Stream 2', description: 'Testing 123', googleId: '987654321' }
    ]
  }
  wrapped = mount(
    <App initialState={initialState}>
      <StreamList />
    </App>
  )
})

it('creates one item per stream', () => {
  expect(wrapped.find('.item').length).toEqual(2)
})

it('shows the title for each stream', () => {
  expect(wrapped.render('.item').text()).toContain('Stream 1')
  expect(wrapped.render('.item').text()).toContain('Stream 2')
})