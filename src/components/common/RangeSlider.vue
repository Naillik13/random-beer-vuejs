<template>
    <div class="flex w-2/3 m-auto mt-8">
        <div class="w-1/6 text-center text-gray-600">
            {{ minVal }} {{ unit }}
        </div>
        <div class="w-2/3 relative m-auto text-center">
            <input @input="slider" v-model.number="minVal" @change="this.$emit('change')" :min="min" :max="max" step=".1" type="range" />
            <input @input="slider" v-model.number="maxVal" @change="this.$emit('change')" :min="min" :max="max" step=".1" type="range" />
        </div>
        <div class="w-1/6 text-center text-gray-600">
            {{ maxVal }} {{ unit }}
        </div>
    </div>
</template>

<script>
    export default {
        name: "RangeSlider",
        props: {
            min: {
                type: Number,
                required: true
            },
            max: {
                type: Number,
                required: true
            },
            unit: {
                type: String,
                required: true
            }
        },
        data () {
            return {
                minVal: this.min,
                maxVal: this.max
            }
        },
        methods: {
            slider () {
                if (this.minVal > this.maxVal) {
                    let tmp = this.maxVal;
                    this.maxVal = this.minVal;
                    this.minVal = tmp;
                }
                this.$emit('update', {
                    minVal: this.minVal,
                    maxVal: this.maxVal
                })
            }
        }
    }
</script>

<style scoped>

    input[type=range] {
        @apply absolute top-0 left-0 w-full appearance-none focus:outline-none bg-green-400 rounded-full
    }

    input[type=range]::-webkit-slider-runnable-track {
        animate: 0.2s;
        @apply bg-green-400 h-1 cursor-pointer w-full rounded-full shadow-none
    }

    input[type=range]::-webkit-slider-thumb {
        margin-top: -0.35rem;
        @apply border border-green-600 bg-green-200 relative h-4 w-4 rounded-full cursor-pointer appearance-none z-10
    }

</style>
