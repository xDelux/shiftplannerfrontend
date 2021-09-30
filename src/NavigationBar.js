import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BadgeIcon from '@mui/icons-material/Badge';
import GroupIcon from '@mui/icons-material/Group';

export class NavigationBar extends React.Component{
        render() {
            return(
                <div class="flex flex-col w-64 bg-primary text-white px-6 text-lg pt-5 gap-y-5">
                    <ul class="flex flex-col gap-y-10 items-start justify-items-center ">
                        <li class="px-2 w-40 h-8 hover:bg-secondary rounded-sm "><HomeIcon/> Hjem</li>
                        <li class="px-2 w-40 h-8 hover:bg-secondary rounded-sm"><AssignmentIcon/> Mine vagter</li>
                        <li class="px-2 w-40 h-8 hover:bg-secondary rounded-sm"><BadgeIcon/> Vagtplan</li>
                        <li class="px-2 w-40 h-8 hover:bg-secondary rounded-sm"><GroupIcon/> Medarbejdere</li>
                    </ul>
                    <div class="flex flex-grow"></div>
                    <ul class="my-7 text-center">
                        <li>Indstillinger</li>
                        <li>Log ud</li>
                    </ul>
                </div>
            );
        };
}

