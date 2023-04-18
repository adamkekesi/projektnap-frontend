<template>
    <navbar-component/>
    <div>
        <h1>TESZT</h1>
            {{ teachers }}
        <h1>TESZT2</h1>
        <h1>END TESZT</h1>
    </div>
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

const {selectedTeacher, teachers} = storeToRefs(useTanarStore());
const {getTeachersUnfiltered, getTeachersFiltered} = useTanarStore();
getTeachersUnfiltered();
getTeachersFiltered();
</script>

<style lang="scss" scoped>
.teacher-card {
    align-items: center;
}
</style>