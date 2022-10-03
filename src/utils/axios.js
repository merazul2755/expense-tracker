import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://videos-application.herokuapp.com/",
});

export default axiosInstance;
