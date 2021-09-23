import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

export class Header extends React.Component {
    render() {
        return <div class="flex items-center h-20 bg-primary ">
            <div class="w-10 h-10 mx-2 ml-5">
                <MenuIcon type="button" class="hover:text-white fill-current text-gray-400"/>
            </div>
            <h1 class="font-bold text-5xl text-white ml-2">ShiftPlanner</h1>
            <div class="container:">

            </div>
        </div>
    }
}