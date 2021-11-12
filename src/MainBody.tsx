import React, { useContext, useState } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { CalendarDay } from './components/calendar_Components/Calendar/Calendar_Day/Calender_View_Day'
import { Calendar } from './components/calendar_Components/Calendar/Calendar_Month/Calendar_View_Month'
import { EmployeeTable } from './components/table_Components/Table'
import { UserContext } from './Context/UserContext'
import { Employees } from './Employees'
import { Header } from './Header'
import { Home } from './Home'
import { LoginPage } from './loginPage/LoginPage'
import { MyProfile } from './MyProfile'
import { NavigationBar } from './NavigationBar'
import { PrivateRoute } from './PrivateRoute'
import { Settings } from './Settings'

export const MainBody = () => {
    const { user, setUser } = useContext(UserContext)
    const noAuth = () => <Redirect to={'/login'} />

    let [navBarCollapsed, setNavBarCollapsed] = useState(false)

    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/login" render={() => <LoginPage />} />

                    <div className="flex flex-col min-h-screen">
                        <Header collapsed={navBarCollapsed} burgerMenuOnClick={setNavBarCollapsed} />
                        <div className="flex flex-row flex-auto">
                            <NavigationBar collapsed={navBarCollapsed} />
                            <div className="flex w-screen bg-white dark:bg-secondary transition duration-500 ease-in-out ">
                                {/* <Route exact path="/" render={() => <Home />} />
                                <Route exact path="/calendar" render={() => <Calendar />} />
                                <Route exact path="/calendarDay" render={() => <CalendarDay />} />
                                <Route exact path="/employeeTable" render={() => <EmployeeTable />} />
                                <Route exact path="/employees" render={() => <Employees />} />
                                <Route exact path="/myprofile" render={() => <MyProfile />} />
                                <Route exact path="/settings" render={() => <Settings />} /> */}
                                <Route
                                    exact
                                    path="/"
                                    render={() => (
                                        <>
                                            {user.loggedOn && <Home />}
                                            {!user.loggedOn && noAuth()}
                                        </>
                                    )}
                                />
                                <PrivateRoute
                                    exact
                                    path="/calendar"
                                    auth={() => user.loggedOn}
                                    renderNoAuth={noAuth}
                                    render={() => <Calendar />}
                                />
                                <PrivateRoute
                                    exact
                                    path="/settings"
                                    auth={() => user.loggedOn}
                                    renderNoAuth={noAuth}
                                    render={() => <Settings />}
                                />
                                <PrivateRoute
                                    exact
                                    path="/myprofile"
                                    auth={() => user.loggedOn}
                                    renderNoAuth={noAuth}
                                    render={() => <MyProfile />}
                                />
                                <PrivateRoute
                                    exact
                                    path="/calendarDay"
                                    auth={() => user.loggedOn}
                                    renderNoAuth={noAuth}
                                    render={() => <CalendarDay />}
                                />
                                <PrivateRoute
                                    exact
                                    path="/employeeTable"
                                    auth={() => user.loggedOn}
                                    renderNoAuth={noAuth}
                                    render={() => <EmployeeTable />}
                                />
                                <PrivateRoute
                                    exact
                                    path="/employees"
                                    auth={() => user.loggedOn}
                                    renderNoAuth={noAuth}
                                    render={() => <Employees />}
                                />
                            </div>
                        </div>
                    </div>
                </Switch>
            </BrowserRouter>
        </div>
    )
}
