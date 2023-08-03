<template>
    <button :class="className" :type="type ?? 'button'">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        className: {
            type: String,
            required: true,
        },
        type: {
            type: String,
        },
    },
}
</script>