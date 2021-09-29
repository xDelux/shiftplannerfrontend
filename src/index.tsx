import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Header } from './Header'
import { NavigationBar } from './NavigationBar'
import { MainBody } from './MainBody'

ReactDOM.render(
    <React.StrictMode>
        <main className="flex flex-col min-h-screen">
            <Header />
            <div className="flex flex-row flex-grow">
                <NavigationBar />
                <MainBody />
            </div>
        </main>
    </React.StrictMode>,
    document.getElementById('root')
)
