<template>
    <div class="flex flex-wrap justify-center p-16">
        <BeerCard v-for="beer in beers"  :key="beer.id" :beer="beer"/>
    </div>
</template>

<script>
    import BeerCard from "../components/BeerCard";
    export default {
        name: "BeersView",
        components: {BeerCard},
        data () {
            return {
                beers: []
            }
        },
        mounted () {
            this.retrieveBeers()
        },
        methods: {
            retrieveBeers ()  {
                fetch('https://api.punkapi.com/v2/beers/')
                    .then((response) => response.json())
                    .then((responseJson) => {
                        this.beers = responseJson
                    })
                    .catch((error) =>{
                        alert("An error has occurred while fetching beers");
                        console.error(error);
                    });
            }
        }
    }
</script>
