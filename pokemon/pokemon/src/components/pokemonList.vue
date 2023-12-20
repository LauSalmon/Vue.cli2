<script>
import Pokemon from './pokemon.vue'

export default {
    name : 'pokemon-list',
    components : {Pokemon},
    data() {
        return {
            pokemons : [],
            evol : 0,
            currentPokemon : null,
        }
    },

    methods : {
        groupEvol(id) {
            let object = null;
            this.pokemons.forEach(element => {
                if (element.id == id) {
                    object = element;
                }
            });
            console.log(object);
            return object;
        }
    },
    
    watch : {
        currentPokemon(){

        }
    },

    created() {
    // GET request using fetch with error handling
        fetch("https://pokebuildapi.fr/api/v1/pokemon/limit/100")
        .then(async response => {
            const data = await response.json();
            console.log(data);

            // check for error response
            if (!response.ok) {
            // get error message from body or default to response statusText
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
            }
            
            this.pokemons = data;
            })
            .catch(error => {
                this.errorMessage = error;
                console.error("There was an error!", error);
        });
    }
    }

</script>

<template>
    <div class="container">
        <div class="groupe">
            <div v-for="(element, id) in pokemons" class="bloc">
               <Pokemon :element="element"> </Pokemon>
               <Pokemon :element="groupEvol(id+1).target" v-if="groupEvol(id+1).target.apiPreEvolution && (groupEvol(id+1).target.apiPreEvolution.name == element.name)"></Pokemon>
            </div>
        </div>
    </div>
</template>

<style>
.groupe {
    display : flex;
    flex-direction : column;
}
.bloc {
    display: flex;
    min-width: 30%;
    max-width: 30%;
}
p {
    width : 250px;
}
img {
  filter : drop-shadow(10px 10px 4px rgb(12, 12, 12));
}
</style>