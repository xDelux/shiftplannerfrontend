import React, { useContext, useState } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { Calendar } from './components/calendar_Components/Calendar/Calendar_Month/Calendar_View_Month'
import { EmployeeTable } from './components/table_Components/Table'
import { UserContext } from './Context/UserContext'
import { Employees } from './Employees'
import { Header } from './Header'
import { Home } from './Home'
import { LoginPage } from './loginPage/LoginPage'
/* import { TestingFruit } from './serverFruit/testingFruit' */
import { NavigationBar } from './NavigationBar'
import { PrivateRoute } from './PrivateRoute'

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
                                    path="/employeeTable"
                                    auth={() => user.loggedOn}
                                    renderNoAuth={noAuth}
                                    render={() => <EmployeeTable />}
                                />
                                <PrivateRoute
                                    exact
                                    path="/Employees"
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
