<template>
    <section :class="{
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
        <slot name="skill-list"></slot>
    </section>
</template>

<script setup>
import MdiKubernetes from './customIcons/KubernetesIcon.vue'
import GoogleCloudIcon from './customIcons/GoogleCloudIcon.vue';


const props = defineProps(['category', 'isOpen']);
const emits = defineEmits(['toggleIsOpen'])

function toggleCategory() {
    emits("toggleIsOpen")
}

</script>

<style lang="scss" scoped>
section {
    background-color: var(--secondary);
    color: var(--light-more);
    margin: 0.7em;
    padding: 1.4em;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    transition: max-height 0.4s ease-in-out;
    max-height: 4em;
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

}
</style>