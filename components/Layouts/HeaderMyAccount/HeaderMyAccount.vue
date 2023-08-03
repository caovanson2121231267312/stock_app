<template>
    <header class="header-fixed">
        <b-container fluid="md" class="bv-example-row max-header">
            <div class="d-flex justify-content-between py-3">
                <NuxtLink class="logo + horizontal" to="/">
                    <img src="@/static/images/logos/logo.svg" alt="Trang chủ">
                </NuxtLink>

                <div class="d-flex flex-wrap align-items-center">
                    <span class="text-dark5 text-dark5-hover cursor-pointer px-3 web-fs-16">
                        Hướng dẫn sử dụng
                    </span>
                    <span class="text-dark5 text-dark5-hover cursor-pointer be-dark17 bs-dark17 px-3 me-3 web-fs-16">
                        Góp ý
                    </span>
                    <span class="web-fs-20 me-3 text-dark5 text-dark5-hover cursor-pointer">
                        <font-awesome-icon :icon="['fas', 'envelope-open-text']" />
                    </span>
                    <span class="web-fs-20 me-3 text-dark5 text-dark5-hover cursor-pointer">
                        <font-awesome-icon :icon="['fas', 'bell']" />
                    </span>
                    <MenuUser />
                </div>
            </div>
        </b-container>
    </header>
</template>

<script>
import MenuUser from './MenuUser.vue';

export default {
    components: {
        MenuUser,
    }
}
</script>