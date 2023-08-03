<template>
    <div class="w-100">
        <v-row>
            <v-col xs="12" sm="12" md="6" lg="6" xl="6">
                <div class="d-flex justify-content-between align-items-center mb-2 web-fs-16 fw-bold text-light">
                    <div class="d-flex align-items-center">
                        <font-awesome-icon :icon="['fas', 'user-check']" /> <b class="ps-2 fw-600 text-dark4">Thông tin cơ
                            bản </b>
                    </div>
                    <div class="d-flex align-items-center cs-pointer">
                         <span class="ms-1 f-12 fw-300">Chỉnh sửa</span>
                    </div>
                </div>
                <v-card class="mx-auto bg-dark2 w-100 p-3">
                    <table class="w-100 table-fs-14">
                        <colgroup>
                            <col width="40%">
                            <col width="60%">
                        </colgroup>
                        <tbody>
                            <tr class="border-bottom border-dark17">
                                <td class="py-3 text-dark3"> Họ và tên </td>
                                <td class="py-3 text-dark4 fw-500"><span>CAO VĂN SƠN</span></td>
                            </tr>
                            <tr class="border-bottom border-dark17">
                                <td class="py-3 text-dark3">Ngày sinh </td>
                                <td class="py-3 text-dark4 fw-500"><span>06/11/2001</span></td>
                            </tr>
                            <tr class="border-bottom border-dark17">
                                <td class="py-3 text-dark3">Giới tính</td>
                                <td class="py-3 text-dark4 fw-500"><span class="py-3 text-dark4">Nam</span></td>
                            </tr>
                            <tr class="border-bottom border-dark17">
                                <td class="py-3 text-dark3">Số điện thoại</td>
                                <td class="py-3 text-dark4 fw-500"><span>0338910***</span></td>
                            </tr>
                            <tr class="border-bottom border-dark17">
                                <td class="py-3 text-dark3">Email</td>
                                <td class="py-3 text-dark4 fw-500"><span>***1669063793@gmail.com</span></td>
                            </tr>
                            <tr class="border-bottom border-dark17">
                                <td class="py-3 text-dark3">Số CMND/CCCD</td>
                                <td class="py-3 text-dark4"><span class="fw-500">036201008466</span></td>
                            </tr>
                            <tr class="border-bottom border-dark17">
                                <td class="py-3 text-dark5">Nơi cấp</td>
                                <td class="py-3 text-dark4"><span class="fw-500">CỤC TRƯỞNG CỤC CẢNH SÁT QUẢN LÝ HÀNH CHÍNH
                                        VỀ TRẬT TỰ XÃ HỘI</span></td>
                            </tr>
                            <tr class="border-bottom border-dark17">
                                <td class="py-3 text-dark3">Ngày cấp</td>
                                <td class="py-3 text-dark4"><span class="fw-500">12/09/2022</span></td>
                            </tr>
                            <tr class="border-bottom border-dark17">
                                <td class="py-3 text-dark5">Tỉnh/Thành phố</td>
                                <td class="py-3 text-dark4"><span class="fw-500">Nam Định</span></td>
                            </tr>
                            <tr class="border-bottom border-dark17">
                                <td class="py-3 text-dark3">Quận/Huyện</td>
                                <td class="py-3 text-dark4"><span class="fw-500">Trực Ninh</span></td>
                            </tr>
                            <tr class="border-bottom border-dark17">
                                <td class="py-3 text-dark5">Xã/Phường/Thị trấn</td>
                                <td class="py-3 text-dark4"><span class="fw-500">Thị trấn Cát Thành</span></td>
                            </tr>
                            <tr class="border-bottom border-dark17">
                                <td class="py-3 text-dark3">Địa chỉ</td>
                                <td class="py-3 text-dark4"><span class="overflow-hidden fw-500">cát thành, trực ninh, nam
                                        định</span></td>
                            </tr>
                        </tbody>
                    </table>
                </v-card>
            </v-col>

            <v-col xs="12" sm="12" md="6" lg="6" xl="6">

                <div class=" d-flex align-items-center mb-2 web-fs-16 fw-bold text-light">
                    <font-awesome-icon :icon="['fas', 'user']" /> <b class="ms-2 text-dark4 fw-600">Tài khoản</b>
                </div>
                <v-card class="mx-auto bg-dark2 w-100 p-3">
                    <table class="w-100 table-fs-14">
                        <colgroup>
                            <col width="35%">
                            <col width="65%">
                        </colgroup>
                        <tbody>
                            <tr class="border-bottom border-dark17">
                                <td class="py-3">
                                    <span>Số lưu ký </span>
                                    <i class="ms-1" id="tooltip-button-variant">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7.00001 1.16663C3.79168 1.16663 1.16668 3.79163 1.16668 6.99996C1.16668 10.2083 3.79168 12.8333 7.00001 12.8333C10.2083 12.8333 12.8333 10.2083 12.8333 6.99996C12.8333 3.79163 10.2083 1.16663 7.00001 1.16663Z"
                                                stroke="#DADADA" stroke-linecap="round" stroke-linejoin="round">
                                            </path>
                                            <path d="M7 9.3333L7 6.41663" stroke="#DADADA" stroke-linecap="round"
                                                stroke-linejoin="round"></path>
                                            <path d="M7.0032 4.6667L6.99796 4.6667" stroke="#DADADA" stroke-linecap="round"
                                                stroke-linejoin="round"></path>
                                        </svg>
                                    </i>
                                    <b-tooltip target="tooltip-button-variant" variant="danger">
                                        Mã định danh của KH tại Trung tâm Lưu ký (VSD)
                                    </b-tooltip>
                                </td>
                                <td class="py-3 text-dark4 fw-500">021C801742</td>

                            </tr>
                            <tr>
                                <td class="py-3">Ngày mở tài khoản </td>
                                <td class="py-3 text-dark4 fw-500">26/07/2023</td>
                            </tr>
                        </tbody>
                    </table>
                </v-card>

                <div class=" d-flex align-items-center mb-2 web-fs-16 fw-bold text-light mt-5 pt-2">
                    <font-awesome-icon :icon="['fas', 'clipboard']" /> <b class="ms-2 text-dark4 fw-600">Mã giới thiệu</b>
                </div>
                <div class="mx-auto bg-dark2 w-100 p-3 v-card v-sheet theme--dark" style="padding: 20px 28px;">
                    <div class="mb-3">
                        <span class="d-inline-block mb-1">Mã giới thiệu của tôi </span>
                        <div class="br-5 b-dark15 w-100 d-flex justify-content-between align-items-center">
                            <span class="ms-3 f-14 fw-400">0001896276</span>
                            <div class="position-relative p-1">
                                <button
                                    class="sc-egiyK buRnzW fw-400 p-x-6 border-f5a122 text-white bg-f5a122 bg-orange-hover btn-copy">
                                    Sao chép
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="mb-3 mt-5">
                        <span class="d-inline-block mb-1">Link giới thiệu của tôi</span>
                        <div class="br-5 b-dark15 w-100 d-flex justify-content-between align-items-center h-100">
                            <span
                                class="ms-3 f-14 fw-400 text-truncate ">https://accounts.vndirect.com.vn/?referal-code=0001896276</span>
                            <div class="position-relative p-1 flex-shrink-0">
                                <button
                                    class="sc-egiyK buRnzW fw-400 p-x-6 border-f5a122 text-white bg-f5a122 bg-orange-hover btn-copy"
                                    style="">
                                    Sao chép
                                </button>
                            </div>
                        </div>
                    </div>
                    <p class="m-0">Số lượng bạn bè giới thiệu: <span class="text-dark4">0</span></p>
                </div>
            </v-col>
        </v-row>
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
                    to: '/quan-ly-tai-khoan/thong-tin-ca-nhan',
                },
                {
                    text: 'Thông tin cá nhân',
                    disabled: true,
                    to: '/quan-ly-tai-khoan/thong-tin-ca-nhan',
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
