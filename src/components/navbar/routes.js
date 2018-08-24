import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Indes from './../index/index'
import NoLogin from './../noLogin/index'
import Signin from './../signin/index'
import Animation from './../animation/index'

export default (props) => (
    <Router>
        <div>
            {props.children}
            {
                props.logged ? (
                    <div>
                        <Route exact path="/" component={Indes} />
                        <Route exact path="/animation" component={Animation} />
                    </div>
                )
                    :
                    <section>
                        <Route exact path="/" component={NoLogin} />
                        <Route exact path="/signin" component={Signin} />
                    </section>

            }
        </div>
    </Router>
)