<template>
    <main class="publications-page">
        <InfoCard v-for="(publication, index) in publications" :key="index" :title="publication.title">
            <template #metadata>
                <p class="conference">
                    <font-awesome-icon :icon="['fas', 'building-columns']" /> {{ publication.conference }}
                </p>
            </template>
            <template #details>
                <p class="details">{{ publication.details }}</p>
                <a :href="publication.link" class="read-more" target="_blank">Read More</a>
            </template>
        </InfoCard>
    </main>
</template>

<script setup>
import InfoCard from '../components/InfoCard.vue';
import { ref } from 'vue';


const publications = ref([
    {
        title: 'Benchmarking of Emulated Wireless Edge Cloud Connectivity',
        conference: 'IEEE WF-IoT 2022',
        details: 'With focus on edge-cloud connectivity for maritime environments.',
        link: 'https://ieeexplore.ieee.org/abstract/document/10152152'
    },
    {
        title: 'QoS-Aware Congestion Control using SRv6',
        conference: 'IEEE CSCN23',
        details: 'This paper introduces Sepittov2 protocol designed to mitigate network congestion using SRv6.',
        link: 'https://ieeexplore.ieee.org/abstract/document/10453127'
    }
]);

</script>


<style lang="scss" scoped>
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
</style>