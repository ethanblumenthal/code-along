import React from 'react'
import { mount } from 'enzyme'
import moxios from 'moxios'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from 'components/App'

beforeEach(() => {
  moxios.install()
  moxios.stubRequest('https://localhost:5000/api/streams', {
    status: 200,
    response: [
      { title: 'Stream 1', description: 'This is a test', googleId: '123456789' },
      { title: 'Stream 2', description: 'Testing 123', googleId: '987654321' }
    ]
  })
})

afterEach(() => {
  moxios.uninstall()
})

it('can fetch a list of streams and display them', done => {
  const wrapped = mount(
    <Provider store={createStore()}>
      <App />
    </Provider>
  )
  
  moxios.wait(() => {
    wrapped.update()
    expect(wrapped.find('.item').length).toEqual(2)
    done()
    wrapped.unmount()
  })
})