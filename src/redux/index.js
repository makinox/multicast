import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const initialState = {
    info: [{user: 'Jesu', text:'hola'}]
}

const store = createStore(
    (state) => state,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default (props) => (
    <Provider store={store}>
        {props.children}
    </Provider>
)