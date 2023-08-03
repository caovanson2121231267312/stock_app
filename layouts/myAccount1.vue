<template>
    <v-app dark>
        <v-main class="app">

            <Header></Header>

            <div class="mp-top">
                <b-container  fluid="md" class="bv-example-row max-header">
                    <Nuxt />
                </b-container>
            </div>
        </v-main>
    </v-app>
</template>

<script>
import Header from '../components/Layouts/HeaderMyAccount/HeaderMyAccount.vue'
export default {
    components: { Header },
    name: 'myAccount1',
    data() {
        return {
            title: 'app stock',
        }
    },
}
</script>
