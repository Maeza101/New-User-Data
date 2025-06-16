import React from 'react'

export const Home = () => {
    return (
        <div className="max-w-[1250px] mx-auto">
            <section className="py-6">
                <h1>Our Users</h1>
            </section>
            <section className="flex">
                <main className="bg-white h-48 p-5 w-80 rounded-b-md m-2.5">
                    <div className="flex items-center">
                        <div className="h-14 w-16 rounded-full flex justify-center items-center bg-purple-400
                        text-white text-3xl font-bold mr-3">S</div>
                        <div>
                            <h2 className=" font-black text-2xl">Lebo</h2>
                            <p>Lebo@gmail.com</p>
                        </div>
                    </div>
                    <button className=" bg-purple-800 w-full my-4 text-white font-semibold text-sm
                    py-2 cursor-pointer rounded-b-md">View Detail</button>
                </main>
                <main className="bg-white h-48 p-5 w-80 rounded-b-md m-2.5">
                    <div className="flex items-center">
                        <div className="h-14 w-16 rounded-full flex justify-center items-center bg-purple-400
                        text-white text-3xl font-bold mr-3">S</div>
                        <div>
                            <h2 className=" font-black text-2xl">Lebo</h2>
                            <p>Lebo@gmail.com</p>
                        </div>
                    </div>
                    <button className=" bg-purple-800 w-full my-4 text-white font-semibold text-sm
                    py-2 cursor-pointer rounded-b-md">View Detail</button>
                </main>
                <main className="bg-white h-48 p-5 w-80 rounded-b-md m-2.5">
                    <div className="flex items-center">
                        <div className="h-14 w-16 rounded-full flex justify-center items-center bg-purple-400
                        text-white text-3xl font-bold mr-3">S</div>
                        <div>
                            <h2 className=" font-black text-2xl">Lebo</h2>
                            <p>Lebo@gmail.com</p>
                        </div>
                    </div>
                    <button className=" bg-purple-800 w-full my-4 text-white font-semibold text-sm
                    py-2 cursor-pointer rounded-b-md">View Detail</button>
                </main>
            </section>
        </div>
    )
}

export default Home;
