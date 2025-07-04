import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import API from '../api/api';
import { CircleLoader } from 'react-spinners';

export const UserDetail = () => {
    const { id } = useParams();
    console.log("This is my id", id);
    const [oneUser, setOneUser] = useState({});
    console.log(oneUser);

    const getSingleUser = async () => {
        const res = await API.get(`/getsingleuser/${id}`);
        setOneUser(res.data.data);
    };

    useEffect(() => {
        getSingleUser();
    }, []);



    return (
        <div>
            <section className=" bg-white max-w-[900px] mx-auto my-12 px-20 py-10 rounded-lg">
                <div className="h-32 w-32 bg-purple-400 text-white rounded-full flex justify-center items-center
                text-3xl font-bold mr-3">
                    {oneUser?.username?.charAt()}
                </div>
                <h2>
                    {" "}
                    <b>Name:</b> {oneUser.username}
                </h2>
                <p>
                    {" "}
                    <b>Email:</b> {oneUser.email}
                </p>
                <p>
                    {" "}
                    <b>Age:</b> {oneUser.age}
                </p>
                <p>
                    {" "}
                    <b>Address:</b> {oneUser.address}
                </p>
                <p>
                    {" "}
                    <b>Bio:</b> {oneUser.bio}
                </p>
                <main>
                    <button className=" bg-amber-400 w-40 my-4 text-white font-semibold text-sm
                    py-2 cursor-pointer hover:bg-amber-500 rounded-b-md mr-4" >Edit Info</button>

                    <button className=" bg-red-600 w-40 my-4 text-white font-semibold text-sm
                    py-2 cursor-pointer hover:bg-red-700 rounded-b-md mr-4">Delete Info</button>

                    <button className=" bg-blue-600 w-40 my-4 text-white font-semibold text-sm
                    py-2 cursor-pointer hover:bg-blue-600 rounded-b-md mr-4">Back to Home</button>
                </main>
            </section>
        </div>
    )
}

export default UserDetail;