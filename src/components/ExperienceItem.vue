<template>
    <section class="job">
        <h3 class="title">{{ job.title }}</h3>
        <p class="company"><font-awesome-icon :icon="['fas', 'building']" class="icon" /> {{ job.company }} -
            <font-awesome-icon :icon="['fas', 'location-dot']" class="icon" />
            {{ job.location }}
        </p>
        <p class="date"><font-awesome-icon :icon="['fas', 'calendar']" class="icon" /> {{ job.date }}</p>
        <ul class="description">
            <li v-for="(detail, i) in job.details" :key="i" class="description-item">
                {{ detail }}
            </li>
        </ul>
    </section>
</template>

<script setup>
const props = defineProps(['job'])


</script>

<style lang="scss" scoped>
.job {
    margin: 20px;
    background-color: var(--secondary);
    padding: 25px;
    border-radius: 10px;
    transition: transform 0.3s, box-shadow 0.3s;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 4px 8px var(--secondary);
    }


    .title {
        margin-bottom: 8px;
        color: var(--light-more);
    }

    .company {
        color: var(--secondary-active);
        margin-bottom: 2px;
    }

    .date {
        color: var(--secondary-active);
        margin-bottom: 10px;
    }

    .description {
        color: var(--light);
    }

    .description-item {
        margin-bottom: 3px;
    }

}
</style>