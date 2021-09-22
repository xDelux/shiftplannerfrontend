import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

export class Header extends React.Component {
    render() {
        return <div>
            <MenuIcon />
            <h1 class = "font-bold text-3xl">ShiftPlanner</h1>
        </div>
    }
}