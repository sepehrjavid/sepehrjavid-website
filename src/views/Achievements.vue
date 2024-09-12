<template>
    <main class="achievements-page">
        <AchievementItem v-for="(achievement, index) in achievements" :key="index" :achievement="achievement" />
    </main>
</template>

<script setup>
import AchievementItem from '../components/AchievementItem.vue';
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