<template>
    <navbar-component/>
    <div class="container">
        <div class="row">
            <div class="col-4">
                <div class="d-flex justify-content-center">
                    <selected-teacher-card-component class="mt-5"/>
                </div>
            </div>
            <div class="col-8">
                <div class="d-flex justify-content-center">
                <selected-teacher-info-card-component class="mt-5"/>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import NavbarComponent from '../components/NavbarComonent.vue';
import SelectedTeacherCardComponent from '../components/SelectedTeacherCardComponent.vue'
import SelectedTeacherInfoCardComponent from '../components/SelectedTeacherInfoCardComponent.vue';
</script>

<style lang="scss" scoped>
.teacher-card {
    align-items: center;
}
</style>