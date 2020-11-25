<template>
    <div class="text-center">
        <input
            v-model="value"
            @input="this.$emit('update', value)"
            placeholder="Beer name"
            class="border w-64 border-gray-200 shadow rounded-full p-2 mr-2 focus:outline-none text-gray-600">
    </div>
</template>

<script>
    export default {
        name: "SearchForm",
        data () {
            return {
                value: "",
                timer: null
            }
        },
        watch: {
            value: function () {
                clearTimeout(this.timer);
                this.timer = setTimeout(this.search, 1000)
            },
        },
        methods: {
            search () {
                this.$emit('search');
            }
        }
    }
</script>
