import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', isWrong: false, errorMsg: ''}

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    console.log(event.target.value)
    this.setState({
      password: event.target.value,
    })
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const details = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(details),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      this.onSubmitSuccess()
    } else {
      this.setState({
        username: '',
        password: '',
        isWrong: true,
        errorMsg: data.error_msg,
      })
    }
  }

  render() {
    const {username, password, isWrong, errorMsg} = this.state
    console.log(username, password)
    return (
      <div className="login-form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="image"
        />
        <div className="card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="logo"
          />
          <form className="form-container" onSubmit={this.submitForm}>
            <label htmlFor="username" className="input-field">
              Username
            </label>

            <input
              id="username"
              value={username}
              placeholder="username"
              className="input-field"
              onChange={this.onChangeUsername}
            />

            <label htmlFor="password" value={password} className="input-field">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="password"
              className="input-field"
              onChange={this.onChangePassword}
            />
            <button type="submit" className="input-field">
              Login
            </button>
            {isWrong && <p>{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}
export default LoginForm
