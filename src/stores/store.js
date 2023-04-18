import {defineStore} from "pinia";
import {axios} from '../services/dataservice';

export const useTanarStore = defineStore('tanarStore', {
    state: () => ({
        selectedTeacher: null,
        teachers: [],
        filter: {
            subject: null,
            grade: null,
            countyId: null,
            rating: null,
            priceCategory: null,
        } 
    }),
    getters: {},
    actions: {
        getTeachersUnfiltered() {
            axios.get('/search-teacher').then((resp) => {
                this.teachers = resp.data;
            }).catch((err) => {
                console.log(err);
            })
        },
        getTeachersFiltered() {
            axios.get(`/search-teacher?subject=atomfizika`).then((resp) => {
                console.log(resp.data);
            }).catch((err) => {
                console.log(err);
            })
        }
    }
})