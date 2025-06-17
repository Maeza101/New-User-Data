import React, { useEffect, useState } from 'react'
import API from '../api/api';
import { Link } from 'react-router-dom';
import { CircleLoader } from 'react-spinners';

export const Home = () => {
    const [Myuser, setMyUser] = useState([]);
    const [loading, setLoading] = useState(true);
    console.log(Myuser);
    console.log(Object)
    const getUsers = async () => {
        try {
            const res = await API.get("/viewalluser")
            setMyUser(res.data.data);
        } catch (error) {
            console.log("Failed to fetch users", error)
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    if (loading) return <CircleLoader size={50} color="#7e22cd" className=" mx-auto mt-10" />

    return (
        <div className="max-w-[1250px] mx-auto">
            <section className="py-6">
                <h1>Our Users</h1>
            </section>
            <section className="flex">

                {Myuser.map((allUserData) => (
                    <main className="bg-white h-48 p-5 w-80 rounded-b-md m-2.5">
                        <div className="flex items-center">
                            <div className="h-14 w-16 rounded-full flex justify-center items-center bg-purple-400
                        text-white text-3xl font-bold mr-3">

                                {allUserData.username.charAt()}</div>
                            <div>
                                <h2 className=" font-black text-2xl">{allUserData.username}{" "}</h2>
                                <p>{allUserData.email}{" "}</p>
                            </div>
                        </div>
                        <Link to={`/UserDetail/${allUserData._id}`}>
                            <button className=" bg-purple-800 w-full my-4 text-white font-semibold text-sm
                    py-2 cursor-pointer rounded-b-md">View Detail</button>
                        </Link>
                    </main>
                ))};

            </section>
        </div>
    );
};

export default Home;
