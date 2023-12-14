<template>
  <!-- <div class="container"> -->
    <h1 class="text-center">Les Amis</h1>
    <ul class="list-group">
      <!--<un-ami leNom="Steven Seagal" lePhone="0145965458" leMail="steven@seagal.fr" premium ></un-ami>
      <un-ami leNom="Laura Salmon" lePhone="0619413177" leMail="salmon.laura@laposte.net" premium ></un-ami>
      <un-ami leNom="Pomme" lePhone="N'en a pas" leMail="pomme@quessadilla.net" premium ></un-ami>
      <un-ami  leNom="BadBoyHalo" lePhone="0139352825" leMail="blalba@globiboulga.net" premium></un-ami>   
      -->
      <new-ami @add-ami="ajouterAmi"></new-ami>
      <un-ami v-for="unAmi in lesAmis" 
        :key="unAmi.id" 
        :leNom="unAmi.name" 
        :lePhone="unAmi.phone" 
        :leMail="unAmi.email" 
        :premium="unAmi.premium" 
        :id="unAmi.id" 
        @mon-event-premium="afficherStatusPremium"
        @delete="effacerAmi">
      </un-ami>
   
    </ul>
  <!-- </div> -->
</template>

<script>
export default{
  data(){
    return {
      lesAmis: [
        {
            id: 'lasticot',
            name: 'COCO L ASTICOT',
            phone: '01234 5678 991',
            email: 'coco@lasticot.com',
            premium : true,
        },
        {
            id: 'janine',
            name: 'Janine DeLavega',
            phone: '09876 543 221',
            email: 'janine@delavega.com',
            premium : false,
        },
        
    ],
    }
  },
  methods: {
    afficherStatusPremium(leIdDansUnAmi) {
      const amiIdentified = this.lesAmis.find(unAmi => unAmi.id === leIdDansUnAmi);
      amiIdentified.premium = !amiIdentified.premium;
      console.log("test, test, 1,2,1,2");
      console.log(amiIdentified);
    },
    ajouterAmi(name, phone, email) {
      const newAmiContact = {
        id : new Date().toISOString(),
        name : name,
        phone : phone,
        email : email,
        premium : false,
      };
      this.lesAmis.push(newAmiContact);
    },
    effacerAmi(unId) {
      this.lesAmis = this.lesAmis.filter( (unePersonne) =>
        unePersonne.id !== unId
      )
    }
  }
}
</script>