import React from 'react'

const CreateUser = () => {
    return (
        <form>
            <div>
                <section className="bg-white max-w-[900px] mx-auto px-20 py-10 my-10 rounded-sm">
                    <h1>Create New</h1>
                    <main className=" flex flex-col my-3">
                        <label htmlFor="">Name: </label>
                        <input type="text" placeholder="Enter the name" required
                            className="bg-gray-100 w-120 h-10 px-2 border border-black-300 rounded-sm focus: outline-purple-300" />
                    </main>

                    <main className=" flex flex-col my-3">
                        <label htmlFor="">Email: </label>
                        <input type="email" placeholder="Enter your email" required
                            className="bg-gray-100 w-120 h-10 px-2 border border-black-300 rounded-sm focus: outline-purple-200" />
                    </main>

                    <main className=" flex flex-col my-3">
                        <label htmlFor="">Age: </label>
                        <input type="number" placeholder="Enter your age" required
                            className="bg-gray-100 w-120 h-10 px-2 border border-black-300 rounded-sm focus: outline-purple-200" />
                    </main>

                    <main className=" flex flex-col my-3">
                        <label htmlFor="">Address: </label>
                        <input type="text" placeholder="Enter your address" required
                            className="bg-gray-100 w-120 h-10 px-2 border border-black-300 rounded-sm focus: outline-purple-200" />
                    </main>

                    <main className=" flex flex-col my-3">
                        <label htmlFor="">Bio: </label>
                        <input type="text" placeholder="Enter your Bio" required
                            className="bg-gray-100 w-120 h-20 px-2 border border-black-300 rounded-sm focus: outline-purple-200" />
                    </main>

                    <button className=" bg-purple-800 w-120 my-4 text-white font-semibold text-sm
                    py-2 cursor-pointer rounded-b-md">Create New User</button>
                </section>
            </div >
        </form>
    )
}

export default CreateUser;