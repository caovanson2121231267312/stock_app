<template>
    <v-app dark>
        <v-main class="app">

            <Header></Header>

            <div class="mp-top">
                <b-container fluid="md" class="bv-example-row max-header">

                    <!-- <client-only placeholder="Loading..."> -->
                        <template v-if="breadcrumbs">
                            <v-breadcrumbs class="breadcrumbs-user mb-2" :items="breadcrumbs" large></v-breadcrumbs>
                        </template>
                    <!-- </client-only> -->

                    <v-row>
                        <v-col xs="" sm="" md="" lg="3" xl="3" style="max-width: 300px;">
                            <menu-bar />
                        </v-col>
                        <v-col xs="" sm="" md="" lg="9" xl="9">
                            <Nuxt />
                        </v-col>
                    </v-row>
                </b-container>
            </div>
        </v-main>
    </v-app>
</template>

<script>
import MenuBar from '~/components/MenuBar/MenuBar.vue'
import Header from '../components/Layouts/HeaderMyAccount/HeaderMyAccount.vue'

export default {
    components: { Header, MenuBar },
    name: 'myAccount',
    data() {
        return {
            title: 'app stock',
        }
    },
    computed: {
        breadcrumbs() {
            return this.$store.getters[`breadcrumbs/list`]
        }
    },
}
</script>
