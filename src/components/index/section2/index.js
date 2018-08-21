import React, { Component } from 'react'
import Form from './form'
import Container from './container'
import Panel from './panel'
import {info} from './../../../db.json'
import io from 'socket.io-client';

export default class App extends Component {

    state = {
        info: info,
        socket: null
    }

    componentDidMount() {
        const socket = io('http://localhost:3000')
        this.setState({socket})
    }

    componentDidUpdate(prev, act) {
        if (prev !== act){
            this.state.socket.on('conf:message', (data) => {
                this.setState({ info: [...this.state.info, data]})
            })
        }
    }

    handleSub = (e) => {
        e.preventDefault()
        const {socket} = this.state
        socket.emit('conf:message', {
            author: 'andre',
            text: e.target.mensaje.value
        })
    }

    render() {
        return (
            <section>
                <Container>
                    <Form handleSubmit={this.handleSub}/>
                    <Panel stade={this.state.info}/>
                </Container>
            </section>
        )
    }
}