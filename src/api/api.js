import axios from "axios";

const API = axios.create({
    baseURL: "https://book-data-km2d.onrender.com/user"
});

export default API;