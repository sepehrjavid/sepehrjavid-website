<template>
    <section class="publication">
        <h3 class="title">
            {{ publication.title }}
        </h3>
        <p class="conference">
            <font-awesome-icon :icon="['fas', 'building-columns']" /> {{ publication.conference }}
        </p>
        <p class="details">{{ publication.details }}</p>
        <a :href="publication.link" class="read-more" target="_blank">Read More</a>
    </section>
</template>

<script setup>

const props = defineProps(['publication']);

</script>

<style lang="scss" scoped>
.publication {
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

    .conference {
        color: var(--secondary-active);
        margin-bottom: 0.5em;
    }

    .details {
        color: var(--light);
        margin-bottom: 0.5em;
    }

    .read-more {
        color: var(--light);
    }
}
</style>