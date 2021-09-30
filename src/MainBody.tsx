import React from 'react'
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'
import { Calendar } from './components/calendar_Components/Calendar_View_Month'
/* import { TestingFruit } from './serverFruit/testingFruit' */
import { Login } from './loginPage/LoginView'
import { Home } from './Home'

export const MainBody = () => {
    return (
        <div className="flex flex grow w-screen bg-secondary">
            <BrowserRouter>
                <Switch>
                   {/*  <Route
                        exact
                        path="/testingfruit"
                        render={() => <TestingFruit />}
                    /> */}
                    <Route 
                        exact
                        path="/"
                        render={() => <Home />}
                    />
                     <Route 
                        exact
                        path="/login"
                        render={() => <Login />}
                    />
                    <Route 
                        exact
                        path="/calendar"
                        render={() => <Calendar />}
                    />
                </Switch>
            </BrowserRouter>
        </div>
    )
}
