import React, {useEffect, useState} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Calendar } from './components/calendar_Components/Calendar_View_Month'
import { Header } from './Header'
import { Home } from './Home'
/* import { TestingFruit } from './serverFruit/testingFruit' */
import { Login } from './loginPage/LoginView'
import { NavigationBar } from './NavigationBar'

export const MainBody = () => {
    let [navBarCollapsed, setNavBarCollapsed] = useState(false);

    return (
        <BrowserRouter>
            <div className="flex flex-col min-h-screen">
                <Header collapsed={navBarCollapsed} burgerMenuOnClick={setNavBarCollapsed}/>
                <div className="flex flex-row flex-grow">
                    <NavigationBar collapsed = {navBarCollapsed}/>
                    <div className="flex flex grow w-screen bg-secondary">
                        <Switch>
                            <Route exact path="/" render={() => <Home />} />
                            <Route exact path="/login" render={() => <Login />} />
                            <Route exact path="/calendar" render={() => <Calendar />} />
                        </Switch>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}
