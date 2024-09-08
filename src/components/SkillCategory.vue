<template>
    <div :class="{ 'is-expanded': isOpen, 'category': true }">
        <div class="category-header" @click="toggleCategory()">
            <div class="category-icon">
                <font-awesome-icon :icon="category.icon" />
            </div>
            <b class="category-name">
                {{ category.name }}
            </b>
            <div class="open-toggle">
                <font-awesome-icon :icon="['fas', 'chevron-down']" />
            </div>
        </div>
        <ul v-show="isOpen" class="skill-list">
            <li v-for="(item, index) in category.skills" :key="index">
                <SkillCategory v-if="item.skills" :category="item" />
                <SkillItem v-else :skill="item" />
            </li>
        </ul>
    </div>
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
.category {
    background-color: var(--secondary);
    color: var(--light-more);
    margin: 0.7em;
    padding: 1.4em;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    transition: max-height 0.6s ease-out;
    max-height: 5em;
    overflow: hidden;

    .open-toggle {
        transition: 0.4s ease-out;
    }

    &.is-expanded {
        max-height: 100%;
    }

    &.is-expanded>.category-header>.open-toggle {
        transform: rotate(180deg);
    }

    .category-header {
        background-color: var(--secondary);
        margin-bottom: 0.3em;
        color: var(--light-more);
        display: flex;
        justify-content: center;

        .category-name {
            margin-right: 0.4em;
            margin-left: 0.4em;
        }
    }

    .skill-list {
        display: flex;
        flex-direction: column;
        justify-content: center;
        list-style-type: none;
    }
}
</style>