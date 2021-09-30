import React from 'react'
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'
import { Calendar } from './components/calendar_Components/Calendar_View_Month'
import { TestingFruit } from './serverFruit/testingFruit'
import { Login } from './loginPage/LoginView'

export const MainBody = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route
                        exact
                        path="/testingfruit"
                        render={() => <TestingFruit />}
                    />
                    <Route 
                        exact
                        path="/"
                        render={() => <Calendar />}
                    />
                     <Route 
                        exact
                        path="/login"
                        render={() => <Login />}
                    />
                </Switch>
            </BrowserRouter>
        </div>
    )
}
