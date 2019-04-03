import React from 'react'

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '408365391266-vaonr4cl3g6p7cd72k227mr3tq65m7qi.apps.googleusercontent.com',
        scope: 'email'
      })
    })
  }

  render() {
    return (
      <div>GoogleAuth</div>
    )
  }
}

export default GoogleAuth
