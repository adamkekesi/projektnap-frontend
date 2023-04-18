import {defineStore} from "pinia";
import axios from '../services/dataservice'

export const useTanarStore = defineStore('tanarStore', {
    state: () => {
        tanarok: []
    },
    getters: {},
    actions: {
        getTanarok() {
            axios.get('/Teacher/get-teacher').then((resp) => {
                this.tanarok = resp.data
            }).catch((err) => {
                console.log(err);
            })
        },
        tesztTanarok() {
            teszt.get('/tanarok').then((resp) => {
                this.tanarok = resp.data
            }).catch((err) => {
                console.log(err);
            })
        }
    }
})