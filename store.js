import { createStore } from 'vuex'

const store = createStore({
    state: {
        beers: []
    },
    mutations: {
        addBeer(state, beer) {
            state.beers.push(beer)
        },
        removeBeer (state, beer) {
            state.beers.splice(this.state.beers.indexOf(beer), 1)
        }
    },
    actions: {
        addBeer (context, payload) {
            if (this.state.beers.indexOf(payload.value) === -1) {
                context.commit('addBeer', payload.value)
            }
        },
        removeBeer (context, payload) {
            if (this.state.beers.indexOf(payload.value) !== -1) {
                context.commit('removeBeer', payload.value)
            }
        }
    },
    getters: {
        beers: state => state.beers,
        isFavorite (state) {
            return beer => state.beers.indexOf(beer) !== -1
        }
    }
});

export default store;
