<template>

    <div class="teacherCard">
        <div class="img">
            <img class="teacherImg" src="https://media.istockphoto.com/id/1160927409/photo/portrait-of-female-elementary-school-teacher-standing-in-classroom.jpg?s=612x612&w=0&k=20&c=cShdgor3DDR2suDcbD0cTIj4k-rAzHKztxnWU4nvTbs=" alt="...">
        </div>
        <div class="body">
            <div class="bodyItem">
                <span class="cardText name">{{ teacher.name }}</span>
            </div>
            <div class="bodyItem">
                <svg class="cardSvg" width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.75 4.21673L6.7167 10.7667C3.50003 12.8667 3.50003 17.5667 6.7167 19.6667L16.75 26.2167C18.55 27.4 21.5167 27.4 23.3167 26.2167L33.3 19.6667C36.5 17.5667 36.5 12.8834 33.3 10.7834L23.3167 4.23339C21.5167 3.03339 18.55 3.03339 16.75 4.21673Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.38337 21.8L9.3667 29.6167C9.3667 31.7333 11 34 13 34.6667L18.3167 36.4333C19.2334 36.7333 20.75 36.7333 21.6834 36.4333L27 34.6667C29 34 30.6334 31.7333 30.6334 29.6167V21.8833" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M35.6667 25V15" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span class="badge math">{{ teacher.subject }}</span>
            </div>
            <div class="bodyItem">
                <svg class="cardSvg" width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 22.3831C22.8719 22.3831 25.2 20.0551 25.2 17.1831C25.2 14.3113 22.8719 11.9832 20 11.9832C17.1282 11.9832 14.8 14.3113 14.8 17.1831C14.8 20.0551 17.1282 22.3831 20 22.3831Z" stroke="white" stroke-width="3"/>
                    <path d="M6.03326 14.15C9.31659 -0.28335 30.6999 -0.266681 33.9666 14.1666C35.8832 22.6333 30.6166 29.8 25.9999 34.2333C22.6499 37.4666 17.3499 37.4666 13.9833 34.2333C9.38326 29.8 4.11659 22.6166 6.03326 14.15Z" stroke="white" stroke-width="3"/>
                </svg>
                <span class="cardText location" >Lakhely</span>
            </div>
        </div>
        <div class="button">
            <button class="btn-primary cardBtn">
                <svg width="40" height="40" viewBox="0 0 60 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.375 9.51975L38.6751 24.7331C40.6001 26.5298 40.6001 29.4698 38.6751 31.2664L22.375 46.4798" stroke="white" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
    </div>


</template>

<script setup>
import  Axios  from '../services/dataservice';
import { useBookStore } from '../strores';
const props = defineProps(["teacher"]);
</script>

<style lang="scss" scoped>

.main{
    width: 100vw;
    display: flex;
    justify-content: center;
}

.cardContainer{
    display: grid;
    grid-template-columns: 100%;
    align-items: center;
    column-gap: 50px;
}

.teacherCard{
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #00813B;
    width: 480px;
    height: 160px;
    border-radius: 10px;
    margin: 20px;
}


.teacherImg{
    width: 120px;
    height: 120px;
    border-radius: 300px;
    margin:  0 20px;
    object-fit: cover;
}

.body{
    width: 50%;
}

.cardText{
    color: white;
}

.name{
    font-size: 25px;
}

.badge{
    padding: 5px;
}

.cardSvg{
    margin: 5px;
}

.cardBtn{
    width: 60px;
    height: 60px;
    background-color: #004922;
    border-radius: 10px;
    border: none;
    outline: none;
    margin-right: 40px;
}

.bodyItem{
    margin-bottom: 5px;
}

.math{
    background-color: #0017EA;
}

@media only screen and (min-width: 1000px) {
    .cardContainer{
    grid-template-columns: 50% 50%;
    }
}


</style>