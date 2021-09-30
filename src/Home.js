import React from 'react';

export const Home = () => {
    return(
        <div class="flex flex-row flex-grow m-5 ">
            <div class="w-8/12 border-2 border-white m-5 rounded-2xl bg-primary">
                <h1 class="text-4xl text-white p-4">Nyheder</h1>
                <div>

                </div>
            </div>
            <div class="w-4/12 flex flex-col flex-grow m-5 gap-y-12 ">
                <div class="flex flex-grow border-2 border-white rounded-2xl bg-primary">
                    <h1 class="text-2xl text-white p-4">Mine vagter</h1>
                </div>
                <div class="flex flex-grow border-2 border-white rounded-2xl bg-primary">
                    <h1 class="text-2xl text-white p-4">Ledige vagter</h1>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}
