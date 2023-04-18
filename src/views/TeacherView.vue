<template>

    <!-- <input type="number" v-model="selectedTeacherId"> -->
    <!-- <button @click="getTeacherById">gimme teacher id</button> -->

    <div class="container">
        <div class="row">
            <div class="col-4">
                <div class="d-flex justify-content-center">
                    <selected-teacher-card-component :teacher="selectedTeacher" class="mt-5"/>
                </div>
            </div>
            <div class="col-8">
                <div class="d-flex justify-content-center">
                <selected-teacher-info-card-component :teacher="selectedTeacher" class="mt-5"/>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import NavbarComponent from '../components/NavbarComonent.vue';
import SelectedTeacherCardComponent from '../components/SelectedTeacherCardComponent.vue'
import SelectedTeacherInfoCardComponent from '../components/SelectedTeacherInfoCardComponent.vue';

import {storeToRefs} from 'pinia'
import {useTanarStore} from '../stores/store'

const {selectedTeacher, teachers, selectedTeacherId} = storeToRefs(useTanarStore());
const {getTeachersUnfiltered, getTeachersFiltered, getTeacherById, findTeacherCounty} = useTanarStore();
getTeachersUnfiltered();
getTeachersFiltered();
</script>

<style lang="scss" scoped>
.teacher-card {
    align-items: center;
}
</style>