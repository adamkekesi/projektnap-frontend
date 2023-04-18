import {defineStore} from "pinia";

export const useTanarStore = defineStore('tanarStore', {
    state: () => ({
        teachers:[],
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
        }

    }
})