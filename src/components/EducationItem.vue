<template>
    <section class="school">
        <h3 class="degree-title">{{ education.degree }}</h3>
        <p class="institution">
            <font-awesome-icon :icon="['fas', 'school']" class="icon" />
            {{ education.institution }}
        </p>
        <p class="date">
            <font-awesome-icon :icon="['fas', 'calendar']" class="icon" />
            {{ education.date }}
        </p>
        <p class="details">{{ education.details }}</p>
    </section>
</template>

<script setup>
const props = defineProps(['education'])

</script>

<style lang="scss" scoped>
.school {
    margin: 20px;
    background-color: var(--secondary);
    padding: 25px;
    border-radius: 10px;
    transition: transform 0.3s, box-shadow 0.3s;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 4px 8px var(--secondary);
    }

    .degree-title {
        margin-bottom: 8px;
        color: var(--light-more);
    }

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
}
</style>