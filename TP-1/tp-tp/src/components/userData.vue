<template>
    <div class="container bg-warning my-3">
        <div class="container bg-warning my-1">
        <form @submit.prevent="submitData">
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Formulaire d'édition :</label>
            <input  v-model="enteredName" class="form-control form-control-sm" type="text" placeholder="Votre nom" aria-label=".form-control-sm example">
        </div>
        <div class="mb-3">
            <input v-model="enteredAge" class="form-control form-control-sm" type="text" placeholder="Votre age" aria-label=".form-control-sm example">
        </div>       
        <div class="mb-3">
            <input v-model="enteredMail" class="form-control form-control-sm" type="text" placeholder="Votre mail" aria-label=".form-control-sm example">
        </div>  
        <button class="btn btn-warning btn-sm col-4 my-1 border border-dark">MAJ Des Données</button>
        </form>
    </div>
    </div>
</template>

<script>
export default {
    emits : [
        "update-data",
    ],
    
    data(){
        return {
           enteredName : "",
           enteredAge : "",
           enteredMail : ""
        }
    },
    methods: {
        submitData (){
            this.$emit("update-data", this.enteredName, this.enteredAge, this.enteredMail);
        }
    }
}
</script>