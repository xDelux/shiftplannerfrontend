import ReactDOM from 'react-dom'
import './index.css'
import UserContextProvider from './Context/UserContext'
import { MainBody } from './MainBody'

ReactDOM.render(
    <UserContextProvider>
        <MainBody />
    </UserContextProvider>,
    document.getElementById('root')
)
