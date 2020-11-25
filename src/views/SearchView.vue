<template>
    <h1 class="text-green-500 font-bold text-2xl p-8 text-center pt-16">~ Find a beer ~</h1>
    <div class="flex justify-center flex-col pb-0">
        <SearchForm :value="beerName" @update="updateBeerName" @search="retrieveBeers"/>
        <RangeSlider :minVal="minAbv" :maxVal="maxAbv" :min="0" :max="56" unit="°" @update="updateAbvData" @change="retrieveBeers"/>
    </div>
    <div v-if="beers.length > 0" class="flex flex-wrap justify-center p-16">
        <BeerCard v-for="beer in beers"  :key="beer.id" :beer="beer"/>
    </div>
</template>

<script>
    import SearchForm from "../components/common/SearchForm";
    import BeerCard from "../components/BeerCard";
    import RangeSlider from "../components/common/RangeSlider";
    export default {
        name: "SearchView",
        components: {RangeSlider, BeerCard, SearchForm},
        data () {
            return {
                beers: [],
                beerName: "",
                minAbv: 0,
                maxAbv: 56
            }
        },
        mounted () {
            this.retrieveBeers()
        },
        methods: {
            retrieveBeers ()  {
                let url = 'https://api.punkapi.com/v2/beers?abv_gt=' + this.minAbv + '&abv_lt=' + this.maxAbv;
                if (this.beerName !== ""){
                    url += '&beer_name=' + this.beerName;
                }

                fetch(url)
                    .then((response) => response.json())
                    .then((responseJson) => {
                        this.beers = responseJson
                    })
                    .catch((error) =>{
                        alert("An error has occurred while fetching beers");
                        console.error(error);
                    });
            },
            updateAbvData (abvData) {
                this.minAbv = abvData.minVal;
                this.maxAbv = abvData.maxVal
            },
            updateBeerName (beerName) {
                this.beerName = beerName
            }
        }
    }
</script>
