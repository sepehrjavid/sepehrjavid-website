<template>
    <div class="category-header" @click="toggleCategory()">
        <font-awesome-icon :icon="category.icon" /> {{ category.name }}
        <font-awesome-icon :icon="['fas', 'chevron-down']" :class="{ 'open': isOpen }" />
    </div>
    <ul v-show="isOpen" class="skill-list">
        <li v-for="(item, index) in category.skills" :key="index">
            <SkillCategory v-if="item.skills" :category="item" />
            <SkillItem v-else :skill="item" />
        </li>
    </ul>
</template>

<script setup>
import SkillItem from './SkillItem.vue';
import { ref } from 'vue';

const props = defineProps(['category']);

const isOpen = ref(false);

function toggleCategory() {
    isOpen.value = !isOpen.value;
}

</script>

<style lang="scss" scoped>
.category-header {
    background-color: var(--secondary);
    color: var(--light-more);
    margin: 10px;
    padding: 10px;
    display: flex;
    justify-content: center;
    border-radius: 10px;
    height: 40px;
}

.skill-list {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style-type: none;
}
</style>