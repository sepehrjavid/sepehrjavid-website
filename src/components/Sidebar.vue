<template>
    <aside :class="{ 'is-expanded': isExpanded }">
        <div class="logo">
            <img src="../assets/sep-logo.svg" alt="vue" style="color: black;">
        </div>
        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="ToggleMenu">
                <span class="material-icons">keyboard_double_arrow_right</span>
            </button>
        </div>

        <h3>Menu</h3>
        <div class="menu">
            <router-link class="button" to="/" @click="isExpanded = false">
                <span class="material-icons">home</span>
                <span class="text">Home</span>
            </router-link>
            <router-link to="/experience" class="button" @click="isExpanded = false">
                <span class="material-icons">work</span>
                <span class="text">Experience</span>
            </router-link>
            <router-link to="/education" class="button" @click="isExpanded = false">
                <span class="material-icons">school</span>
                <span class="text">Education</span>
            </router-link>
            <router-link to="/skills" class="button" @click="isExpanded = false">
                <span class="material-icons">construction</span>
                <span class="text">Skills</span>
            </router-link>
            <router-link to="/certificates" class="button" @click="isExpanded = false">
                <span class="material-icons">workspace_premium</span>
                <span class="text">Certificates</span>
            </router-link>
            <router-link to="/publications" class="button" @click="isExpanded = false">
                <span class="material-icons">article</span>
                <span class="text">Publications</span>
            </router-link>
            <router-link to="/achievements" class="button" @click="isExpanded = false">
                <span class="material-icons">emoji_events</span>
                <span class="text">Achievements</span>
            </router-link>
        </div>
    </aside>
</template>

<script setup>
import { ref } from 'vue'

const isExpanded = ref(false)

const ToggleMenu = () => {
    isExpanded.value = !isExpanded.value
}
</script>

<style lang="scss" scoped>
aside {
    display: flex;
    position: fixed;
    flex-direction: column;

    background-color: var(--secondary);
    color: var(--light);

    width: calc(2rem + 32px);
    overflow: hidden;
    z-index: 99;
    min-height: 100vh;
    padding: 1rem;

    transition: 0.2s ease-in-out;

    .flex {
        flex: 1 1 0%;
    }

    .logo {
        margin-bottom: 1rem;

        img {
            width: 2rem;
        }
    }

    .menu-toggle-wrap {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 1rem;

        position: relative;
        top: 0;
        transition: 0.2s ease-in-out;

        .menu-toggle {
            transition: 0.2s ease-in-out;

            .material-icons {
                font-size: 2rem;
                color: var(--light);
                transition: 0.2s ease-out;
            }

            &:hover {
                .material-icons {
                    color: var(--secondary-active);
                    transform: translateX(0.5rem);
                }
            }
        }
    }

    h3,
    .button .text {
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
    }

    h3 {
        color: var(--light);
        font-size: 0.875rem;
        margin-bottom: 0.5rem;
        text-transform: uppercase;
    }

    .menu {
        margin: 0 -1rem;

        .button {
            display: flex;
            align-items: center;
            text-decoration: none;

            transition: 0.2s ease-in-out;
            padding: 0.5rem 1rem;

            .material-icons {
                font-size: 2rem;
                color: var(--light);
                transition: 0.2s ease-in-out;
            }

            .text {
                color: var(--light);
                transition: 0.2s ease-in-out;
            }

            &:hover {
                background-color: var(--secondary-active);

                .material-icons,
                .text {
                    color: var(--light);
                }
            }

            &.router-link-exact-active {
                background-color: var(--secondary-active);
                border-right: 5px solid var(--primary);

                .material-icons,
                .text {
                    color: var(--primary);
                }
            }
        }
    }

    &.is-expanded {
        width: var(--sidebar-width);

        .menu-toggle-wrap {
            top: -3rem;

            .menu-toggle {
                transform: rotate(-180deg);
            }
        }

        h3,
        .button .text {
            opacity: 1;
        }

        .button {
            .material-icons {
                margin-right: 1rem;
            }
        }
    }
}
</style>