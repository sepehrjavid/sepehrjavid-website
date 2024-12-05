<template>
    <main class="experiance-page">
        <InfoCard v-for="(job, index) in jobs" :title="job.title" :key="index">
            <template #metadata>
                <p class="company"><font-awesome-icon :icon="['fas', 'building']" class="icon" /> {{ job.company }} -
                    <font-awesome-icon :icon="['fas', 'location-dot']" class="icon" />
                    {{ job.location }}
                </p>
                <p class="date"><font-awesome-icon :icon="['fas', 'calendar']" class="icon" /> {{ job.date }}</p>
            </template>
            <template #details>
                <div class="description">
                    <div v-for="(detail, i) in job.details" :key="i" class="description-item">
                        {{ detail }}
                    </div>
                </div>
            </template>
        </InfoCard>
    </main>
</template>

<script setup>
import InfoCard from '../components/InfoCard.vue';
import { ref } from 'vue';

const jobs = ref([
    {
        title: 'Lead Cloud and DevOps Engineer',
        company: 'Focalpay',
        location: 'Stockholm, Sweden',
        date: 'July 2024 - Present',
        details: [
            'Optimized latency and operational overhead by designing a solution leveraging GCP Gateway Controller for Kubernetes with GCP Global Load Balancers to serve content closer to users, improving latency by approximately 12.5%.',
            'Enhanced security through zero-trust implementation by designing and provisioning a PKI using GCP Certificate Authority Service and Kubernetes cert-manager, ensuring encrypted communication between workloads and load balancers.',
            'Enabled progressive delivery by introducing a Canary deployment mechanism in GKE, utilizing Kubernetes services, HTTPRoute, and ArgoCD, driven by a proactive and observant approach to system needs.',
            'Strengthened traffic control and security by redesigning and deploying GCP Cloud Armor using Kubernetes GCPBackendPolicy resources for an additional security layer.',
            'Achieved significant cost savings by analyzing usage patterns and reducing GCP costs by 33.3%, optimizing resource allocation based on historical metrics and usage needs.',
            'Designed and implemented a fully serverless architecture for a side project with minimal operational costs, utilizing GCP Cloud Storage, Cloud Run, Cloud CDN, Cloud Build, GCP Load Balancer, Cloud Armor, and deployed/maintained using Terraform.'
        ]
    },
    {
        title: 'Cloud and DevOps Engineer',
        company: 'Focalpay',
        location: 'Stockholm, Sweden',
        date: 'October 2023 - June 2024',
        details: [
            'Implemented an event-driven architecture using Strimzi Kafka on GKE, working with the backend developers, while hardening the security of the Kafka cluster.',
            'Optimized analytics workflows by integrating GCP Dataflow, Pub/Sub, Kafka Connect CDC, and BigQuery to enable data-driven decisions, complemented by BI tools like Preset for effective data visualization.',
            'Improved observability and performance of the Kubernetes cluster through collaboration with the backend team, leveraging the Grafana stack (Loki, Prometheus, and Tempo) to identify and resolve slow APIs.',
            'Streamlined development processes by redesigning the Git structure and GitLab CI/CD pipelines to align with new requirements, enhancing efficiency and workflow based on iterative feedback from the team.'
        ]
    },
    {
        title: 'Cloud Networking Researcher',
        company: 'Ericsson',
        location: 'Jorvas, Finland',
        date: 'July 2023 - Sep 2023',
        details: [
            'With the help of an IETF researcher and my Self-Reflective personality, I refined and re-engineered Sepittov2, an advanced congestion mitigation protocol improving SRv6 network latency by 64% which supports various congestion mitigation strategies based on packet QoS class. The protocol was design by benefiting from eBPF, and Linux Qdiscs.',
            'Wrote and published the enhanced Sepittov2 protocol in IEEE CSCN23 conference.',
            'Designed an efficient latency observability for Kubernetes cluster which utilized and added extra headers to the user packets, using eBPF, to piggyback telemetry data and reduce telemetry traffic overhead in the network.'
        ]
    },
    {
        title: 'Master Thesis Student',
        company: 'Ericsson',
        location: 'Jorvas, Finland',
        date: 'Dec 2022 - Jun 2023',
        details: [
            'Using my Fast learning skills, I obtained deep knowledge of eBPF programming with C and Linux network stack including Qdisc, XDP, Kprobes, and iptables within 2 months which was praised by the manager.',
            'Conducted in-depth research on networking in the Linux kernel, eBPF programming, congestion control mechanisms, and packet manipulation.',
            'With my Problem solving skills I tackled a complicated thesis to engineer a sophisticated eBPF congestion control protocol (called Sepittov1) using packet manipulation and graph theory, improving network latency in an SRv6 network compared to hop-based routing protocols.'
        ]
    },
    {
        title: 'Cloud Researcher',
        company: 'Ericsson',
        location: 'Jorvas, Finland',
        date: 'May 2022 - Aug 2023',
        details: [
            'Automated the installation of new Network Service Mesh (NSM) on Kubernetes using Ansible with different CNIs such as Calico and Cilium, leading to in-depth research on NSM functionality.',
            'Examined traffic shaping in Kubernetes with different CNIs, performing in-depth research on each, leading to a paper submission.',
            'Within a span of 1 month with my fast learning skiils I obtained deep knowledge of SRv6 and performed deep research on SRv6 in Kubernetes CNIs and Linux kernel.',
        ]
    },
    {
        title: 'Django Developer',
        company: 'Timnak Travel Agency',
        location: 'Shiraz, Iran',
        date: 'Sep 2019 - Sep 2021',
        details: [
            'Iranjourney project management with my Leadership skills and using agile methods and back-end development using Django REST framework, Django Channels, Redis, and PostgreSQL. Software testing was done using Django automated test tools as well as pytest.',
            'Local Linux demo server and production server setup using Docker, Nginx, and Bind9.'
        ]
    },
    {
        title: 'Java Developer',
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

<style lang="scss" scoped>
.company {
    color: var(--secondary-active);
    margin-bottom: 2px;
}

.date {
    color: var(--secondary-active);
    margin-bottom: 10px;
}

.description {
    color: var(--light);
}

.description-item {
    margin-bottom: 1em;
}
</style>
