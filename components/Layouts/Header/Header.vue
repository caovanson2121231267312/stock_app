<template>
    <header class="old topbar header">
        <!-- logo -->
        <Logo />

        <!-- search -->
        <SearchBar />

        <div class="menu">
            <menu-user />
        </div>

    </header>
</template>

<script>
import Logo from './Logo.vue'
import MenuUser from './MenuUser.vue'
import SearchBar from './SearchBar.vue'

export default {
    components: { Logo, SearchBar, MenuUser },

}
</script>

<style ></style>