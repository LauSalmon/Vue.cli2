<script>
    export default {

        name : 'un-pokemon',

        props : ['element']
    }
</script>

<template>
    <p>{{ element.name }}</p>
    <img :src="element.image" width="250" height="250">
    <!--<span v-if="element.apiEvolutions == !null">{{ element.apiEvolutions[0].name }}</span>
    <span v-if="pokemon[id].name == element.apiEvolutions[0].name">{{ pokemon[id].apiEvolutions[0].name }}</span>-->
</template>