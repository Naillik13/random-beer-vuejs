<template>
    <button
        class="rounded-full shadow p-3 m-auto w-auto uppercase text-sm focus:outline-none"
        :class="{'text-green-500': type && type === 'light', 'bg-green-500 text-white hover:bg-green-600': !type}"
    >
        {{ text }}
    </button>
</template>

<script>
    export default {
        name: "ButtonDefault",
        props: {
            text: {
                type: String,
                required: true
            },
            type: {
                type: String
            }
        }
    }
</script>
