<template>
    <main class="publications-page">
        <PublicationItem v-for="(publication, index) in publications" :key="index" :publication="publication" />
    </main>
</template>

<script setup>
import PublicationItem from '../components/PublicationItem.vue';
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
