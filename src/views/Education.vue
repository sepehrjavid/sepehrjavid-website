<template>
    <main class="education-page">
        <InfoCard v-for="(education, index) in educations" :key="index" :title="education.degree">
            <template #metadata>
                <p class="institution">
                    <font-awesome-icon :icon="['fas', 'school']" class="icon" />
                    {{ education.institution }}
                </p>
                <p class="date">
                    <font-awesome-icon :icon="['fas', 'calendar']" class="icon" />
                    {{ education.date }}
                </p>
            </template>
            <template #details>
                <p class="details">{{ education.details }}</p>
            </template>
        </InfoCard>
    </main>
</template>

<script setup>
import InfoCard from '../components/InfoCard.vue';
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

<style lang="scss" scoped>
.institution {
    color: var(--secondary-active);
    margin-bottom: 2px;
}

.date {
    color: var(--secondary-active);
    margin-bottom: 10px;
}

.details {
    color: var(--light);
}
</style>