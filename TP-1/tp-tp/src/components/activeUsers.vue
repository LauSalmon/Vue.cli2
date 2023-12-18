
<template>
    <div class="container bg-info my-2 rounded p-2 text-center ">
        <div class="bg-info form-control form-control-sm border-0 ">{{theName}}</div>
        <div class="bg-info form-control form-control-sm border-0">{{theAge}} ans</div>
        <div class="bg-info form-control form-control-sm border-0">{{theMail}}</div>
        <img :src="image">
    </div> 
</template>

<script>

export default {
    data : function () {
        return {
            image : "https://picsum.photos/200/300"
        }
    },
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
