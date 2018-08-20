import React, { Component } from 'react'
import Navbar from './navbar'
import Items from './items'
import Routes from './routes'

export default class App extends Component {
    state = {
        isOpen: false,
        loggedIn: false
    }

    componentDidMount() {
        if (localStorage.getItem('logged')) {
            this.setState({ loggedIn: true })
        }
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    logOut = () => {
        localStorage.removeItem('logged')
        this.setState({ loggedIn: false })
        // window.location.reload()
    }

    render() {
        return (
            <section>
                <Navbar>
                    <Routes logged={this.state.loggedIn}>
                        <Items toggler={this.toggle} open={this.state.isOpen} logOut={this.logOut} logged={this.state.loggedIn} />
                    </Routes>
                </Navbar>
            </section>
        )
    }
}