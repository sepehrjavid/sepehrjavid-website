<template>
    <main class="skills-page">
        <SkillCategory @toggle-is-open="handleIsOpen(category, null)" v-for="(category, category_index) in skills"
            :key="category_index" :category="category" theme="light-theme" :is-open="category.isOpen">
            <template #skill-list>
                <div class="skill-list">
                    <template v-for="(item, skillIndex) in category.skills" :key="skillIndex">
                        <NestedSkillCategory v-if="item.skills" :category="item" :is-open="item.isOpen"
                            @toggle-is-open="handleIsOpen(item, category)">
                            <template #skill-list>
                                <div class="skill-list">
                                    <template v-for="(nested_item, nestedIndex) in item.skills" :key="nestedIndex">
                                        <SkillItem :skill="nested_item" />
                                    </template>
                                </div>
                            </template>
                        </NestedSkillCategory>
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

function closeCategory(category) {
    if (category.isOpen) {
        if (category.type === "nested") {
            category.skills.forEach((skill) => {
                if (skill.isOpen !== undefined) {
                    skill.isOpen = false;
                }
            })
        }
        category.isOpen = false;
    }
}

function openCategory(category) {
    category.isOpen = true;
}

function handleIsOpen(category, parent) {
    if (category.isOpen === false) {
        if (category.type === "simple" || category.type === "nested") {
            skills.value.forEach((skill) => closeCategory(skill));
        } else if (category.type === "nestedChild") {
            parent.skills.forEach((skill) => {
                if (skill.isOpen !== undefined) {
                    closeCategory(skill);
                }
            })
        }
        openCategory(category);
    } else {
        closeCategory(category);
    }
}


const skills = ref([
    {
        name: 'Languages',
        icon: ['fas', 'code'],
        type: "simple",
        skills: ['C/C++', 'Python', 'Java', 'Javascript', 'Bash'],
        isOpen: false
    },
    {
        name: 'Web Dev Tools',
        icon: ['fab', 'js'],
        type: "simple",
        skills: ['Nodejs', 'Django', 'ReactsJs', 'Vuejs', 'Flask', 'Git'],
        isOpen: false
    },
    {
        name: 'Cloud',
        isOpen: false,
        type: "nested",
        icon: ['fas', 'cloud'],
        skills: [
            'Docker',
            'gRPC',
            'MQTT',
            'Network Service Mesh',
            'Kafka',
            'Nginx',
            'OpenStack',
            {
                name: 'Kubernetes',
                isOpen: false,
                type: "nestedChild",
                skills: ['HPA', 'Ingress', 'Gateway', 'Taint/Tolerations', 'ServiceAccounts', 'Helm', 'Calico', 'Cilium', 'ArgoCD']
            },
            {
                name: 'GCP',
                isOpen: false,
                type: "nestedChild",
                skills: ['GKE', 'Compute Engine', 'Cloud Storage', 'Dataflow', 'Dataproc', 'Cloud Run', 'Eventarc', 'BigQuery', 'Loadbalancer', 'Cloud Function', 'Cloud Armor', 'CloudSQL', 'VPC', 'IAM', 'CAS']
            },
            {
                name: 'AWS',
                isOpen: false,
                type: "nestedChild",
                icon: ['fab', 'aws'],
                skills: ['Cloud Front', 'Athena', 'VPC', 'AuroraDB', 'S3', 'Lambda', 'DynamoDB', 'SQS', 'SNS', 'EC2', 'ECS', 'EKS', 'Cloud Watch', 'RDS', 'IAM', 'ASG', 'Route53', 'Redshift', 'Quicksight', 'Kinesis']
            },
            {
                name: 'CI/CD & Automation',
                isOpen: false,
                type: "nestedChild",
                icon: ['fas', 'cogs'],
                skills: ['Ansible', 'Terraform', 'AWS CodePipeline', 'AWS CodeBuild', 'Gitlab Pipeline']
            },
            {
                name: "Observability",
                isOpen: false,
                icon: ['fas', 'gauge'],
                type: "nestedChild",
                skills: ['Grafana', 'Prometheus', 'Tempo', 'Loki']
            },
            {
                name: "Security",
                isOpen: false,
                icon: ['fas', 'lock'],
                type: "nestedChild",
                skills: ['Vault', 'Cert Manager', 'Keycloak']
            },
        ]
    },
    {
        name: 'Databases/Caching',
        isOpen: false,
        type: "simple",
        icon: ['fas', 'database'],
        skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQLite', 'Redis']
    },
    {
        name: 'Security',
        isOpen: false,
        type: "simple",
        icon: ['fas', 'lock'],
        skills: ['Metasploit', 'Cain&Abel', 'BurpSuite', 'WireGuard', 'strongSwan', 'BeEF', 'Ethical Hacking', 'Information Security', 'Network Security', 'Trivy', 'ScoutSuite']
    },
    {
        name: 'Networking',
        isOpen: false,
        type: "simple",
        icon: ['fas', 'network-wired'],
        skills: ['Wireshark', 'SRv6', 'eBPF programming', 'Linux kernel network stack', 'Packet level trouble shooting', 'Bind9', 'CCNA R&S and security']
    },
    {
        name: 'Operating Systems',
        isOpen: false,
        type: "simple",
        icon: ['fas', 'desktop'],
        skills: ['Linux', 'Multi-processing', 'Multi-threading', 'Windows Server', 'MacOS']
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
    transition: 0.4s ease-in-out;
}

section.is-expanded>.skill-list {
    opacity: 1;
}
</style>