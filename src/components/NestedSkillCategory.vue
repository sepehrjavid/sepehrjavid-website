<template>
    <div :class="{
        'is-expanded': props.isOpen,
        'nested': true
    }">
        <div class="category-header" @click="toggleCategory()">
            <div class="category-icon">
                <MdiKubernetes v-if="category.name === 'Kubernetes'" />
                <GoogleCloudIcon v-else-if="category.name === 'GCP'" />
                <font-awesome-icon v-else :icon="category.icon" />
            </div>
            <b class="category-name">
                {{ category.name }}
            </b>
            <div class="open-toggle">
                <font-awesome-icon :icon="['fas', 'chevron-down']" />
            </div>
        </div>
        <div class="skill-list">
            <template v-for="(item, index) in category.skills" :key="index">
                <SkillItem :skill="item" />
            </template>
        </div>
    </div>
</template>

<script setup>
import MdiKubernetes from './customIcons/KubernetesIcon.vue'
import GoogleCloudIcon from './customIcons/GoogleCloudIcon.vue';
import SkillItem from '../components/SkillItem.vue';


const props = defineProps(['category', 'isOpen']);
const emits = defineEmits(['toggleIsOpen'])

function toggleCategory() {
    emits("toggleIsOpen")
}

function getCategoryContainerClass() {
    let categoryClass = `nested ${props.theme}`;
    if (props.isOpen) {
        categoryClass = categoryClass.concat(" ", "is-expanded");
    }
    return categoryClass;
}

</script>

<style lang="scss" scoped>
.nested {
    background-color: var(--primary);
    color: var(--light-more);
    margin: 0.7em;
    padding: 1.4em;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    transition: max-height 0.4s ease-in-out;
    max-height: 3.5em;
    overflow: hidden;

    .open-toggle {
        transition: 0.4s ease-in-out;
    }

    &.is-expanded {
        max-height: 300vh;
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
        opacity: 0;
        margin-top: 1em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        list-style-type: none;
        transition: 0.4s ease-in-out;
    }

    &.is-expanded>.skill-list {
        opacity: 1;
    }

}
</style>