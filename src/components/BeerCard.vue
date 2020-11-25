<template>
    <div
        class="bg-white flex w-64 rounded-2xl overflow-hidden shadow-lg items-center flex-col m-4 p-4 border border-gray-100"
    >
        <img
            class="h-32 m-2"
            :src="beer.image_url ? beer.image_url : require('@/assets/images/no-image-available.png')"
            @error="imageLoadOnError"
            alt="Random fact image"
        />
        <div class="px-6 py-4">
            <div class="font-bold text-center text-lg mb-2 text-green-500">{{ beer.name }}</div>
            <p class="text-gray-600 text-center">
                <span class="text-gray-500">{{ beer.abv }}° - {{ beer.first_brewed}}</span>
                <br/>
                {{ beer.tagline }}
            </p>
        </div>
        <ButtonDefault
                text="More details"
                type="light"
                @click="showDetails"
        />
    </div>
</template>

<script>
    import ButtonDefault from "./common/ButtonDefault";
    export default {
        name: "BeerCard",
        components: {ButtonDefault},
        props:  {
            beer: {
                type: Object,
                required: true
            }
        },
        methods: {
            showDetails () {
                this.$router.push('/beers/' + this.beer.id)
            },
            imageLoadOnError (e) {
                e.target.src = ""
            }
        }
    }
</script>
