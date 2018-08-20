import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import LoginComponent from './login'

export default class App extends Component {
    state = {
        user: '',
        pass: '',
        loggedIn: false
    }

    handleSubmit = evt => {
        evt.preventDefault()
        // console.log(this.state)
        if (this.state.user === 'admin' && this.state.pass === '123') {
            localStorage.setItem('logged', true)
            this.setState({ loggedIn: true })
            window.location.reload()
        }
    }

    handleInput = (e) => {
        const { value, name } = e.target
        // console.log(value)
        this.setState({ [name]: value })
    }

    render() {
        return (
            <section>
                <LoginComponent handleSubmit={this.handleSubmit} handleInput={this.handleInput} />
                {
                    this.state.loggedIn && (
                        <section>
                            <Redirect to="/" />
                        </section>
                    )
                }
            </section>
        )
    }
}