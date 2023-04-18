import {defineStore} from "pinia";
import {axios} from '../services/dataservice';

export const useTanarStore = defineStore('tanarStore', {
    state: () => ({
        teachers:[],
        counties:[]
    }),
    getters: {},
    actions: {
        getAllTeacher(){
            return Axios.get('/search-teacher')
            .then(resp =>{
                console.log(resp.data);
                //this.termekek = resp.data;
            })
            .catch(err => {
                return Promise.reject(err);
            })
        },
        getAllCounties(){
            return axios.get('/get-all-county')
            .then(resp =>{
                this.counties = resp.data;
            })
            .catch(err => {
                console.log(err);
            })
        }

    }
})