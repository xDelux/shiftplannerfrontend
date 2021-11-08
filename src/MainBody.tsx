import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Calendar } from './components/calendar_Components/Calendar/Calendar_Month/Calendar_View_Month'
import { CalendarDay } from './components/calendar_Components/Calendar/Calendar_Day/Calender_View_Day'
import { Header } from './Header'
import { Home } from './Home'
import { LoginPage } from './loginPage/LoginPage'
// import {userContext, userContextProvider} from './Context/userContext'
/* import { TestingFruit } from './serverFruit/testingFruit' */
import { NavigationBar } from './NavigationBar'

export const MainBody = () => {
    let [navBarCollapsed, setNavBarCollapsed] = useState(false)

    return (
        <BrowserRouter>
            <Switch>
                {/* <userContextProvider> */}
                <Route exact path="/login" render={() => <LoginPage />} />
                {/* </userContextProvider> */}

                <div className="flex flex-col min-h-screen">
                    <Header collapsed={navBarCollapsed} burgerMenuOnClick={setNavBarCollapsed} />
                    <div className="flex flex-row flex-auto">
                        <NavigationBar collapsed={navBarCollapsed} />
                        <div className="flex w-screen bg-white dark:bg-secondary transition duration-500 ease-in-out ">
                            <Route exact path="/" render={() => <Home />} />
                            <Route exact path="/calendar" render={() => <Calendar />} />
                            <Route exact path="/calendarDay" render={() => <CalendarDay />} />
                        </div>
                    </div>
                </div>
            </Switch>
        </BrowserRouter>
    )
}
