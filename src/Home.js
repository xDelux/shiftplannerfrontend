import React from 'react';

export const Home = () => {
    return(
        <div class="flex flex-row flex-grow m-5">
            <div class="w-8/12 border-2 border-white m-5">
                <h1>Nyheder</h1>
                <div>

                </div>
            </div>
            <div class="w-4/12 flex flex-col flex-grow m-5" >
                <div class="flex flex-grow border-2 border-white ">
                    <h1>Mine vagter</h1>
                </div>
                <div class="flex flex-grow border-2 border-white">
                    <h1>Ledige vagter</h1>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}
