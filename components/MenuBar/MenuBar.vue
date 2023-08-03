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

            <v-list-group :value="true" prepend-icon="mdi-account-circle" no-action>
                <template v-slot:activator>
                    <v-list-item-title>Quản lý tài khoản</v-list-item-title>
                </template>

                <nuxt-link class="d-block position-relative" to="/quan-ly-tai-khoan/pin-code">
                    <div class="position-absolute h-100 left-0 bg-f5a122 rounded-end bar-none" style="width: 4px;"></div>
                    <v-list-item link>
                        <v-list-item-content :value="true">
                            <v-list-item-title class="ps-14" v-text="'Quản lý mã pin'"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </nuxt-link>

                <nuxt-link class="d-block position-relative" to="/quan-ly-tai-khoan/">
                    <div class="position-absolute h-100 left-0 bg-f5a122 rounded-end bar-none" style="width: 4px;"></div>
                    <v-list-item link>
                        <v-list-item-content :value="true">
                            <v-list-item-title class="ps-14" v-text="'Thông tin tài khoản'"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </nuxt-link>

                <nuxt-link class="d-block position-relative" to="/quan-ly-tai-khoan/">
                    <v-list-item link>
                        <v-list-item-content :value="true">
                            <v-list-item-title class="ps-14" v-text="'Thông tin cá nhân'"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </nuxt-link>

                <nuxt-link class="d-block position-relative" to="/quan-ly-tai-khoan/">
                    <v-list-item link>
                        <v-list-item-content :value="true">
                            <v-list-item-title class="ps-14" v-text="'Thông tin thụ hưởng'"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </nuxt-link>

                <nuxt-link class="d-block position-relative" to="/quan-ly-tai-khoan/change-password">
                    <v-list-item link>
                        <v-list-item-content :value="true">
                            <v-list-item-title class="ps-14" v-text="'Đổi mật khẩu'"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </nuxt-link>

            </v-list-group>
        </v-list>
    </v-card>
</template>

<script>
export default {
    data: () => ({
        admins: [
            ['Management', 'mdi-account-multiple-outline'],
            ['Settings', 'mdi-cog-outline'],
        ],
        cruds: [
            ['Create', 'mdi-plus-outline'],
            ['Read', 'mdi-file-outline'],
            ['Update', 'mdi-update'],
            ['Delete', 'mdi-delete'],
        ],
    }),
}
</script>