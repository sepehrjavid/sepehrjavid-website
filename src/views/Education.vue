<template>
    <main class="education-page">
        <EducationItem v-for="(education, index) in educations" :key="index" :education="education" />
    </main>
</template>

<script setup>
import EducationItem from '../components/EducationItem.vue';
import { ref } from 'vue';

const educations = ref([
    {
        degree: 'Master of Science in Security and Cloud Computing',
        institution: 'KTH and Aalto University',
        date: '2021 - 2023',
        details: 'Graduated with honor, CGPA: 4.59/5'
    },
    {
        degree: 'Bachelor of Science in Computer Science',
        institution: 'Shiraz University',
        date: '2017 - 2021',
        details: 'Graduated amongst top 10 out of 67 students, CGPA: 17.74/20'
    }
]);
</script>

<style lang="scss" scoped></style>