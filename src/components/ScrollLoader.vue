<template>
    <div class="loader" v-show="!loaderDisable">
        <slot>
            <svg viewBox="25 25 50 50" class="w-8 loader svg">
                <circle cx="50" cy="50" r="20" class="loader circle"></circle>
            </svg>
        </slot>
    </div>
</template>

<script>
    export default {
        name: 'ScrollLoader',
        props: {
            loaderMethod: {
                type: Function,
                required: true
            },
            loaderDisable: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            observer () {
                return new IntersectionObserver(([{ isIntersecting }]) => {
                    console.log(isIntersecting);
                    isIntersecting && !this.loaderDisable && this.loaderMethod()
                }, {
                    root: null,
                    rootMargin: `0px 0px 0px 0px`
                })
            }
        },
        mounted () {
            this.observer.observe(this.$el)
        }
    }
</script>

<style scoped>
    .loader {
        @apply flex justify-center items-center p-3 pl-0 pr-0
    }
    .circle {
        fill: none;
        stroke: #cccccc;
        stroke-width: 3;
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
        stroke-linecap: round;
        animation: dash 1.5s ease-in-out infinite;
    }

    @keyframes dash {
        0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 90, 200;
            stroke-dashoffset: -35px;
        }
        100% {
            stroke-dashoffset: -125px;
        }
    }
</style>
