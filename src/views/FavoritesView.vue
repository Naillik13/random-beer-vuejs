<template>
    <h1 class="text-green-500 font-bold text-2xl pt-16 text-center">~ Your favorites ~</h1>
    <div v-if="beers.length > 0" class="flex flex-wrap justify-center p-16">
        <BeerCard v-for="beer in beers"  :key="beer.id" :beer="beer"/>
    </div>
    <div v-else class="text-gray-400 p-16 text-center">
        No favorites availables, try adding one!
    </div>
</template>

<script>
    import BeerCard from "../components/BeerCard";
    export default {
        name: "BeersView",
        components: {BeerCard},
        data () {
            return {
                beers: this.$store.getters.beers
            }
        },
        mounted () {
            this.emitter.on("remove-favorite", () => {
                this.beers = this.$store.getters.beers
            });
        }
    }
</script>
