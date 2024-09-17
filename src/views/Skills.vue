<template>
    <main class="skills-page">
        <SkillCategory @toggle-is-open="handleIsOpen(category)" v-for="(category, index) in skills" :key="index"
            :category="category" theme="light-theme" :is-open="category.isOpen">
            <template #skill-list>
                <div class="skill-list">
                    <template v-for="(item, index) in category.skills" :key="index">
                        <NestedSkillCategory v-if="item.skills" :category="item" :is-open="item.isOpen"
                            @toggle-is-open="handleIsOpen(item)" />
                        <SkillItem v-else :skill="item" />
                    </template>
                </div>
            </template>
        </SkillCategory>
    </main>
</template>

<script setup>
import SkillItem from '../components/SkillItem.vue'
import SkillCategory from '../components/SkillCategory.vue';
import NestedSkillCategory from '../components/NestedSkillCategory.vue'
import { ref } from 'vue'

function handleIsOpen(category) {
    category.isOpen = !category.isOpen;
}


const skills = ref([
    {
        name: 'Programming',
        icon: ['fas', 'code'],
        skills: ['C/C++', 'Python', 'Java', 'Javascript', 'Bash'],
        isOpen: false
    },
    {
        name: 'Web Development',
        icon: ['fab', 'js'],
        skills: ['Nodejs', 'Django', 'ReactsJs', 'Vuejs', 'Flask', 'Git', 'Nginx'],
        isOpen: false
    },
    {
        name: 'Cloud',
        isOpen: false,
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
                isOpen: false,
                skills: ['Calico', 'Cilium']
            },
            {
                name: 'GCP',
                isOpen: false,
                skills: ['GKE', 'ComputeEngine', 'Storage', 'Dataflow', 'BigQuery', 'Loadbalancer', 'Cloud Function', 'Cloud Armor']
            },
            {
                name: 'AWS',
                isOpen: false,
                icon: ['fab', 'aws'],
                skills: ['S3', 'Lambda', 'DynamoDB', 'SQS', 'EC2', 'ECS', 'EKS', 'Cloud Watch', 'RDS', 'IAM']
            }
        ]
    },
    {
        name: 'Databases/Caching',
        isOpen: false,
        icon: ['fas', 'database'],
        skills: ['PostgreSQL', 'MongoDB', 'SQLite', 'Redis', 'Vault']
    },
    {
        name: 'Security',
        isOpen: false,
        icon: ['fas', 'lock'],
        skills: ['Metasploit', 'Cain&Abel', 'BurpSuite', 'WireGuard', 'strongSwan', 'BeEF', 'EthicalHacking', 'Informationsecurity', 'Networksecurity', 'Trivy', 'ScoutSuite']
    },
    {
        name: 'Networking',
        isOpen: false,
        icon: ['fas', 'network-wired'],
        skills: ['CCNA R&S and security', 'Wireshark', 'HLS', 'Fastclick', 'DPDK', 'SRv6', 'eBPF programming', 'Linux kernel network stack']
    },
    {
        name: 'Operating Systems',
        isOpen: false,
        icon: ['fas', 'desktop'],
        skills: ['Kali Linux', 'Linux Server and Desktop', 'Windows Server', 'MacOS']
    }
])

</script>

<style lang="scss" scoped>
.skill-list {
    opacity: 0;
    margin-top: 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style-type: none;
    transition: 0.4s ease-in-out;
}

section.is-expanded>.skill-list {
    opacity: 1;
}
</style>