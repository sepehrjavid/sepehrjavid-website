<template>
    <div class="skill-item">
        <b>{{ skill }}</b>
    </div>
</template>

<script setup>

const prop = defineProps(['skill']);

</script>

<style lang="scss" scoped>
.skill-item {
    background-color: var(--secondary-active);
    margin-top: 0.6em;
    padding: 0.3em;
    border-radius: 8px;
    color: var(--primary);
    display: flex;
    justify-content: center;
    transition: transform 0.2s, box-shadow 0.2s;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 3px 7px var(--secondary-active);
    }
}
</style>