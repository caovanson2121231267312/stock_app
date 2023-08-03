<template>
    <div>
        <v-card class="mx-auto bg-dark2" max-width="775" outlined>
            <div class="p-4">
                <h5 class="text-center mb-4 text-f5a122">ĐỔI MẬT KHẨU</h5>

                <p class="text-center mt-2 mb-0 pb-0 fs-web-3">
                    Vui lòng nhập các thông tin dưới đây để đổi mật khẩu
                </p>
                <form class="p-form-5" action="" autocomplete="off">
                    <div>
                        <div class="div-input position-relative w-100 mb-2">
                            <div class="position-relative h-100">
                                <input class="text-dark3 text-input fw-500 mb-4 fs-4 input-web text-uppercase"
                                    placeholder="Nhập mật khẩu hiện tại" v-model="name" type="text" disabled>
                            </div>
                            <span class="label-input f-12 bg-dark2 px-2 fs-12 text-spacing-3 fw-400 position-absolute">
                                Chủ tài khoản
                            </span>
                        </div>

                        <div class="div-input position-relative w-100 mb-2">
                            <div class="position-relative h-100">
                                <input class="text-dark3 text-input fw-500 mb-4 fs-4 input-web"
                                    placeholder="Nhập mật khẩu hiện tại" v-model="old_password"
                                    :type="showOldPassword ? 'text' : 'password'">
                                <div @click="togglePassword('old_password')" class="view-password position-absolute">
                                    <font-awesome-icon :icon="!showOldPassword ? ['fas', 'eye-slash'] : ['fas', 'eye']" />
                                </div>
                            </div>
                            <span class="label-input f-12 bg-dark2 px-2 fs-12 text-spacing-3 fw-400 position-absolute">
                                Mật khẩu hiện tại
                            </span>
                        </div>

                        <div class="div-input position-relative w-100 mb-2">
                            <div class="position-relative h-100">
                                <input class="text-dark3 text-input fw-500 mb-4 fs-4 input-web"
                                    placeholder="Nhập mật khẩu hiện tại" v-model="new_password"
                                    :type="showNewPassword ? 'text' : 'password'">
                                <div class="view-password position-absolute" @click="togglePassword('new_password')">
                                    <font-awesome-icon :icon="!showNewPassword ? ['fas', 'eye-slash'] : ['fas', 'eye']" />
                                </div>
                            </div>
                            <span class="label-input f-12 bg-dark2 px-2 fs-12 text-spacing-3 fw-400 position-absolute">
                                Mật khẩu mới
                            </span>
                        </div>

                        <div class="div-input position-relative w-100 mb-2">
                            <div class="position-relative h-100">
                                <input class="text-dark3 text-input fw-500 mb-4 fs-4 input-web"
                                    placeholder="Nhập mật khẩu hiện tại" v-model="password_confirmation"
                                    :type="showConfirmationPassword ? 'text' : 'password'">
                                <div class="view-password position-absolute"
                                    @click="togglePassword('password_confirmation')">
                                    <font-awesome-icon
                                        :icon="!showConfirmationPassword ? ['fas', 'eye-slash'] : ['fas', 'eye']" />
                                </div>
                            </div>
                            <span class="label-input f-12 bg-dark2 px-2 fs-12 text-spacing-3 fw-400 position-absolute">
                                Xác nhận mật khẩu
                            </span>
                        </div>

                        <div class="mt-5 d-flex justify-content-center pt-3 flex-wrap p-mobile-x-0">

                            <nuxt-link
                                class="w-mobile-100 m-mobile-x sc-egiyK buRnzW mw-180 h-32 w-md-initial mx-md-2 mb-4 b-dark5 text-dark5 b-orange-hover btn-cancel-change-password"
                                to="/">
                                Huỷ
                            </nuxt-link>

                            <w-button
                                className="w-mobile-100 m-mobile-x sc-egiyK buRnzW mw-180 h-32 w-md-initial mx-md-2 mb-4 border-f5a122 text-white bg-f5a122 bg-orange-hover btn-continue">
                                Tiếp tục
                            </w-button>

                        </div>
                    </div>
                </form>
            </div>
        </v-card>
    </div>
</template>

<script>
import WButton from '~/components/Button/WButton.vue'
export default {
    components: { WButton },
    layout: 'myAccount1',
    data() {
        return {
            name: 'Cao Văn Sơn',
            old_password: null,
            new_password: null,
            password_confirmation: null,
            showOldPassword: false,
            showNewPassword: false,
            showConfirmationPassword: false,
        }
    },
    methods: {
        togglePassword(field) {
            if (field === 'old_password') this.showOldPassword = !this.showOldPassword;
            if (field === 'new_password') this.showNewPassword = !this.showNewPassword;
            if (field === 'password_confirmation') this.showConfirmationPassword = !this.showConfirmationPassword;
        }
    }
}
</script>
