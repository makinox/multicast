import React, { Component } from 'react'
import Form from './form'
import Container from './container'
import Panel from './panel'
import {info} from './../../../db.json'

export default class App extends Component {

    state = {
        info: info
    }

    componentDidMount() {
        console.log(this.state.info)   
    }

    componentDidUpdate() {
        console.log(this.state.info)
    }

    handleSub = (e) => {
        e.preventDefault()
        let obj = {
            author: 'andre',
            text: e.target.mensaje.value
        }
        this.setState({ info: [...this.state.info, obj]})
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