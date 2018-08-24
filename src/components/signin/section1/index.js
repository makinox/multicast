import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import LoginComponent from './login'
import io from 'socket.io-client';

export default class App extends Component {
    state = {
        user: '',
        pass: '',
        socket: null,
        loggedIn: false
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({ 'user': e.target['user'].value })

        const socket = io('https://socket-server-js.herokuapp.com/')
        this.setState({socket})
        socket.emit('push:login', { 'name': e.target['user'].value})

        let user = e.target['user'].value
        socket.on('push:validate', (data) => {
            let validate = data
            if (validate < 8) {
                localStorage.setItem('logged', true)
                localStorage.setItem('name', user)
                this.setState({ loggedIn: true })
                window.location.reload()
            }
        })
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