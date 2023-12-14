<template>
  <div class="container bg-success p-2 my-2">
    <active-users :theName="theName" :theAge="theAge" :theMail="theMail"></active-users>
    <user-data @update-data="update"></user-data>
  </div>
</template>

<script>
export default{
  data(){
    return {
        theName : "Laura",
        theAge : "33",
        theMail : "salmon.laura@laposte.net"
    }
  },
  methods: {
    update(name, age, mail){
        this.theName = name;
        this.theAge = age;
        this.theMail = mail
    }
  }
}
</script>