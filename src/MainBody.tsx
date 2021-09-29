import React from 'react'
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'
import { Calendar } from './components/calendar_Components/Calendar_View_Month'
import { TestingFruit } from './serverFruit/testingFruit'

export const MainBody = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route
                        exact
                        path="/testingFruit"
                        render={() => <TestingFruit />}
                    />
                    <Route 
                        exact
                        path="/"
                        render={() => <Calendar />}
                    />
                </Switch>
            </BrowserRouter>
        </div>
    )
}
