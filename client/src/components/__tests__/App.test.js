import React from 'react'
import { shallow } from 'enzyme'
import App from 'components/App'
import streamShow from 'components/streams/streamShow'
import StreamList from 'components/streams/StreamList'

let wrapped
beforeEach(() => {
  wrapped = shallow(<App />)
})

it('shows a stream when clicked', () => {
  expect(wrapped.find(streamShow).length).toEqual(1)
})

it ('shows a list of streams', () => {
  expect(wrapped.find(StreamList).length).toEqual(1)
})