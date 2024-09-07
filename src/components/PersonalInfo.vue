<template>
    <section class="home">
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
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.</p>
    </section>
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
.home {
    padding: 20px;

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
}
</style>