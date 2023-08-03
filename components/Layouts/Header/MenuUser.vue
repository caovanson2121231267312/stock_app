<template>
    <v-container fluid>
        <v-row justify="center">
            <v-menu open-on-hover transition="slide-y-transition" bottom min-width="200px" rounded offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn color="primary" dark v-bind="attrs" v-on="on">
                        <span class="me-2">
                            <font-awesome-icon :icon="['fas', 'user']" />
                        </span>
                        <span>
                            Cao Văn Sơn
                        </span>
                        <span class="ms-1">
                            <font-awesome-icon :icon="['fas', 'caret-down']" />
                        </span>
                    </v-btn>
                </template>
                <v-card>
                    <v-list-item-content class="justify-center">
                        <div class="mx-auto text-center">
                            <v-avatar color="brown">
                                <span class="white--text text-h5">{{ user.initials }}</span>
                            </v-avatar>
                            <h3>{{ user.fullName }}</h3>
                            <p class="text-caption mt-1">
                                {{ user.email }}
                            </p>
                            <template v-for="(item, index) in menu_user">
                                <div v-bind:key="index">
                                    <v-divider class="my-3"></v-divider>
                                    <v-btn depressed rounded text>
                                        <NuxtLink class="d-block w-100" :to="item.path">
                                            {{ item.title }}
                                        </NuxtLink>
                                    </v-btn>
                                </div>
                            </template>

                            <v-divider class="my-3"></v-divider>
                            <v-btn depressed rounded text>
                                Đổi mật khẩu
                            </v-btn>
                        </div>
                    </v-list-item-content>
                </v-card>
            </v-menu>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        user: {
            initials: 'JD',
            fullName: 'John Doe',
            email: 'john.doe@doe.com',
        },
        menu_user: [
            { path: '/', icon: '', title: 'Thông tin cá nhân' },
            { path: '/', icon: '', title: 'OTP - VOTP' },
            { path: '/quan-ly-tai-khoan/change-password', icon: '', title: 'Đổi mật khẩu' },
            { path: '/', icon: '', title: 'Xoá dữ liệu cài đặt' },
            { path: '/', icon: '', title: 'Đăng xuất' },
        ]
    }),
}
</script>