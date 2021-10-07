import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Calendar } from './components/calendar_Components/Calendar_View_Month'
import { Header } from './Header'
import { Home } from './Home'
import { LoginPage } from './loginPage/LoginPage'
/* import { TestingFruit } from './serverFruit/testingFruit' */
import { Login } from './loginPage/LoginView'
import { NavigationBar } from './NavigationBar'

export const MainBody = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" render={() => <LoginPage />} />

                <div className="flex flex-col min-h-screen">
                    <Header />
                    <div className="flex flex-row flex-grow">
                        <NavigationBar />
                        <div className="flex flex grow w-screen bg-secondary">
                            <Route exact path="/" render={() => <Home />} />
                            <Route exact path="/testing" render={() => <Login />} />
                            <Route exact path="/calendar" render={() => <Calendar />} />
                        </div>
                    </div>
                </div>
            </Switch>
        </BrowserRouter>
    )
}
