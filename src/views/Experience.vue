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
            'In a team-work with the backend team we enhanced observability of the Kubernetes cluster using Grafana stack, identifying slow APIs and improving performance.',
            'For analytics, I utilized GCP Dataflow, Kafka, and Big Query to help make data-driven decisions, whilst using BI tools such as Preset to visualize the data.',
            'Utilized cert manager and using ACME protocol, I automated the certificate renewal of the company.',
        ]
    },
    {
        title: 'Cloud and DevOps',
        company: 'Focalpay',
        location: 'Stockholm, Sweden',
        date: 'October 2023 - June 2024',
        details: [
            'With my Proactive attitude and Observant skill, I identified the need, proposed and deployed a Canary deployment in GKE using Argo Rollouts, ArgoCD, and Nginx ingress which helped enhance progressive delivery.',
            'Identifying the need for an extra security layer I introduced and deployed GCP Cloud Armor by combining GCP NEGs, GCP Load balancers, and Kubernetes Nginx ingress controller for improved traffic control and security.',
            'Analyzing the usage requirements, I identified wastes and reduced GCP costs by 15.1% by eliminating redundant resources and optimizing resource types for cost efficiency.',
            'By the request of the backend developers we provided an event driven mechanism using Kafka among the Microservices in the Kubernetes cluster.',
            'Working closely with the backend team, I spotted a need, and redesigned the git structure as well as the Gitlab CI/CD pipelines to match with the new requirements which eased the development process based on the consecutive feedbacks.'
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
    margin-bottom: 0.3em;
}
</style>