<template>
    <main class="achievements-page">
        <InfoCard v-for="(achievement, index) in achievements" :key="index" :title="achievement.title">
        </InfoCard>
    </main>
</template>

<script setup>
import InfoCard from '../components/InfoCard.vue';
import { ref } from 'vue';

const achievements = ref([
    {
        title: 'Junction 2021 Winner in Sustainable Data Infrastructure Challenge By Aiven'
    },
    {
        title: 'Erasmus Mundus Full Scholar among 542 applicants'
    }
]);

</script>

<style lang="scss" scoped></style>