import axios from "axios";
export default axios.create({

    baseURL: "https://60bfbc0397295a0017c43b7a.mockapi.io/",
    headers: {
        "Content-type": "application/json"
    }
});