<template>
    <div :class="getCategoryContainerClass()">
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
                <SkillCategory v-if="item.skills" :category="item" :theme="getChildTheme()" />
                <SkillItem v-else :skill="item" />
            </li>
        </ul>
    </div>
</template>

<script setup>
import SkillItem from './SkillItem.vue';
import { ref } from 'vue';

const props = defineProps(['category', 'theme']);


const isOpen = ref(false);

function toggleCategory() {
    isOpen.value = !isOpen.value;
}

function getChildTheme() {
    if (props.theme === 'light-theme') {
        return 'dark-theme';
    }
    else {
        return 'light-theme';
    }
}

function getCategoryContainerClass() {
    let categoryClass = `category ${props.theme}`;
    if (isOpen.value) {
        categoryClass = categoryClass.concat(" ", "is-expanded");
    }
    return categoryClass;
}

</script>

<style lang="scss" scoped>
.dark-theme {
    background-color: var(--primary);
}

.light-theme {
    background-color: var(--secondary);
}

.category {
    color: var(--light-more);
    margin: 0.7em;
    padding: 1.4em;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    transition: max-height 0.4s ease-in-out;
    max-height: 5em;
    overflow: hidden;

    .open-toggle {
        transition: 0.4s ease-in-out;
    }

    &.is-expanded {
        max-height: 100%;
    }

    &.is-expanded>.category-header>.open-toggle {
        transform: rotate(180deg);
    }

    .category-header {
        color: var(--light-more);
        display: flex;
        justify-content: center;

        .category-name {
            margin-right: 0.4em;
            margin-left: 0.4em;
        }
    }

    .skill-list {
        margin-top: 0.4em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        list-style-type: none;
    }
}
</style>