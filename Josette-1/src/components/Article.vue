<script>
import ArticleDataService from '../services/ArticleDataService.js';

export default {
    name : 'un-article',

    props : ['article'],

    data(){
        return {
            currentArticle : null,
            message : "",
        }
    },
    watch : {
        article : function (article) {
            this.currentArticle = {...article};
            this.message = "";
        }
    },

    methods : {
        updatePublished(status){
            ArticleDataService.update(this.currentArticle.key, { published: status })
                .then(() => {
                    this.currentArticle.published = status;
                    this.message = `Le status de l'article a été update`;
                }).catch((e) => { 
                    console.log(e) })
        },

        updateArticle() {
            const data = {
                title : this.currentArticle.title,
                description : this.currentArticle.description
            };
            ArticleDataService.update(this.currentArticle.key, data).then(()=>{
                this.message = "L'article a bien été MAJ";
            }).catch((e)=>{
                console.log(e);
            });
        },

        deleteArticle() {
            ArticleDataService.delete(this.currentArticle.key).then(()=>{
                this.$emit('refreshList');
            }).catch((e)=>{
                console.log(e);
            });
        }
    },
    mounted() {
        this.message = "";
        this.currentArticle = {...this.article};
    }
}
</script>

<template>
    <div class="vision" v-if="currentArticle">
        <form>
            <div class="form-group">
                <label for="title">Titre</label>
                <input  type="text" class="form-control" id="title" v-model="currentArticle.title"/>
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <textarea v-model="currentArticle.description" class="form-control" rows="3"></textarea>
            </div>
            <div class="form-group">
                <label><strong>Status:</strong></label>{{ currentArticle.published ? "Publié" : "En attente" }}
            </div>
        </form>
        <button  class="btn btn-outline-dark" v-if="currentArticle.published" @click="updatePublished(false)">Dépublier</button>
        <button v-else class="btn btn-info mx-1" @click="updatePublished(true)">Publier</button>
        <button class="btn btn-danger mx-1" @click="deleteArticle">Supprimer</button>
        <button type="submit" class="btn btn-success mx-1" @click="updateArticle">Mettre à jour</button>
        <p>{{message}}</p>
    </div>
    <div v-else>
        <p>Cliquez sur un article Por Favor</p>
    </div>
</template>