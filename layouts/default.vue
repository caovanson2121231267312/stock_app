<template>
    <v-app dark>
        <v-main class="app">

            <Header></Header>

            <v-container>
                <Nuxt />
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import Header from '../components/Layouts/Header/Header.vue'
export default {
    components: { Header },
    name: 'DefaultLayout',
    data() {
        return {
            title: 'app stock',
        }
    },
}
</script>
