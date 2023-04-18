import Axios from 'axios';

const axios = Axios.create({
    baseUrl: "asd",
    headers: {
        'Content-Type': 'application/json'
    }
})

export {axios}