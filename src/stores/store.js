import {defineStore} from "pinia";
import {axios} from '../services/dataservice';

export const useTanarStore = defineStore('tanarStore', {
    state: () => ({
        selectedTeacher: null,
        selectedTeacherId: null,
        selectedTeacherCounty: null,
        teachers: [],
        counties: [],
        filter: {
            subject: null,
            grade: null,
            countyId: null,
            rating: null,
            priceCategory: null,
            name:null
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
            axios.get(`/search-teacher?subject=${this.filter.subject}&grade=${this.filter.grade}&countyId=${this.filter.countyId}&name=${this.filter.name}`).then((resp) => {
                this.teachers = resp.data;

            }).catch((err) => {
                console.log(err);
            })
        },
        getTeacherById() {
            axios.get(`/teacher/${this.selectedTeacherId}`).then((resp) => {
                console.log(resp);
                this.selectedTeacher = resp.data;
            }).catch((err) => {
                console.log(err);
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
        },
        findTeacherCounty() {
            // for (let index = 0; index < this.counties.length; index++) {
            //     if (this.counties[this.selectedTeacher.countyId] == id) {
            //         this.selectedTeacherCounty = this.counties[this.selectedTeacher.countyId];
            //     }
            // }
            // this.selectedTeacherCounty = this.counties[this.selectedTeacher.countyId]
        }
    }
})