import React, { Component } from 'react'
import Form from './form'
import Container from './container'
import Panel from './panel'
// import {info} from './../../../db.json'
import io from 'socket.io-client';

export default class App extends Component {

    state = {
        info: [{}],
        socket: null
    }

    componentDidMount() {
        const socket = io('https://socket-server-js.herokuapp.com/')
        this.setState({ socket })

        socket.on('push:connection', info => {this.setState({ info }) })
    }

    componentDidUpdate(prev, act) {
        if (this.state.info[this.state.info.length - 1] === act.info[act.info.length - 1]) {
            this.state.socket.on('push:message', (data) => {
                this.setState({ info: [...this.state.info, data] })
            })
        }
    }

    handleSub = (e) => {
        e.preventDefault()
        this.state.socket.emit('push:message', {
            author: localStorage.getItem('name'),
            text: e.target.mensaje.value
        })
    }

    render() {
        return (
            <section>
                <Container>
                    <Form handleSubmit={this.handleSub} />
                    <Panel stade={this.state.info} />
                </Container>
            </section>
        )
    }
}