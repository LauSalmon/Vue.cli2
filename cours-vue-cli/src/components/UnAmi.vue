<template>
    <div class="container my-1">
        <ul class="list-group">
            <h2 class="list-group-item" >{{leNom}} - {{premiumData ?'Ami Premium' : 'Ami Nul' }}</h2> 
            <button @click="afficherPremium" class="btn btn-danger">Premium ?</button>
            <button @click="afficherDetails" class="btn btn-primary">Voir Détails</button>           
            <ul v-if="detailsVisibles" class="list-group">
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
            premiumData: this.premium,
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
                
    },
    methods:{
        afficherDetails(){
            this.detailsVisibles = !this.detailsVisibles;
        },
        afficherPremium() {
            this.$emit("mon-event-premium")
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