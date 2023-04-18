import Axios from 'axios';

const axios = Axios.create({
    baseURL: "http://projektnap-001-site1.atempurl.com/api",
    headers: {
        'Content-Type': 'application/json'
    }
})

export {axios}