import React, {useState} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { CalendarDay} from './components/calendar_Components/Calender_View_Day'
import { Calendar } from './components/calendar_Components/Calendar_View_Month'
import { Header } from './Header'
import { Home } from './Home'
/* import { TestingFruit } from './serverFruit/testingFruit' */
import { Login } from './loginPage/LoginView'
import { LoginPage } from './loginPage/LoginPage'
import { NavigationBar } from './NavigationBar'


export const MainBody = () => {
    let [navBarCollapsed, setNavBarCollapsed] = useState(false)

    return (
        <BrowserRouter>
            <Switch>

                <Route exact path="/login" render={() => <LoginPage/>} />

                <div className="flex flex-col min-h-screen">

                    <Header collapsed={navBarCollapsed} burgerMenuOnClick={setNavBarCollapsed} />
                    <div className="flex flex-row flex-grow">
                        <NavigationBar collapsed={navBarCollapsed} />
                        <div className="flex flex grow w-screen bg-white dark:bg-secondary transition duration-500 ease-in-out ">
                            <Route exact path="/" render={() => <Home />} />
                            <Route exact path="/testing" render={() => <Login />} />
                            <Route exact path="/calendar" render={() => <Calendar />} />
                            <Route exact path="/calendarDay" render={() => <CalendarDay />} />
                        </div>
                    </div>
                </div>
            </Switch>
        </BrowserRouter>
    )
}
