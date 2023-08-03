<template>
    <div class="w-100">
        <v-card class="mx-auto bg-dark2 w-100 p-3">
            <div>
                <h2 class="text-main h5">QUẢN LÝ MÃ PIN</h2>
                <p class="mt-3 web-fs-16 pb-0 mb-0">
                    Quản lý và điều chỉnh các cài đặt bảo mật cho tài khoản
                </p>
            </div>
        </v-card>

        <v-card class="mx-auto bg-dark2 w-100 mt-4 p-3">
            <div class="">
                <h2 class="h5">Đổi mã pin</h2>
                <div class="row">
                    <div class="col-12 col-lg-6 mt-5 mb-5">
                        <div class="mb-5 position-relative mt-5">
                            <label class="mb-2 web-fs-14">Nhập mã PIN</label>
                            <div class="position-relative w-100 w-sm-60">
                                <div class="position-relative h-100">
                                    <input class="text-dark3 text-input fw-500 letter-spacing-3 mb-2 b-a6a7a8 input-pin"
                                        placeholder="Nhập mã gồm 6 ký tự số" v-model="old_pin"
                                        :type="showOldPin ? 'text' : 'password'">
                                </div>
                                <div @click="togglePin('old_pin')" class="view-password position-absolute">
                                    <font-awesome-icon :icon="!showOldPin ? ['fas', 'eye-slash'] : ['fas', 'eye']" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label class="mb-2 web-fs-14">Xác nhận mã PIN</label>
                            <div class="position-relative w-100 w-sm-60">
                                <div class="position-relative h-100">
                                    <input class=" text-dark3 text-input fw-500 letter-spacing-3 mb-2 b-a6a7a8 input-pin"
                                        placeholder="Nhập lại mã PIN" v-model="new_pin"
                                        :type="showNewPin ? 'text' : 'password'">
                                </div>
                                <div @click="togglePin('new_pin')" class="view-password position-absolute">
                                    <font-awesome-icon :icon="!showNewPin ? ['fas', 'eye-slash'] : ['fas', 'eye']" />
                                </div>
                            </div>
                        </div>

                        <div class="">
                            <w-button
                                className="w-mobile-100 m-mobile-x sc-egiyK buRnzW mw-180 mt-4 h-32 w-md-initial border-f5a122 text-white bg-f5a122 bg-orange-hover btn-continue">
                                Xác nhận
                            </w-button>
                        </div>
                        <p class="mt-5">
                            <span class="text-f5a122">Lưu ý: </span>
                            <span class="text-808285">
                                Quý khách ghi nhớ mã PIN để thực hiện các giao dịch bằng Smart OTP/Email OTP
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </v-card>
    </div>
</template>

<script>
import WButton from '~/components/Button/WButton.vue'
export default {
    components: { WButton },
    layout: 'myAccount',
    data() {
        return {
            name: 'Cao Văn Sơn',
            old_pin: null,
            new_pin: null,
            showOldPin: false,
            showNewPin: false,
            breadcrumbs: [
                {
                    text: 'Bảng tính',
                    disabled: false,
                    to: '/',
                },
                {
                    text: 'Quản lý tài khoản',
                    disabled: false,
                    to: '/quan-ly-tai-khoan/pin-code',
                },
                {
                    text: 'Quản lý mã pin',
                    disabled: true,
                    to: '/quan-ly-tai-khoan/pin-code',
                },
            ],
        }
    },
    methods: {
        togglePin(field) {
            if (field === 'old_pin') this.showOldPin = !this.showOldPin;
            if (field === 'new_pin') this.showNewPin = !this.showNewPin;
        }
    },
    mounted() {
        this.$store.dispatch('breadcrumbs/getBreadcrumbs', this.breadcrumbs)
    }
}
</script>
