<template>
    <section class="achievement">
        <h3 class="title"> {{ achievement.title }}</h3>
    </section>
</template>

<script setup>
const props = defineProps(['achievement'])
</script>

<style lang="scss" scoped>
.achievement {
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

}
</style>