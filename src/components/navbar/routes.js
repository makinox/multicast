import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Indes from './../index/index'
import NoLogin from './../noLogin/index'
import Signin from './../signin/index'

export default (props) => (
    <Router>
        <div>
            {props.children}
            {
                props.logged ? (
                    <div>
                        <Route exact path="/" component={Indes} />
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