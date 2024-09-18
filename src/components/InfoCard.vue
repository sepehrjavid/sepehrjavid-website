<template>
    <section>
        <h3 class="title">{{ title }}</h3>
        <slot name="metadata"></slot>
        <slot name="details"></slot>
    </section>
</template>

<script setup>
const props = defineProps(['title'])


</script>

<style lang="scss" scoped>
section {
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