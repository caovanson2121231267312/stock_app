<template>
    <div class="w-100">
        <v-card class="mx-auto bg-dark2 w-100" outlined>
            123
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
