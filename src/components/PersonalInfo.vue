<template>
    <div class="title">
        <h2>Sepehr Javid</h2>
        <h3>Security and Cloud Engineer</h3>
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
    <h2 class="about-me-title">About Me</h2>
    <p class="about-me">
        Hello! My name is Sepehr Javid. I have always been fascinated by technology and its potential to solve
        real-world problems. Over the years, I've honed my skills in various programming languages and technologies, and
        I have a deep passion for learning and exploring new domains. Currently, I'm focused on cloud computing and edge
        technologies, working with AWS and Google Cloud to design scalable, secure, and efficient solutions. My
        experience spans across software development, network security, and systems engineering, allowing me to bring a
        holistic approach to any project I undertake. Looking forward, I'm excited to delve deeper into AI and machine
        learning, exploring how these technologies can transform industries and improve lives. I believe in the power of
        technology to drive change, and I'm eager to be a part of the journey towards a smarter, more connected world.
    </p>
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

.about-me-title {
    color: var(--light);
    margin: 20px;
}

.about-me {
    color: var(--light);
    margin: 20px;
    font-size: medium;
}
</style>