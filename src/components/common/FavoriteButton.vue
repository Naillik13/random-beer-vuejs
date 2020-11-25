<template>
    <button
        class="absolute top-0 right-0 m-4 text-lg focus:outline-none"
        :class="{'text-gray-300 hover:text-gray-400': !isFavorite, 'text-red-400 hover:text-red-500': isFavorite}"
        @click="toggleFavorite"
    >
        <font-awesome-icon icon="heart"/>
    </button>
</template>

<script>
    export default {
        name: "FavoriteButton",
        props:  {
            beer: {
                type: Object,
                required: true
            }
        },
        computed: {
            isFavorite () {
                return this.$store.getters.isFavorite(JSON.stringify(this.beerPreview))
            },
            beerPreview () {
                return {
                    name: this.beer.name,
                    abv: this.beer.abv,
                    image_url: this.beer.image_url,
                    tagline: this.beer.tagline,
                    first_brewed: this.beer.first_brewed,
                }
            }
        },
        methods: {
            toggleFavorite () {
                if (this.isFavorite) {
                    this.$store.dispatch({
                        type: 'removeBeer',
                        value: JSON.stringify(this.beerPreview)
                    });
                    this.emitter.emit("remove-favorite", this.beer.id);
                } else {
                    this.$store.dispatch({
                        type: 'addBeer',
                        value: JSON.stringify(this.beerPreview)
                    })
                }
            }
        }
    }
</script>
