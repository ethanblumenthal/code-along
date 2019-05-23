import React from 'react'
import { mount } from 'enzyme'
import StreamCreate from 'components/stream/StreamCreate'
import App from 'component/App'

let wrapped
beforeEach(() => {
  wrapped = mount(
    <App>
      <StreamCreate />
    </App>
  )
})

afterEach(() => {
  wrapped.unmount()
})

it('has one button and two inputs', () => {
  expect(wrapped.find('button').length).toEqual(1)
  expect(wrapped.find('input').length).toEqual(2)
})

describe('the form', () => {
  beforeEach(() => {
    wrapped.find('form').simulate('change', {
      target: { value: 'new stream' }
    })
    wrapped.update()
  })

  it('has a form that users can type in', () => {
    expect(wrapped.find('form').prop('value')).toEqual('new stream')
  })
  
  it('when form is submitted, form gets emptied', () => {
    wrapped.find('form').simulate('submit')
    wrapped.update()
    expect(wrapped.find('form').prop('value')).toEqual('')
  })  
})