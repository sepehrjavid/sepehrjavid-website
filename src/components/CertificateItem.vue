<template>
    <div class="certificate">
        <h3 class="title">{{ cert.title }}</h3>
        <div class="issuer">
            <font-awesome-icon :icon="['fas', 'building']" class="icon" /> {{ cert.issuer }}
        </div>
        <div class="date">
            <font-awesome-icon :icon="['fas', 'calendar']" class="icon" /> {{ cert.issueDate }}
        </div>
        <p class="details">{{ cert.details }}</p>
    </div>
</template>

<script setup>
const prop = defineProps(['cert']);
</script>

<style lang="scss" scoped>
.certificate {
    margin: 1em;
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

    .issuer {
        color: var(--secondary-active);
        margin-bottom: 2px;
    }

    .date {
        color: var(--secondary-active);
        margin-bottom: 10px;
    }

    .details {
        color: var(--light);
    }
}
</style>