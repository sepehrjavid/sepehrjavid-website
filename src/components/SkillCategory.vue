<template>
    <div class="category-header" @click="toggleCategory()">
        <font-awesome-icon :icon="category.icon" />
        <span>{{ category.name }}</span>
        <font-awesome-icon :icon="['fas', 'chevron-down']" :class="{ 'open': isOpen }" />
    </div>
    <ul v-show="category.open" class="skill-list">
        <li v-for="(item, i) in category.skills" :key="i">
            <div v-if="item.subSkills" @click="toggleSubCategory(category, i)" class="subcategory-header">
                {{ item.name }}
                <div :class="{ 'open': item.open }">
                    <i class="fas fa-chevron-down"></i>
                </div>
            </div>
            <ul v-show="item.open" v-if="item.subSkills" class="sub-skill-list">
                <li v-for="(subSkill, j) in item.subSkills" :key="j">
                    {{ subSkill }}
                </li>
            </ul>
            <p v-else>{{ item }}</p>
        </li>
    </ul>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps(['category']);

const isOpen = ref(false);

function toggleCategory() {
    isOpen.value = !isOpen.value;
}

</script>

<style lang="scss" scoped></style>