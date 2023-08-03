<template>
    <v-card class="mx-auto web-bg-dark2 menu-bar-user">
        <v-list>
            <nuxt-link class="" to="/">
                <v-list-item link>
                    <v-list-item-icon>
                        <v-icon>mdi-home</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        Bảng giá
                    </v-list-item-title>
                </v-list-item>
            </nuxt-link>

            <div v-for="(item, index) in menu" :key="index">
                <v-list-group :value="isActive(item)" :prepend-icon="item.icon" no-action>
                    <template v-slot:activator>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </template>

                    <template v-if="item.item">
                        <div v-for="(value, index1) in item.item" :key="index1">
                            <nuxt-link class="d-block position-relative" :to="item.path + value.path">
                                <div class="position-absolute h-100 left-0 bg-f5a122 rounded-end bar-none"
                                    style="width: 4px;"></div>
                                <v-list-item link>
                                    <v-list-item-content :value="true">
                                        <v-list-item-title class="ps-14">
                                            {{ value.title }}
                                        </v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </nuxt-link>
                        </div>
                    </template>
                </v-list-group>
            </div>
        </v-list>
    </v-card>
</template>


<script>
export default {
    data: () => ({
        menu: [
            {
                title: 'Báo cáo', icon: 'mdi-redo', path: '/report', item: [
                    { title: 'Quản lý mã pin', icon: null, path: '/', item: null },
                    { title: 'Thông tin tài khoản', icon: null, path: '/', item: null },
                    { title: 'Thông tin cá nhân', icon: null, path: '/', item: null },
                    { title: 'Thông tin thụ hưởng', icon: null, path: '/', item: null },
                    { title: 'Đổi mật khẩu', icon: null, path: '/', item: null },
                ]
            },
            {
                title: 'Quản lý tài khoản', icon: 'mdi-account-circle', path: '/quan-ly-tai-khoan', item: [
                    { title: 'Quản lý mã pin', icon: null, path: '/pin-code', item: null },
                    { title: 'Thông tin tài khoản', icon: null, path: '/thong-tin-tai-khoan', item: null },
                    { title: 'Thông tin cá nhân', icon: null, path: '/thong-tin-ca-nhan', item: null },
                    { title: 'Thông tin thụ hưởng', icon: null, path: '/thong-tin-thu-huong', item: null },
                    { title: 'Đổi mật khẩu', icon: null, path: '/change-password', item: null },
                ]
            },
        ],
    }),
    methods: {
        isActive(item) {
            return this.$route.path.startsWith(item.path);
        }
    }
}
</script>