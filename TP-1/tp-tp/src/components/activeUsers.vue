
<template>
    <div class="container bg-info my-2 rounded p-2 ">
        <div class="bg-info form-control form-control-sm text-center border-0 ">{{theName}}</div>
        <div class="bg-info form-control form-control-sm text-center border-0">{{theAge}} ans</div>
        <div class="bg-info form-control form-control-sm text-center border-0">{{theMail}}</div>
    </div> 
</template>

<script>
export default {

    props : {
        theName : {
            type : String,
            required : true,
        },
        theAge : {
            type : String,
            required : true,
        },
        theMail : {
            type : String,
            required : true,
        },         
    },

    emits : ["update-data"],

};
</script>
