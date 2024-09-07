<template>
    <div class="skill-item">
        {{ skill }}
    </div>
</template>

<script setup>

const prop = defineProps(['skill']);

</script>

<style lang="scss" scoped>
.skill-item {
    background-color: var(--secondary-active);
    margin: 5px;
    border-radius: 5px;
}
</style>