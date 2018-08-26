import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import registerServiceWorker from './registerServiceWorker'
import Redux from './redux/index'

ReactDOM.render(
    <Redux>
        <App />
    </Redux>,
     document.getElementById('root'))
registerServiceWorker()
