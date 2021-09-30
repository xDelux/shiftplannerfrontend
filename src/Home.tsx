import React from 'react';

export const Home = () => {
    return(
        <div className="flex flex-row flex-grow m-5 ">
            <div className="w-8/12 border-2 border-white m-5 rounded-2xl bg-primary">
                <h1 className="text-4xl text-white p-4">Nyheder</h1>
                <div>

                </div>
            </div>
            <div className="w-4/12 flex flex-col flex-grow m-5 gap-y-12 ">
                <div className="flex flex-grow border-2 border-white rounded-2xl bg-primary">
                    <h1 className="text-2xl text-white p-4">Mine vagter</h1>
                </div>
                <div className="flex flex-grow border-2 border-white rounded-2xl bg-primary">
                    <h1 className="text-2xl text-white p-4">Ledige vagter</h1>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}
