import axios from "axios";
export default axios.create({

    baseURL: "https://60bfbc0897295a0017c43b84.mockapi.io/",
    headers: {
        "Content-type": "application/json"
    }
});