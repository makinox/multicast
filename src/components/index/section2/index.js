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
        const socket = io('http://localhost:3000')
        this.setState({socket})
        
        socket.on('push:connection', info => {console.log(info);this.setState({info})})
    }

    componentDidUpdate(prev, act) {
        if (this.state.info[this.state.info.length - 1] === act.info[act.info.length - 1]){
            console.log('entra')
            this.state.socket.on('push:message', (data) => {
                this.setState({ info: [...this.state.info, data]})
            })
        }
    }

    handleSub = (e) => {
        e.preventDefault()
        const {socket} = this.state
        socket.emit('push:message', {
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