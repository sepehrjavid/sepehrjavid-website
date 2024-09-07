<template>
    <main class="experiance-page">
        <ExperienceItem v-for="(job, index) in jobs" :job="job" :key="index" />
    </main>
</template>

<script setup>
import ExperienceItem from '../components/ExperienceItem.vue'
import { ref } from 'vue';

const jobs = ref([
    {
        title: 'Security and Infrastructure Engineer',
        company: 'Focalpay',
        location: 'Stockholm, Sweden',
        date: 'October 2023 - Present',
        details: [
            'Proposed and deployed a Canary deployment for enhanced progressive delivery.',
            'Introduced and deployed GCP Cloud Armor and API Gateway for improved traffic control and flexibility.',
            'Reduced GCP costs by 15.1% by eliminating redundant resources and optimizing resource types for cost efficiency.',
            'Added observability to the cluster using Grafana stack, identifying slow APIs and improving performance.',
            'Deploying and supporting a company\'s cloud solution using GKE, Bigquery, Kafka, Dataflow, and Cloud Function.'
        ]
    },
    {
        title: 'Cloud Networking Research Intern',
        company: 'Ericsson',
        location: 'Jorvas, Finland',
        date: 'July 2023 - Sep 2023',
        details: [
            'Engineered Sepittov2, an advanced congestion mitigation protocol improving SRv6 network latency by 64% which supports various congestion mitigation strategies based on packet QoS class.',
            'Designed an efficient latency observability for K8s cluster which utilized the user packets to piggyback telemetry data and reduce overhead telemetry traffic in the network.'
        ]
    },
    {
        title: 'Thesis Worker',
        company: 'Ericsson',
        location: 'Jorvas, Finland',
        date: 'Dec 2022 - Jun 2023',
        details: [
            'Obtained deep knowledge of eBPF programming and Linux network stack including Qdisc, XDP, Kprobes, and iptables.',
            'Conducted in-depth research on networking in the Linux kernel, eBPF programming, congestion control mechanisms, and packet manipulation.',
            'Engineered a sophisticated eBPF congestion control protocol (called Sepittov1) using packet manipulation and graph theory, improving network latency in an SRv6 network.'
        ]
    },
    {
        title: 'Research Intern',
        company: 'Ericsson',
        location: 'Jorvas, Finland',
        date: 'May 2022 - Aug 2023',
        details: [
            'Automated the installation of new Network Service Mesh (NSM) versions on Kubernetes using Ansible with different CNIs, leading to in-depth research on NSM functionality.',
            'Examined traffic shaping in Kubernetes with CNIs such as Calico and Cilium, performing in-depth research on each, leading to a paper submission.',
            'Performed deep research on SRv6 in Kubernetes CNIs and Linux kernel.'
        ]
    },
    {
        title: 'Django Developer',
        company: 'Timnak Travel Agency',
        location: 'Shiraz, Iran',
        date: 'Sep 2019 - Sep 2021',
        details: [
            'Iranjourney project management with agile methods and back-end development using Django REST framework, Django Channels, Redis, and PostgreSQL.',
            'Software testing using Django automated test tools as well as pytest',
            'Local Linux demo server and production server setup using Docker, Nginx, and Bind9.'
        ]
    },
    {
        title: 'Java Developer Intern',
        company: 'Rayanova',
        location: 'Shiraz, Iran',
        date: 'Mar 2019 - Jul 2019',
        details: [
            'Laboratory software development utilizing Java, JUnit test framework and Maven.',
            'Middle-ware development for insurance company API communications (SOAP) using Java.'
        ]
    },
    {
        title: 'Network Design Engineer Intern',
        company: 'Shiraz Central Post Office',
        location: 'Shiraz, Iran',
        date: 'Jul 2015 - Sep 2015',
        details: [
            'ARP spoofing with Cain & Abel and packet sniffing with Wireshark in the VOIP system for pen-testing.',
            'Participated in Cisco core switch upgrade on the network, and network troubleshooting.'
        ]
    }
])
</script>

<style lang="scss" scoped></style>