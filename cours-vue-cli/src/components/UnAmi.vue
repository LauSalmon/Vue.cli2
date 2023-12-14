
<template>
    <div class="container my-1">
        <ul class="list-group">
            <h2 class="list-group-item">{{leNom}} - {{premium ?'Ami Premium' : 'Ami Nul' }}</h2> 
            <div class="btn-group" role="group" aria-label="Basic example">
                <button  @click="afficherDetails" type="button" class="m-1 btn btn-outline-secondary">👁 ???? Détails</button>
                <button  @click="afficherPremium" type="button" class=" m-1 btn btn-outline-success">⭐️ Premium</button>
                <button  @click="$emit('delete', id)" type="button" class=" m-1 btn btn-outline-danger">🗑 Suppr.</button>
            </div>
            <ul  v-if="detailsVisibles" class="list-group">
                <li class="list-group-item">{{lePhone}}</li>
                <li class="list-group-item">{{leMail}}</li>
            </ul>

        </ul>
    </div> 
</template>

<script>
export default {
    // props: [
    //     "leNom", 
    //     "lePhone", 
    //     "leMail",
    //     "premium"
    // ],
    data(){
        return{
            detailsVisibles:false,
           // premiumData: this.premium,
        }
    },
    props : {
        leNom : {
            type : String,
            required : true,
        },
        lePhone : {
            type : String,
            required : true,
        },
        leMail : {
            type : String,
            required : true,
        },
        premium : {
            type : Boolean,
            required : false,
            default : false,
            // validator : function(value){
            //     return value === '1' || value === '0';
            // }
        },
        id : {
            type : String,
            required : true,
        },
                
    },
    // emits : {
    //     "mon-event-premium" :  function (id) {
    //         if (id) {
    //             return true;
    //         } else {
    //             console.warn("STOOOOOOOOOOOOOP");
    //             return false;
    //         }
    //     }
    // },

    emits : ["mon-event-premium", "delete"],

    methods:{
        afficherDetails(){
            this.detailsVisibles = !this.detailsVisibles;
        },
        afficherPremium() {
            this.$emit("mon-event-premium", this.id)
        //  this.premiumData = !this.premiumData;
        //     if(this.premiumData === "1") {
        //         this.premiumData = "0";
        //     } else {
        //         this.premiumData = "1";
        //     }
        // }
    },
}
};
</script>