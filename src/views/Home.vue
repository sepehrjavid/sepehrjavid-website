<template>
    <main class="home-page">
        <div class="title">
            <h2>Sepehr Javid</h2>
            <h3>Cloud and DevOps Engineer</h3>
        </div>
        <div class="info-container">
            <div class="info-item" v-for="(info, index) in data" :key="index">
                <font-awesome-icon :icon="info.icon" size="lg" class="icon" />
                <div class="text-container">
                    <a v-if="info.link" :href="info.link" target="_blank" rel="noopener noreferrer">{{ info.value }}</a>
                    <p v-else>{{ info.value }}</p>
                </div>
            </div>
        </div>
        <div class="about-me">
            <h2 class="about-me-title">About Me</h2>
            <p> Hey there! 👋 I'm Sepehr Javid, a computer science enthusiast born on January 18, 1999, with a knack for
                problem-solving 🧠 and a passion for all things tech. Whether I'm diving deep into cloud computing or
                tinkering
                with intricate network systems, I thrive on the thrill of unraveling complexities.</p>

            <p> My journey took flight with a bachelor's degree from Shiraz University 🎓, where I improved my skills
                and
                discovered my love for teaching as a multiple-time teaching assistant (TA) and creating innovative
                solutions. One of my proudest achievements? Developing Sepitto, a network congestion protocol showcased
                in
                IEEE CSCN23. This little gem uses eBPF magic and Linux's network stack to gracefully handle traffic
                congestion by piggybacking link congestion information on user data packet headers, requiring in-flight
                packet header modification—it's my nerdy pride and joy! </p>

            <p> As a lifelong learner 📚, I'm constantly striving to level up my skills and apply my computer science 💻
                and
                automation know-how to simplify my everyday tasks. Whether it's automating mundane chores or
                experimenting
                with small projects, I'm always on the lookout for ways to make life a bit easier. </p>

            <p> When I'm not crafting cutting-edge solutions, you might find me on the court playing tennis 🎾, shooting
                hoops 🏀,
                or cheering for my favorite football team. And speaking of heights, my love for aviation isn't just a
                flight
                of fancy—I'm a die-hard Flight Simulator ✈️ aficionado! </p>

            <p> Academically, I've spread my wings with a master's degree from KTH University and Aalto University
                through
                the SECCLO program, graduating with honors 🏅. Along the way, I tackled new challenges, gained fresh
                perspectives, and even scored a full scholarship. </p>

            <p> Beyond tech and learning, I'm all about teamwork, new challenges, and... gaming! Call of Duty,
                anyone? And
                let’s not forget my passion for diving deep into data engineering which led me to new work and hobby
                experiments and projects using tools like BigQuery and Redshift along with other AWS and GCP services
                for
                data preperation.
            </p>
            <p> So, let's connect! 🔗 Whether it’s cracking codes, automating tasks, or exploring the cloud, I’m always
                up
                for the next big adventure in tech. </p>
        </div>
    </main>
</template>


<script setup>
import { ref } from 'vue'

const data = ref([
    { value: 'Email', icon: ['fas', 'envelope'], link: 'mailto:javid.sepehr77@gmail.com' },
    { value: 'Phone', icon: ['fas', 'phone'], link: 'tel:+46735069239' },
    { value: 'Stockholm, Sweden', icon: ['fas', 'location-dot'] },
    { value: 'LinkedIn', icon: ['fab', 'linkedin'], link: 'https://www.linkedin.com/in/sepehr-javid/' },
    { value: 'Github', icon: ['fab', 'github'], link: 'https://github.com/sepehrjavid' }
])

</script>


<style lang="scss" scoped>
.title {
    text-align: center;
    margin-bottom: 15px;
    color: var(--light);
    font-size: 1.3em;
}

.info-container {
    margin: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .info-item {
        background: var(--secondary);
        border-radius: 8px;
        margin: 10px;
        padding: 20px;
        display: flex;
        align-items: center;
        width: 200px;
        transition: transform 0.3s, box-shadow 0.3s;

        .icon {
            color: var(--light);
            margin-right: 10px;
        }

        &:hover {
            transform: translateY(-5px);
            box-shadow: 0 4px 8px var(--secondary);
        }
    }

    .text-container {

        a,
        p {
            margin: 0;
            color: var(--light-more);
            font-size: 1em;
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
        }
    }

}



.about-me {
    color: var(--light);
    margin: 1em;
    font-size: medium;

    .about-me-title {
        color: var(--light);
        margin: 0 1rem;
        padding: 0;

    }

    p {
        margin: 1em;
    }
}
</style>