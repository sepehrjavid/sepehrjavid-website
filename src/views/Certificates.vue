<template>
    <main class="cert-page">
        <CertificateItem v-for="(cert, index) in certs" :key="index" :cert="cert" />
    </main>
</template>

<script setup>
import CertificateItem from '../components/CertificateItem.vue';
import { ref } from 'vue';

const certs = ref([
    {
        title: 'AWS Cloud Technical Essentials',
        issuer: 'Amazon Web Service (AWS)',
        issueDate: 'June 4, 2024',
        details: 'Hands on experience with many AWS services such as IAM, DynamoDB, EC2, Lambda, ECS, Cloudwatch, S3, RDS, etc.'
    },
    {
        title: 'Next-Gen Data Center Security Cloud Guard for Google Cloud',
        issuer: 'Google Cloud',
        issueDate: 'April 9, 2024',
        details: 'Lab work experience with GloudGaurd.'
    },
    {
        title: "Hardening Default GKE Cluster Configurations",
        issueDate: 'March 18, 2024',
        issuer: "Google Cloud",
        details: "Hands on practice with GKE and pod security conecrns such as pod escape and priviledge escalation."
    },
    {
        title: "Cloud Computing Basics (Cloud 101)",
        issueDate: 'March 18, 2024',
        issuer: "LearnQuest",
        details: "Introduction to different cloud platforms, cloud deployment modules, and understanding manged services."
    }
])

</script>

<style lang="scss" scoped></style>