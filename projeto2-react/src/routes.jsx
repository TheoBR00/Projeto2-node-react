import React from 'react'
import { BrowserRouter as Router,Route,Redirect} from 'react-router-dom'

import Usuarios from './usuarios'
import Cardbacks from './cardbacks'
import Cards from './cards'

export default props => (
    <Router>
        <Route path='/usuarios' component={Usuarios} />
        <Route path='/cardbacks' component={Cardbacks} />
        <Route path='/cards' component={Cards} />
        <Redirect from='*' to='/usuarios' />
    </Router>
)