import React from 'react'
import { Dashboard, Login, GuardRoute, AuthWrapper, Error } from './pages'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
    return (
        <AuthWrapper>
            <Router>
                <Switch>
                    <GuardRoute exact path='/'>
                        <Dashboard />
                    </GuardRoute>
                    <Route exact path='/login' component={Login} />
                    <Route path='*' component={Error} />
                </Switch>
            </Router>
        </AuthWrapper>
    )
}

export default App
