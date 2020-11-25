<template>
    <div v-if="beer" class="p-16">
        <img
                class="h-48 m-auto"
                :src="beer.image_url"
                alt="Random fact image"
        />
        <h1 class="font-bold text-center text-2xl mb-2 text-green-500 mt-16">{{ beer.name }}</h1>

        <p class="text-gray-600 text-center">
            <span class="text-gray-500">{{ beer.abv }}° - {{ beer.first_brewed}}</span>
            <br/>
            {{ beer.tagline }}
        </p>

        <div class="text-gray-600 mt-16">
            <h2 class="text-green-500 font-bold text-lg">Description</h2>
            <p>{{ beer.description }}</p>
        </div>
        <div class="text-gray-600 mt-8">
            <h2 class="text-green-500 font-bold text-lg">Tips</h2>
            <p>{{ beer.brewers_tips }}</p>
        </div>
        <div class="text-gray-600 mt-8">
            <h2 class="text-green-500 font-bold text-lg">Delicious with...</h2>
            <ul>
                <li v-for="(food, index) in beer.food_pairing" :key="index">
                    {{ food }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BeerView",
        data () {
            return {
                beer: null
            }
        },
        mounted () {
            this.retrieveBeer()
        },
        methods: {
            retrieveBeer ()  {
                fetch('https://api.punkapi.com/v2/beers/' + this.$route.params.id)
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
