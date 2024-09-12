<template>
    <main class="skills-page">
        <SkillCategory v-for="(category, index) in skills" :key="index" :category="category" theme="light-theme" />
    </main>
</template>

<script setup>
import SkillCategory from '../components/SkillCategory.vue';
import { ref } from 'vue'

const skills = ref([
    {
        name: 'Programming',
        icon: ['fas', 'code'],
        skills: ['C/C++', 'Python', 'Java', 'Javascript', 'Bash']
    },
    {
        name: 'Web Development',
        icon: ['fab', 'js'],
        skills: ['Nodejs', 'Django', 'ReactsJs', 'Vuejs', 'Flask', 'Git', 'Nginx']
    },
    {
        name: 'Cloud',
        icon: ['fas', 'cloud'],
        skills: [
            'Ansible',
            'Docker',
            'Terraform',
            'gRPC',
            'MQTT',
            'Network Service Mesh',
            'OpenStack',
            'gitLab Devops',
            'Kafka',
            'Grafana',
            'Prometheus',
            {
                name: 'Kubernetes',
                skills: ['Calico', 'Cilium']
            },
            {
                name: 'Google Cloud Platform (GCP)',
                skills: ['GKE', 'ComputeEngine', 'Storage', 'Dataflow', 'BigQuery', 'Loadbalancer', 'Cloud Function', 'Cloud Armor']
            },
            {
                name: 'Amazon Web Service (AWS)',
                icon: ['fab', 'aws'],
                skills: ['S3', 'Lambda', 'DynamoDB', 'SQS', 'EC2', 'ECS', 'EKS', 'Cloud Watch', 'RDS', 'IAM']
            }
        ]
    },
    {
        name: 'Databases/Caching',
        icon: ['fas', 'database'],
        open: false,
        skills: ['PostgreSQL', 'MongoDB', 'SQLite', 'Redis', 'Vault']
    },
    {
        name: 'Security',
        icon: ['fas', 'lock'],
        open: false,
        skills: ['Metasploit', 'Cain&Abel', 'BurpSuite', 'WireGuard', 'strongSwan', 'BeEF', 'EthicalHacking', 'Informationsecurity', 'Networksecurity', 'Trivy', 'ScoutSuite']
    },
    {
        name: 'Networking',
        icon: ['fas', 'network-wired'],
        open: false,
        skills: ['CCNA R&S and security', 'Wireshark', 'HLS', 'Fastclick', 'DPDK', 'SRv6', 'eBPF programming', 'Linux kernel network stack']
    },
    {
        name: 'Operating Systems',
        icon: ['fas', 'desktop'],
        open: false,
        skills: ['Kali Linux', 'Linux Server and Desktop', 'Windows Server', 'MacOS']
    }
])

</script>

<style lang="scss" scoped></style>