import {defineStore} from "pinia";

export const useTanarStore = defineStore('tanarStore', {
    state: () => ({
        selectedTeacher: null,
        teachers: [],
    }),
    getters: {},
    actions: {}
})