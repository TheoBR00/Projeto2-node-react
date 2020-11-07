import React from 'react'
import { BrowserRouter as Router,Route,Redirect} from 'react-router-dom'

import Usuarios from './usuarios'
import Cardbacks from './cardbacks'

export default props => (
    <Router>
        <Route path='/usuarios' component={Usuarios} />
        <Route path='/cardbacks' component={Cardbacks} />
        <Redirect from='*' to='/cardbacks' />
    </Router>
)