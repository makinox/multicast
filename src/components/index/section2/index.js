import React, { Component } from 'react'
import Form from './form'

export default class App extends Component {

    handleSub = (e) => {
        e.preventDefault()
        console.log(e.target.mensaje.value)
    }

    render() {
        return (
            <section>
                <Form handleSubmit={this.handleSub}/>
            </section>
        )
    }
}