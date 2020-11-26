<template>
    <h1 class="text-green-500 font-bold text-2xl pt-16 text-center">~ The whole list ~</h1>
    <div class="flex flex-wrap justify-center p-16">
        <BeerCard v-for="beer in beers"  :key="beer.id" :beer="beer"/>
    </div>
    <ScrollLoader :loader-disable="!showLoadMore" :loader-method="retrieveBeers"/>

</template>

<script>
    import BeerCard from "../components/BeerCard";
    import ScrollLoader from "../components/ScrollLoader";
    export default {
        name: "BeersView",
        components: {ScrollLoader, BeerCard},
        data () {
            return {
                beers: [],
                showLoadMore: true,
                page: 1
            }
        },
        mounted () {
            this.retrieveBeers()
        },
        methods: {
            retrieveBeers ()  {
                fetch('https://api.punkapi.com/v2/beers?page=' + this.page + '&per_page=20')
                    .then((response) => response.json())
                    .then((responseJson) => {
                        this.beers = this.beers.concat(responseJson);
                        this.showLoadMore = responseJson.length === 20;
                        this.page += 1;
                    })
                    .catch((error) =>{
                        console.error(error);
                    });
            }
        }
    }
</script>
