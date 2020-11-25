<template>
    <h1 class="text-green-500 font-bold text-2xl p-4 text-center pt-16">~ Welcome on Random Beers ~</h1>
    <p class="text-gray-500 w-1/2 text-center m-auto">
        Your new beer library. Here you can find beers of any kind, filtering by degree for example or looking for a name.
        But for now, why not start by finding a random beer?
        And may be discovering a new one!
    </p>
    <div class="m-auto flex justify-center mt-16 flex-col">
        <ButtonDefault
            text="Find a random beer"
            @click="retrieveRandomBeer"
        />
        <BeerCard
                class="m-auto mt-16"
                :beer="beer"
                v-if="beer"
        />
    </div>

</template>

<script>
    import BeerCard from "../components/BeerCard";
    import ButtonDefault from "../components/common/ButtonDefault";
    export default {
        name: "HomeView",
        components: {ButtonDefault, BeerCard},
        data () {
            return {
                beer: null
            }
        },
        methods: {
            retrieveRandomBeer ()  {
                fetch('https://api.punkapi.com/v2/beers/random')
                    .then((response) => response.json())
                    .then((responseJson) => {
                        this.beer = responseJson[0]
                    })
                    .catch((error) =>{
                        alert("An error has occurred while fetching random beer");
                        console.error(error);
                    });
            }
        }
    }
</script>
